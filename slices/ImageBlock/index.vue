<template>
  <div
    class="
      module
      image-block
      section
      my-24
      mx-4
      grid
      items-center
      gap-4
      relative
      rounded-lg
      lg:mx-8 lg:gap-8
    "
    :class="
      'grid-cols-' +
      slice.primary.mobileColumns +
      ' md:grid-cols-' +
      slice.primary.columns +
      ' ' +
      slice.variation
    "
  >
    <nuxt-img
      v-if="slice.primary.background"
      format="webp"
      :src="slice.primary.background.url"
      sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
      :width="slice.primary.background.dimensions.width"
      :height="slice.primary.background.dimensions.height"
      class="
        background
        absolute
        top-0
        left-0
        w-full
        h-full
        rounded-lg
        object-cover
      "
      loading="lazy"
    />
    <div
      v-for="(item, index) in slice.items"
      :key="index"
      class="col-span-1 relative"
      :class="'container-' + item.device + '-container'"
    >
      <div v-if="item.device" class="image-container m-4" :class="item.device">
        <nuxt-img
          v-if="item.image.url"
          format="webp"
          :src="item.image.url"
          sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
          :width="item.image.dimensions.width"
          :height="item.image.dimensions.height"
          class="image"
          loading="lazy"
          :alt="item.image.alt"
        />
      </div>
      <div v-if="!item.device" class="image-container">
        <nuxt-img
          v-if="item.image.url"
          format="webp"
          :src="item.image.url"
          sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
          :width="item.image.dimensions.width"
          :height="item.image.dimensions.height"
          class="image"
          loading="lazy"
        />
      </div>
      <figcaption
        v-if="item.caption"
        class="image-caption mt-1 uppercase text-xs lg:text-sm"
      >
        {{ item.caption }}
      </figcaption>
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

.gridWithBackground {
  padding: 1rem;
}

@media (min-width: 768px) {
  .gridWithBackground {
    padding: 2rem;
  }
}

@media (min-width: 1024px) {
  .gridWithBackground {
    padding: 4rem;
  }
}

@media (min-width: 1280px) {
  .gridWithBackground {
    padding: 8rem;
  }
}

.device {
  box-sizing: border-box;
}

.mbp-13 {
  background: url(//images.prismic.io/vast-sg/6cc975aa-d409-4e65-a610-a1fe45b83913_mbp-13.png?auto=compress,format&fm=webp)
    center no-repeat;
  padding: 3% 11% 7%;
  background-size: contain;
}

.iphone-x {
  background: url(//images.prismic.io/vast-sg/29c187fe-5099-42b1-b56e-ff5d770ca7f2_iphone-x.png?auto=compress,format&fm=webp)
    center no-repeat;
  background-size: contain;
  padding: 5% 8%;
}

.iphone-x img,
.iphone-x video {
  -webkit-mask-image: url(/iphone-x-screen.svg);
  mask-image: url(/iphone-x-screen.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.ipad-pro-p {
  background: url(//images.prismic.io/vast-sg/516ebd8d-2693-4916-be40-0eb0f7b13403_ipad-pro-p.png?auto=compress,format&fm=webp)
    center no-repeat;
  padding: 3.5% 3.5%;
  background-size: contain;
}

.ipad-pro-l {
  background: url(//images.prismic.io/vast-sg/9c650a51-b4d9-4296-80b8-158e8a08b15c_ipad-pro-l.png?auto=compress,format&fm=webp)
    center no-repeat;
  background-size: contain;
  padding: 3.5% 3.5%;
}

.ipad-pro-p img,
.ipad-pro-p video {
  -webkit-mask-image: url(/ipad-pro-p-mask.svg);
  mask-image: url(/ipad-pro-p-mask.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.ipad-pro-l img,
.ipad-pro-l video {
  -webkit-mask-image: url(/ipad-pro-l-mask.svg);
  mask-image: url(/ipad-pro-l-mask.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.image-container:not(.iphone-x):not(.mbp-13):not(.ipad-pro-p):not(.ipad-pro-l)
  img {
  border-radius: 0.5rem;
}
</style>
