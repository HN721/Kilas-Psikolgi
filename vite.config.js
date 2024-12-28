import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "React PWA Vite",
        short_name: "ReactPWA",
        description: "A React PWA using Vite",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/react.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/query.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
