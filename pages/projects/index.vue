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
            class="title-words inline-block overflow-hidden"
            ><span
              v-for="(letter, index2) in Array.from(word)"
              :key="index2"
              class="inline-block"
              >{{ letter }}</span
            >&nbsp;</span
          ><span class="inline-block text-base align-top ml-1">{{
            projects.length
          }}</span>
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
          :class="{ 'has-scroll-over opacity-0 translate-y-4': scrollOver }"
        >
          <span class="intro text-sm lg:text-base uppercase inline-block mr-16"
            >({{ $prismic.asText(intro) }})</span
          ><span class="description serif font-light leading-7"
            ><span
              v-for="(word, index2) in descriptionWords"
              :key="index2"
              class="description-words inline-block"
              >{{ word }}</span
            ></span
          >
        </p>
      </div>
    </section>
    <section class="content relative">
      <hr class="h-px w-full opacity-20" />
      <div
        v-if="projects.length > 0"
        class="isotope project-grid px-4 pt-12"
      >
        <div :class="allTags" class="grid-item project-link pb-2">
          <ul
            id="filters"
            @mouseover="filterOpen = true"
            @mouseleave="filterOpen = false"
            @click="filterOpen = false"
          >
            <li>
              <h3
                class="
                  tracking-tight
                  leading-none
                  uppercase
                  text-2xl
                  lg:text-3xl lg:leading-none
                  mb-4
                "
              >
                Now Showing
              </h3>
            </li>
            <li>
              <button
                class="
                  filter-button
                  selected
                  all
                  uppercase
                  text-base
                  lg:text-xl lg:leading-tight
                  opacity-30
                  transition
                  duration-700
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
                  uppercase
                  text-base
                  lg:text-xl lg:leading-tight
                  opacity-30
                  transition
                  duration-700
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
          </ul>
        </div>

        <div
          v-for="project in projects"
          :key="project.id"
          :class="
            project.tags.map(function (item, index) {
              return item.replace(' ', '-')
            })
          "
          class="grid-item project-link"
        >
          <nuxt-link :to="LinkGetter(project)">
            <p class="text-sm lg:text-base uppercase inline-block mr-16 mb-2">
              (<span
                v-for="(tag, index) in project.tags"
                :key="tag"
                class="inline-block"
                >{{ tag
                }}<template v-if="Object.keys(project.tags).length > 1"
                  ><span
                    v-if="index != Object.keys(project.tags).length - 1"
                    class="sep"
                    >/</span
                  ></template
                ></span
              >)
            </p>
            <div class="image-wrapper overflow-hidden rounded-lg">
              <nuxt-img
                v-if="project.data.image.url"
                format="webp"
                :src="project.data.image.url"
                sizes="sm:100vw md:100vw lg:100vw xl:50vw 2xl:50vw"
                :width="project.data.image.dimensions.width"
                :height="project.data.image.dimensions.height"
                class="image transition duration-700 w-full h-full"
                loading="lazy"
              />
            </div>
            <div
              class="
                text-xl
                lg:text-2xl
                uppercase
                title
                my-2
                flex
                justify-between
                tracking-tight
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
            <p class="text-sm lg:text-base uppercase inline-block mr-16 mb-2">
              (<span
                class="inline-block"
                >Have a great idea?</span
              >)
            </p>
            <div class="image-wrapper overflow-hidden rounded-lg">
              <nuxt-img
                v-if="page.contactImage.url"
                format="webp"
                :src="page.contactImage.url"
                sizes="sm:100vw md:100vw lg:100vw xl:50vw 2xl:50vw"
                :width="page.contactImage.dimensions.width"
                :height="page.contactImage.dimensions.height"
                class="image transition duration-700 w-full h-full"
                loading="lazy"
              />
            </div>
            <div
              class="
                text-xl
                lg:text-2xl
                uppercase
                title
                my-2
                flex
                justify-between
                tracking-tight
              "
            >
              Let's Make Something Awesome<span class="date font-light tracking-normal">{{
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
    this.isotope()
  },
  updated() {
    this.$ScrollTrigger.refresh()
  },
  destroyed() {
    document.documentElement.style.setProperty('--bg', '')
    document.documentElement.style.setProperty('--color-primary', '')
    document.documentElement.style.setProperty('--color', '')
    window.removeEventListener('scroll', this.headerScroll)
    window.removeEventListener('scroll', this.onScroll)
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
        ease: 'power4.out',
      })
      gsap
        .to('.content', {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0,
          ease: 'power4.out',
        })
        .delay(2)
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
      // const screenHeight = window.innerHeight
      // if (document.documentElement.scrollTop < screenHeight) {
      //   document.getElementById('header-text').style.transform =
      //     'translateY(' + document.documentElement.scrollTop / 2 + 'px)'
      // }
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
.filter-button.selected {
  opacity: 1;
  transform: translateX(1em);
}
.filter-button:hover {
  opacity: 1;
}
.filter-button::before {
  content: '→';
  position: absolute;
  left: -1em;
  opacity: 0;
  transition: opacity 0.3s ease 0s;
}
.filter-button.selected::before {
  opacity: 1;
  transition: opacity 0.3s ease 0.6s;
}
</style>
