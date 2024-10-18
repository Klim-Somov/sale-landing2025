export default defineNuxtConfig({
  css: ['@/assets/scss/main.scss'],
  modules: ['nuxt-csurf'],

  csurf: {
    cookie: {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
    },
    methodsToProtect: ['POST', 'PUT', 'PATCH'],
    encryptAlgorithm: 'aes-256-cbc',
  },

  runtimeConfig: {
    mailport: 25,
    mailhost: 'smtp',
    mailfrom: 'info@paytaxi.ru',
    mailto: 'info@paytaxi.ru, sale@paytaxi.ru',
    public: {
      site: 'https://paytaxi.ru/',
      phone: '',
    },
  },

  compatibilityDate: '2024-10-14',
});
