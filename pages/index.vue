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
              :data-text="letter"
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
      gsap.set('#header-text', {
        translateY: '0',
      })
      gsap.set('.intro', {
        opacity: 0,
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
      gsap.to('#header-text', {
        scrollTrigger: {
          trigger: '.home-header',
          start: 'bottom bottom',
          end: 'bottom 50%',
          scrub: true,
        },
        translateY: '-8em',
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
  margin-left: 4em;
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

@keyframes noise-anim {
  0% {
    clip: rect(34px, 9999px, 35px, 0);
  }
  5% {
    clip: rect(40px, 9999px, 38px, 0);
  }
  10% {
    clip: rect(90px, 9999px, 31px, 0);
  }
  15% {
    clip: rect(53px, 9999px, 36px, 0);
  }
  20% {
    clip: rect(77px, 9999px, 43px, 0);
  }
  25% {
    clip: rect(39px, 9999px, 18px, 0);
  }
  30% {
    clip: rect(46px, 9999px, 82px, 0);
  }
  35% {
    clip: rect(25px, 9999px, 17px, 0);
  }
  40% {
    clip: rect(36px, 9999px, 56px, 0);
  }
  45% {
    clip: rect(35px, 9999px, 74px, 0);
  }
  50% {
    clip: rect(46px, 9999px, 96px, 0);
  }
  55% {
    clip: rect(29px, 9999px, 33px, 0);
  }
  60% {
    clip: rect(88px, 9999px, 65px, 0);
  }
  65% {
    clip: rect(90px, 9999px, 71px, 0);
  }
  70% {
    clip: rect(86px, 9999px, 19px, 0);
  }
  75% {
    clip: rect(11px, 9999px, 27px, 0);
  }
  80% {
    clip: rect(48px, 9999px, 9px, 0);
  }
  85% {
    clip: rect(23px, 9999px, 58px, 0);
  }
  90% {
    clip: rect(74px, 9999px, 6px, 0);
  }
  95% {
    clip: rect(18px, 9999px, 51px, 0);
  }
  100% {
    clip: rect(29px, 9999px, 53px, 0);
  }
}
.title-words:nth-child(13) > span::after {
  content: attr(data-text);
  position: absolute;
  left: 2px;
  text-shadow: -1px 0 #1f263b;
  top: 0;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-anim 2s infinite linear alternate-reverse;
}

@keyframes noise-anim-2 {
  0% {
    clip: rect(63px, 9999px, 6px, 0);
  }
  5% {
    clip: rect(41px, 9999px, 33px, 0);
  }
  10% {
    clip: rect(67px, 9999px, 100px, 0);
  }
  15% {
    clip: rect(61px, 9999px, 56px, 0);
  }
  20% {
    clip: rect(2px, 9999px, 14px, 0);
  }
  25% {
    clip: rect(6px, 9999px, 63px, 0);
  }
  30% {
    clip: rect(74px, 9999px, 15px, 0);
  }
  35% {
    clip: rect(25px, 9999px, 31px, 0);
  }
  40% {
    clip: rect(46px, 9999px, 94px, 0);
  }
  45% {
    clip: rect(51px, 9999px, 49px, 0);
  }
  50% {
    clip: rect(62px, 9999px, 96px, 0);
  }
  55% {
    clip: rect(41px, 9999px, 33px, 0);
  }
  60% {
    clip: rect(51px, 9999px, 49px, 0);
  }
  65% {
    clip: rect(46px, 9999px, 100px, 0);
  }
  70% {
    clip: rect(52px, 9999px, 54px, 0);
  }
  75% {
    clip: rect(85px, 9999px, 43px, 0);
  }
  80% {
    clip: rect(21px, 9999px, 51px, 0);
  }
  85% {
    clip: rect(25px, 9999px, 68px, 0);
  }
  90% {
    clip: rect(77px, 9999px, 32px, 0);
  }
  95% {
    clip: rect(97px, 9999px, 19px, 0);
  }
  100% {
    clip: rect(8px, 9999px, 48px, 0);
  }
}
.title-words:nth-child(13) > span::before {
  content: attr(data-text);
  position: absolute;
  left: -2px;
  text-shadow: 1px 0 #e1beb9;
  top: 0;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-anim-2 3s infinite linear alternate-reverse;
}

.title-words:nth-child(13) {
  animation: glitch2 2s steps(100) infinite;
}

@keyframes glitch2 {
  0% {
    text-shadow: 1px 0 0 #1f263b, -1px 0 0 #e1beb9;
  }
  1% {
    text-shadow: 1px 0 0 #1f263b, -1px 0 0 #e1beb9;
  }
  2% {
    text-shadow: 1px 0 0 #1f263b, -1px 0 0 #e1beb9;
  }
  3% {
    text-shadow: 1px 0 0 #1f263b, -1px 0 0 #e1beb9;
  }
  4% {
    text-shadow: 1px 0 0 #1f263b, -1px 0 0 #e1beb9;
  }
  5% {
    text-shadow: -1px 0 0 #1f263b, 1px 0 0 #e1beb9;
  }
  6% {
    text-shadow: -1px 0 0 #1f263b, 1px 0 0 #e1beb9;
  }
  7% {
    text-shadow: -1px 0 0 #1f263b, 1px 0 0 #e1beb9;
  }
  8% {
    text-shadow: -1px 0 0 #1f263b, 1px 0 0 #e1beb9;
  }
  9% {
    text-shadow: -1px 0 0 #1f263b, 1px 0 0 #e1beb9;
  }
  10% {
    text-shadow: -1px 0 0 #1f263b, 1px 0 0 #e1beb9;
  }
  11% {
    text-shadow: 0.5px 0 0 #1f263b, -0.5px 0 0 #e1beb9;
  }
  12% {
    text-shadow: 0.5px 0 0 #1f263b, -0.5px 0 0 #e1beb9;
  }
  13% {
    text-shadow: 0.5px 0 0 #1f263b, -0.5px 0 0 #e1beb9;
  }
  14% {
    text-shadow: 0.5px 0 0 #1f263b, -0.5px 0 0 #e1beb9;
  }
  15% {
    text-shadow: 0.5px 0 0 #1f263b, -0.5px 0 0 #e1beb9;
  }
  16% {
    text-shadow: -1px 0 0 #1f263b, 1px 0 0 #e1beb9;
  }
  17% {
    text-shadow: -1px 0 0 #1f263b, 1px 0 0 #e1beb9;
  }
  18% {
    text-shadow: -1px 0 0 #1f263b, 1px 0 0 #e1beb9;
  }
  19% {
    text-shadow: -1px 0 0 #1f263b, 1px 0 0 #e1beb9;
  }
  20% {
    text-shadow: -1px 0 0 #1f263b, 1px 0 0 #e1beb9;
  }
  21% {
    text-shadow: 0.7px 0 0 #e1beb9, -0.7px 0 0 #e1beb9;
  }
  22% {
    text-shadow: 0.7px 0 0 #e1beb9, -0.7px 0 0 #e1beb9;
  }
  23% {
    text-shadow: 0.7px 0 0 #e1beb9, -0.7px 0 0 #e1beb9;
  }
  24% {
    text-shadow: 0.7px 0 0 #e1beb9, -0.7px 0 0 #e1beb9;
  }
  25% {
    text-shadow: 0.7px 0 0 #e1beb9, -0.7px 0 0 #e1beb9;
  }
  26% {
    text-shadow: 0.7px 0 0 #e1beb9, -0.7px 0 0 #e1beb9;
  }
  27% {
    text-shadow: 0.7px 0 0 #e1beb9, -0.7px 0 0 #e1beb9;
  }
  28% {
    text-shadow: 0.7px 0 0 #e1beb9, -0.7px 0 0 #e1beb9;
  }
  29% {
    text-shadow: 0.7px 0 0 #e1beb9, -0.7px 0 0 #e1beb9;
  }
  30% {
    text-shadow: 0.7px 0 0 #e1beb9, -0.7px 0 0 #e1beb9;
  }
  31% {
    text-shadow: -1px 0 0 #e1beb9, 1px 0 0 #e1beb9;
  }
  32% {
    text-shadow: -1px 0 0 #e1beb9, 1px 0 0 #e1beb9;
  }
  33% {
    text-shadow: -1px 0 0 #e1beb9, 1px 0 0 #e1beb9;
  }
  34% {
    text-shadow: -1px 0 0 #e1beb9, 1px 0 0 #e1beb9;
  }
  35% {
    text-shadow: -1px 0 0 #e1beb9, 1px 0 0 #e1beb9;
  }
  36% {
    text-shadow: -1px 0 0 #e1beb9, 1px 0 0 #e1beb9;
  }
  37% {
    text-shadow: -1px 0 0 #e1beb9, 1px 0 0 #e1beb9;
  }
  38% {
    text-shadow: -1px 0 0 #e1beb9, 1px 0 0 #e1beb9;
  }
  39% {
    text-shadow: -1px 0 0 #e1beb9, 1px 0 0 #e1beb9;
  }
  40% {
    text-shadow: -1px 0 0 #e1beb9, 1px 0 0 #e1beb9;
  }
  41% {
    text-shadow: 10px 0 0 #e1beb9, -10px 0 0 #e1beb9;
  }
  42% {
    text-shadow: 0 0 0 #e1beb9, 0 0 0 #e1beb9;
  }
  43% {
    text-shadow: 0.5px 0 0 #1f263b, -0.5px 0 0 #e1beb9;
  }
  44% {
    text-shadow: 0.5px 0 0 #1f263b, -0.5px 0 0 #e1beb9;
  }
  45% {
    text-shadow: 0.5px 0 0 #1f263b, -0.5px 0 0 #e1beb9;
  }
  46% {
    text-shadow: 0.5px 0 0 #1f263b, -0.5px 0 0 #e1beb9;
  }
  47% {
    text-shadow: -1px 0 0 #1f263b, 1px 0 0 #e1beb9;
  }
  48% {
    text-shadow: -1px 0 0 #1f263b, 1px 0 0 #e1beb9;
  }
  49% {
    text-shadow: -1px 0 0 #1f263b, 1px 0 0 #e1beb9;
  }
  50% {
    text-shadow: -1px 0 0 #1f263b, 1px 0 0 #e1beb9;
  }
  51% {
    text-shadow: 1px 0 0 #1f263b, -1px 0 0 #e1beb9;
  }
  52% {
    text-shadow: 1px 0 0 #1f263b, -1px 0 0 #e1beb9;
  }
  53% {
    text-shadow: 1px 0 0 #1f263b, -1px 0 0 #e1beb9;
  }
  54% {
    text-shadow: 1px 0 0 #1f263b, -1px 0 0 #e1beb9;
  }
  55% {
    text-shadow: 1px 0 0 #1f263b, -1px 0 0 #e1beb9;
  }
  56% {
    text-shadow: -1px 0 0 #1f263b, 1px 0 0 #e1beb9;
  }
  57% {
    text-shadow: -1px 0 0 #1f263b, 1px 0 0 #e1beb9;
  }
  58% {
    text-shadow: -1px 0 0 #1f263b, 1px 0 0 #e1beb9;
  }
  59% {
    text-shadow: -1px 0 0 #1f263b, 1px 0 0 #e1beb9;
  }
  60% {
    text-shadow: -1px 0 0 #1f263b, 1px 0 0 #e1beb9;
  }
  61% {
    text-shadow: 5px 0 0 #1f263b, -5px 0 0 #e1beb9;
  }
  62% {
    text-shadow: 0 0 0 #1f263b, 0 0 0 #e1beb9;
  }
  63% {
    text-shadow: 0.5px 0 0 #1f263b, -0.5px 0 0 #e1beb9;
  }
  64% {
    text-shadow: 0.5px 0 0 #1f263b, -0.5px 0 0 #e1beb9;
  }
  65% {
    text-shadow: 0.5px 0 0 #1f263b, -0.5px 0 0 #e1beb9;
  }
  66% {
    text-shadow: 0.5px 0 0 #1f263b, -0.5px 0 0 #e1beb9;
  }
  67% {
    text-shadow: -1px 0 0 #1f263b, 1px 0 0 #e1beb9;
  }
  68% {
    text-shadow: -1px 0 0 #1f263b, 1px 0 0 #e1beb9;
  }
  69% {
    text-shadow: -1px 0 0 #1f263b, 1px 0 0 #e1beb9;
  }
  70% {
    text-shadow: -1px 0 0 #1f263b, 1px 0 0 #e1beb9;
  }
  71% {
    text-shadow: 10px 0 0 #1f263b, -10px 0 0 #e1beb9;
  }
  72% {
    text-shadow: 0 0 0 #1f263b, 0 0 0 #e1beb9;
  }
  73% {
    text-shadow: 1px 0 0 #1f263b, -1px 0 0 #e1beb9;
  }
  74% {
    text-shadow: 1px 0 0 #1f263b, -1px 0 0 #e1beb9;
  }
  75% {
    text-shadow: 1px 0 0 #1f263b, -1px 0 0 #e1beb9;
  }
  76% {
    text-shadow: 1px 0 0 #1f263b, -1px 0 0 #e1beb9;
  }
  77% {
    text-shadow: -1px 0 0 #1f263b, 1px 0 0 #e1beb9;
  }
  78% {
    text-shadow: -1px 0 0 #1f263b, 1px 0 0 #e1beb9;
  }
  79% {
    text-shadow: -1px 0 0 #1f263b, 1px 0 0 #e1beb9;
  }
  80% {
    text-shadow: -1px 0 0 #1f263b, 1px 0 0 #e1beb9;
  }
  81% {
    text-shadow: 0.5px 0 0 #1f263b, -0.5px 0 0 #e1beb9;
  }
  82% {
    text-shadow: 0.5px 0 0 #1f263b, -0.5px 0 0 #e1beb9;
  }
  83% {
    text-shadow: 0.5px 0 0 #1f263b, -0.5px 0 0 #e1beb9;
  }
  84% {
    text-shadow: 0.5px 0 0 #1f263b, -0.5px 0 0 #e1beb9;
  }
  85% {
    text-shadow: 0.5px 0 0 #1f263b, -0.5px 0 0 #e1beb9;
  }
  86% {
    text-shadow: -1px 0 0 #1f263b, 1px 0 0 #e1beb9;
  }
  87% {
    text-shadow: -1px 0 0 #1f263b, 1px 0 0 #e1beb9;
  }
  88% {
    text-shadow: -1px 0 0 #1f263b, 1px 0 0 #e1beb9;
  }
  89% {
    text-shadow: -1px 0 0 #1f263b, 1px 0 0 #e1beb9;
  }
  90% {
    text-shadow: -1px 0 0 #1f263b, 1px 0 0 #e1beb9;
  }
  91% {
    text-shadow: 10px 0 0 #e1beb9, -10px 0 0 #e1beb9;
  }
  92% {
    text-shadow: 0 0 0 #e1beb9, 0 0 0 #e1beb9;
  }
  92% {
    text-shadow: 0.7px 0 0 #e1beb9, -0.7px 0 0 #e1beb9;
  }
  93% {
    text-shadow: 0.7px 0 0 #e1beb9, -0.7px 0 0 #e1beb9;
  }
  94% {
    text-shadow: 0.7px 0 0 #e1beb9, -0.7px 0 0 #e1beb9;
  }
  95% {
    text-shadow: 0.7px 0 0 #e1beb9, -0.7px 0 0 #e1beb9;
  }
  96% {
    text-shadow: -1px 0 0 #e1beb9, 1px 0 0 #e1beb9;
  }
  97% {
    text-shadow: -1px 0 0 #e1beb9, 1px 0 0 #e1beb9;
  }
  98% {
    text-shadow: -1px 0 0 #e1beb9, 1px 0 0 #e1beb9;
  }
  99% {
    text-shadow: -1px 0 0 #e1beb9, 1px 0 0 #e1beb9;
  }
  100% {
    text-shadow: -1px 0 0 #e1beb9, 1px 0 0 #e1beb9;
  }
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