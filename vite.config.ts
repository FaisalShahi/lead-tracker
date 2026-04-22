import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: "autoUpdate",

      includeAssets: ["favicon.svg"],

      manifest: {
        id: "/",
        scope: "/",
        name: "Leadvora",
        short_name: "Leadvora",
        description: "Track leads, follow-ups and sales efficiently.",
        theme_color: "#2563EB",
        background_color: "#ffffff",
        display: "standalone",
        orientation: "portrait",
        start_url: "/",
        icons: [
          {
            src: "/temp-icon.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/temp-icon.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
