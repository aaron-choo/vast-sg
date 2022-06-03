<template>
  <main>
    <section class="projects-header">
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
            class="title-words inline-block"
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
          class="inline-block text-2xl lg:text-3xl leading-7 transform"
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
      <div class="project-grid-container lg:grid mx-4 lg:mx-8">
        <div
          class="
            filter-container
            pt-16
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
            class="
              relative
              flex flex-col
              gap-2
              leading-none
              text-sm
              lg:text-base lg:text-right lg:leading-none
              2xl:text-lg 2xl:leading-none
              heading-font
            "
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
                  lg:text-right
                  transition
                  duration-300
                  cursor-filter
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
                class="
                  cursor-filter
                  uppercase
                  lg:text-right
                  transition
                  duration-300
                "
                @click="
                  filter('.' + tag), (currentFilter = tag.replace('-', ' '))
                "
                @mouseover=";(filterHover = true), (linkHover = true)"
                @mouseleave=";(filterHover = false), (linkHover = false)"
              >
                {{ tag.replace('-', ' ') }}
              </button>
            </li>

            <li
              class="
                view-mode
                absolute
                bottom-0
                right-0
                lg:relative
                flex
                justify-end
                mt-4
                gap-3
                mr-6
                lg:mr-8
              "
            >
              <button class="list-view-button" @mousedown="activateListView()">
                <span
                  class="block w-5 relative overflow-hidden rounded-sm"
                  style="padding-top: 75%"
                >
                  <span
                    class="
                      absolute
                      top-0
                      left-0
                      w-full
                      h-full
                      flex flex-col
                      justify-between
                    "
                  >
                    <span class="color-fill h-1/4"></span>
                    <span class="color-fill h-1/4"></span>
                    <span class="color-fill h-1/4"></span>
                  </span>
                </span>
              </button>
              <button
                class="grid-view-button active"
                @mousedown="activateGridView()"
              >
                <span
                  class="block w-5 color-fill relative rounded-sm"
                  style="padding-top: 75%"
                >
                </span>
              </button>
            </li>
          </ul>
        </div>
        <div
          v-if="projects.length > 0"
          class="isotope project-grid transition duration-700"
          :class="{
            'pt-10 list-view': listView,
            'pt-16 grid-view': !listView,
          }"
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
            <nuxt-link
              :to="LinkGetter(project)"
              class="item-container m-auto cursor-view"
            >
              <p
                class="
                  item-meta item-meta-tag
                  text-sm
                  leading-tight
                  lg:text-base lg:leading-tight
                  2xl:text-lg 2xl:leading-tight
                  uppercase
                  inline-block
                  z-20
                  transition
                  duration-300
                  pointer-events-none
                  relative
                  dot
                  mb-2
                "
                :class="{
                  'md:opacity-100 md:relative md:top-0 md:left-0 md:right-0 mt-6':
                    listView,
                  'md:opacity-0 md:absolute md:top-4 md:left-4 md:right-4':
                    !listView,
                }"
              >
                <span>
                  {{ $prismic.asText(project.data.summary) }}
                </span>
                <!-- <span
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
                > -->
              </p>
              <div
                class="grid-media-container overflow-hidden rounded-lg block"
                :class="
                  ({ ' relative': !listView },
                  { 'hidden pointer-events-none': listView })
                "
              >
                <div
                  class="
                    item-overlay
                    hidden
                    absolute
                    top-0
                    left-0
                    right-0
                    bottom-0
                    md:block md:z-20
                    transition-opacity
                    duration-300
                    opacity-0
                    pointer-events-none
                  "
                ></div>
                <div class="grid-media-wrapper">
                  <nuxt-img
                    v-if="project.data.image.url"
                    format="webp"
                    :src="project.data.image.url"
                    sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
                    :width="project.data.image.dimensions.width"
                    :height="project.data.image.dimensions.height"
                    class="
                      grid-image
                      w-full
                      h-full
                      relative
                      transition-transform
                      duration-1000
                    "
                    loading="lazy"
                  />

                  <video
                    v-if="project.data.video.url"
                    :poster="project.data.image.url"
                    class="
                      grid-video
                      absolute
                      top-0
                      w-full
                      transition-transform
                      duration-1000
                    "
                    autoplay
                    muted
                    loop
                    playsinline
                  >
                    <source :src="project.data.video.url" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div
                class="
                  item-meta
                  text-2xl
                  leading-none
                  lg:text-3xl lg:leading-none
                  xl:text-4xl xl:leading-none
                  3xl:text-5xl 3xl:leading-none
                  uppercase
                  title
                  flex
                  gap-4
                  justify-between
                  items-start
                  tracking-tight
                  z-30
                  transition
                  duration-300
                  pointer-events-none
                  heading-font
                "
                :class="{
                  'md:opacity-100 md:relative md:bottom-0 md:left-0 md:right-0 mb-6':
                    listView,
                  'mt-2 md:opacity-0 md:absolute md:bottom-4 md:left-4 md:right-4':
                    !listView,
                }"
              >
                {{ $prismic.asText(project.data.title)
                }}<span class="date font-light tracking-normal">{{
                  $moment(project.data.date).format('MM/YY')
                }}</span>
              </div>
            </nuxt-link>
            <div
              class="list-separator"
              :class="{
                'block h-px w-full opacity-25': listView,
                'hidden pointer-events-none': !listView,
              }"
            ></div>
          </div>
          <div
            :class="allTags"
            class="grid-item project-link relative"
            style="--project-color: white; --project-bg-color: black"
          >
            <nuxt-link to="/contact">
              <p
                class="
                  item-meta item-meta-tag
                  text-sm
                  leading-tight
                  lg:text-base lg:leading-tight
                  2xl:text-lg 2xl:leading-tight
                  uppercase
                  inline-block
                  z-20
                  transition
                  duration-300
                  pointer-events-none
                  relative
                  dot
                  mb-2
                "
                :class="{
                  'md:opacity-100 md:relative md:top-0 md:left-0 md:right-0 mt-6':
                    listView,
                  'md:opacity-0 md:absolute md:top-4 md:left-4 md:right-4':
                    !listView,
                }"
              >
                <span class="inline-block">Have a great idea?</span>
              </p>
              <div
                class="grid-media-container block overflow-hidden rounded-lg"
                :class="
                  ({ ' relative': !listView },
                  { 'hidden pointer-events-none': listView })
                "
              >
                <div
                  class="
                    item-overlay
                    hidden
                    absolute
                    top-0
                    left-0
                    right-0
                    bottom-0
                    md:block md:z-20
                    transition-opacity
                    duration-300
                    opacity-0
                    pointer-events-none
                  "
                ></div>
                <div class="grid-media-wrapper">
                  <nuxt-img
                    v-if="page.contactImage.url"
                    format="webp"
                    :src="page.contactImage.url"
                    sizes="sm:100vw md:100vw lg:100vw xl:50vw 2xl:50vw"
                    :width="page.contactImage.dimensions.width"
                    :height="page.contactImage.dimensions.height"
                    class="
                      grid-image
                      w-full
                      h-full
                      relative
                      transition-transform
                      duration-1000
                    "
                    loading="lazy"
                  />
                </div>
              </div>
              <div
                class="
                  item-meta
                  text-2xl
                  leading-none
                  lg:text-3xl lg:leading-none
                  xl:text-4xl xl:leading-none
                  3xl:text-5xl 3xl:leading-none
                  uppercase
                  title
                  flex
                  gap-4
                  justify-between
                  items-start
                  tracking-tight
                  z-30
                  transition
                  duration-300
                  pointer-events-none
                  heading-font
                "
                :class="{
                  'md:opacity-100 md:relative md:bottom-0 md:left-0 md:right-0 mb-6':
                    listView,
                  'mt-2 md:opacity-0 md:absolute md:bottom-4 md:left-4 md:right-4':
                    !listView,
                }"
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
          pageSize: 14,
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
          'archviz',
          'art-direction',
          'brand-identity',
          'brand-strategy',
          'illustration',
          'interior-design',
          'motion-graphics',
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
      linkHover: false,
      listView: false,
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
    rootVariable(a, b) {
      document.documentElement.style.setProperty(a, b)
    },
    gridAnimation() {
      const gridItems = document.getElementsByClassName('grid-item')
      const gridMediaWrappers =
        document.getElementsByClassName('grid-media-wrapper')
      const gridMediaContainers = document.getElementsByClassName(
        'grid-media-container'
      )
      const projectfilters = document.querySelector('#filters')

      gsap.set(projectfilters, {
        opacity: 0,
      })
      gsap.to(projectfilters, {
        scrollTrigger: {
          trigger: '.projects-header',
          start: 'bottom top',
          toggleActions: 'play none none reverse',
        },
        opacity: 1,
        duration: 0.5,
      })

      for (let i = 0; i < gridItems.length; i++) {
        gsap.set(gridItems[i], {
          rotate: '0deg',
        })
        gsap.to(gridItems[i], {
          scrollTrigger: {
            trigger: gridItems[i],
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
          rotate: '0deg',
        })
        gsap.set(gridMediaWrappers[i], {
          y: '-15%',
          scale: 1.15,
        })
        gsap.to(gridMediaWrappers[i], {
          scrollTrigger: {
            trigger: gridMediaContainers[i],
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
          y: '15%',
        })
      }
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
        layoutMode: 'vertical',
        transitionDuration: 0,
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
    activateListView() {
      document.querySelector('.list-view-button').classList.add('active')
      document.querySelector('.grid-view-button').classList.remove('active')
      const projectGrid = document.querySelector('.project-grid')
      document
        .querySelector('.project-grid-container')
        .scrollIntoView({ behavior: 'smooth' })
      projectGrid.style.opacity = '0'
      setTimeout(() => {
        this.listView = true
      }, '700')
      setTimeout(() => {
        this.iso.layout()
        projectGrid.style.opacity = '1'
        this.$ScrollTrigger.refresh()
      }, '750')
    },
    activateGridView() {
      document.querySelector('.list-view-button').classList.remove('active')
      document.querySelector('.grid-view-button').classList.add('active')
      const projectGrid = document.querySelector('.project-grid')
      document
        .querySelector('.project-grid-container')
        .scrollIntoView({ behavior: 'smooth' })
      projectGrid.style.opacity = '0'
      setTimeout(() => {
        this.listView = false
      }, '700')
      setTimeout(() => {
        this.iso.layout()
        projectGrid.style.opacity = '1'
        this.$ScrollTrigger.refresh()
      }, '750')
    },
  },
}
</script>
<style scoped>
main {
  scroll-behavior: smooth;
}

.grid-media-container {
  mask-image: -webkit-radial-gradient(white, black);
  -webkit-mask-image: -webkit-radial-gradient(white, black);
}

span.sep {
  padding-right: 0.1em;
  padding-left: 0.1em;
}

.grid-item {
  width: calc(100% - 32px + 32px);
}
.grid-item:last-child {
  margin-bottom: 0;
}

.project-grid:not(.list-view) .grid-item {
  margin-bottom: 6rem;
}
.grid-item:hover .grid-image,
.grid-item:hover .grid-video {
  transform: scale(1.02);
}

@media (min-width: 768px) {
  .project-grid:not(.list-view) .item-meta {
    color: var(--project-color);
  }
}

@media (max-width: 1023px) {
  #filters {
    opacity: 1 !important;
  }
  .filter-button {
    margin-left: 1.78em;
  }
}

@media (min-width: 1024px) {
  .filter-button {
    margin-right: 1.78em;
  }
}

.project-grid-container {
  grid-template-columns: 16rem 1fr;
}

@media (min-width: 1536px) {
  .project-grid-container {
    grid-template-columns: 20rem 1fr 4rem;
  }
}

.item-overlay {
  background: var(--project-bg-color);
}

.grid-item:hover .item-overlay {
  opacity: 0.8;
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
  --filterheight: calc(9em + 4.5rem);
  --filterspace: 0.8em;
}

@media (min-width: 1024px) {
  .tag-dot {
    right: 0;
  }
}

.filter-button.all {
  margin-bottom: var(--filterspace);
}

.filter-button:not(.selected) {
  opacity: 0.4;
}

.filter-button:hover {
  opacity: 1;
}
.tag-dot {
  position: absolute;
  transition: 0.7s ease;
}
.tag-dot::before {
  content: '\25CF';
  font-size: 1.8em;
  line-height: 0.4;
  margin-left: -1px;
}

.tag-dot.\.archviz {
  transform: translateY(calc(var(--filterheight) / 9 + var(--filterspace)));
}

.tag-dot.\.art-direction {
  transform: translateY(calc(var(--filterheight) / 9 * 2 + var(--filterspace)));
}

.tag-dot.\.brand-identity {
  transform: translateY(calc(var(--filterheight) / 9 * 3 + var(--filterspace)));
}

.tag-dot.\.brand-strategy {
  transform: translateY(calc(var(--filterheight) / 9 * 4 + var(--filterspace)));
}

.tag-dot.\.illustration {
  transform: translateY(calc(var(--filterheight) / 9 * 5 + var(--filterspace)));
}
.tag-dot.\.interior-design {
  transform: translateY(calc(var(--filterheight) / 9 * 6 + var(--filterspace)));
}

.tag-dot.\.motion-graphics {
  transform: translateY(calc(var(--filterheight) / 9 * 7 + var(--filterspace)));
}

.tag-dot.\.product {
  transform: translateY(calc(var(--filterheight) / 9 * 8 + var(--filterspace)));
}

.tag-dot.\.website {
  transform: translateY(calc(var(--filterheight) + var(--filterspace)));
}
.view-mode svg {
  fill: var(--color);
}

button span.color-fill,
.list-separator {
  background: var(--color);
}

.list-view-button,
.grid-view-button {
  opacity: 0.5;
  transition: 0.7s ease;
}

.list-view-button.active,
.grid-view-button.active {
  opacity: 1;
}
</style>
