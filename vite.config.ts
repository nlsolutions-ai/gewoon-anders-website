// @lovable.dev/vite-tanstack-config wraps tanstackStart, viteReact, tailwindcss,
// tsConfigPaths, an optional @cloudflare/vite-plugin (build-only), componentTagger
// (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe, error logger
// plugins, and sandbox detection. We disable the Cloudflare plugin via `cloudflare: false`
// because we deploy to Vercel.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
    pages: [{ path: "/" }],
  },
});
