// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Opt-in static export for GitHub Pages: `DEPLOY_TARGET=github-pages npm run build`.
// Left unset, dev/build behave exactly as before (Lovable's default cloudflare target).
const isGithubPages = process.env.DEPLOY_TARGET === "github-pages";
const githubPagesBase = "/mauritania-ocean-luxury/";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(isGithubPages && {
      prerender: { enabled: true, crawlLinks: true },
    }),
  },
  ...(isGithubPages && {
    vite: { base: githubPagesBase },
    nitro: false,
  }),
});
