<template>
  <main>
    <section class="projects-header z-0 overflow-hidden">
      <div id="header-text" class="w-full flex flex-col justify-center p-4 py-52 pt-60 relative">
        <h1 id="header-title" class="tracking-tight leading-none text-5xl lg:text-8xl uppercase mb-4">
          <span v-for="(word, index) in titleWords" :key="index" class="title-words inline-block overflow-hidden"><span
              v-for="(letter, index2) in Array.from(word)" :key="index2" class="inline-block">{{ letter }}</span><span
              class="inline-block text-base align-top tracking-wider relative ml-2">{{ projects.length }}</span></span>
        </h1>
        <p id="header-description"
          class="inline-block tag text-2xl lg:text-3xl transition duration-300 leading-3 transform"
          :class="{ 'has-scroll-over': scrollOver }">
          <span class="intro text-sm lg:text-base uppercase inline-block mr-16">({{ $prismic.asText(intro)
          }})</span><span class="description serif font-light leading-7"><span
              v-for="(word, index2) in descriptionWords" :key="index2" class="description-words inline-block">{{ word
              }}</span></span>
        </p>
      </div>
    </section>
    <section class="content relative">
      <hr class="h-px w-full opacity-20" />
      <div :class="allTags" class="m-4 mt-5">
        <ul id="filters" @mouseover="filterOpen = true" @mouseleave="filterOpen = false" @click="filterOpen = false">
          <li class="inline-block mb-2 mr-1">
            <div class="filter-btn rounded-full text-center overflow-hidden">
              <button
                class="filter-button selected all btn-txt-wrap h-auto rounded-full overflow-visible transition duration-300 relative"
                data-filter="*" @click="filter('*'), (currentFilter = 'filter')" @mouseover="filterHover = true"
                @mouseleave="filterHover = false">
                <div
                  class="btn-txt transition duration-300 px-2 md:px-3 lg:px-4 h-auto flex justify-center items-center relative text-xl lg:text-2xl uppercase tracking-tight">
                  All Projects
                </div>
              </button>
            </div>
          </li>
          <li v-for="(tag, index) in allTags" :key="index" class="inline-block mr-2 mb-2">
            <div class="filter-btn rounded-full text-center overflow-hidden">
              <button :class="'filter-button ' + tag" :data-filter="tag"
                class="btn-txt-wrap h-auto rounded-full overflow-visible transition duration-300 relative" @click="
                  filter('.' + tag), (currentFilter = tag.replace('-', ' '))
                " @mouseover="; (filterHover = true), (linkHover = true)"
                @mouseleave="; (filterHover = false), (linkHover = false)">
                <div
                  class="btn-txt transition duration-300 px-2 md:px-3 lg:px-4 h-auto flex justify-center items-center relative text-xl lg:text-2xl uppercase tracking-tight">
                  {{ tag.replace('-', ' ') }}
                </div>
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div v-if="projects.length > 0" class="isotope project-grid px-4 pt-12">
        <div v-for="project in projects" :key="project.id" :class="
          project.tags.map(function (item, index) {
            return item.replace(' ', '-')
          })
        " class="grid-item project-link">
          <nuxt-link :to="LinkGetter(project)">
            <p class="text-sm lg:text-base uppercase inline-block mr-16 mb-2">
              (<span v-for="(tag, index) in project.tags" :key="tag" class="inline-block">{{ tag
              }}<template v-if="Object.keys(project.tags).length > 1"><span
                    v-if="index != Object.keys(project.tags).length - 1" class="sep">/</span></template></span>)
            </p>
            <div class="image-wrapper overflow-hidden rounded-lg">
              <nuxt-img v-if="project.data.image.url" format="webp" :src="project.data.image.url"
                sizes="sm:100vw md:100vw lg:100vw xl:50vw 2xl:50vw" :width="project.data.image.dimensions.width"
                :height="project.data.image.dimensions.height" class="image transition duration-700 w-full h-full"
                loading="lazy" />
            </div>
            <div class="text-xl lg:text-2xl uppercase title my-2 flex justify-between tracking-tight">
              {{ $prismic.asText(project.data.title)
              }}<span class="date font-light tracking-normal">{{
    $moment(project.data.date).format('MM/YY')
}}</span>
            </div>
          </nuxt-link>
        </div>
        <div :class="allTags" class="grid-item project-link">
          <nuxt-link to="/contact">
            <p class="text-sm lg:text-base uppercase inline-block mr-16 mb-2">
              (<span class="inline-block">Have a great idea?</span>)
            </p>
            <div class="image-wrapper overflow-hidden rounded-lg">
              <nuxt-img v-if="page.contactImage.url" format="webp" :src="page.contactImage.url"
                sizes="sm:100vw md:100vw lg:100vw xl:50vw 2xl:50vw" :width="page.contactImage.dimensions.width"
                :height="page.contactImage.dimensions.height" class="image transition duration-700 w-full h-full"
                loading="lazy" />
            </div>
            <div class="text-xl lg:text-2xl uppercase title my-2 flex justify-between tracking-tight">
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
          content: this.page.metaDescription
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
  destroyed() {
    window.removeEventListener('scroll', this.headerScroll)
  },
  methods: {
    LinkGetter(post) {
      return LinkResolver(post)
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
        ease: 'power4.easeOut',
      })
      gsap
        .to('.content', {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0,
          ease: 'power4.easeOut',
        })
        .delay(2)
      gsap
        .to('#header-description .intro', {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: 'power4.easeOut',
        })
        .delay(0.5)
      gsap
        .to('#header-description .description span', {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 1,
          ease: 'power4.easeOut',
        })
        .delay(1)
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
    isotope() {
      this.iso = new Isotope('.project-grid', {
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        transitionDuration: 700,
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
      this.iso.arrange({
        filter: tag,
      })
      this.$ScrollTrigger.refresh()
    },
  },
}
</script>
<style scoped>
main {
  scroll-behavior: smooth;
}

.image-wrapper {
  mask-image: -webkit-radial-gradient(white, black);
  -webkit-mask-image: -webkit-radial-gradient(white, black);
}

.image:hover {
  transform: scale(1.02);
}

.description-words {
  padding-right: 0.29em;
}

span.sep {
  padding-right: 0.29em;
  padding-left: 0.29em;
}

.grid-item {
  width: calc(100% - 32px);
  margin-bottom: 4rem;
}

@media (min-width: 768px) {
  .grid-item {
    width: calc(50% - 24.5px);
    margin-bottom: 8vw;
  }
}

.filter-btn {
  transform: translateZ(0);
  box-shadow: 0 0 0 1px var(--color);
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
</style>
