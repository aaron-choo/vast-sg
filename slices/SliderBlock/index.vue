<template>
  <div
    class="module slider-block section my-24"
    :class="slice.primary.align + ' ' + slice.primary.device"
  >
    <div
      v-if="slice.primary.device"
      class="slider-container m-4"
      :class="slice.primary.device"
    >
      <div
        v-swiper="swiperOption"
        class="swiper-container relative"
        :class="'container-' + slice.primary.device + '-container'"
      >
        <div class="swiper-wrapper cursor-drag">
          <div
            v-for="(item, index) in slice.items"
            :key="index"
            class="swiper-slide px-4 lg:px-8"
          >
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
        </div>
        <div
          v-if="slice.primary.pagination"
          slot="pagination"
          class="swiper-pagination text-xs lg:text-sm mb-1 px-5 lg:px-9"
        ></div>
        <div
          slot="button-prev"
          class="swiper-button-prev left-0 m-0 bottom-5 lg:bottom-6 cursor-prev"
        ></div>
        <div
          slot="button-next"
          class="
            swiper-button-next
            right-0
            m-0
            bottom-5
            lg:bottom-6
            cursor-next
          "
        ></div>
      </div>
    </div>
    <div v-if="!slice.primary.device" class="slider-container">
      <div
        v-if="slice.variation !== 'imageScroll'"
        v-swiper="swiperOption"
        class="swiper-container relative"
        :class="'container-' + slice.primary.device + '-container'"
      >
        <div class="swiper-wrapper cursor-drag">
          <div
            v-for="(item, index) in slice.items"
            :key="index"
            class="swiper-slide px-4 lg:px-8"
          >
            <nuxt-img
              v-if="
                item.image.url &&
                (slice.primary.slidesPerView === 1 ||
                  !slice.primary.slidesPerView)
              "
              format="webp"
              :src="item.image.url"
              sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
              :width="item.image.dimensions.width"
              :height="item.image.dimensions.height"
              class="image rounded-lg"
              loading="lazy"
            />
            <nuxt-img
              v-if="
                item.image.url &&
                slice.primary.slidesPerView > 1 &&
                slice.primary.slidesPerView <= 2
              "
              format="webp"
              :src="item.image.url"
              sizes="sm:50vw md:50vw lg:50vw xl:50vw 2xl:50vw"
              :width="item.image.dimensions.width"
              :height="item.image.dimensions.height"
              class="image"
              loading="lazy"
            />
            <nuxt-img
              v-if="
                item.image.url &&
                slice.primary.slidesPerView > 2 &&
                slice.primary.slidesPerView <= 3
              "
              format="webp"
              :src="item.image.url"
              sizes="sm:33vw md:33vw lg:33vw xl:33vw 2xl:33vw"
              :width="item.image.dimensions.width"
              :height="item.image.dimensions.height"
              class="image"
              loading="lazy"
            />
            <nuxt-img
              v-if="
                item.image.url &&
                slice.primary.slidesPerView > 3 &&
                slice.primary.slidesPerView <= 4
              "
              format="webp"
              :src="item.image.url"
              sizes="sm:25vw md:25vw lg:25vw xl:25vw 2xl:25vw"
              :width="item.image.dimensions.width"
              :height="item.image.dimensions.height"
              class="image"
              loading="lazy"
            />
            <nuxt-img
              v-if="item.image.url && slice.primary.slidesPerView > 4"
              format="webp"
              :src="item.image.url"
              sizes="sm:20vw md:20vw lg:20vw xl:20vw 2xl:20vw"
              :width="item.image.dimensions.width"
              :height="item.image.dimensions.height"
              class="image"
              loading="lazy"
            />
          </div>
        </div>
        <div
          v-if="slice.primary.pagination"
          slot="pagination"
          class="swiper-pagination text-xs lg:text-sm mt-1 px-4 lg:px-8"
        ></div>
        <div
          slot="button-prev"
          class="swiper-button-prev left-0 m-0 bottom-5 lg:bottom-6 cursor-prev"
        ></div>
        <div
          slot="button-next"
          class="
            swiper-button-next
            right-0
            m-0
            bottom-5
            lg:bottom-6
            cursor-next
          "
        ></div>
      </div>

      <div
        v-if="slice.variation === 'imageScroll'"
        v-swiper="swiperOptionImageScroll"
        class="swiper-container relative"
      >
        <div class="swiper-wrapper cursor-drag">
          <div
            v-for="(item, index) in slice.items"
            :key="index"
            class="swiper-slide px-4 lg:px-8"
          >
            <nuxt-img
              v-if="item.image.url"
              format="webp"
              :src="item.image.url"
              sizes="sm:140vw md:140vw lg:140vw xl:140vw 2xl:140vw"
              :width="item.image.dimensions.width"
              :height="item.image.dimensions.height"
              class="image rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { directive } from 'vue-awesome-swiper'
export default {
  name: 'SliderBlock',
  directives: {
    swiper: directive,
  },
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      swiperOption: {
        effect: this.slice.primary.effect || 'fade',
        slidesPerView: this.slice.primary.slidesPerView
          ? this.slice.primary.slidesPerView
          : 1,
        autoplay: this.slice.primary.autoplay
          ? { delay: 1500, disableOnInteraction: false }
          : false,
        grabCursor: true,
        autoHeight: true,
        loop: true,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          768: {
            slidesPerView: this.slice.primary.slidesPerView
              ? this.slice.primary.slidesPerView + 1
              : 1,
          },
          1024: {
            slidesPerView: this.slice.primary.slidesPerView
              ? this.slice.primary.slidesPerView + 2
              : 1,
          },
          1280: {
            slidesPerView: this.slice.primary.slidesPerView
              ? this.slice.primary.slidesPerView + 3
              : 1,
          },
        },
      },
      swiperOptionImageScroll: {
        slidesPerView: 0.55,
        grabCursor: true,

        breakpoints: {
          768: {
            slidesPerView: 0.75,
          },
        },
      },
    }
  },
  methods: {},
}
</script>
<style scoped>
img {
  width: 100%;
}
.swiper-button-next::after,
.swiper-button-prev::after {
  content: none;
}
.swiper-button-next,
.swiper-button-prev {
  width: 50%;
  height: auto;
  top: 0;
  margin-top: 0;
}

.swiper-button-next {
  right: 0;
}

.swiper-button-prev {
  left: 0;
}
.swiper-pagination {
  letter-spacing: 0.05em;
  position: relative;
  text-align: right;
  bottom: 0;
}
.slider-container.device .swiper-pagination {
  position: absolute;
  mix-blend-mode: difference;
  color: white;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}
.swiper-container {
  mask-image: -webkit-radial-gradient(white, black);
  -webkit-mask-image: -webkit-radial-gradient(white, black);
}

.slider-block.left .slider-container {
  margin-left: 0;
  margin-right: auto;
}
.slider-block.right .slider-container {
  margin-right: 0;
  margin-left: auto;
}
.slider-block.center .slider-container {
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 1024px) {
  .slider-block.left .slider-container,
  .slider-block.right .slider-container,
  .slider-block.center .slider-container {
    width: calc(50% + 1em);
  }
}

.slider-block.device {
  padding: 1rem;
}

@media (min-width: 768px) {
  .slider-block.device {
    padding: 2rem;
  }
}

@media (min-width: 1024px) {
  .slider-block.device {
    padding: 4rem;
  }
}

@media (min-width: 1280px) {
  .slider-block.device {
    padding: 8rem;
  }
}
.device {
  box-sizing: border-box;
}

.device .swiper-slide {
  padding: 0;
}

.slider-container.mbp-13 {
  background: url(//images.prismic.io/vast-sg/6cc975aa-d409-4e65-a610-a1fe45b83913_mbp-13.png?auto=compress,format&fm=webp)
    center no-repeat;
  padding: 3% 11% 7%;
  background-size: contain;
}

.slider-container.iphone-x {
  background: url(//images.prismic.io/vast-sg/29c187fe-5099-42b1-b56e-ff5d770ca7f2_iphone-x.png?auto=compress,format&fm=webp)
    center no-repeat;
  background-size: contain;
  padding: 5% 8%;
}
@media (min-width: 1024px) {
  .left .iphone-x,
  .right .iphone-x,
  .center .iphone-x {
    padding: 2.5% 4%;
  }
}
.iphone-x .swiper-container {
  -webkit-mask-image: url(/iphone-x-screen.svg);
  mask-image: url(/iphone-x-screen.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.slider-container.ipad-pro-p {
  background: url(//images.prismic.io/vast-sg/516ebd8d-2693-4916-be40-0eb0f7b13403_ipad-pro-p.png?auto=compress,format&fm=webp)
    center no-repeat;
  padding: 3.5% 3.5%;
  background-size: contain;
}

.slider-container.ipad-pro-l {
  background: url(//images.prismic.io/vast-sg/9c650a51-b4d9-4296-80b8-158e8a08b15c_ipad-pro-l.png?auto=compress,format&fm=webp)
    center no-repeat;
  background-size: contain;
  padding: 3.5% 3.5%;
}

.ipad-pro-p .swiper-container {
  -webkit-mask-image: url(/ipad-pro-p-mask.svg);
  mask-image: url(/ipad-pro-p-mask.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.ipad-pro-l .swiper-container {
  -webkit-mask-image: url(/ipad-pro-l-mask.svg);
  mask-image: url(/ipad-pro-l-mask.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}
</style>
