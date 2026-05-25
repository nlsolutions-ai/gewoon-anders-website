/**
 * /api/subscribe
 *
 * Vercel Edge Function. Receives { email, tag } and pushes the contact
 * to ActiveCampaign with the right tag attached.
 *
 * Required environment variables (set in Vercel project settings):
 *   AC_API_URL                       — e.g. https://accountname.api-us1.com
 *   AC_API_KEY                       — Settings > Developer > API key
 *   AC_LIST_ID                       — numeric ID of the main list
 *   AC_TAG_ENERGIESCAN               — numeric tag ID for energiescan freebie
 *   AC_TAG_MASKING_CHECK             — numeric tag ID for masking-check freebie
 *   AC_TAG_PRIJZEN_SPIEKBRIEFJE      — numeric tag ID for prijzen-spiekbriefje
 *   AC_TAG_MIJN_WEEK_MIJN_BREIN      — numeric tag ID for mijn week mijn brein
 */

export const config = { runtime: "edge" };

const ALLOWED_TAGS = [
  "energiescan",
  "masking-check",
  "prijzen-spiekbriefje",
  "mijn-week-mijn-brein",
] as const;
type AllowedTag = (typeof ALLOWED_TAGS)[number];

const TAG_ENV_MAP: Record<AllowedTag, string> = {
  energiescan: "AC_TAG_ENERGIESCAN",
  "masking-check": "AC_TAG_MASKING_CHECK",
  "prijzen-spiekbriefje": "AC_TAG_PRIJZEN_SPIEKBRIEFJE",
  "mijn-week-mijn-brein": "AC_TAG_MIJN_WEEK_MIJN_BREIN",
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function isValidEmail(email: string): boolean {
  // Simple but pragmatic check
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  let payload: { email?: string; tag?: string };
  try {
    payload = await req.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  const email = (payload.email ?? "").trim().toLowerCase();
  const tag = (payload.tag ?? "").trim();

  if (!email || !isValidEmail(email)) {
    return json({ error: "Geen geldig e-mailadres." }, 400);
  }
  if (!ALLOWED_TAGS.includes(tag as AllowedTag)) {
    return json({ error: "Onbekend onderwerp." }, 400);
  }

  const baseUrl = process.env.AC_API_URL;
  const apiKey = process.env.AC_API_KEY;
  const listId = process.env.AC_LIST_ID;
  const tagId = process.env[TAG_ENV_MAP[tag as AllowedTag]];

  if (!baseUrl || !apiKey || !listId || !tagId) {
    return json(
      {
        error: "Server is nog niet volledig geconfigureerd. Stuur even een mail.",
        configured: false,
      },
      503,
    );
  }

  const acHeaders = {
    "Api-Token": apiKey,
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  // 1. Create or update contact
  let contactId: string | undefined;
  try {
    const syncRes = await fetch(`${baseUrl}/api/3/contact/sync`, {
      method: "POST",
      headers: acHeaders,
      body: JSON.stringify({ contact: { email } }),
    });
    if (!syncRes.ok) {
      const text = await syncRes.text();
      return json({ error: "AC sync failed", details: text.slice(0, 500) }, 502);
    }
    const data = (await syncRes.json()) as { contact?: { id?: string } };
    contactId = data.contact?.id;
    if (!contactId) {
      return json({ error: "AC sync returned no contact id" }, 502);
    }
  } catch (err) {
    return json({ error: "Network error to AC (sync)", details: String(err) }, 502);
  }

  // 2. Add to main list (status 1 = active subscribed)
  try {
    await fetch(`${baseUrl}/api/3/contactLists`, {
      method: "POST",
      headers: acHeaders,
      body: JSON.stringify({
        contactList: { list: listId, contact: contactId, status: 1 },
      }),
    });
    // We don't fail the whole flow if list-add fails: tag is the primary signal.
  } catch {
    // Swallow — tag is still attempted below.
  }

  // 3. Add tag
  try {
    const tagRes = await fetch(`${baseUrl}/api/3/contactTags`, {
      method: "POST",
      headers: acHeaders,
      body: JSON.stringify({ contactTag: { contact: contactId, tag: tagId } }),
    });
    if (!tagRes.ok) {
      const text = await tagRes.text();
      return json({ error: "AC tag failed", details: text.slice(0, 500) }, 502);
    }
  } catch (err) {
    return json({ error: "Network error to AC (tag)", details: String(err) }, 502);
  }

  return json({ ok: true });
}
