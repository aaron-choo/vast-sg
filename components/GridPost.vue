<template>
  <section class="">
    <nuxt-link :to="LinkGetter(projectdata)">
      <div v-if="projectdata.data.image.url !== undefined" class="overflow-hidden">
        <nuxt-img v-if="projectdata.data.image.url" :src="projectdata.data.image.url" sizes="sm:100vw md:100vw lg:100vw xl:50vw 2xl:50vw" class="image transition duration-1000" />
      </div>

      <div class="text my-2">
        <!-- <div class="text-sm italic date">
          {{
          Intl.DateTimeFormat('en-US').format(
          new Date(projectdata.first_publication_date)
          )
          }}
        </div> -->

        <div class="text-2xl uppercase title">
          {{ $prismic.asText(projectdata.data.title) }} (<span v-for="(tag, index) in projectdata.tags" :key="tag" class="inline-block">{{ tag }}<template v-if="Object.keys(projectdata.tags).length > 1"><span v-if="index != Object.keys(projectdata.tags).length - 1">/</span></template>
          </span>)
        </div>

        <div v-if="projectdata.data.summary.length > 0" class="text-xs summary">
          
          <prismic-rich-text :field="projectdata.data.summary" />
          
        </div>
      </div>
    </nuxt-link>
  </section>
</template>

<script>
import LinkResolver from '~/plugins/link-resolver.js'
export default {
  name: 'GridPost',
  components: {
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
<style scoped>
.image{
  width: 100%;
}
.image:hover{
  transform:scale(1.02);
}
</style>