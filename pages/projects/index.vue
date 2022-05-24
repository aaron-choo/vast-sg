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
            leading-7
            transform
          "
          :class="{ 'has-scroll-over': scrollOver }"
        >
          <span
            class="intro text-sm lg:text-base uppercase inline-block mr-16 dot"
            >{{ $prismic.asText(intro) }}</span
          ><span class="description serif font-light"
            ><span
              v-for="(word, index2) in descriptionWords"
              :key="index2"
              class="description-words inline-block"
              >{{ word }}<span class="body-font">&nbsp;</span>
            </span></span
          >
        </p>
      </div>
    </section>
    <section class="content relative">
      <hr class="h-px w-full opacity-20" />
      <div class="project-grid-container lg:grid mx-4">
        <div
          class="
            py-16
            lg:sticky
            lg:top-0
            lg:h-screen
            lg:flex
            lg:flex-col
            lg:items-end
            lg:w-full
            lg:justify-center
            lg:pr-12
          "
        >
          <ul
            id="filters"
            class="text-sm lg:text-base 2xl:text-lg relative text-right"
            @mouseover="filterOpen = true"
            @mouseleave="filterOpen = false"
            @click="filterOpen = false"
          >
            <li class="tag-dot *"></li>
            <li>
              <button
                class="
                  filter-button
                  selected
                  all
                  uppercase
                  text-right
                  tracking-wide
                "
                data-filter="*"
                @click="filter('*'), (currentFilter = 'filter')"
                @mouseover="filterHover = true"
                @mouseleave="filterHover = false"
              >
                All Projects
              </button>
            </li>
            <li v-for="(tag, index) in allTags" :key="index">
              <button
                :class="'filter-button ' + tag"
                :data-filter="tag"
                class="uppercase text-right tracking-wide"
                @click="
                  filter('.' + tag), (currentFilter = tag.replace('-', ' '))
                "
                @mouseover=";(filterHover = true), (linkHover = true)"
                @mouseleave=";(filterHover = false), (linkHover = false)"
              >
                {{ tag.replace('-', ' ') }}
              </button>
            </li>
          </ul>
        </div>
        <div
          v-if="projects.length > 0"
          class="isotope project-grid pt-12 transition duration-700"
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
              <div
                class="grid-image-container block overflow-hidden rounded-lg"
              >
                <nuxt-img
                  v-if="project.data.image.url"
                  format="webp"
                  :src="project.data.image.url"
                  sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
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
                Let's get to work!<span
                  class="date font-light tracking-normal"
                  >{{ $moment().format('MM/YY') }}</span
                >
              </div>
            </nuxt-link>
          </div>
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
          rotate: '0deg',
        })
        gsap.to(gridItems[i], {
          scrollTrigger: {
            trigger: gridItems[i],
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
          rotate: '-0deg',
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
      const tagDot = document.querySelector('.tag-dot')
      if (tag === currentTag) {
        return
      }
      selectedFilter.classList.remove('selected')
      tagDot.className = 'tag-dot'
      if (tag === '*') {
        document.querySelector('.filter-button.all').classList.add('selected')
        tagDot.classList.add('*')
      } else {
        document.querySelector('.filter-button' + tag).classList.add('selected')
        tagDot.classList.add(tag)
      }
      const projectGrid = document.querySelector('.project-grid')
      document
        .querySelector('.project-grid-container')
        .scrollIntoView({ behavior: 'smooth' })
      projectGrid.style.opacity = '0'
      setTimeout(() => {
        this.iso.arrange({
          filter: tag,
        })
        projectGrid.style.opacity = '1'
        this.$ScrollTrigger.refresh()
      }, '700')
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

span.sep {
  padding-right: 0.1em;
  padding-left: 0.1em;
}

.grid-item {
  width: calc(100% - 32px + 32px);
  margin-bottom: 4rem;
}

.grid-item:hover .grid-image {
  transform: scale(1.02);
}

@media (min-width: 768px) {
  .grid-item {
    margin-bottom: 4rem;
  }
  .item-meta {
    color: var(--project-color);
  }
}

@media (min-width: 1024px) {
  .grid-item {
    margin-bottom: 6rem;
  }
}

.filter-button {
  margin-right: 1.34em;
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

.project-grid-container {
  grid-template-columns: 24rem 1fr 4rem;
}

@media (min-width: 1536px) {
  .project-grid-container {
    grid-template-columns: 26rem 1fr 4rem;
  }
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

#filters {
  --filterheight: 7.05em;
}
@media (min-width: 1024px) {
  #filters {
    --filterheight: 7.5em;
  }
}
@media (min-width: 1536px) {
  #filters {
    --filterheight: 7.75em;
  }
}
.tag-dot {
  background-color: currentColor;
  position: absolute;
  right: 0;
  top: 0.45em;
  width: 0.68em;
  height: 0.68em;
  border-radius: 50%;
  line-height: 1;
  transition: 0.3s ease;
}

.tag-dot.\.architectural-visualization {
  transform: translateY(calc(var(--filterheight) / 5));
}

.tag-dot.\.branding {
  transform: translateY(calc(var(--filterheight) / 5 * 2));
}

.tag-dot.\.interior-design {
  transform: translateY(calc(var(--filterheight) / 5 * 3));
}

.tag-dot.\.product {
  transform: translateY(calc(var(--filterheight) / 5 * 4));
}

.tag-dot.\.website {
  transform: translateY(var(--filterheight));
}
</style>
