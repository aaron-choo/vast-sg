<template>
  <main>
    <section class="project-header">
      <div class="project-header-banner">
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
            md:sticky md:top-0
          "
        >
          <h1
            id="header-title"
            class="tracking-tight leading-none text-5xl lg:text-8xl uppercase"
          >
            <span
              v-for="(word, index) in titleWords"
              :key="index"
              class="title-words inline-block align-top"
              ><span
                v-for="(letter, index2) in Array.from(word)"
                :key="index2"
                class="inline-block"
                >{{ letter }}</span
              >&nbsp;</span
            >
          </h1>
          <p
            id="header-scope"
            class="
              inline-block
              tag
              capitalize
              text-2xl
              lg:text-3xl
              transition
              duration-300
              transform
              leading-6
            "
            :class="{ 'has-scroll-over': scrollOver }"
          >
            <span
              class="
                summary
                text-sm
                lg:text-base
                uppercase
                inline-block
                mr-16
                -mb-4
                dot
              "
              >Scope</span
            ><span
              v-for="(tag, index) in tags"
              :key="index"
              class="inline-block serif font-light"
            >
              {{ tag
              }}<template v-if="Object.keys(tags).length > 1">
                <span v-if="index != Object.keys(tags).length - 1" class="sep"
                  >,</span
                >
              </template>
            </span>
          </p>
        </div>
        <div
          v-if="image.url !== undefined"
          class="
            header-media-container
            z-0
            relative
            overflow-hidden
            mx-4
            lg:mx-8
            rounded-lg
          "
        >
          <div class="header-media-wrapper">
            <nuxt-img
              v-if="image.url"
              id="header-image"
              format="webp"
              :src="image.url"
              sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
              :width="image.dimensions.width"
              :height="image.dimensions.height"
              class="w-full"
            />
            <video
              v-if="video.url"
              id="header-video"
              :poster="image.url"
              class="absolute top-0 w-full"
              autoplay
              muted
              loop
              playsinline
            >
              <source :src="video.url" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div class="project-header-info">
        <div class="description-section section my-24 px-4 lg:px-8">
          <p class="description-wrapper">
            <span
              class="
                summary
                text-sm
                lg:text-base
                uppercase
                inline-block
                mr-16
                mb-2
                align-top
                relative
                dot
              "
              >{{ $prismic.asText(summary) }}</span
            ><span
              v-for="(paragraph, index) in description"
              :key="index"
              class="description font-light serif text-xl lg:text-3xl"
              >{{ paragraph.text }}<br
            /></span>
          </p>
        </div>
        <div v-if="projectLink" class="project-link section my-24 px-4 lg:px-8">
          <p class="description-wrapper mt-6">
            <span
              class="
                summary
                text-sm
                lg:text-base
                uppercase
                inline-block
                mr-16
                mb-2
                align-top
                relative
                dot
              "
              >Live</span
            ><a
              :href="projectLink"
              target="_blank"
              class="live-link uppercase font-light text-2xl lg:text-3xl"
              >Visit Website
              <span class="live-link-arrow inline-block">↗</span></a
            >
          </p>
        </div>
        <hr class="h-px w-full opacity-20" />
        <div
          id="header-separator"
          class="
            uppercase
            mt-4
            mb-24
            mx-4
            lg:mx-8
            pb-4
            relative
            grid-cols-6
            gap-x-4
            grid
          "
        >
          <div class="col-span-4 lg:col-span-2">
            <span>{{ $prismic.asText(client) }}</span>
          </div>
          <div class="col-span-2 lg:col-span-1 text-right">
            <span>{{ date.substring(0, 4) }}</span>
          </div>
          <div class="col-span-6 lg:col-span-3 text-left lg:text-right">
            <ul class="scope-list flex-col flex items-end">
              <li v-for="(tag, index) in tags" :key="index">
                {{ tag }}
                <!-- <template v-if="Object.keys(tags).length > 1"
                ><span v-if="index != Object.keys(tags).length - 1" class="sep"
                  >,</span
                ></template
              > -->
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="content">
      <slice-zone type="project" :uid="$route.params.uid" />
    </section>

    <section id="more-projects" class="mt-40 px-4 lg:px-8 overflow-hidden">
      <div class="more-projects-container">
        <p
          class="
            next-project-label
            text-sm
            lg:text-lg
            uppercase
            z-0
            m-4
            lg:my-12
            px-2
            text-center
            dot
          "
        >
          Next Project
        </p>
        <div
          id="next-header-text"
          class="
            flex
            justify-center
            lg:mx-24 lg:my-12
            text-center
            z-10
            relative
          "
        >
          <h3
            id="next-header-title"
            class="
              tracking-tight
              leading-none
              text-5xl
              lg:text-8xl
              uppercase
              z-0
            "
          >
            <span
              v-for="(word, index) in nextProjectTitleWords"
              :key="index"
              class="next-title-words inline-block align-top"
              ><span
                v-for="(letter, index2) in Array.from(word)"
                :key="index2"
                class="inline-block"
                >{{ letter }}</span
              ></span
            >
          </h3>
        </div>

        <nuxt-link
          v-if="nextProject !== undefined"
          id="next-project-section"
          :to="$prismic.linkResolver(nextProject)"
          class="block cursor-view transition duration-700 transform"
          :class="{
            'opacity-0 translate-y-1/4': !showNextProject,
            'opacity-100 translate-y-0': showNextProject,
          }"
        >
          <div
            v-if="nextProjectImage.url !== undefined"
            id="next-header-media-container"
            class="z-0 overflow-hidden w-full rounded-lg h-full"
          >
            <nuxt-img
              v-if="nextProjectImage.url"
              id="next-header-image"
              format="webp"
              :src="nextProjectImage.url"
              sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
              :width="nextProjectImage.dimensions.width"
              :height="nextProjectImage.dimensions.height"
              class="
                w-full
                h-full
                object-cover
                z-0
                pointer-events-none
                transform
                transition
                duration-1000
              "
              loading="lazy"
            />
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
        video: project.data.video,
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
      showNextProject: false,
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
      title: this.$prismic.asText(this.page.data.title) + ' — VAST',
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
    const gsap = this.$gsap
    const ExpoScaleEase = this.$ExpoScaleEase
    const ScrollToPlugin = this.$ScrollToPlugin
    const ScrollTrigger = this.$ScrollTrigger
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, ExpoScaleEase)
    this.animations()
    this.headerAnimation()
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
    window.addEventListener('scroll', this.changeColors)
    this.$ScrollTrigger.refresh()
  },
  updated() {
    this.$ScrollTrigger.refresh()
  },
  destroyed() {
    window.removeEventListener('scroll', this.changeColors)
  },
  methods: {
    animations() {
      gsap.set('.header-media-wrapper', {
        y: '-10%',
        scale: 1.2,
      })
      gsap.to('.header-media-wrapper', {
        scrollTrigger: {
          trigger: '.header-media-container',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
        y: '10%',
      })
    },
    headerAnimation() {
      gsap.set('.title-words span', {
        scaleY: 0,
        rotate: -18,
        transformOrigin: '50% 0%',
      })
      gsap.set('#header-scope span', { y: 15, opacity: 0 })
      gsap.set('.header-media-container', { y: 30, opacity: 0 })
      gsap.to('.title-words span', {
        scaleY: 1,
        rotate: 0,
        stagger: 0.05,
        duration: 1,
        ease: 'Power4.easeOut',
      })
      gsap
        .to('.header-media-container', {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'Power4.easeOut',
        })
        .delay(1.25)
      gsap
        .to('#header-scope span', {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: 'Power4.easeOut',
        })
        .delay(0.5)
    },
    changeColors() {
      const nextProjectSection = document.querySelector('#more-projects')
      const scrollFromTop = window.pageYOffset
      if (
        scrollFromTop + window.innerHeight / 2 >=
        nextProjectSection.offsetTop
      ) {
        document.body.style.background = 'var(--nextbg)'
        document.body.style.color = 'var(--nextcolor)'
        this.showNextProject = true
      } else {
        document.body.style.background = 'var(--bg)'
        document.body.style.color = 'var(--color)'
        this.showNextProject = false
      }
    },
  },
}
</script>
<style scoped>
.next-title-words {
  margin: 0 0.125em;
}

#next-header-media-container {
  transform: scaleZ(0);
}

.macos #next-project-section {
  margin-top: -1.55em;
}

.windows #next-project-section {
  margin-top: -2.35em;
}

@media (min-width: 1024px) {
  .macos #next-project-section {
    margin-top: -6.2em;
  }

  .windows #next-project-section {
    margin-top: -5.65em;
  }
}

a#next-project-section:hover img {
  transform: scale(1.02);
}

#next-header-image {
  min-height: 65vh;
}

.description:nth-child(n + 3) {
  display: inline-block;
  text-indent: 4em;
}

span.sep {
  padding-right: 0.29em;
}
</style>
