import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugin = {
  registerType: "prompt",
  // includeAssets: [
  //   "android-launchericon-192-192",
  //   "android-launchericon-192-192",
  //   "180.png",
  // ],
  manifest: {
    name: "Maulbeere IMP",
    short_name: "Maulbeere",
    description: "L'app di gestione interna del tuo locale.",
    icons: [
      {
        src: "android-launchericon-192-192",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "android-launchericon-512-512",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "apple-touch-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple touch icon",
      },
      {
        src: "180.png",
        sizes: "225x225",
        type: "image/png",
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
