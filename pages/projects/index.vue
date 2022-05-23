<template>
  <main>
    <section class="projects-header z-0 overflow-hidden">
      <div
        id="header-text"
        class="w-full flex flex-col justify-center p-4 py-52 pt-60 relative"
      >
        <h1
          id="header-title"
          class="
            tracking-tight
            leading-none
            text-5xl
            lg:text-8xl
            uppercase
            mb-4
          "
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
            ><span
              class="
                inline-block
                text-base
                align-top
                tracking-wider
                relative
                ml-2
              "
              >{{ projects.length }}</span
            ></span
          >
        </h1>
        <p
          id="header-description"
          class="
            inline-block
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
            class="intro text-sm lg:text-base uppercase inline-block mr-16 dot"
            >{{ $prismic.asText(intro) }}</span
          ><span class="description serif font-light leading-7"
            ><span
              v-for="(word, index2) in descriptionWords"
              :key="index2"
              class="description-words inline-block"
              >{{ word }}&nbsp;</span
            ></span
          >
        </p>
      </div>
    </section>
    <section class="content relative">
      <hr class="h-px w-full opacity-20" />
      <div :class="allTags" class="m-4 mt-5">
        <ul
          id="filters"
          @mouseover="filterOpen = true"
          @mouseleave="filterOpen = false"
          @click="filterOpen = false"
        >
          <li class="inline-block mb-2 mr-1">
            <div class="filter-btn rounded-full text-center overflow-hidden">
              <button
                class="
                  filter-button
                  selected
                  all
                  btn-txt-wrap
                  h-auto
                  rounded-full
                  overflow-visible
                  transition
                  duration-300
                  relative
                "
                data-filter="*"
                @click="filter('*'), (currentFilter = 'filter')"
                @mouseover="filterHover = true"
                @mouseleave="filterHover = false"
              >
                <div
                  class="
                    btn-txt
                    transition
                    duration-300
                    px-2
                    md:px-3
                    lg:px-4
                    h-auto
                    flex
                    justify-center
                    items-center
                    relative
                    text-xl
                    lg:text-2xl
                    uppercase
                    tracking-tight
                  "
                >
                  All Projects
                </div>
              </button>
            </div>
          </li>
          <li
            v-for="(tag, index) in allTags"
            :key="index"
            class="inline-block mr-2 mb-2"
          >
            <div class="filter-btn rounded-full text-center overflow-hidden">
              <button
                :class="'filter-button ' + tag"
                :data-filter="tag"
                class="
                  btn-txt-wrap
                  h-auto
                  rounded-full
                  overflow-visible
                  transition
                  duration-300
                  relative
                "
                @click="
                  filter('.' + tag), (currentFilter = tag.replace('-', ' '))
                "
                @mouseover=";(filterHover = true), (linkHover = true)"
                @mouseleave=";(filterHover = false), (linkHover = false)"
              >
                <div
                  class="
                    btn-txt
                    transition
                    duration-300
                    px-2
                    md:px-3
                    lg:px-4
                    h-auto
                    flex
                    justify-center
                    items-center
                    relative
                    text-xl
                    lg:text-2xl
                    uppercase
                    tracking-tight
                  "
                >
                  {{ tag.replace('-', ' ') }}
                </div>
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div
        v-if="projects.length > 0"
        class="isotope project-grid px-4 pt-12 transition duration-500"
      >
        <div
          v-for="project in projects"
          :key="project.id"
          :class="
            project.tags.map(function (item, index) {
              return item.replace(' ', '-')
            })
          "
          class="grid-item project-link relative"
          :style="
            '--project-color:' +
            project.data.textColor +
            '; --project-bg-color:' +
            project.data.backgroundColor
          "
        >
          <nuxt-link :to="LinkGetter(project)">
            <div
              class="
                item-overlay
                hidden
                absolute
                top-0
                left-0
                right-0
                bottom-0
                md:block
                z-10
                transition
                duration-300
                rounded-lg
                opacity-0
                pointer-events-none
              "
            ></div>
            <p
              class="
                item-meta item-meta-tag
                text-sm
                lg:text-base
                2xl:text-lg
                uppercase
                inline-block
                mr-16
                mb-1
                md:opacity-0 md:absolute md:top-4 md:left-4 md:right-4
                z-10
                transition
                duration-300
                pointer-events-none
                relative
                dot
              "
            >
              <span
                v-for="(tag, index) in project.tags"
                :key="tag"
                class="inline-block"
                >{{ tag
                }}<template v-if="Object.keys(project.tags).length > 1"
                  ><span
                    v-if="index != Object.keys(project.tags).length - 1"
                    class="sep"
                    >,&nbsp;
                  </span></template
                ></span
              >
            </p>
            <div class="grid-image-container block overflow-hidden rounded-lg">
              <nuxt-img
                v-if="project.data.image.url"
                format="webp"
                :src="project.data.image.url"
                sizes="sm:100vw md:100vw lg:100vw xl:50vw 2xl:50vw"
                :width="project.data.image.dimensions.width"
                :height="project.data.image.dimensions.height"
                class="grid-image w-full h-full"
                loading="lazy"
              />
            </div>
            <div
              class="
                item-meta
                text-2xl
                2xl:text-3xl
                uppercase
                title
                flex
                gap-4
                justify-between
                items-end
                tracking-tight
                mt-1
                md:opacity-0 md:absolute md:left-4 md:bottom-4 md:right-4
                z-10
                transition
                duration-300
                pointer-events-none
              "
            >
              {{ $prismic.asText(project.data.title)
              }}<span class="date font-light tracking-normal">{{
                $moment(project.data.date).format('MM/YY')
              }}</span>
            </div>
          </nuxt-link>
        </div>
        <div :class="allTags" class="grid-item project-link">
          <nuxt-link to="/contact">
            <p
              class="
                item-meta item-meta-tag
                text-sm
                lg:text-base
                2xl:text-lg
                uppercase
                inline-block
                mr-16
                mb-1
                md:opacity-0 md:absolute md:top-4 md:left-4 md:right-4
                z-10
                transition
                duration-300
                pointer-events-none
                relative
                dot
              "
            >
              <span class="inline-block">Have a great idea?</span>
            </p>
            <div class="grid-image-container overflow-hidden rounded-lg">
              <nuxt-img
                v-if="page.contactImage.url"
                format="webp"
                :src="page.contactImage.url"
                sizes="sm:100vw md:100vw lg:100vw xl:50vw 2xl:50vw"
                :width="page.contactImage.dimensions.width"
                :height="page.contactImage.dimensions.height"
                class="grid-image w-full h-full"
                loading="lazy"
              />
            </div>
            <div
              class="
                item-meta
                text-2xl
                2xl:text-3xl
                uppercase
                title
                flex
                gap-4
                justify-between
                items-end
                tracking-tight
                mt-1
                md:opacity-0 md:absolute md:left-4 md:bottom-4 md:right-4
                z-10
                transition
                duration-300
                pointer-events-none
              "
            >
              Let's get to work!<span class="date font-light tracking-normal">{{
                $moment().format('MM/YY')
              }}</span>
            </div>
          </nuxt-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import gsap from 'gsap'
import LinkResolver from '~/plugins/link-resolver.js'
let Isotope
if (process.browser) {
  Isotope = require('isotope-layout')
}
export default {
  name: 'ProjectsPage',
  components: {},
  async asyncData({ $prismic, params, error }) {
    try {
      const pageContent = (await $prismic.api.getSingle('projects_page')).data
      // Query projects
      const projects = await $prismic.api.query(
        $prismic.predicates.at('document.type', 'project'),
        {
          orderings: '[my.project.date desc]',
          pageSize: 9,
        }
      )

      // Returns data to be used in template
      return {
        page: pageContent,
        title: pageContent.title,
        titleWords: Array.from($prismic.asText(pageContent.title).split(' ')),
        descriptionWords: Array.from(
          $prismic.asText(pageContent.description).split(' ')
        ),
        description: pageContent.description,
        intro: pageContent.intro,
        backgroundColor: pageContent.backgroundColor,
        textColor: pageContent.textColor,
        projects: projects.results,
        allTags: [
          'architectural-visualization',
          'branding',
          'interior-design',
          'product',
          'website',
        ],
        currentFilter: 'Filter',
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  data() {
    return {
      page: null,
      filterOpen: false,
      scrollOver: false,
      linkHover: false,
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
    this.gridAnimation()
    this.isotope()
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
    LinkGetter(post) {
      return LinkResolver(post)
    },
    gridAnimation() {
      const gridItems = document.getElementsByClassName('grid-item')
      const gridImages = document.getElementsByClassName('grid-image')
      const gridimagecontainers = document.getElementsByClassName(
        'grid-image-container'
      )
      for (let i = 0; i < gridItems.length; i++) {
        gsap.set(gridItems[i], {
          y: '0%',
        })
        gsap.to(gridItems[i], {
          scrollTrigger: {
            trigger: gridItems[i],
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
          y: '-0%',
        })
        gsap.set(gridImages[i], {
          y: '-20%',
          scale: 1.2,
        })
        gsap.to(gridImages[i], {
          scrollTrigger: {
            trigger: gridimagecontainers[i],
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
          y: '20%',
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
        ease: 'Power4.easeOut',
      })
      gsap
        .to('.content', {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0,
          ease: 'Power4.easeOut',
        })
        .delay(2)
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
    },
    isotope() {
      this.iso = new Isotope('.project-grid', {
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        transitionDuration: 0,
        fitRows: {
          gutter: 16,
        },
        hiddenStyle: {
          opacity: 0,
        },
        visibleStyle: {
          opacity: 1,
        },
      })

      this.iso.layout()
    },
    filter(tag) {
      const selectedFilter = document.querySelector('.filter-button.selected')
      const currentTag = selectedFilter.getAttribute('data-filter')
      if (tag === currentTag) {
        return
      }
      selectedFilter.classList.remove('selected')
      if (tag === '*') {
        document.querySelector('.filter-button.all').classList.add('selected')
      } else {
        document.querySelector('.filter-button' + tag).classList.add('selected')
      }
      const projectGrid = document.querySelector('.project-grid')
      projectGrid.style.opacity = '0'
      setTimeout(() => {
        this.iso.arrange({
          filter: tag,
        })
        projectGrid.style.opacity = '1'
        this.$ScrollTrigger.refresh()
      }, '500')
    },
  },
}
</script>
<style scoped>
main {
  scroll-behavior: smooth;
}

.grid-image-container {
  mask-image: -webkit-radial-gradient(white, black);
  -webkit-mask-image: -webkit-radial-gradient(white, black);
}

.description-words {
  padding-right: 0.29em;
}

span.sep {
  padding-right: 0.1em;
  padding-left: 0.1em;
}

.grid-item {
  width: calc(100% - 32px);
  margin-bottom: 4rem;
}

.grid-item:hover .grid-image {
  transform: scale(1.02);
}

@media (min-width: 768px) {
  .grid-item {
    margin-bottom: 16px;
  }
  .item-meta {
    color: var(--project-color);
  }
}

@media (min-width: 1024px) {
  .grid-item {
    width: calc(50% - 24.5px);
    margin-bottom: 6rem;
  }
}

.filter-btn {
  transform: translateZ(0);
}

.btn-txt-wrap::after,
.btn-txt-wrap::before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 1em;
  transition: transform 0.3s, background 0.3s;
}

.btn-txt-wrap::before {
  background: var(--color);
  opacity: 0.2;
}

.btn-txt-wrap::after {
  z-index: 1;
  transform: scaleY(0);
  transform-origin: bottom;
  background: var(--color);
}

.btn-txt {
  z-index: 2;
  min-width: 1.8em;
}

.filter-btn .btn-txt:hover,
.btn-txt-wrap.selected .btn-txt {
  color: var(--bg);
}

.btn-txt-wrap:hover::after,
.btn-txt-wrap.selected::after {
  transform: scaleY(1);
  transform-origin: top;
}

.item-overlay {
  background: var(--project-bg-color);
}
.grid-item:hover .item-overlay {
  opacity: 0.5;
}

.grid-item:hover .item-meta {
  opacity: 1;
}

@media (max-width: 767px) {
  .grid-item {
    transform: none !important;
  }
}
</style>
