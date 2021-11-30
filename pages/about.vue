<template>
  <main>
    <section class="about-header">
      <div id="header-text" class="w-full flex flex-col justify-center p-4 py-52 pt-60 relative">
        <h1 id="header-title" class="tracking-tight text-5xl uppercase overflow-hidden mb-4"><span v-for="letter in titleSplit" :key="letter" class="inline-block">{{ letter }}</span></h1>
        <p id="header-description" class="font-light inline-block tag text-3xl transition duration-300 leading-3 transform lg:w-10/12"  :class="{ 'has-scroll-over opacity-0 translate-y-4': scrollOver }"><span class="intro font-light text-sm lg:text-base uppercase inline-block mr-16">({{ $prismic.asText(intro) }})</span><span class="description serif leading-7"><span v-for="word in descriptionWords" :key="word" class="description-words inline-block">{{ word }}</span></span>
        </p>
      </div>
    </section>
    <section class="content">
    </section>
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
        titleSplit: Array.from($prismic.asText(pageContent.title)),
        descriptionWords: Array.from($prismic.asText(pageContent.description).split(' ')),
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
      page: null
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
            .substring(0, 158)
        }
      ]
    }
  },
  beforeMount() {
    document.documentElement.style.setProperty('--bg', this.backgroundColor);
    document.documentElement.style.setProperty('--color-primary', this.textColor);
    document.documentElement.style.setProperty('--color', this.textColor);
  },
  mounted() {
    this.headerAnimation();
  },
  destroyed() {
    document.documentElement.style.setProperty('--bg', '');
    document.documentElement.style.setProperty('--color-primary', '');
    document.documentElement.style.setProperty('--color', '');
  },
  methods: {
    headerAnimation() {
      gsap.set("#header-title span", {y: -30, opacity: 0 });
      gsap.set("#header-description .intro", {y: 15, opacity: 0 });
      gsap.set("#header-description .description span", {y: 15, opacity: 0 });
      gsap.to("#header-title span", {y: 0, opacity: 1, stagger: 0.01, duration: 1, ease: 'power4.out' })
      gsap.to("#header-description .intro", {y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: 'power4.out' }).delay(0.5)
      gsap.to("#header-description .description span", {y: 0, opacity: 1, stagger: 0.05, duration: 1, ease: 'power4.out' }).delay(1)
    }
  }
}
</script>
<style scoped>
.description-words{
  padding-right:.29em
}
</style>