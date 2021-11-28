<template>
  <section class="">
    <nuxt-link :to="LinkGetter(projectdata)">
      <div v-if="projectdata.data.image.url !== undefined" class="main_image">
        <ResponsiveImg :imgobject="projectdata.data.image" :sizes="imgsize" />
      </div>

      <div class="px-8 py-4 text">
        <div class="text-sm italic date">
          {{
          Intl.DateTimeFormat('en-US').format(
          new Date(projectdata.first_publication_date)
          )
          }}
        </div>

        <div class="mt-1 mb-4 text-xl font-bold title">
          {{ $prismic.asText(projectdata.data.title) }}
        </div>

        <div v-if="projectdata.data.summary.length > 0" class="text-xs summary">
          <prismic-rich-text :field="projectdata.data.summary" />
        </div>
      </div>
    </nuxt-link>
  </section>
</template>

<script>
import ResponsiveImg from '~/components/ResponsiveImg'
import LinkResolver from '~/plugins/link-resolver.js'
export default {
  name: 'GridPost',
  components: {
    ResponsiveImg
  },
  props: {
    projectdata: {
      type: Object,
      default: null
    },
    imgsize: {
      type: String,
      default: '100vw'
    }
  },
  methods: {
    LinkGetter(post) {
      return LinkResolver(post)
    }
  }
}
</script>