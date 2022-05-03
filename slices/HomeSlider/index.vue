<template>
  <section class="home-slider section mb-24 relative">
    <div v-swiper="swiperOption" class="relative overflow-hidden">
      <div class="swiper-wrapper h-screen">
        <div v-for="(item, index) in slice.items" :key="index" class="swiper-slide" :data-color="item.color">
          <div
            class="absolute top-0 left-0 bottom-0 right-0 z-10 flex flex-col justify-center items-start p-4 pointer-events-none">

            <prismic-rich-text :field="item.title" :style="'color:' + item.color"
              class="title tracking-tight leading-none text-5xl lg:text-8xl uppercase header-font inline-block" />

            <prismic-rich-text :field="item.subtitle" :style="'color:' + item.color"
              class="subtitle text-sm lg:text-base uppercase inline-block" />


          </div>
          <nuxt-link :to="$prismic.linkResolver(item.contentLink)">
            <nuxt-img format="webp" :src="item.image.url" sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
              :width="item.image.dimensions.width" :height="item.image.dimensions.height"
              class="w-full h-screen object-cover" loading="lazy" />
          </nuxt-link>

        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { directive } from "vue-awesome-swiper";
export default {
  name: "HomeSlider",
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
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        },
        autoplay: {
          delay: 5000,
          pauseOnMouseEnter: true,
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }
    }
  },
  mounted() {
  }
}
</script>
<style scoped>
.swiper-button-next,
.swiper-button-prev {
  height: 100%;
  top: 0;
  width: 25%;
  margin: 0;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  display: none;
}

.swiper-button-prev {
  left: 0;
}

.swiper-button-next {
  right: 0;
}
</style>
<style>
.title *,
.subtitle * {
  display: inline-block;
}
</style>