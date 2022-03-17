import promises from './data/promises.json';
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
      {
        hid: 'og-title',
        property: 'og:title',
        content:
          'Promise Tracker แพลตฟอร์มสำรวจคำสัญญาต่างๆของผู้นำ พรรคการเมือง ที่ให้คำสัญญาไว้',
      },
      {
        hid: 'og-description',
        property: 'og:description',
        content:
          'สำรวจ รับรู้ ร่วมติดตาม ให้พรรคการเมืองทำตามคำสัญญาที่ให้ไว้กับเรา',
      },
      {
        hid: 'og-image',
        property: 'og:image',
        content:
          'https://raw.githubusercontent.com/wevisdemo/promise-tracker/main/static/og/default.jpg',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `${BASE_PATH}/favicon.ico` },
      {
        rel: 'manifest',
        href: `${BASE_PATH}/site.webmanifest`,
      },
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

  publicRuntimeConfig: {
    path: {
      base: BASE_PATH,
      images: `${BASE_PATH}/images`,
    },
  },

  router: {
    base: BASE_PATH || '/',
  },

  generate: {
    async routes() {
      const promisesRoute = await Promise.all(
        promises.map((promise) => ({
          route: `/promises/${promise.id}`,
          payload: {
            promise,
          },
        }))
      );
      return [...promisesRoute];
    },
  },
};
