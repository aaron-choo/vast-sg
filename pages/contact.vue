<template>
  <div>
    <div style="height:100vh;display:flex;justify-content:center;align-items:center;">
      <h1>CONTACT</h1>
    </div>
  <prismic-rich-text :field="page.content" />
  <slice-zone type="home_page" queryType="single" />
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'
export default {
  name: 'ContactPage',
  components: {
    SliceZone
  },
  async asyncData({ $prismic, error }) {
    try {
      const pageContent = (await $prismic.api.getSingle('home_page')).data
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
