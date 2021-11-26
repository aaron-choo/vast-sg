<template>
  <main>
    <article>
      <div class="project-header">
        <div class="w-full">
          <div id="header-text" class="w-10/12 flex flex-col justify-center p-4 mt-10">
            <h1 class="tracking-tighter text-5xl lg:text-8xl">{{ $prismic.asText(title) }}</h1>
            <h1 class="font-light inline-block tag tracking-tighter capitalize text-5xl lg:text-5xl">
              <span v-for="(tag, index) in tags" :key="tag">
                  {{ tag }}
                  <template v-if="Object.keys(tags).length > 1">
                    <span v-if="index != Object.keys(tags).length - 1">+</span>
                  </template>
              </span>
            </h1>
          </div>
          <div v-if="heroimage.url !== undefined" class="project-image px-4">
            <img :src="heroimage.url" class="rounded-2xl"/>
          </div>
          <div class="description-wrapper px-4">
            <p class="description tracking-tighter uppercase text-5xl lg:text-4xl">{{$prismic.asText(description)}}</p>
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
        title: project.data.title,
        date: project.date,
        description: project.data.description,
        heroimage: project.data.image,
        backgroundColor: project.data.background_color,
        textColor: project.data.text_color,
        tags: project.tags
        }

    } catch (e) {
        // Returns error page
        error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head () {
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
  mounted() {
    document.documentElement.style.setProperty('--bg', this.page.data['background-color']);
    document.documentElement.style.setProperty('--color-primary', this.page.data['text-color']);
    document.documentElement.style.setProperty('--color', this.page.data['text-color']);
    window.addEventListener('scroll', this.headerScroll);
  },
  destroyed() {
    document.documentElement.style.setProperty('--bg', '');
    document.documentElement.style.setProperty('--color-primary', '');
    document.documentElement.style.setProperty('--color', '');
  },
  methods: {
    headerScroll () {
      document.getElementById('header-text').style.transform = "translateY(" + document.documentElement.scrollTop/1.5 + "px)"
    }
  }
}
</script>
<style scoped>
#header-text {  
  height: 50vh;
}
#header-text *{
  line-height: .8;
}
</style>