<template>
  <main>
    <section class="home-slider section mb-24 relative">
      <div v-swiper="swiperOption" class="relative overflow-hidden">
        <div class="swiper-wrapper h-screen">
          <div v-for="project in projects" :key="project.id" class="swiper-slide change-color"
            :data-color="project.data.textColor" :data-background="project.data.backgroundColor">
            <div
              class="absolute top-0 left-0 bottom-0 right-0 z-10 flex flex-col justify-center items-start p-4 pointer-events-none">
              <div class="absolute top-0 left-0 bottom-0 right-0 opacity-50 transition-colors duration-300"
                style="background: var(--bg)">
              </div>
              <prismic-rich-text :field="project.data.title"
                class="title tracking-tight leading-none text-5xl lg:text-8xl uppercase header-font inline-block z-10" />
              <prismic-rich-text :field="project.data.summary"
                class="summary text-sm lg:text-base uppercase inline-block z-10" />
            </div>
            <nuxt-link :to="LinkGetter(project)">
              <nuxt-img v-if="project.data.image.url" format="webp" :src="project.data.image.url"
                sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw" :width="project.data.image.dimensions.width"
                :height="project.data.image.dimensions.height"
                class="image transition duration-700 w-full h-screen object-cover" loading="lazy" />
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
import { directive } from "vue-awesome-swiper";
import LinkResolver from '~/plugins/link-resolver.js'
export default {
  name: 'HomePage',
  components: {
    SliceZone
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
        titleWords: Array.from("We craft brands, spaces, and experiences. We are VAST.".split(' ')),
        backgroundColor: pageContent.backgroundColor,
        textColor: pageContent.textColor,
        projects: projects.results,
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



    // Function to add css variables
    function setBodyProperty(a, b) {
      document.documentElement.style.setProperty(a, b);
    };

    // Function to change colors
    const changeColorOnSwipe = function () {
      const changeColor = document.querySelector('.change-color.swiper-slide-active');
      const color = changeColor.dataset.color;
      const backgroundcolor = changeColor.dataset.background;
      setBodyProperty('--color', color);
      setBodyProperty('--color-primary', color);
      setBodyProperty('--bg', backgroundcolor);
    }
    // Change colors when page loaded
    document.addEventListener('DOMContentLoaded', changeColorOnSwipe);
    // Change colors when scrolling between projects
    this.$swiper.on('imagesReady', changeColorOnSwipe);
    this.$swiper.on('transitionStart', changeColorOnSwipe);






  },
  updated() {
    this.$ScrollTrigger.refresh()
  },
  destroyed() {
    window.removeEventListener('scroll', this.headerScroll)
    function setBodyProperty(a, b) {
      document.getElementsByTagName("BODY")[0].style.setProperty(a, b);
    };
    setBodyProperty('--color', '');
    setBodyProperty('--color-primary', '');
    setBodyProperty('--bg', '');
  },
  methods: {
    LinkGetter(post) {
      return LinkResolver(post)
    },
    headerScroll() {
      const screenHeight = window.innerHeight
      if (document.documentElement.scrollTop < screenHeight) {
        gsap.to('.title-words span', {
          translateY: document.documentElement.scrollTop / 4,
          stagger: 0.025,
          duration: 1,
          ease: 'power4.easeOut',
        })
      }
    },
  },
}
</script>
<style scoped>
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
  content: '('
}

.summary p::after {
  content: ')'
}
</style>