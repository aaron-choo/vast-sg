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
.device {
  box-sizing: border-box;
}

.mbp-13 {
  background: var(--bg) url(/mbp-13.webp) center no-repeat;
  padding: 8.5% 12.75% 11%;
  background-size: contain;
}

.iphone-x {
  background: url(//images.prismic.io/vast-sg/29c187fe-5099-42b1-b56e-ff5d770ca7f2_iphone-x.png?auto=compress,format&fm=webp)
    center no-repeat;
  background-size: contain;
  padding: 6% 8%;
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
</style>