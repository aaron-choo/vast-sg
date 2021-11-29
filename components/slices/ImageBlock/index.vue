<template>
<div :class="slice.variation">
  <div class="image-block section my-24 mx-4 lg:mx-40 grid gap-4" :class="'grid-cols-'+slice.primary.columns">
    <div v-for="item in slice.items" :key="item" class="relative">
      <nuxt-img v-if="item.image.url" :src="item.image.url" sizes="sm:640px md:768px lg:1024px xl:1280px 2xl:1536px" class="image"/>
      <prismic-rich-text :field="item.caption" class="image-caption uppercase text-sm" />
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