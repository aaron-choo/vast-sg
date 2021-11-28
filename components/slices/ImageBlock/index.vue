<template>
<div :class="slice.variation">
  <div class="image-block section my-24 mx-4 lg:mx-40 grid gap-4" :class="'lg:grid-cols-'+slice.primary.columns">
    <div v-for="item in slice.items" :key="item" class="relative">
      <prismic-image :field="item.image" class="image"/>
      <prismic-rich-text :field="item.caption" class="image-caption font-light uppercase text-sm" />
    </div>
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
.fullWidth .image-block{
  margin-left: 0;
  margin-right: 0;
  padding: 0;
}
.fullWidth .image-caption{
  position: absolute;
  left: 1rem;
  top: 1rem;
}
</style>