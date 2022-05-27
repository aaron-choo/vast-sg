<template>
  <div :class="slice.variation">
    <div
      class="
        module
        image-block
        section
        py-24
        px-4
        mx-4
        grid
        gap-4
        rounded-lg
        lg:mx-8 lg:gap-8
        bg-cover bg-no-repeat bg-center
      "
      :class="
        'md:grid-cols-' +
        slice.primary.columns +
        ' grid-cols-' +
        slice.primary.mobileColumns
      "
      :style="'background-image: url(' + slice.primary.background.url + ')'"
    >
      <div
        v-for="(item, index) in slice.items"
        :key="index"
        class="col-span-1 relative"
        :class="'container-' + item.device + '-container'"
      >
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

.device {
  box-sizing: border-box;
}

.mbp-13 {
  background: url(/mbp-13.webp) center no-repeat;
  padding: 8.5% 12.75% 11%;
  background-size: contain;
}

@media (min-width: 768px) {
  .container-device {
    margin: 0 5%;
  }
}

@media (min-width: 1024px) {
  .container-device {
    margin: 0 10%;
  }
}

@media (min-width: 1280px) {
  .container-device {
    margin: 0 15%;
  }
}

@media (min-width: 1536px) {
  .container-device {
    margin: 0 20%;
  }
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
  background: url(/ipad-pro-p.webp) center no-repeat;
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

.image-container:not(.iphone-x):not(.mbp-13):not(.ipad-pro-p):not(.ipad-pro-l)
  img {
  border-radius: 0.5rem;
}
</style>
