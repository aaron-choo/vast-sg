<template>
  <div>
    <div style="height:100vh;display:flex;justify-content:center;align-items:center;">
      <h1>ABOUT</h1>
    </div>
    <prismic-rich-text :field="page.content" />
  </div>
</template>

<script>
export default {
   name: 'AboutPage',
  async asyncData({ $prismic, error }) {
    try {
      const pageContent = (await $prismic.api.getSingle('about_page')).data
      return {
        page: pageContent
      }
    } catch (e) {
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
  }
}
</script>
