<template>
  <section class="section px-4 lg:px-40 my-24">
    <prismic-rich-text :field="slice.primary.title" class="title" />
    <div v-swiper="swiperOption" class="relative overflow-hidden">
      <div class="swiper-wrapper">
        <div v-for="item in slice.items" :key="item" class="swiper-slide">
            <img :src="item.image.url"/>  
        </div>
      </div>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev left-0 m-0" slot="button-prev"></div>
      <div class="swiper-button-next right-0 m-0" slot="button-next"></div>
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
          crossFade: true
        },
        autoHeight: true,
        loop: true,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          type: 'fraction'
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }
      }
    }
  }
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
</style>