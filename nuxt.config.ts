// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   ssr: false, // disable server-side rendering
//   target: 'static', // ensure static export
//   app: {
//     baseURL: '/<your-repo-name>/', // important if repo name ≠ username.github.io
//   },
// })

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4,
  },
  ssr: false,
  app: {
    // baseURL: '/ACDC1/',
    buildAssetsDir: '_nuxt',
    head: {
      title: 'ACDC',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },

  experimental: {
   // scanPageMeta: 'after-resolve',
   sharedPrerenderData: false,
   compileTemplate: true,
   resetAsyncDataToUndefined: true,
   templateUtils: true,
   relativeWatchPaths: true,
   // normalizeComponentNames: false,
   // spaLoadingTemplateLocation: 'within',
   defaults: {
     useAsyncData: {
       deep: true
     }
   }
 },

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false
    }
  },
  devtools: { enabled: true },
  modules: [
   '@nuxtjs/tailwindcss',
   '@nuxt/icon',
   '@nuxtjs/google-fonts',
   '@nuxt/image',
   '@pinia/nuxt',
  ],
  googleFonts:{
    families:{
      Montserrat: true,
    }
  },
})