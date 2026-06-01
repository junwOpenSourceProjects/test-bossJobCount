// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@vueuse/nuxt'
  ],

  devtools: {
    enabled: false
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/api/**': {
      cors: true
    }
  },

  compatibilityDate: '2025-01-01',

  ui: {
    primary: '#1456f0',
    gray: 'neutral',
    fonts: false
  },

  app: {
    head: {
      htmlAttrs: { lang: 'zh-CN' },
      title: 'Boss 岗位统计 - 管理后台',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Boss 直聘岗位数据可视化与分析平台' }
      ]
    }
  }
})
