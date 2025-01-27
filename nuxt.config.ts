import autoprefixer from "autoprefixer";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css:["assets/css/tailwind.css"],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
