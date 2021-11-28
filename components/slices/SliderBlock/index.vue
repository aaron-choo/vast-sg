<template>
  <section class="section px-4 lg:px-40 my-24">
    <div v-swiper="swiperOption" class="relative overflow-hidden">
      <div class="swiper-wrapper">
        <div v-for="(item, index) in slice.items" :key="index" class="swiper-slide">
            <img :src="item.image.url"/>  
        </div>
      </div>
      <div slot="pagination" class="swiper-pagination"></div>
      <div slot="button-prev" class="swiper-button-prev left-0 m-0"></div>
      <div slot="button-next" class="swiper-button-next right-0 m-0"></div>
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
.swiper-pagination {
    position: relative;
    text-align: right;
    top:0;
}
</style>