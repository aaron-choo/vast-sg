<template>
  <div class="module slider-block section my-24" :class="slice.primary.align">
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
        <div class="swiper-wrapper">
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
          class="swiper-button-prev left-0 m-0"
          @mouseover="cursorPrev()"
          @mouseleave="cursorReset()"
        ></div>
        <div
          slot="button-next"
          class="swiper-button-next right-0 m-0"
          @mouseover="cursorNext()"
          @mouseleave="cursorReset()"
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
        <div class="swiper-wrapper">
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
              class="image rounded-lg"
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
          class="swiper-button-prev left-0 m-0"
          @mouseover="cursorPrev()"
          @mouseleave="cursorReset()"
        ></div>
        <div
          slot="button-next"
          class="swiper-button-next right-0 m-0"
          @mouseover="cursorNext()"
          @mouseleave="cursorReset()"
        ></div>
      </div>

      <div
        v-if="slice.variation === 'imageScroll'"
        v-swiper="swiperOptionImageScroll"
        class="swiper-container relative"
      >
        <div class="swiper-wrapper">
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
import gsap from 'gsap'
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
        effect: this.slice.primary.effect,
        grabCursor: true,
        autoHeight: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      swiperOptionImageScroll: {
        slidesPerView: 0.6,
        effect: 'slide',
        grabCursor: true,
        mousewheel: {
          releaseOnEdges: true,
        },
      },
    }
  },
  methods: {
    cursorPrev() {
      const cursor = document.querySelector('.cursor')
      const cursorSmall = document.querySelector('.cursor-small')
      document.getElementById('app-cursor').classList.add('prev')
      gsap.to(cursor, 0.3, { height: 60, width: 60, top: -30, left: -30 })
      gsap.to(cursorSmall, 0.3, { height: 60, width: 60, top: -30, left: -30 })
    },
    cursorNext() {
      const cursor = document.querySelector('.cursor')
      const cursorSmall = document.querySelector('.cursor-small')
      document.getElementById('app-cursor').classList.add('next')
      gsap.to(cursor, 0.3, { height: 60, width: 60, top: -30, left: -30 })
      gsap.to(cursorSmall, 0.3, { height: 60, width: 60, top: -30, left: -30 })
    },
    cursorReset() {
      const cursor = document.querySelector('.cursor')
      const cursorSmall = document.querySelector('.cursor-small')
      document.getElementById('app-cursor').classList.remove('next')
      document.getElementById('app-cursor').classList.remove('prev')
      gsap.to(cursor, 0.3, { height: 16, width: 16, top: -8, left: -8 })
      gsap.to(cursorSmall, 0.3, { height: 16, width: 16, top: -8, left: -8 })
    },
  },
}
</script>
<style scoped>
.swiper-button-next::after,
.swiper-button-prev::after {
  content: none;
}
.swiper-button-next,
.swiper-button-prev {
  width: 25%;
  height: 100%;
  top: 0;
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
}
.swiper-container {
  mask-image: -webkit-radial-gradient(white, black);
  -webkit-mask-image: -webkit-radial-gradient(white, black);
}

.slider-block.left .swiper-container {
  margin-left: 0;
}
.slider-block.right .swiper-container {
  margin-right: 0;
}

@media (min-width: 1024px) {
  .slider-block.left .swiper-container,
  .slider-block.right .swiper-container,
  .slider-block.center .swiper-container {
    width: calc(50% + 1em);
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
</style>
