<template>
  <div class="image-block section my-24 mx-4 lg:mx-40 grid gap-4" v-bind:class="'lg:grid-cols-'+slice.primary.columns">
    <div v-for="item in slice.items" :key="item">
      <prismic-image :field="item.image" />
      <prismic-rich-text :field="item.caption" class="font-light uppercase" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageBlock",
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>
<style scoped>
.image-block img{
  width: 100%;
}
</style>