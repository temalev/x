// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  test: false,
  devtools: { enabled: true },
  modules: [
    '@vuestic/nuxt',
  ],
  css: ['~/assets/css/main.css', '~/assets/css/common.scss'],
  app: {
    head: {
      title: 'ИксНоги — авторские игрушки и оригинальная вселенная персонажей',
      meta: [
        { name: 'description', content: 'ИксНоги — авторские игрушки и уникальные персонажи со своей вселенной, мультфильмами и коллекционными фигурками независимого цифрового художника.' }
      ]
    }
  }

})
