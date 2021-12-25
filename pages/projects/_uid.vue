<template>
  <main>
    <section class="project-header">
      <div class="w-full overflow-hidden">
        <div
          id="header-text"
          class="w-full flex flex-col justify-center p-4 py-52 pt-60 relative"
        >
          <h1
            id="header-title"
            class="tracking-tight leading-none text-5xl lg:text-8xl uppercase"
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
            id="header-scope"
            class="inline-block tag capitalize text-2xl lg:text-3xl transition duration-300 transform leading-6"
            :class="{ 'has-scroll-over': scrollOver }"
          >
            <span
              class="summary text-sm lg:text-base uppercase inline-block mr-16 -mb-4"
              >(Scope)</span
            ><span
              v-for="(tag, index) in tags"
              :key="index"
              class="inline-block serif font-light"
            >
              {{ tag
              }}<template v-if="Object.keys(tags).length > 1">
                <span v-if="index != Object.keys(tags).length - 1" class="sep"
                  >+</span
                >
              </template>
            </span>
          </p>
        </div>
        <div
          v-if="image.url !== undefined"
          id="header-image-wrapper"
          class="z-0 relative mx-4 overflow-hidden rounded-lg"
        >
          <nuxt-img
            v-if="image.url"
            id="header-image"
            format="webp"
            :src="image.url"
            sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
            :width="image.dimensions.width"
            :height="image.dimensions.height"
            class="w-full"
            loading="lazy"
          />
        </div>
        <div class="description-section section my-24 px-4 lg:px-40">
          <p class="description-wrapper">
            <span
              class="summary text-sm lg:text-base uppercase inline-block mr-16 mb-2 align-top"
              >({{ $prismic.asText(summary) }})</span
            ><span
              v-for="(paragraph, index) in description"
              :key="index"
              class="description font-light serif text-xl lg:text-3xl"
              >{{ paragraph.text }}<br
            /></span>
          </p>
        </div>
        <div
          v-if="projectLink"
          class="project-link section my-24 px-4 lg:px-40"
        >
          <p class="description-wrapper mt-6">
            <span
              class="summary text-sm lg:text-base uppercase inline-block mr-16 mb-2 align-top"
              >(Live)</span
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
          class="uppercase mt-4 mb-24 mx-4 pb-4 relative grid-cols-6 gap-x-4 grid"
        >
          <div class="col-span-4 lg:col-span-2">
            <span>{{ $prismic.asText(client) }}</span>
          </div>
          <div class="col-span-2 lg:col-span-1 text-right">
            <span>{{ date.substring(0, 4) }}</span>
          </div>
          <div class="col-span-6 lg:col-span-3 text-left lg:text-right">
            <span v-for="(tag, index) in tags" :key="index"
              >{{ tag
              }}<template v-if="Object.keys(tags).length > 1"
                ><span v-if="index != Object.keys(tags).length - 1" class="sep"
                  >+</span
                ></template
              ></span
            >
          </div>
        </div>
      </div>
    </section>

    <section class="content">
      <slice-zone type="project" :uid="$route.params.uid" />
    </section>

    <section id="more-projects" class="mt-80">
      <div
        class="block relative text-5xl sm:text-8xl font-light p-4 serif text-center"
      >
        That's all folks!
      </div>
      <hr class="h-px w-full opacity-20" />
      <nuxt-link to="/contact/">
        <div class="all-projects relative overflow-hidden">
          <div
            id="contact-link"
            class="contact-link block relative tracking-tighter whitespace-nowrap text-4xl sm:text-6xl font-light p-4 uppercase text-right"
          >
            Let's Chat
          </div>
          <div
            class="marquee absolute top-0 left-0 overflow-hidden w-full h-full pointer-events-none"
          >
            <div
              class="marquee-inner-wrap flex overflow-hidden whitespace-nowrap"
            >
              <div class="marquee-inner" aria-hidden="true">
                <span
                  class="whitespace-nowrap text-4xl md:text-6xl py-4 font-light uppercase text-center flex items-center w-max"
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
                  class="whitespace-nowrap text-4xl md:text-6xl py-4 font-light uppercase text-center flex items-center w-max"
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
      </nuxt-link>
      <hr class="h-px w-full opacity-20" />
      <nuxt-link to="/projects/">
        <div class="all-projects relative overflow-hidden">
          <div
            id="all-projects-link"
            class="all-projects-link block relative tracking-tighter whitespace-nowrap text-4xl sm:text-6xl font-light p-4 uppercase"
          >
            ← All Projects
          </div>
          <div
            class="marquee absolute top-0 left-0 overflow-hidden w-full h-full pointer-events-none"
          >
            <div
              class="marquee-inner-wrap flex overflow-hidden whitespace-nowrap"
            >
              <div class="marquee-inner reverse" aria-hidden="true">
                <span
                  v-for="(project, index) in latestProjects"
                  :key="index"
                  class="whitespace-nowrap text-4xl md:text-6xl py-4 font-light uppercase text-center flex"
                  >{{ $prismic.asText(project.data.title)
                  }}<span class="spinner relative mx-4">✺</span></span
                >
              </div>
              <div class="marquee-inner reverse" aria-hidden="true">
                <span
                  v-for="(project, index) in latestProjects"
                  :key="index"
                  class="whitespace-nowrap text-4xl md:text-6xl py-4 font-light uppercase text-center flex"
                  >{{ $prismic.asText(project.data.title)
                  }}<span class="spinner relative mx-4">✺</span></span
                >
              </div>
            </div>
          </div>
        </div>
      </nuxt-link>
      <hr class="h-px w-full opacity-20" />
      <div class="next-prev-projects flex">
              <nuxt-link
                v-if="nextProject !== undefined"
                id="next-project-section"
                :to="$prismic.linkResolver(nextProject)"
                class="next-project-section project-panel p-4 block w-1/2"
              >
                <div class="w-auto relative">
                  <div
                    v-if="nextProjectImage.url !== undefined"
                    id="next-header-image-wrapper"
                    class="z-0 absolute overflow-hidden w-full rounded-lg h-full"
                  >
                    <div
                      id="next-project-bg"
                      class="absolute h-full w-full pointer-events-none opacity-70 z-10"
                    ></div>
                    <nuxt-img
                      v-if="nextProjectImage.url"
                      id="next-header-image"
                      format="webp"
                      :src="nextProjectImage.url"
                      sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
                      :width="nextProjectImage.dimensions.width"
                      :height="nextProjectImage.dimensions.height"
                      class="w-full h-full object-cover z-0 pointer-events-none"
                      loading="lazy"
                    />
                  </div>
                  <p
                    class="next-project-label text-sm lg:text-base uppercase z-0 absolute top-0 left-0 m-4 px-2 rounded-2xl tracking-tight font-medium"
                  >
                    Up next
                  </p>
                  <div
                    id="next-header-text"
                    class="w-full flex flex-col justify-center p-4 py-12 z-0"
                  >
                    <h3
                      id="next-header-title"
                      class="tracking-tight leading-none text-5xl lg:text-8xl uppercase z-0"
                    >
                      <span
                        v-for="(word, index) in nextProjectTitleWords"
                        :key="index"
                        class="next-title-words inline-block overflow-hidden"
                        ><span
                          v-for="(letter, index2) in Array.from(word)"
                          :key="index2"
                          class="inline-block"
                          >{{ letter }}</span
                        >&nbsp;</span
                      >
                    </h3>
                    <p
                      id="next-header-scope"
                      class="inline-block tag capitalize text-2xl lg:text-3xl leading-6 z-0"
                    >
                      <span
                        class="summary text-sm lg:text-base uppercase inline-block mr-16 -mb-4"
                        >(Scope)</span
                      ><span
                        v-for="(tag, index) in nextProjectTags"
                        :key="index"
                        class="inline-block serif font-light"
                        >{{ tag
                        }}<template
                          v-if="Object.keys(nextProjectTags).length > 1"
                        >
                          <span
                            v-if="
                              index != Object.keys(nextProjectTags).length - 1
                            "
                            class="sep"
                            >+</span
                          >
                        </template>
                      </span>
                    </p>
                  </div>
                </div>
              </nuxt-link>
              <nuxt-link
                v-if="prevProject !== undefined"
                id="prev-project-section"
                :to="$prismic.linkResolver(prevProject)"
                class="prev-project-section project-panel p-4 block w-1/2"
              >
                <div class="w-auto relative">
                  <div
                    v-if="prevProjectImage.url !== undefined"
                    id="prev-header-image-wrapper"
                    class="z-0 absolute overflow-hidden w-full rounded-lg h-full"
                  >
                    <div
                      id="prev-project-bg"
                      class="absolute h-full w-full pointer-events-none opacity-70 z-10"
                    ></div>
                    <nuxt-img
                      v-if="prevProjectImage.url"
                      id="next-header-image"
                      format="webp"
                      :src="prevProjectImage.url"
                      sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
                      :width="prevProjectImage.dimensions.width"
                      :height="prevProjectImage.dimensions.height"
                      class="w-full h-full object-cover z-0  pointer-events-none"
                      loading="lazy"
                    />
                  </div>
                  <p
                    class="prev-project-label text-sm lg:text-base uppercase z-0 absolute top-0 left-0 m-4 px-2 rounded-2xl tracking-tight font-medium"
                  >
                    Previously on
                  </p>
                  <div
                    id="prev-header-text"
                    class="w-full flex flex-col justify-center p-4 py-12 z-10"
                  >
                    <h3
                      id="prev-header-title"
                      class="tracking-tight leading-none text-5xl lg:text-8xl uppercase z-0"
                    >
                      <span
                        v-for="(word, index) in prevProjectTitleWords"
                        :key="index"
                        class="prev-title-words inline-block overflow-hidden"
                        ><span
                          v-for="(letter, index2) in Array.from(word)"
                          :key="index2"
                          class="inline-block"
                          >{{ letter }}</span
                        >&nbsp;</span
                      >
                    </h3>
                    <p
                      id="prev-header-scope"
                      class="inline-block tag capitalize text-2xl lg:text-3xl leading-6 z-0"
                    >
                      <span
                        class="summary text-sm lg:text-base uppercase inline-block mr-16 -mb-4"
                        >(Scope)</span
                      ><span
                        v-for="(tag, index) in prevProjectTags"
                        :key="index"
                        class="inline-block serif font-light"
                        >{{ tag
                        }}<template
                          v-if="Object.keys(prevProjectTags).length > 1"
                        >
                          <span
                            v-if="
                              index != Object.keys(prevProjectTags).length - 1
                            "
                            class="sep"
                            >+</span
                          >
                        </template>
                      </span>
                    </p>
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
    window.addEventListener('scroll', this.scrollAnimations)
    window.addEventListener('scroll', this.onScroll)
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
    this.animations()
    this.loadAnimations()
  },
  updated() {
    this.$ScrollTrigger.refresh()
  },
  destroyed() {
    document.documentElement.style.setProperty('--bg', '')
    document.documentElement.style.setProperty('--color-primary', '')
    document.documentElement.style.setProperty('--color', '')
    document.documentElement.style.setProperty('--nextbg', '')
    document.documentElement.style.setProperty('--nextcolor', '')
    document.documentElement.style.setProperty('--prevbg', '')
    document.documentElement.style.setProperty('--prevcolor', '')
    window.removeEventListener('scroll', this.scrollAnimations)
    window.removeEventListener('scroll', this.onScroll)
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
      const sections = gsap.utils.toArray(".project-panel");
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".next-prev-projects",
          pin: true,
          scrub: 1,
          // snap: 1 / (sections.length - 1),
          // base vertical scrolling on how wide the container is so it feels more natural.
          end: "+=800",
        }
      });
    },
    scrollAnimations() {
      const screenHeight = window.innerHeight
      if (document.documentElement.scrollTop < screenHeight) {
        gsap.to('.title-words span', {
          translateY: document.documentElement.scrollTop/4,
          stagger: 0.025,
          duration: 1,
          ease: 'power4.easeOut',
        })
      }
    },
    loadAnimations() {
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
          duration: .5,
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
    },
  },
}
</script>
<style scoped>
#next-header-text,
#prev-header-text {
  min-height: calc(100vh - 2em);
}
a.next-project-section img,
a.prev-project-section img {
  transition: 1s ease;
}
a.next-project-section:hover img,
a.prev-project-section:hover img {
  transform: scale(1);
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

.all-projects:hover .marquee,
.all-projects:hover .marquee-inner-wrap {
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

span.spinner {
  bottom: 0.04em;
  animation: rotate 5s linear infinite;
}

@keyframes marquee {
  100% {
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

.description:nth-child(n + 3) {
  display: inline-block;
  text-indent: 4em;
}

span.sep {
  padding-right: 0.29em;
  padding-left: 0.29em;
}
#next-project-section,
#next-header-text {
  color: var(--nextcolor);
}
#next-project-bg {
  background: var(--nextbg);
}
#prev-project-section,
#prev-header-text {
  color: var(--prevcolor);
}
#prev-project-bg {
  background: var(--prevbg);
}
.next-project-label {
  background: var(--nextcolor);
  color: var(--nextbg);
}
.prev-project-label {
  background: var(--prevcolor);
  color: var(--prevbg);
}
.dark-mode #next-project-bg {
  background-color: var(--bg) !important;
}
.next-prev-projects{
    width: 200%;
}
</style>
