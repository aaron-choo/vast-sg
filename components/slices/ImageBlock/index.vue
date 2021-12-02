<template>
  <div :class="slice.variation">
    <div
      class="image-block section my-24 mx-4 lg:mx-40 grid gap-4"
      :class="'grid-cols-' + slice.primary.columns"
    >
      <div v-for="item in slice.items" :key="item" class="relative">
        <nuxt-img
          v-if="item.image.url"
          format="webp"
          :src="item.image.url"
          sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
          :width="item.image.dimensions.width"
          :height="item.image.dimensions.height"
          class="image rounded-lg"
          loading="lazy"
        />
        <prismic-rich-text
          :field="item.caption"
          class="image-caption mt-1 uppercase text-xs lg:text-sm"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageBlock',
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
.image-block img {
  width: 100%;
}
.fullWidth .image-block {
  margin-left: 1rem;
  margin-right: 1rem;
}
.fullWidth .image-caption {
  position: absolute;
  left: 1rem;
  top: 1rem;
}
</style>
