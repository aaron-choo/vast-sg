<template>
  <main>
    <section class="about-header">
      <div
        id="header-text"
        class="w-full flex flex-col justify-center p-4 py-52 pt-60 relative"
      >
        <h1
          id="header-title"
          class="
            tracking-tight
            text-4xl
            lg:text-5xl
            uppercase
            overflow-hidden
            mb-4
          "
        >
          <span
            v-for="(word, index) in titleWords"
            :key="index"
            class="title-words inline-block"
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
            text-3xl
            transition
            duration-300
            leading-3
            transform
            lg:w-10/12
          "
          :class="{ 'has-scroll-over opacity-0 translate-y-4': scrollOver }"
        >
          <span
            class="
              intro
              text-sm
              lg:text-base
              uppercase
              inline-block
              mr-16
            "
            >({{ $prismic.asText(intro) }})</span
          ><span class="description serif leading-7 font-light"
            ><span
              v-for="word in descriptionWords"
              :key="word"
              class="description-words inline-block"
              >{{ word }}</span
            ></span
          >
        </p>
      </div>
    </section>
    <section class="content"></section>
  </main>
</template>

<script>
import gsap from 'gsap'
export default {
  name: 'AboutPage',
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
      title: this.$prismic.asText(this.page.meta_title),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$prismic
            .asText(this.page.meta_description)
            .substring(0, 158),
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
    window.addEventListener('scroll', this.onScroll)
  },
  destroyed() {
    document.documentElement.style.setProperty('--bg', '')
    document.documentElement.style.setProperty('--color-primary', '')
    document.documentElement.style.setProperty('--color', '')
    window.removeEventListener('scroll', this.headerScroll)
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    headerAnimation() {
      gsap.set('.title-words span', { y: -30, opacity: 0 })
      gsap.set('#header-description .intro', { y: 15, opacity: 0 })
      gsap.set('#header-description .description span', { y: 15, opacity: 0 })
      gsap.set('.project-link', { y: 30, opacity: 0 })
      gsap.to('.title-words span', {
        y: 0,
        opacity: 1,
        stagger: 0.02,
        duration: 1,
        ease: 'power4.out',
      })
      gsap
        .to('.project-link', {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power4.out',
        })
        .delay(2)
      gsap
        .to('#header-description .intro', {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: 'power4.out',
        })
        .delay(0.5)
      gsap
        .to('#header-description .description span', {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 1,
          ease: 'power4.out',
        })
        .delay(1)
    },
    headerScroll() {
      const screenHeight = window.innerHeight
      if (document.documentElement.scrollTop < screenHeight) {
        document.getElementById('header-text').style.transform =
          'translateY(' + document.documentElement.scrollTop / 1.8 + 'px)'
      }
    },
    onScroll() {
      // Get the current scroll position
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return
      }
      if (currentScrollPosition > 0) {
        this.scrollOver = true
      } else {
        this.scrollOver = false
      }
    }
  },
}
</script>
<style scoped>
.description-words {
  padding-right: 0.29em;
}
</style>
