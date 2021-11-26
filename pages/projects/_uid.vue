<template>
  <main>
    <article>
      <div class="project-header">
        <div class="w-full">
          <h1 class="w-10/12 tracking-tighter text-5xl lg:text-9xl px-4 pt-16">{{ $prismic.asText(title) }}
          <br/>
          </h1>
          <h1 v-for="tag in tags" :key="tag" class="w-10/12 uppercase font-light tracking-tighter text-5xl lg:text-9xl px-4">
              {{ tag }}
          </h1>
          <div v-if="image.url !== undefined" class="post-image pt-8">
            <img :src="image.url"/>
          </div>
        </div>
      </div>
 
      <div class="content">
        <slice-zone type="project" :uid="$route.params.uid" />
      </div>
    </article>
  </main>
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
  name: 'Project',
  components: {
    SliceZone
  },
  async asyncData({ $prismic, params, error }) {
    try {
        // Query post
        const project = await $prismic.api.getByUID('project', params.uid)
    
        // Returns data to be used in template
        return {
        page: project,
        title: project.data.project_title,
        date: project.data.project_date,
        description: project.data.project_description,
        image: project.data.project_image,
        color1: project.data.project_color_1,
        color2: project.data.project_color_2,
        tags: project.tags
        }
    } catch (e) {
        // Returns error page
        error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head () {
    return {
      title: this.$prismic.asText(this.page.data.meta_title),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$prismic
            .asText(this.page.data.meta_description)
            .substring(0, 158)
        }
      ]
    }
  }
}
</script>
<style scoped>
.scope {
  text-indent: 1em;
  display: inline-block;
}
</style>