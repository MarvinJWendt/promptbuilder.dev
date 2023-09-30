import {sveltekit} from '@sveltejs/kit/vite';
import {defineConfig} from 'vite';
import {SvelteKitPWA} from '@vite-pwa/sveltekit'

export default defineConfig({
  plugins: [
    sveltekit(),
    SvelteKitPWA(
      {
        strategies: "generateSW",
        devOptions: {
          enabled: true,
        },
        manifest: {
          name: "Prompt Builder",
          short_name: "Prompt Builder",
          description: "Prompt Builder is a free library and builder for ChatGPT prompts.",
          lang: "en",
          display: "standalone",
          start_url: "https://promptbuilder.dev",
          scope: "/",
          theme_color: "#0e1728",
          background_color: "#0e1728",
          icons: [
            {
              src: "/android-chrome-192x192.png",
              sizes: "192x192",
              type: "image/png"
            },
            {
              src: "/android-chrome-512x512.png",
              sizes: "512x512",
              type: "image/png"
            },
          ]
        },
      }
    )
  ]
});
