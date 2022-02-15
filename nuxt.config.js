const BASE_PATH = process.env.BASE_PATH || '';

export default {
  target: 'static',

  head: {
    title: 'Promise Tracker',
    htmlAttrs: {
      lang: 'th',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: `${BASE_PATH}/fonts/typography.css` },
    ],
  },

  css: [
    '@wevisdemo/ui/styles/typography.css',
    '@wevisdemo/ui/styles/components.css',
  ],

  plugins: [],

  components: true,

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss'],

  modules: [],

  build: {},

  env: {
    BASE_PATH,
  },

  router: {
    base: BASE_PATH || '/',
  },
};
