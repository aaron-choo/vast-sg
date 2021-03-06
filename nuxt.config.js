import smConfig from "./sm.json";
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'vast',
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }, {
      hid: 'description',
      name: 'description',
      content: ''
    }, {
      name: 'format-detection',
      content: 'telephone=no'
    }],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=IM+Fell+English:ital@0;1&display=swap'
    },
    ],
    script: []
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/vue-awesome-swiper', mode: 'client' },
    { src: "~plugins/isotope.js", mode: 'client' },
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [// https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module', // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module', // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/prismic',
    '@nuxtjs/color-mode',
    'nuxt-gsap-module',
    '@nuxt/image',
    '@nuxtjs/moment',
    '@nuxtjs/device'
  ],
  colorMode: {
    preference: 'light'
  },
  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true
    },
    extraEases: {
      expoScaleEase: true
    }
  },
  moment: {
    timezone: true
  },
  image: {
    provider: "prismic",
    prismic: {}
  },
  prismic: {
    endpoint: 'https://vast-sg.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver',
    modern: true
    /* see configuration for more */
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [// https://go.nuxtjs.dev/axios
    '@nuxtjs/axios', // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa', // https://go.nuxtjs.dev/content
    '@nuxt/content',
    ["@nuxtjs/prismic",
      {
        endpoint: smConfig.apiEndpoint || "",
        apiOptions: {
          routes: [{
            type: "page",
            path: "/:uid"
          }]
        }
      }
    ],
    ["nuxt-sm"]
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vue-slicezone", "nuxt-sm"],
  },
  generate: {
    fallback: '404.html' // Netlify reads a 404.html, Nuxt will load as an SPA

  },
  loading: {
    color: 'var(--color)'
  }
};