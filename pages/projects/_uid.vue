<template>
  <main>
    <section class="project-header">
      <div class="w-full overflow-hidden">
        <div id="header-text" class="w-full flex flex-col justify-center p-4 py-52 pt-60 relative">
          <h1 id="header-title" class="tracking-tight leading-none text-5xl lg:text-8xl uppercase">
            <span v-for="(word, index) in titleWords" :key="index"
              class="title-words inline-block overflow-hidden align-top"><span
                v-for="(letter, index2) in Array.from(word)" :key="index2" class="inline-block">{{ letter
                }}</span>&nbsp;</span>
          </h1>
          <p id="header-scope"
            class="inline-block tag capitalize text-2xl lg:text-3xl transition duration-300 transform leading-6"
            :class="{ 'has-scroll-over': scrollOver }">
            <span class="summary text-sm lg:text-base uppercase inline-block mr-16 -mb-4">(Scope)</span><span
              v-for="(tag, index) in tags" :key="index" class="inline-block serif font-light">
              {{ tag
              }}<template v-if="Object.keys(tags).length > 1">
                <span v-if="index != Object.keys(tags).length - 1" class="sep">+</span>
              </template>
            </span>
          </p>
        </div>
        <div v-if="image.url !== undefined" id="header-image-wrapper"
          class="z-0 relative mx-4 overflow-hidden rounded-lg">
          <nuxt-img v-if="image.url" id="header-image" format="webp" :src="image.url"
            sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw" :width="image.dimensions.width"
            :height="image.dimensions.height" class="w-full" loading="lazy" />
        </div>
        <div class="description-section section my-24 px-4 lg:px-40">
          <p class="description-wrapper">
            <span class="summary text-sm lg:text-base uppercase inline-block mr-16 mb-2 align-top">({{
                $prismic.asText(summary)
            }})</span><span v-for="(paragraph, index) in description" :key="index"
              class="description font-light serif text-xl lg:text-3xl">{{ paragraph.text }}<br /></span>
          </p>
        </div>
        <div v-if="projectLink" class="project-link section my-24 px-4 lg:px-40">
          <p class="description-wrapper mt-6">
            <span class="summary text-sm lg:text-base uppercase inline-block mr-16 mb-2 align-top">(Live)</span><a
              :href="projectLink" target="_blank" class="live-link uppercase font-light text-2xl lg:text-3xl">Visit
              Website
              <span class="live-link-arrow inline-block">↗</span></a>
          </p>
        </div>
        <hr class="h-px w-full opacity-20" />
        <div id="header-separator" class="uppercase mt-4 mb-24 mx-4 pb-4 relative grid-cols-6 gap-x-4 grid">
          <div class="col-span-4 lg:col-span-2">
            <span>{{ $prismic.asText(client) }}</span>
          </div>
          <div class="col-span-2 lg:col-span-1 text-right">
            <span>{{ date.substring(0, 4) }}</span>
          </div>
          <div class="col-span-6 lg:col-span-3 text-left lg:text-right">
            <span v-for="(tag, index) in tags" :key="index">{{ tag
            }}<template v-if="Object.keys(tags).length > 1"><span v-if="index != Object.keys(tags).length - 1"
                  class="sep">+</span></template></span>
          </div>
        </div>
      </div>
    </section>

    <section class="content">
      <slice-zone type="project" :uid="$route.params.uid" />
    </section>

    <section id="more-projects" class="mt-40 overflow-hidden">
      <hr class="h-px w-full opacity-20 mb-10 lg:mb-20" />
      <div class="more-projects-container">
        <p class="next-project-label text-sm lg:text-lg uppercase z-0 m-4 px-2 text-center">
          Next Project
        </p>
        <div id="next-header-text"
          class="w-full flex justify-center px-4 lg:px-40 py-4 lg:py-12 text-center z-10 relative">
          <h3 id="next-header-title" class="tracking-tight leading-none text-5xl lg:text-8xl uppercase z-0">
            <span v-for="(word, index) in nextProjectTitleWords" :key="index"
              class="next-title-words inline-block overflow-hidden align-top"><span
                v-for="(letter, index2) in Array.from(word)" :key="index2" class="inline-block">{{ letter
                }}</span></span>
          </h3>
        </div>

        <nuxt-link v-if="nextProject !== undefined" id="next-project-section" :to="$prismic.linkResolver(nextProject)"
          class="next-project-section project-panel pb-4 mx-4 lg:mx-40 block transition duration-700">
          <div class="w-auto relative">
            <div v-if="nextProjectImage.url !== undefined" id="next-header-image-wrapper"
              class="z-0 overflow-hidden w-full rounded-lg h-full">
              <div id="next-project-bg" class="h-full w-full pointer-events-none opacity-30 z-10"></div>
              <nuxt-img v-if="nextProjectImage.url" id="next-header-image" format="webp" :src="nextProjectImage.url"
                sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw" :width="nextProjectImage.dimensions.width"
                :height="nextProjectImage.dimensions.height"
                class="w-full h-full object-cover z-0 pointer-events-none transform transition duration-700"
                loading="lazy" />
            </div>
          </div>
        </nuxt-link>
      </div>
    </section>
  </main>
</template>

<script>
import { directive } from 'vue-awesome-swiper'
import SliceZone from 'vue-slicezone'
import gsap from 'gsap'
export default {
  name: 'Project',
  directives: {
    swiper: directive,
  },
  components: {
    SliceZone,
  },
  async asyncData({ $prismic, params, error }) {
    try {
      // Query post
      const project = await $prismic.api.getByUID('project', params.uid)
      const relatedProjects = await $prismic.api.query(
        [
          $prismic.predicates.similar(project.id, 10),
          $prismic.predicates.at('document.type', 'project'),
        ],
        { pageSize: 3 }
      )
      const NextProject =
        (
          await $prismic.api.query(
            $prismic.predicates.at('document.type', 'project'),
            {
              pageSize: 1,
              after: `${project.id}`,
              orderings: '[my.project.date desc]',
            }
          )
        ).results[0] ||
        (
          await $prismic.api.query(
            $prismic.predicates.at('document.type', 'project'),
            { pageSize: 1, orderings: '[my.project.date desc]' }
          )
        ).results[0]
      const PrevProject =
        (
          await $prismic.api.query(
            $prismic.predicates.at('document.type', 'project'),
            {
              pageSize: 1,
              after: `${project.id}`,
              orderings: '[my.project.date]',
            }
          )
        ).results[0] ||
        (
          await $prismic.api.query(
            $prismic.predicates.at('document.type', 'project'),
            { pageSize: 1, orderings: '[my.project.date]' }
          )
        ).results[0]
      const LatestProjects = (
        await $prismic.api.query(
          $prismic.predicates.at('document.type', 'project'),
          { pageSize: 4, orderings: '[my.project.date]' }
        )
      ).results
      // Returns data to be used in template
      return {
        page: project,
        title: project.data.title,
        titleWords: Array.from($prismic.asText(project.data.title).split(' ')),
        date: project.data.date,
        description: project.data.description,
        summary: project.data.summary,
        client: project.data.client,
        image: project.data.image,
        backgroundColor: project.data.backgroundColor,
        textColor: project.data.textColor,
        tags: project.tags,
        projectLink: project.data.link.url,
        relatedProjects: relatedProjects.results,
        nextProject: NextProject,
        nextProjectTitleWords: Array.from(
          $prismic.asText(NextProject.data.title).split(' ')
        ),
        nextProjectTags: NextProject.tags,
        nextProjectImage: NextProject.data.image,
        nextTextColor: NextProject.data.textColor,
        nextBackgroundColor: NextProject.data.backgroundColor,
        prevProject: PrevProject,
        prevProjectTitleWords: Array.from(
          $prismic.asText(PrevProject.data.title).split(' ')
        ),
        prevProjectTags: PrevProject.tags,
        prevProjectImage: PrevProject.data.image,
        prevTextColor: PrevProject.data.textColor,
        prevBackgroundColor: PrevProject.data.backgroundColor,
        latestProjects: LatestProjects,
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  data() {
    return {
      page: null,
      scrollOver: false,
      swiperOption: {
        slideToClickedSlide: true,
        slidesPerView: 1.2,
        speed: 800,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,
        spaceBetween: 16,
        mousewheel: {
          releaseOnEdges: false,
          sensitivity: 2,
        },
        freeMode: {
          enabled: true,
          sticky: false,
          momentumBounce: false,
        },
      },
    }
  },
  head() {
    return {
      title: this.$prismic.asText(this.page.data.metaTitle),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$prismic.asText(this.page.data.metaDescription),
        },
      ],
    }
  },
  beforeMount() {
    document.documentElement.style.setProperty(
      '--bg',
      this.page.data.backgroundColor
    )
    document.documentElement.style.setProperty(
      '--color-primary',
      this.page.data.textColor
    )
    document.documentElement.style.setProperty(
      '--color',
      this.page.data.textColor
    )
  },
  mounted() {
    this.animations()
    this.headerAnimation()
    window.addEventListener('scroll', this.headerScroll)
    document.documentElement.style.setProperty(
      '--nextbg',
      this.nextBackgroundColor
    )
    document.documentElement.style.setProperty(
      '--nextcolor',
      this.nextTextColor
    )
    document.documentElement.style.setProperty(
      '--prevbg',
      this.prevBackgroundColor
    )
    document.documentElement.style.setProperty(
      '--prevcolor',
      this.prevTextColor
    )
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
  destroyed() {
    window.removeEventListener('scroll', this.headerScroll)
  },
  methods: {
    animations() {
      gsap.set('#header-image-wrapper', {
        marginLeft: '1rem',
        marginRight: '1rem',
        borderRadius: '0.5rem',
      })
      gsap.to('#header-image-wrapper', {
        scrollTrigger: {
          trigger: '#header-image-wrapper',
          start: 'top 500',
          end: 'top top',
          scrub: true,
        },
        borderRadius: 0,
        marginLeft: 0,
        marginRight: 0,
        duration: 1,
      })
      gsap.to('.more-projects-container', {
        scrollTrigger: {
          trigger: '#more-projects',
          start: 'top bottom',
          end: 'top 50%',
          scrub: true,
        },
        marginTop: 0,
        duration: 1,
      })
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
    headerAnimation() {
      gsap.set('.title-words span', {
        scaleY: 0,
        rotate: -22,
        rotateX: 90,
        transformOrigin: '0% 50% -50',
      })
      gsap.set('#header-scope span', { y: 15, opacity: 0 })
      gsap.set('#header-image', { y: 30, opacity: 0 })
      gsap.to('.title-words span', {
        scaleY: 1,
        rotate: 0,
        rotateX: 0,
        opacity: 1,
        stagger: 0.02,
        duration: 1,
        ease: 'power4.easeOut',
      })
      gsap
        .to('#header-image', {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power4.easeOut',
        })
        .delay(1.25)
      gsap
        .to('#header-scope span', {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: 'power4.easeOut',
        })
        .delay(0.5)
    },
  },
}
</script>
<style scoped>
.next-title-words {
  margin: 0 0.125em;
}

.next-project-section {
  margin-top: -2.75em;
  transform: translateY(2.75em);
}

@media (min-width: 1024px) {
  .next-project-section {
    margin-top: -6.55em;
    transform: translateY(6.55em);
  }
}

#next-header-image-wrapper {
  transform: translateZ(0);
}

.next-project-section:hover {
  transform: translateY(0);
}

a.next-project-section:hover img {
  transform: scale(1.02);
}

#next-project-bg {
  background: var(--nextbg);
}

.description:nth-child(n + 3) {
  display: inline-block;
  text-indent: 4em;
}

span.sep {
  padding-right: 0.29em;
  padding-left: 0.29em;
}
</style>
