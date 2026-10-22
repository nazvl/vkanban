import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  app: {
    baseURL: '/vkanban/', // github pages
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/ui'],
  vite: {
    plugins: [tailwindcss()],
  },
  icon: {
    serverBundle: false,
    clientBundle: {
      scan: true,
    },
  },
});
