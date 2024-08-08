import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugin = {
  registerType: "prompt",
  includeAssets: ["Maulbeere_Logo_CMYK.svg", "vite.svg"],
  manifest: {
    name: "Maulbeere IMP",
    short_name: "Maulbeere",
    description: "L'app di gestione interna del tuo locale.",
    icons: [
      {
        src: "/vite.svg",
        sizes: "192x192",
        type: "image/svg+xml",
      },
      {
        src: "/src/assets/Maulbeere_Logo_CMYK.svg",
        sizes: "512x512",
        type: "image/svg+xml",
      },
      {
        src: "/src/assets/Maulbeere_Logo_CMYK.svg",
        sizes: "180x180",
        type: "image/svg+xml",
        purpose: "apple touch icon",
      },
      {
        src: "/src/assets/Maulbeere_Logo_CMYK.svg",
        sizes: "225x225",
        type: "image/svg+xml",
        purpose: "any maskable",
      },
    ],
    theme_color: "#171717",
    background_color: "#e8ebf2",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), VitePWA(manifestForPlugin)],
});
