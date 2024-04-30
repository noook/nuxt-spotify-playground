// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    experimental: {
      tasks: true,
    },
  },
  runtimeConfig: {
    public: {
      hostname: 'http://localhost:3000',
    },
    spotify: {
      redirectUri: '/api/auth/callback',
      clientId: '',
      clientSecret: '',
      refreshToken: '',
    }
  }
})
