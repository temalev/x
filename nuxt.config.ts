// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  test: false,
  devtools: { enabled: true },
  modules: [
    '@vuestic/nuxt',
  ],
  css: ['~/assets/css/main.css', '~/assets/css/common.scss'],

})
