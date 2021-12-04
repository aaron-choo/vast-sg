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
    <section class="content">
      <hr class="h-px w-full opacity-20" />
      <div>
        <div class="about-text relative overflow-hidden">
          <div
            id="about-copy"
            class="
              block
              relative
              text-4xl
              sm:text-6xl
              font-light
              p-4
              py-52
            "
          >
            <p>We help brands generate desirability and impact through concept-driven and strategic design.</p>
            <p>We embrace a fluid approach, and use our expertise to create longevity and value for our clients.</p>
          </div>
          <div
            class="
              marquee
              absolute
              top-0
              lef-0
              overflow-hidden
              w-full
              h-full
              pointer-events-none
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
