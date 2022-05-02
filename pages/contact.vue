<template>
  <main>
    <section class="contact-header z-0 overflow-hidden">
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
      <div class="m-4 mb-24 grid gap-8 md:grid-cols-2 text-3xl lg:text-4xl font-light uppercase">
        <div class="grid gap-8">
          <div>
            <p class="text-sm lg:text-base uppercase">(Locate Us)</p>
            <a class="inline-block" href="https://maps.google.com/?q=VAST%20632%20Veerasamy%20Road%20#19-102"
              target="_blank" aria-label="View on map" rel="noopener">
              <h2>1°18’22”N<br>
                103°51’16”E</h2>
            </a>
          </div>
        </div>
        <div class="grid gap-8">
          <div>
            <p class="text-sm lg:text-base uppercase">(Phone Us)</p>
            <a class="inline-block" href="tel:+6569424062" aria-label="Call us" rel="noopener">
              <h2>+65 6942 4062</h2>
            </a>
          </div>
          <div>
            <p class="text-sm lg:text-base uppercase">(Email Us)</p>
            <a class="inline-block" href="mailto:hello@vast.sg" aria-label="Email us" rel="noopener">
              <h2>hello@vast.sg</h2>
            </a>
          </div>
          <div>
            <p class="text-sm lg:text-base uppercase">(Follow Us)</p>
            <a class="inline-block" href="https://facebook.com/vast.sg" target="_blank"
              aria-label="Connect with us on Facebook" tabindex="0" tabposition="bottom" rel="noopener">
              <h2>Facebook</h2>
            </a>
            <br />
            <a class="inline-block" href="https://instagram.com/vast.sg" target="_blank"
              aria-label="Connect with us on Instagram" tabindex="0" tabposition="bottom" rel="noopener">
              <h2>Instagram</h2>
            </a>
            <br />
            <a class="inline-block" href="https://www.linkedin.com/company/vast-sg/" target="_blank"
              aria-label="Connect with us on LinkedIn" tabindex="0" tabposition="bottom" rel="noopener">
              <h2>LinkedIn</h2>
            </a>
            <br />
            <a class="inline-block" href="https://dribbble.com/vastdesign" target="_blank"
              aria-label="Connect with us on Dribbble" tabindex="0" tabposition="bottom" rel="noopener">
              <h2>Dribbble</h2>
            </a>
          </div>
        </div>
      </div>
      <div class="m-4 grid gap-8 md:grid-cols-2 text-3xl lg:text-4xl font-light uppercase">
        <nuxt-img v-if="image.url" format="webp" :src="image.url" sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
          :width="image.dimensions.width" :height="image.dimensions.height" class="w-full rounded-lg object-cover"
          loading="lazy" />
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
