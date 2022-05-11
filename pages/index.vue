<template>
  <main>
    <section class="home-header z-0">
      <div
        id="home-hero"
        class="h-screen flex justify-center items-center p-4 sticky top-0"
      >
        <svg
          class="home-hero-logo logo-v"
          width="280"
          height="280"
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0.000244141H139.899V70.0503C139.899 108.682 108.582 140 69.9497 140V140C31.3175 140 0 108.682 0 70.0503V0.000244141Z"
            fill="url(#paint0_linear_201_10)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_201_10"
              x1="-2.28496e-09"
              y1="3.18591e-06"
              x2="139.398"
              y2="0.099981"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="var(--color)" />
              <stop offset="1" stop-color="var(--color)" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          class="home-hero-logo logo-a"
          width="280"
          height="280"
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.200589 69.9498C0.200582 31.3177 31.5181 0.000116591 70.1503 0.000109831V0.000109831C108.782 0.000103072 140.1 31.3176 140.1 69.9498L140.1 140L0.200601 140L0.200589 69.9498Z"
            fill="url(#paint0_linear_201_11)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_201_11"
              x1="1.7983e-09"
              y1="-2.53575e-06"
              x2="139.599"
              y2="0.0999755"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="var(--color)" />
              <stop offset="1" stop-color="var(--color)" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          class="home-hero-logo logo-s"
          width="280"
          height="280"
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M109.537 70.2509H139.8V0H35.5021C16.1168 0 0.401827 15.7262 0.401827 35.1255C0.401827 53.4969 14.4957 68.5743 32.4537 70.1203C14.505 71.6061 0.401154 86.6547 0.401154 105C0.401154 124.33 16.0599 140 35.376 140H105.326C124.642 140 140.301 124.33 140.301 105C140.301 87.0961 126.867 72.3321 109.537 70.2509Z"
            fill="url(#paint0_linear_201_19)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_201_19"
              x1="1.64109e-08"
              y1="-0.000241648"
              x2="139.799"
              y2="0.100053"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="var(--color)" />
              <stop offset="1" stop-color="var(--color)" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          class="home-hero-logo logo-t"
          width="280"
          height="280"
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M140 70.2509V0H0.601715V70.2509H36.077V140H106.027V70.2509H140Z"
            fill="url(#paint0_linear_201_17)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_201_17"
              x1="1"
              y1="-6.99443e-07"
              x2="139.498"
              y2="0.596044"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="var(--color)" />
              <stop offset="1" stop-color="var(--color)" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        id="header-text"
        class="w-full h-screen flex flex-col justify-center p-4 relative"
      >
        <h1
          id="header-title"
          class="
            tracking-tight
            leading-none
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            mb-4
            mt-10
            mix-blend-difference
          "
        >
          <span
            v-for="(word, index) in titleWords"
            :key="index"
            class="title-words inline-block align-top"
            ><span
              v-for="(letter, index2) in Array.from(word)"
              :key="index2"
              class="inline-block"
              >{{ letter }}</span
            >&nbsp;</span
          >
        </h1>
        <p
          id="header-description"
          class="
            inline-block
            tag
            text-2xl
            lg:text-3xl
            transition
            duration-300
            leading-3
            transform
          "
          :class="{ 'has-scroll-over': scrollOver }"
        >
          <span class="intro text-sm lg:text-base uppercase inline-block mr-16"
            >({{ $prismic.asText(intro) }})</span
          ><span class="description serif font-light leading-7"
            ><span
              v-for="(word, index2) in descriptionWords"
              :key="index2"
              class="description-words inline-block"
              >{{ word }}</span
            ></span
          >
        </p>
      </div>
    </section>
    <section class="home-slider section mb-24 relative">
      <div v-swiper="swiperOption" class="relative overflow-hidden">
        <div class="swiper-wrapper h-screen">
          <div
            v-for="project in projects"
            :key="project.id"
            class="swiper-slide change-color"
            :data-color="project.data.textColor"
            :data-background="project.data.backgroundColor"
          >
            <div
              class="
                absolute
                top-0
                left-0
                bottom-0
                right-0
                z-10
                flex flex-col
                justify-center
                items-start
                p-4
                pointer-events-none
              "
            >
              <div
                class="
                  absolute
                  top-0
                  left-0
                  bottom-0
                  right-0
                  opacity-50
                  transition-colors
                  duration-300
                "
                :style="'background:' + project.data.backgroundColor"
              ></div>
              <prismic-rich-text
                :field="project.data.title"
                :style="'color:' + project.data.textColor"
                class="
                  title
                  tracking-tight
                  leading-none
                  text-5xl
                  lg:text-8xl
                  uppercase
                  header-font
                  inline-block
                  z-10
                "
              />
              <prismic-rich-text
                :field="project.data.summary"
                :style="'color:' + project.data.textColor"
                class="summary text-sm lg:text-base uppercase inline-block z-10"
              />
            </div>
            <nuxt-link :to="LinkGetter(project)">
              <nuxt-img
                v-if="project.data.image.url"
                format="webp"
                :src="project.data.image.url"
                sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
                :width="project.data.image.dimensions.width"
                :height="project.data.image.dimensions.height"
                class="
                  image
                  transition
                  duration-700
                  w-full
                  h-screen
                  object-cover
                "
                loading="lazy"
              />
            </nuxt-link>
          </div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </section>
    <slice-zone type="home_page" queryType="single" />
  </main>
</template>

<script>
import gsap from 'gsap'
import SliceZone from 'vue-slicezone'
import { directive } from 'vue-awesome-swiper'
import LinkResolver from '~/plugins/link-resolver.js'
export default {
  name: 'HomePage',
  components: {
    SliceZone,
  },
  directives: {
    swiper: directive,
  },
  async asyncData({ $prismic, error }) {
    try {
      const pageContent = (await $prismic.api.getSingle('home_page')).data
      // Query projects
      const projects = await $prismic.api.query(
        $prismic.predicates.at('document.type', 'project'),
        {
          orderings: '[my.project.date desc]',
          pageSize: 4,
        }
      )
      return {
        page: pageContent,
        title: pageContent.title,
        titleWords: Array.from($prismic.asText(pageContent.title).split(' ')),
        backgroundColor: pageContent.backgroundColor,
        textColor: pageContent.textColor,
        projects: projects.results,
        intro: pageContent.intro,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  data() {
    return {
      page: null,
      swiperOption: {
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        },
        autoplay: {
          delay: 5000,
          pauseOnMouseEnter: true,
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  head() {
    return {
      title: this.page.metaTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.metaDescription,
        },
      ],
    }
  },
  beforeMount() {
    document.documentElement.style.setProperty('--bg', this.backgroundColor)
    document.documentElement.style.setProperty(
      '--color-primary',
      this.textColor
    )
    document.documentElement.style.setProperty('--color', this.textColor)
  },
  mounted() {
    window.addEventListener('scroll', this.headerScroll)
    const gsap = this.$gsap
    const ExpoScaleEase = this.$ExpoScaleEase
    const ScrollToPlugin = this.$ScrollToPlugin
    const ScrollTrigger = this.$ScrollTrigger
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, ExpoScaleEase)
    this.$ScrollTrigger.refresh()
    this.heroAnimation()

    // // Function to add css variables
    // function setBodyProperty(a, b) {
    //   document.documentElement.style.setProperty(a, b);
    // };

    // // Function to change colors
    // const changeColorOnSwipe = function () {
    //   const changeColor = document.querySelector('.change-color.swiper-slide-active');
    //   const color = changeColor.dataset.color;
    //   const backgroundcolor = changeColor.dataset.background;
    //   setBodyProperty('--color', color);
    //   setBodyProperty('--color-primary', color);
    //   setBodyProperty('--bg', backgroundcolor);
    // }
    // // Change colors when page loaded
    // document.addEventListener('DOMContentLoaded', changeColorOnSwipe);
    // // Change colors when scrolling between projects
    // this.$swiper.on('imagesReady', changeColorOnSwipe);
    // this.$swiper.on('transitionStart', changeColorOnSwipe);
  },
  updated() {
    this.$ScrollTrigger.refresh()
  },
  destroyed() {
    window.removeEventListener('scroll', this.headerScroll)
    function setBodyProperty(a, b) {
      document.getElementsByTagName('BODY')[0].style.setProperty(a, b)
    }
    setBodyProperty('--color', '')
    setBodyProperty('--color-primary', '')
    setBodyProperty('--bg', '')
  },
  methods: {
    LinkGetter(post) {
      return LinkResolver(post)
    },
    headerScroll() {
      const screenHeight = window.innerHeight
      if (document.documentElement.scrollTop < screenHeight) {
        gsap.to('.title-words span', {
          // translateY: document.documentElement.scrollTop / 4,
          // stagger: 0.025,
          // duration: 1,
          // ease: 'Power4.easeOut',
        })
      }
    },
    heroAnimation() {
      gsap.set('.title-words:nth-child(n+6) span', {
        opacity: 0,
        translateY: '-.2em',
      })
      gsap.set('.intro', {
        opacity: 0,
        translateY: '-.2em',
      })
      gsap.to('.home-hero-logo', {
        scrollTrigger: {
          trigger: '.home-header',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 2,
        },
        opacity: 0.25,
        duration: 1,
        stagger: 1,
      })
      gsap.to('.title-words:nth-child(n+6) span', {
        scrollTrigger: {
          trigger: '#header-text',
          start: 'top 25%',
          end: 'bottom bottom',
          scrub: 4,
        },
        opacity: 1,
        translateY: 0,
        duration: 1,
        stagger: 0.2,
      })
      gsap.to('.title-words:not(:nth-child(n+6)) span', {
        scrollTrigger: {
          trigger: '#header-text',
          start: 'top 25%',
          end: '90% bottom',
          scrub: 4,
        },
        opacity: 0.5,
        duration: 1,
        stagger: 0.2,
      })
      gsap.to('.intro', {
        scrollTrigger: {
          trigger: '#header-text',
          start: '90% bottom',
          end: 'bottom bottom',
          scrub: 2,
        },
        opacity: 1,
        duration: 1,
      })
    },
  },
}
</script>
<style scoped>
.home-hero-logo {
  opacity: 0.05;
}
.home-hero-logo.logo-v {
  transform: translateX(75%);
}
.home-hero-logo.logo-a {
  transform: translateX(25%);
}
.home-hero-logo.logo-s {
  transform: translateX(-25%);
}
.home-hero-logo.logo-t {
  transform: translateX(-75%);
}
#header-text {
  max-width: 65em;
  margin: 0 auto;
}
.title-words {
  vertical-align: baseline;
}
.title-words:first-child {
  margin-left: 1.8em;
}
.title-words:nth-child(3) > span,
.title-words:nth-child(5) > span {
  font-family: 'Tropiline', serif;
  line-height: 0;
}
.title-words:nth-child(11) > span {
  font-family: 'IM FELL English', cursive;
  font-style: italic;
}
.title-words:nth-child(13) > span {
  font-family: 'PP Mondwest', serif;
  font-style: italic;
}
.swiper-button-next,
.swiper-button-prev {
  height: 100%;
  top: 0;
  width: 25%;
  margin: 0;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  display: none;
}

.swiper-button-prev {
  left: 0;
}

.swiper-button-next {
  right: 0;
}
</style>
<style>
.title *,
.summary * {
  display: inline-block;
}

.summary p::before {
  content: '(';
}

.summary p::after {
  content: ')';
}
</style>