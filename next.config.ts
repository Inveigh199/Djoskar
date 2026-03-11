import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── Wyłącz source maps w przeglądarce (zmniejsza CPU w dev) ──
  productionBrowserSourceMaps: false,

  // ── Ogranicz czas trzymania stron w pamięci (file watchers) ──
  onDemandEntries: {
    maxInactiveAge: 15 * 1000,   // 15s zamiast domyślnych 60s
    pagesBufferLength: 2,        // mniej stron w buforze
  },
};

export default nextConfig;

