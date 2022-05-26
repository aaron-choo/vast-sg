<template>
  <div :class="slice.variation">
    <div
      class="module image-block section my-24 mx-4 grid gap-x-4 gap-y-24"
      :class="'grid-cols-' + slice.primary.columns"
    >
      <div v-for="(item, index) in slice.items" :key="index" class="relative">
        <div class="image-container" :class="item.device + ' ' + item.align">
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

.device-iphone-x,
.device-mbp-13,
.device-ipad-pro-p,
.device-ipad-pro-l {
  background-blend-mode: luminosity;
  box-sizing: border-box;
}

.device-mbp-13 {
  background: var(--bg) url(/mbp-13.webp) center no-repeat;
  padding: 8.5% 12.75% 11%;
  background-size: contain;
}

.device-iphone-x {
  background: var(--bg) url(/iphone-x.webp) center no-repeat;
  padding: 16% 17%;
  background-size: contain;
}

.device-iphone-x img,
.device-iphone-x video {
  -webkit-mask-image: url(/iphone-x-screen.svg);
  mask-image: url(/iphone-x-screen.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.device-ipad-pro-p {
  background: var(--bg) url(/ipad-pro-p.webp) center no-repeat;
  padding: 8% 8.4% 7.7%;
  background-size: contain;
}

.device-ipad-pro-l {
  background: var(--bg) url(/ipad-pro-l.webp) center no-repeat;
  padding: 6.4% 6.3% 6.2%;
  background-size: contain;
}

.device-ipad-pro-p img,
.device-ipad-pro-p video {
  -webkit-mask-image: url(/ipad-pro-p-mask.svg);
  mask-image: url(/ipad-pro-p-mask.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.device-ipad-pro-l img,
.device-ipad-pro-l video {
  -webkit-mask-image: url(/ipad-pro-l-mask.svg);
  mask-image: url(/ipad-pro-l-mask.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.image-container:not(.device-iphone-x):not(.device-mbp-13):not(.device-ipad-pro-p):not(.device-ipad-pro-l)
  img {
  border-radius: 0.5rem;
}
</style>
