<template>
  <div>
    <div class="grid grid-cols-12 row-gap-16 md:col-gap-16" v-if="projects.length > 0">
      <div class="col-span-12">
        <h2 class="text-2xl tracking-wider text-center uppercase text-bold my-32">Latest posts</h2>
        <div class="w-1/12 mx-auto mt-2"></div>
      </div>
      <div v-for="project in projects" :key="project.id" class="col-span-12 md:col-span-4">
        <nuxt-link :to="LinkGetter(project)">
          <img :src="project.data.image.url" class="rounded-2xl"/>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import LinkResolver from '~/plugins/link-resolver.js'
export default {
  name: 'ProjectsPage',
  components: {

  },
  async asyncData({ $prismic, params, error }) {
    try {
        const pageContent = await $prismic.api.getSingle('projects-page')
        // Query projects
        const projects = await $prismic.api.query(
          $prismic.predicates.at('document.type','project')
        )
    
        // Returns data to be used in template
        return {
        page: pageContent,
        projects: projects.results
        // title: project.data.title,
        // titleSplit: Array.from($prismic.asText(project.data.title)),
        // titleWords: Array.from($prismic.asText(project.data.title).split(' ')),
        // date: project.date,
        // description: project.data.description,
        // heroimage: project.data.image,
        // backgroundColor: project.data.background_color,
        // textColor: project.data.text_color,
        // tags: project.tags
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
      title: this.$prismic.asText(this.page.data['meta-title']),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$prismic
            .asText(this.page.data['meta-description'])
            .substring(0, 158)
        }
      ]
    }
  },
  methods: {
    LinkGetter(post) {
      return LinkResolver(post)
    }
  }
}
</script>
