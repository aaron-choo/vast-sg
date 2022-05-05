<template>
  <main>
    <section class="about-header z-0 overflow-hidden">
      <div id="header-text" class="w-full flex flex-col justify-center p-4 py-52 pt-60 relative">
        <h1 id="header-title" class="tracking-tight text-5xl lg:text-8xl uppercase mb-4">
          <span v-for="(word, index) in titleWords" :key="index" class="title-words inline-block overflow-hidden"><span
              v-for="(letter, index2) in Array.from(word)" :key="index2" class="inline-block">{{ letter
              }}</span>&nbsp;</span>
        </h1>
        <p id="header-description"
          class="inline-block tag text-2xl lg:text-3xl transition duration-300 leading-3 transform"
          :class="{ 'has-scroll-over': scrollOver }">
          <span class="intro text-sm lg:text-base uppercase inline-block mr-16">({{ $prismic.asText(intro)
          }})</span><span class="description serif leading-7 font-light"><span
              v-for="(word, index) in descriptionWords" :key="index" class="description-words inline-block">{{ word
              }}</span></span>
        </p>
      </div>
    </section>
    <section class="content">
      <!-- <div class="grid lg:grid-cols-2">
        <div
          v-if="image.url !== undefined"
          id="header-image-wrapper"
          class="z-0 relative mx-4 mb-4"
        >
          <nuxt-img
            v-if="image.url"
            id="header-image"
            format="webp"
            :src="image.url"
            sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
            :width="image.dimensions.width"
            :height="image.dimensions.height"
            class="w-full rounded-lg object-cover"
            loading="lazy"
          />
          <div class="speech-bubble-position absolute">
            <div
              class="speech-bubble relative left-1/2 rounded-xl p-2 px-3 flex items-center"
            >
              <span
                class="text-sm lg:text-base leading-none lg:leading-none uppercase"
                >Hello From The<br />VAST Lookout!</span
              ><span
                class="wave text-2xl lg:text-3xl leading-none lg:leading-none -ml-1 -mr-1"
                >👋</span
              >
            </div>
            <div class="speech-bubble-origin relative left-1/4 bottom-2">
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                xmlns="http://www.w3.org/2000/svg"
                class="w-full"
              >
                <path
                  d="M0 0.516602C0 9.06769 3.26836 15.9997 13.7618 15.9997L14 16.0005C13.0623 15.2567 12.2689 14.3944 11.6314 13.4229C10.4112 11.5638 10 9.73924 10 5.406V0.516602H0Z"
                  fill="#007aff"
                  data-v-31c4c148=""
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div
          class="text-xl lg:text-2xl uppercase tracking-tight leading-tight lg:leading-tight px-4 pb-4"
        >
          <span
            class="text-sm lg:text-base uppercase block w-5/6 ml-auto lg:ml-0"
            >(Multi-disciplinary design)</span
          >
          <div id="about-copy">
            <p class="w-5/6 ml-auto lg:ml-0">
              We’re a design practice in the business of crafting identities.
              From intangible ideas to tactile products; physical spaces to
              virtual experiences, we craft impactful responses that drive
              engagement and produce results.
            </p>
            <p class="w-5/6 ml-auto">
              Always embarking on projects with the creativity and rigour of an
              architectural approach, we are grounded by experience and insights
              across multiple sectors, in a convergence of culture, innovation
              and commerce.
            </p>
          </div>
        </div>
      </div> -->
      <!-- <hr class="h-px w-full opacity-20" /> -->
      <slice-zone type="about_page" queryType="single" />
    </section>
  </main>
</template>

<script>
import gsap from 'gsap'
import SliceZone from 'vue-slicezone'
export default {
  name: 'AboutPage',
  components: {
    SliceZone,
  },
  async asyncData({ $prismic, error }) {
    try {
      const pageContent = (await $prismic.api.getSingle('about_page')).data
      return {
        page: pageContent,
        title: pageContent.title,
        titleWords: Array.from($prismic.asText(pageContent.title).split(' ')),
        titleSplit: Array.from($prismic.asText(pageContent.title)),
        descriptionWords: Array.from(
          $prismic.asText(pageContent.description).split(' ')
        ),
        description: pageContent.description,
        intro: pageContent.intro,
        backgroundColor: pageContent.backgroundColor,
        textColor: pageContent.textColor,
        image: pageContent.image,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  data() {
    return {
      page: null,
      scrollOver: false,
    }
  },
  head() {
    return {
      title: this.page.metaTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.metaDescription
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
    this.headerAnimation()
    window.addEventListener('scroll', this.headerScroll)
  },
  updated() {
  },
  destroyed() {
    window.removeEventListener('scroll', this.headerScroll)
  },
  methods: {
    headerAnimation() {
      gsap.set('.title-words span', {
        scaleY: 0,
        rotate: -22,
        rotateX: 90,
        transformOrigin: '0% 50% -50',
      })
      gsap.set('#header-description .intro', { y: 15, opacity: 0 })
      gsap.set('#header-description .description span', { y: 15, opacity: 0 })
      gsap.set('.content', { y: 30, opacity: 0 })
      gsap.to('.title-words span', {
        scaleY: 1,
        rotate: 0,
        rotateX: 0,
        opacity: 1,
        stagger: 0.02,
        duration: 1,
        ease: 'Power4.easeOut',
      })
      gsap
        .to('#header-description .intro', {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: 'Power4.easeOut',
        })
        .delay(0.5)
      gsap
        .to('#header-description .description span', {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 1,
          ease: 'Power4.easeOut',
        })
        .delay(1)
      gsap
        .to('.content', {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0,
          ease: 'Power4.easeOut',
        })
        .delay(2)
    },
    headerScroll() {
      const screenHeight = window.innerHeight
      if (document.documentElement.scrollTop < screenHeight) {
        gsap.to('.title-words span', {
          translateY: document.documentElement.scrollTop / 4,
          stagger: 0.025,
          duration: 1,
          ease: 'Power4.easeOut',
        })
      }
    },
  },
}
</script>
<style scoped>
.description-words {
  padding-right: 0.29em;
}

#header-image {
  min-height: 600px;
}

.speech-bubble-position {
  bottom: 50%;
  right: 50%;
}

.speech-bubble {
  background: #007aff;
  color: #fff;
}

#about-copy p:not(:first-child) {
  text-indent: 5em;
}
</style>
<style>
.default-slice:nth-child(3) .image-block {
  margin-bottom: -5rem;
}

section.section:first-child {
  margin-top: 0;
}

h5 {
  opacity: 0.5;
}

.text-block:nth-child(5),
.text-block:nth-child(6) {
  margin-bottom: -4rem;
}
</style>