<template>
  <main>
    <section class="contact-header z-0 overflow-hidden">
      <div class="w-full overflow-hidden">
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
              ></span
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
            <span
              class="
                intro
                text-sm
                lg:text-base
                uppercase
                inline-block
                mr-16
                dot
              "
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
      </div>
    </section>
    <section class="content">
      <div
        class="
          m-4
          mb-24
          grid
          gap-8
          md:grid-cols-2
          text-3xl
          lg:text-4xl
          font-light
          uppercase
        "
      >
        <div class="grid gap-8">
          <div>
            <p class="text-sm lg:text-base uppercase">(Locate Us)</p>
            <a
              class="inline-block relative"
              href="https://maps.google.com/?q=VAST%20632%20Veerasamy%20Road%20#19-102"
              target="_blank"
              aria-label="View on map"
              rel="noopener"
            >
              <h2>
                1°18’22”N<br />
                103°51’16”E
              </h2>
              <div
                class="
                  u
                  left-px
                  origin-right
                  transition
                  duration-500
                  absolute
                  bottom-0
                  h-px
                "
              >
                <div
                  class="
                    transition-transform
                    duration-500
                    origin-left
                    w-full
                    h-full
                  "
                ></div>
              </div>
            </a>
          </div>
        </div>
        <div class="grid gap-8">
          <div>
            <p class="text-sm lg:text-base uppercase">(Phone Us)</p>
            <a
              class="inline-block relative"
              href="tel:+6569424062"
              aria-label="Call us"
              rel="noopener"
            >
              <h2>+65 6942 4062</h2>
              <div
                class="
                  u
                  left-px
                  origin-right
                  transition
                  duration-500
                  absolute
                  bottom-0
                  h-px
                "
              >
                <div
                  class="
                    transition-transform
                    duration-500
                    origin-left
                    w-full
                    h-full
                  "
                ></div>
              </div>
            </a>
          </div>
          <div>
            <p class="text-sm lg:text-base uppercase">(Email Us)</p>
            <a
              class="inline-block relative"
              href="mailto:hello@vast.sg"
              aria-label="Email us"
              rel="noopener"
            >
              <h2>hello@vast.sg</h2>
              <div
                class="
                  u
                  left-px
                  origin-right
                  transition
                  duration-500
                  absolute
                  bottom-0
                  h-px
                "
              >
                <div
                  class="
                    transition-transform
                    duration-500
                    origin-left
                    w-full
                    h-full
                  "
                ></div>
              </div>
            </a>
          </div>
          <div>
            <p class="text-sm lg:text-base uppercase">(Follow Us)</p>
            <a
              class="inline-block relative"
              href="https://facebook.com/vast.sg"
              target="_blank"
              aria-label="Connect with us on Facebook"
              tabindex="0"
              tabposition="bottom"
              rel="noopener"
            >
              <h2>Facebook</h2>
              <div
                class="
                  u
                  left-px
                  origin-right
                  transition
                  duration-500
                  absolute
                  bottom-0
                  h-px
                "
              >
                <div
                  class="
                    transition-transform
                    duration-500
                    origin-left
                    w-full
                    h-full
                  "
                ></div>
              </div>
            </a>
            <br />
            <a
              class="inline-block relative"
              href="https://instagram.com/vast.sg"
              target="_blank"
              aria-label="Connect with us on Instagram"
              tabindex="0"
              tabposition="bottom"
              rel="noopener"
            >
              <h2>Instagram</h2>
              <div
                class="
                  u
                  left-px
                  origin-right
                  transition
                  duration-500
                  absolute
                  bottom-0
                  h-px
                "
              >
                <div
                  class="
                    transition-transform
                    duration-500
                    origin-left
                    w-full
                    h-full
                  "
                ></div>
              </div>
            </a>
            <br />
            <a
              class="inline-block relative"
              href="https://www.linkedin.com/company/vast-sg/"
              target="_blank"
              aria-label="Connect with us on LinkedIn"
              tabindex="0"
              tabposition="bottom"
              rel="noopener"
            >
              <h2>LinkedIn</h2>
              <div
                class="
                  u
                  left-px
                  origin-right
                  transition
                  duration-500
                  absolute
                  bottom-0
                  h-px
                "
              >
                <div
                  class="
                    transition-transform
                    duration-500
                    origin-left
                    w-full
                    h-full
                  "
                ></div>
              </div>
            </a>
            <br />
            <a
              class="inline-block relative"
              href="https://dribbble.com/vastdesign"
              target="_blank"
              aria-label="Connect with us on Dribbble"
              tabindex="0"
              tabposition="bottom"
              rel="noopener"
            >
              <h2>Dribbble</h2>
              <div
                class="
                  u
                  left-px
                  origin-right
                  transition
                  duration-500
                  absolute
                  bottom-0
                  h-px
                "
              >
                <div
                  class="
                    transition-transform
                    duration-500
                    origin-left
                    w-full
                    h-full
                  "
                ></div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div
        class="
          m-4
          grid
          gap-8
          md:grid-cols-2
          text-3xl
          lg:text-4xl
          font-light
          uppercase
        "
      >
        <nuxt-img
          v-if="image.url"
          format="webp"
          :src="image.url"
          sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
          :width="image.dimensions.width"
          :height="image.dimensions.height"
          class="w-full rounded-lg object-cover"
          loading="lazy"
        />
      </div>
    </section>
  </main>
</template>

<script>
import gsap from 'gsap'
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
    this.headerAnimation()
    const gsap = this.$gsap
    const ExpoScaleEase = this.$ExpoScaleEase
    const ScrollToPlugin = this.$ScrollToPlugin
    const ScrollTrigger = this.$ScrollTrigger
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, ExpoScaleEase)
    this.$ScrollTrigger.refresh()
  },
  updated() {
    this.$ScrollTrigger.refresh()
  },
  destroyed() {},
  methods: {
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
.u {
  width: calc(100% - 1px);
  transform: scaleX(0);
}

a:hover .u,
.site-nav-body:not(.hover) .nuxt-link-exact-active .u {
  transform: scaleX(1);
  transform-origin: left;
}

.u div {
  transform: scaleX(1);
  background-color: var(--color-primary);
}
</style>
