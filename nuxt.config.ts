export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.scss'],
  typescript: { typeCheck: 'build' },
  devServer: {
    host: '127.0.0.1',
    port: 3000,
  },
  runtimeConfig: {
    public: {
      siteUrl: '',
    },
  },
  app: {
    baseURL: '/',
    head: {
      htmlAttrs: { lang: 'ru', dir: 'ltr' },
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg', sizes: 'any' },
        // { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'ru_RU' },
        { property: 'og:site_name', content: 'web-master-panel' },
        // { property: 'og:image', content: 'https://127.0.0.1:3000/img/og-image.png' },
        // { property: 'og:image:width', content: '1200' },
        // { property: 'og:image:height', content: '630' },
        // { property: 'og:image:alt', content: 'описание og-картинки' },
        // { name: 'twitter:card', content: 'summary_large_image' },
      ],
    },
  },
  modules: ['@nuxt/image', '@nuxt/eslint', '@nuxtjs/sitemap'],
  image: {
    quality: 90,
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  nitro: {
    compressPublicAssets: {
      brotli: true,
      gzip: true,
    },
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL,
    name: 'web-master-panel',
  },
  sitemap: {
    autoI18n: true,
    xsl: false,
    credits: false,
    sitemapName: 'sitemap.xml',
  },
})
