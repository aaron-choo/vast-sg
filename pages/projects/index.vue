<template>
  <main>
    <section class="projects-header">
      <div id="header-text" class="w-full flex flex-col justify-center p-4 py-52 pt-60 relative">
        <h1 id="header-title" class="tracking-tight text-5xl uppercase overflow-hidden mb-4"><span v-for="letter in titleSplit" :key="letter" class="inline-block">{{ letter }}</span><span class="inline-block text-base align-top ml-1">{{projects.length}}</span></h1>
        <p id="header-description" class="font-light inline-block tag text-3xl transition duration-300 leading-3 transform lg:w-10/12"  :class="{ 'has-scroll-over opacity-0 translate-y-4': scrollOver }"><span class="intro font-light text-sm lg:text-base uppercase inline-block mr-16">({{ $prismic.asText(intro) }})</span><span class="description serif leading-7"><span v-for="word in descriptionWords" :key="word" class="inline-block">{{ word }} &nbsp;</span></span>
        </p>
      </div>
    </section>
    <section class="content">
      <div v-if="projects.length > 0" class="grid grid-cols-12 px-4 gap-8 lg:gap-y-32">
        <div v-for="project in projects" :key="project.id" class="project-link col-span-12 lg:col-span-5">
          <nuxt-link :to="LinkGetter(project)">
            <nuxt-img v-if="project.data.image.url" :src="project.data.image.url" sizes="sm:100vw md:100vw lg:100vw xl:50vw 2xl:50vw" class="image transition duration-1000 w-full"/>
            <div class="text-xl lg:text-2xl uppercase title my-2">{{ $prismic.asText(project.data.title) }}</div>
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
      page: null
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
  },
  destroyed() {
    document.documentElement.style.setProperty('--bg', '');
    document.documentElement.style.setProperty('--color-primary', '');
    document.documentElement.style.setProperty('--color', '');
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
  }
}
</script>
<style scoped>
@media (min-width: 1024px) {
  .project-link:nth-child(4n+4){
    grid-column-start: 8;
  }
  .project-link:nth-child(8n+5){
    grid-column-start: 3;
  }
}
</style>