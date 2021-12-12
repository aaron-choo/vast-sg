<template>
  <main>
    <section class="about-header z-0 overflow-hidden">
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
      <div class="grid lg:grid-cols-2 gap-4">
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
              <div class="speech-bubble relative left-1/2 rounded-xl p-2 px-3 uppercase text-center text-sm lg:text-base leading-none lg:leading-none">
                Hello from the<br/>Vast lookout👋
              </div>
            </div>
          </div>
          <div class="text-xl
              lg:text-2xl
              uppercase
              tracking-tight
              leading-tight
              lg:leading-tight
              px-4 pb-4">
              <span class="
                text-sm
                lg:text-base
                uppercase
                block
                w-5/6 ml-auto lg:ml-0
              ">(Multi-disciplinary design)</span>
              <div id="about-copy">
                <p class="w-5/6 ml-auto lg:ml-0">We’re a design practice in the business of crafting identities. From intangible ideas to tactile products; physical spaces to virtual experiences, we craft impactful responses that drive engagement and produce results.</p>
                <p class="w-5/6 ml-auto">Always embarking on projects with the creativity and rigour of an architectural approach, we are grounded by experience and insights across multiple sectors, in a convergence of culture, innovation and commerce.</p>
              </div>
            </div>
        </div>
    </section>
    <section class="content">
      <hr class="h-px w-full opacity-20" />
      <div>
        <div class="about-text relative overflow-hidden">
          <div
            class="
              block
              relative
              text-3xl
              lg:text-4xl
              p-4
              py-52
              grid
              grid-cols-3
            "
          >
            
          </div>
          <div
            class="
             hidden
              marquee
              absolute
              top-0
              lef-0
              overflow-hidden
              w-full
              h-full
              pointer-events-none
              mix-blend-difference
            "
          >
            <div
              class="marquee-inner-wrap flex overflow-hidden whitespace-nowrap"
            >
              <div class="marquee-inner" aria-hidden="true">
                <span
                  class="
                    whitespace-nowrap
                    text-4xl
                    md:text-6xl
                    py-4
                    font-light
                    uppercase
                    text-center
                    flex
                    items-center
                    w-max
                  "
                  >Like what you see?<img
                    src="/emoji-eyes.png"
                    class="emoji h-10 md:h-14 relative mx-4" />or just wanna say
                  hi?<img
                    src="/emoji-waving-hand.png"
                    class="emoji h-10 md:h-14 relative mx-4"
                /></span>
              </div>
              <div class="marquee-inner" aria-hidden="true">
                <span
                  class="
                    whitespace-nowrap
                    text-4xl
                    md:text-6xl
                    py-4
                    font-light
                    uppercase
                    text-center
                    flex
                    items-center
                    w-max
                  "
                  >Like what you see?<img
                    src="/emoji-eyes.png"
                    class="emoji h-10 md:h-14 relative mx-4" />or just wanna say
                  hi?<img
                    src="/emoji-waving-hand.png"
                    class="emoji h-10 md:h-14 relative mx-4"
                /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    <hr class="h-px w-full opacity-20" />
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
        ease: 'power4.out',
      })
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
      gsap
        .to('.content', {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0,
          ease: 'power4.out',
        })
        .delay(2)
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
#header-image {
  min-height: 600px;
}
.speech-bubble-position {
  bottom: 52%;
  right: 54%;
}
.speech-bubble {
	background: #222;
  color: #fff;
}
.speech-bubble::after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 50%;
	width: 0;
	height: 0;
	border: 10px solid transparent;
	border-top-color: #222;
	border-bottom: 0;
	margin-left: -10px;
	margin-bottom: -10px;
}
#about-copy p:not(:first-child){
  text-indent: 5em;
}
.marquee {
  background: var(--color);
  color: var(--bg);
  transform: translate3d(0, 101%, 0);
  transition: 0.3s ease;
}

.marquee-inner-wrap {
  height: 100%;
  width: 100%;
  transform: translate3d(0, -101%, 0);
  transition: 0.3s ease;
}

.about-text:hover .marquee,
.about-text:hover .marquee-inner-wrap {
  transform: translate3d(0, 0, 0);
}

.marquee-inner {
  height: 100%;
  width: fit-content;
  align-items: center;
  display: flex;
  position: relative;
  animation: marquee 10s linear infinite;
  will-change: transform;
}

.marquee-inner.reverse {
  animation: marquee 20s linear reverse infinite;
}

@keyframes marquee {
  100% {
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
