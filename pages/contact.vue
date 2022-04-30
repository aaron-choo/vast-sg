<template>
  <main>
    <section class="contact-header z-0 overflow-hidden">
      <div
        id="header-text"
        class="w-full flex flex-col justify-center p-4 py-52 pt-60 relative"
      >
        <h1
          id="header-title"
          class="tracking-tight text-5xl lg:text-8xl uppercase mb-4"
        >
          <span
            v-for="(word, index) in titleWords"
            :key="index"
            class="title-words inline-block overflow-hidden"
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
          class="inline-block tag text-2xl lg:text-3xl transition duration-300 leading-3 transform"
          :class="{ 'has-scroll-over': scrollOver }"
        >
          <span class="intro text-sm lg:text-base uppercase inline-block mr-16"
            >({{ $prismic.asText(intro) }})</span
          ><span class="description serif leading-7 font-light"
            ><span
              v-for="(word, index) in descriptionWords"
              :key="index"
              class="description-words inline-block"
              >{{ word }}</span
            ></span
          >
        </p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'ContactPage',
  components: {},
  async asyncData({ $prismic, error }) {
    try {
      const pageContent = (await $prismic.api.getSingle('contactPage')).data
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
    }
  },
  head() {
    return {
      title: this.$prismic.asText(this.page.metaTitle),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$prismic
            .asText(this.page.metaDescription)
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
  updated() {
    this.$ScrollTrigger.refresh()
  },
  destroyed() {
    document.documentElement.style.setProperty('--bg', '')
    document.documentElement.style.setProperty('--color-primary', '')
    document.documentElement.style.setProperty('--color', '')
  },
}
</script>
<style scoped>
.description-words {
  padding-right: 0.29em;
}
</style>
