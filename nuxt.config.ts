import { defineNuxtConfig } from "nuxt";

// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/ac-icon.svg?v=2" },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap' }
      ],
    },
  },
  modules: ["@nuxt/content"],
  css: ["@/styles/tailwind.css"],
  // modules: ["@nuxtjs/tailwindcss"], // no customization version
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
  meta: {
    title: "Moovie Time - Your Best Partner",
  },
  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true,
    },
    extraEases: {
      expoScaleEase: true,
    },
  },
});
