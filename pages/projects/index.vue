<template>
  <main>
    <section class="projects-header">
      <div id="header-text" class="w-full flex flex-col justify-center p-4 py-52 pt-60 relative">
        <h1 id="header-title" class="tracking-tight text-5xl uppercase overflow-hidden mb-4"><span v-for="(letter, index) in titleSplit" :key="index" class="inline-block">{{ letter }}</span><span class="inline-block text-base align-top ml-1">{{projects.length}}</span></h1>
        <p id="header-description" class="font-light inline-block tag text-3xl transition duration-300 leading-3 transform lg:w-10/12"  :class="{ 'has-scroll-over opacity-0 translate-y-4': scrollOver }"><span class="intro font-light text-sm lg:text-base uppercase inline-block mr-16">({{ $prismic.asText(intro) }})</span><span class="description serif leading-7"><span v-for="(word, index2) in descriptionWords" :key="index2" class="description-words inline-block">{{ word }}</span></span>
        </p>
      </div>
    </section>
    <section class="content">
      <div v-if="projects.length > 0" class="grid grid-cols-12 px-4 gap-4 gap-y-12 lg:gap-y-40 items-end">
        <div v-for="project in projects" :key="project.id" class="project-link col-span-12 lg:col-span-5">
          <nuxt-link :to="LinkGetter(project)">
            <p class="font-light text-sm lg:text-base uppercase inline-block mr-16 mb-2">(<span v-for="(tag, index) in project.tags" :key="tag" class="inline-block">{{ tag }}<template v-if="Object.keys(project.tags).length > 1"><span v-if="index != Object.keys(project.tags).length - 1">/</span></template></span>)
            </p>
            <div class="image-wrapper overflow-hidden">
              <nuxt-img v-if="project.data.image.url" :src="project.data.image.url" sizes="sm:100vw md:100vw lg:100vw xl:50vw 2xl:50vw" class="image transition duration-700 w-full" loading="lazy"/>
            </div>
            <div class="text-xl lg:text-2xl uppercase title my-2 flex justify-between">{{ $prismic.asText(project.data.title) }}<span class="date font-light">{{ $moment(project.data.date).format('MM/YY') }}</span></div>
          </nuxt-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import gsap from 'gsap'
import LinkResolver from '~/plugins/link-resolver.js'
export default {
  name: 'ProjectsPage',
  components: {

  },
  async asyncData({ $prismic, params, error }) {
    try {
        const pageContent = (await $prismic.api.getSingle('projects_page')).data
        // Query projects
        const projects = await $prismic.api.query(
          $prismic.predicates.at('document.type','project'),
          {
            orderings: '[my.project.date desc]',
            pageSize: 9
          }
        )
    
        // Returns data to be used in template
        return {
        page: pageContent,
        title: pageContent.title,
        titleSplit: Array.from($prismic.asText(pageContent.title)),
        descriptionWords: Array.from($prismic.asText(pageContent.description).split(' ')),
        description: pageContent.description,
        intro: pageContent.intro,
        backgroundColor: pageContent.backgroundColor,
        textColor: pageContent.textColor,
        projects: projects.results
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
            .substring(0, 158)
        }
      ]
    }
  },
  beforeMount() {
    document.documentElement.style.setProperty('--bg', this.backgroundColor);
    document.documentElement.style.setProperty('--color-primary', this.textColor);
    document.documentElement.style.setProperty('--color', this.textColor);
  },
  mounted() {
    this.headerAnimation();
    window.addEventListener('scroll', this.headerScroll);
    window.addEventListener('scroll', this.onScroll);
  },
  destroyed() {
    document.documentElement.style.setProperty('--bg', '');
    document.documentElement.style.setProperty('--color-primary', '');
    document.documentElement.style.setProperty('--color', '');
    window.removeEventListener('scroll', this.headerScroll);
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    LinkGetter(post) {
      return LinkResolver(post)
    },
    headerAnimation() {
      gsap.set("#header-title span", {y: -30, opacity: 0 });
      gsap.set("#header-description .intro", {y: 15, opacity: 0 });
      gsap.set("#header-description .description span", {y: 15, opacity: 0 });
      gsap.set(".project-link", {y: 30, opacity: 0 });
      gsap.to(".project-link", {y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power4.out' }).delay(2)
      gsap.to("#header-title span", {y: 0, opacity: 1, stagger: 0.01, duration: 1, ease: 'power4.out' })
      gsap.to("#header-description .intro", {y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: 'power4.out' }).delay(0.5)
      gsap.to("#header-description .description span", {y: 0, opacity: 1, stagger: 0.05, duration: 1, ease: 'power4.out' }).delay(1)
    },
     headerScroll () {
       const screenHeight = window.innerHeight;
       if (document.documentElement.scrollTop < screenHeight) {
      document.getElementById('header-text').style.transform = "translateY(" + document.documentElement.scrollTop/1.8 + "px)"
       }
    },
    onScroll () {
      // Get the current scroll position
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
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
  }
}
</script>
<style scoped>
@media (min-width: 1024px) {
  .project-link:nth-child(4n+4), .project-link:nth-child(8n+6){
    grid-column-start: 8;
  }
  .project-link:nth-child(8n+5){
    grid-column-start: 2;
  }
}
.image:hover{
  transform:scale(1.02);
}
.description-words{
  padding-right:.29em
}
</style>