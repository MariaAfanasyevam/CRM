export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
      '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    'shadcn-nuxt',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Lato: {
            wght: [300, 400, 700],
            ital: [300],
          },
        },
      },
    ],
  ],
  shadcn: {
    prefix: 'UI',
    componentDir: './components/ui'
  },

})