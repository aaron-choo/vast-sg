<template>
  <main>
    <section class="about-header z-0 overflow-hidden">
      <div
        id="header-text"
        class="
          w-full
          flex flex-col
          justify-center
          px-4
          lg:px-8
          py-32
          pt-44
          lg:py-52 lg:pt-60
          relative
        "
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
          class="inline-block tag text-2xl lg:text-3xl leading-3 transform"
        >
          <span
            class="intro text-sm lg:text-base uppercase inline-block mr-16 dot"
            >{{ $prismic.asText(intro) }}</span
          ><span class="description serif leading-7 font-light"
            ><span
              v-for="(word, index) in descriptionWords"
              :key="index"
              class="description-words inline-block"
              >{{ word }}<span class="body-font">&nbsp;</span></span
            ></span
          >
        </p>
      </div>
    </section>
    <section class="content">
      <div
        class="
          m-4
          lg:mx-8
          mb-24
          grid
          gap-8
          md:grid-cols-2
          text-2xl
          lg:text-3xl
          font-light
        "
      >
        <div class="grid gap-8">
          <div>
            <p class="text-sm lg:text-base uppercase dot">
              Multi-Disciplinary Design
            </p>
            <p class="heading-font">
              We’re a design practice in the business of crafting identities.
              From intangible ideas to tactile products; physical spaces to
              virtual experiences, we craft impactful responses that drive
              engagement and produce results.
            </p>
            <p class="heading-font indent-16">
              Always embarking on projects with the creativity and rigour of an
              architectural approach, we are grounded by experience and insights
              across multiple sectors, in a convergence of culture, innovation
              and commerce.
            </p>
          </div>
        </div>
        <div class="grid gap-8">
          <div>
            <p class="text-sm lg:text-base uppercase dot">People</p>
            <nuxt-img
              format="webp"
              :src="image.url"
              sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
              :width="image.dimensions.width"
              :height="image.dimensions.height"
              class="w-2/3 h-auto rounded-lg my-4"
              loading="lazy"
            />
            <h2>Aaron Choo</h2>
            <p class="text-base lg:text-lg">
              After spending years in architectural firms of varying scales,
              Aaron saw an opportunity to bring together his passion for digital
              design and his multi-disciplinary skills honed over a decade of
              architectural training.
            </p>
            <p class="text-base lg:text-lg indent-16">
              He approaches all projects with a critical eye, and understands
              the importance of strategic thinking and iterative design in order
              to drive results.
            </p>
          </div>
        </div>
      </div>
      <div class="m-4 lg:mx-8 mb-24 grid gap-8 text-2xl lg:text-3xl font-light">
        <div class="grid gap-8">
          <div>
            <p class="text-sm lg:text-base uppercase dot">Our Capabilities</p>
            <div class="grid gap-4 md:grid-cols-3">
              <div>
                <h2>Branding & Communication</h2>
                <ul class="text-base lg:text-lg">
                  <li>Brand strategy</li>
                  <li>Brand identity</li>
                  <li>Print</li>
                  <li>Editorial design</li>
                  <li>Retail design</li>
                  <li>Packaging design</li>
                  <li>Copywriting</li>
                </ul>
              </div>
              <div>
                <h2>Digital Design & Web Development</h2>
                <ul class="text-base lg:text-lg">
                  <li>UI/UX</li>
                  <li>Headless CMS</li>
                  <li>E-commerce</li>
                  <li>Search engine optimization</li>
                  <li>Responsive design</li>
                  <li>Accessible design</li>
                  <li>Process optimization</li>
                  <li>Systems integration</li>
                </ul>
              </div>
              <div>
                <h2>Interior Design & Architectural Visualization</h2>
                <ul class="text-base lg:text-lg">
                  <li>Residential design</li>
                  <li>Commercial design</li>
                  <li>Construction coordination</li>
                  <li>Technical drafting</li>
                  <li>BIM</li>
                  <li>3D modeling</li>
                  <li>Architectural visualization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    this.rootVariable('--bg', this.backgroundColor)
    this.rootVariable('--color-primary', this.textColor)
    this.rootVariable('--color', this.textColor)
  },
  mounted() {
    this.headerAnimation()
  },
  updated() {},
  destroyed() {},
  methods: {
    rootVariable(a, b) {
      document.documentElement.style.setProperty(a, b)
    },
    headerAnimation() {
      gsap.set('.title-words span', {
        scaleY: 0,
        rotate: -18,
        transformOrigin: '50% 0%',
      })
      gsap.set('#header-description .intro', { y: 15, opacity: 0 })
      gsap.set('#header-description .description span', { y: 15, opacity: 0 })
      gsap.set('.content', { y: 30, opacity: 0 })
      gsap.to('.title-words span', {
        scaleY: 1,
        rotate: 0,
        stagger: 0.05,
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
  },
}
</script>
<style scoped>
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

.indent-16 {
  text-indent: 4rem;
}
</style>
