import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt", "apple-touch-icon.png", "pwa-192x192.png", "pwa-512x512.png"],
      manifest: {
        name: "Space Tourism",
        short_name: "SpaceApp",
        description: "My Awesome App",
        theme_color: "#ffffff",
        icons: [
          {
            src: "../pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "../pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: './pwa-192x192.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === "image",
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 días
              },
            },
          },
          {
            urlPattern: ({ request }) => request.destination === "style",
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "css-cache",
            },
          },
          {
            urlPattern: ({ request }) => request.destination === "script",
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "js-cache",
            },
          },
          {
            urlPattern: ({ request }) => request.destination === "document",
            handler: "NetworkFirst",
            options: {
              cacheName: "html-cache",
            },
          },
        ],
      },
    }),
  ],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "./index.html",
      },
      output: {
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
        assetFileNames: "assets/[name].[hash].[ext]",
      },
    },
  },
});

// build: {
//   rollupOptions: {
//     input: {
//       main: './index.html',
//     },
//     output: {
//       entryFileNames: 'assets/[name].[hash].js',
//       chunkFileNames: 'assets/[name].[hash].js',
//       assetFileNames: 'assets/[name].[hash].[ext]'
//     }
//   }
// }
