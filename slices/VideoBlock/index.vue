<template>
  <div
    class="
      module
      video-block
      section
      relative
      my-24
      mx-4
      grid
      gap-4
      rounded-lg
      lg:mx-8 lg:gap-8
      items-center
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
        object-cover
        absolute
        top-0
        left-0
        w-full
        h-full
        rounded-lg
      "
      loading="lazy"
    />
    <div
      v-for="(item, index) in slice.items"
      :key="index"
      class="col-span-1 relative"
      :class="'container-' + item.device + '-container'"
    >
      <div v-if="item.device" class="video-container m-4" :class="item.device">
        <video autoplay muted loop playsinline :poster="item.poster.url">
          <source :src="item.video.url" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div v-if="!item.device" class="video-container">
        <video autoplay muted loop playsinline :poster="item.poster.url">
          <source :src="item.video.url" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <figcaption
        v-if="item.caption"
        class="video-caption mt-1 uppercase text-xs lg:text-sm"
      >
        {{ item.caption }}
      </figcaption>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoBlock',
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
video {
  width: 100%;
  height: auto;
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
  background: var(--bg) url(/ipad-pro-p.webp) center no-repeat;
  padding: 8% 8.4% 7.7%;
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

.video-container:not(.device) video {
  border-radius: 0.5rem;
}
</style>