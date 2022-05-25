<template>
  <section class="module video-block section my-24 mx-4">
    <div
      class="video-container"
      :class="slice.primary.device + ' ' + slice.primary.align"
    >
      <video autoplay muted loop playsinline :poster="slice.primary.poster.url">
        <source :src="slice.primary.video.url" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <figcaption v:if="slice.primary.caption" class="caption">
      {{ slice.primary.caption }}
    </figcaption>
  </section>
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
</style>