import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Biblioteca de repositórios GitHub",
        short_name: "Biblioteca de repositórios GitHub",
        start_url: ".",
        display: "standalone",
        background_color: "#fec1e0",
        theme_color: "#fc7abf",
        lang: "pt-br",
        description:
          "Uma aplicação para gerenciar os seus repositórios favoritos do GitHub!",
        icons: [
          {
            src: "windows11/SmallTile.scale-100.png",
            sizes: "71x71",
          },
          {
            src: "windows11/SmallTile.scale-125.png",
            sizes: "89x89",
          },
          {
            src: "windows11/SmallTile.scale-150.png",
            sizes: "107x107",
          },
          {
            src: "android/android-launchericon-512-512.png",
            sizes: "512x512",
          },
          {
            src: "android/android-launchericon-192-192.png",
            sizes: "192x192",
          },
          {
            src: "android/android-launchericon-144-144.png",
            sizes: "144x144",
          },
          {
            src: "ios/120.png",
            sizes: "120x120",
          },
          {
            src: "ios/128.png",
            sizes: "128x128",
          },
          {
            src: "ios/144.png",
            sizes: "144x144",
          },
        ],
        id: "123",
        categories: ["education", "personalization", "productivity"],
        launch_handler: {
          client_mode: "navigate-new",
        },
        orientation: "any",
        screenshots: [
          {
            src: "/screenshot1.png",
            sizes: "1920x919",
            type: "image/png",
            label: "Home Screen",
            form_factor: "wide",
          },
          {
            src: "/screenshot2.png",
            sizes: "1920x1058",
            type: "image/png",
            label: "Detail View",
            form_factor: "narrow",
          },
        ],
        dir: "ltr",
        iarc_rating_id: "e10fbbc1-4667-4b5c-b2b6-cc8c8e0e0c20",
        prefer_related_applications: false,
      },
    }),
  ],
});
