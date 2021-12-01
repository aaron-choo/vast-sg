<template>
  <section class="section px-4 lg:px-40 my-24" :class="slice.primary.align">
    <div v-swiper="swiperOption" class="slider-block relative overflow-hidden rounded-lg">
      <div class="swiper-wrapper">
        <div v-for="(item, index) in slice.items" :key="index" class="swiper-slide">
            <nuxt-img v-if="item.image.url" :src="item.image.url" sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw" class="image"/>
        </div>
      </div>
      <div slot="pagination" class="swiper-pagination text-xs lg:text-sm absolute text-right top-0 left-0 h-full w-full mix-blend-difference p-2 flex justify-end items-end"></div>
      <div slot="button-prev" class="swiper-button-prev left-0 m-0" @mouseover="cursorPrev()" @mouseleave="cursorReset()"></div>
      <div slot="button-next" class="swiper-button-next right-0 m-0" @mouseover="cursorNext()" @mouseleave="cursorReset()"></div>
    </div>
  </section>
</template>

<script>
import { directive } from "vue-awesome-swiper"
import gsap from 'gsap'
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
  },
  methods: {
    cursorPrev() {
      const cursor = document.querySelector(".cursor");
      const cursorSmall = document.querySelector(".cursor-small");
      document.getElementById('app-cursor').classList.add('prev');
      gsap.to(cursor, 0.3,  {height: 60, width: 60, top: -30, left: -30});
      gsap.to(cursorSmall, 0.3,  {height: 60, width: 60, top: -30, left: -30});
    },
    cursorNext() {
      const cursor = document.querySelector(".cursor");
      const cursorSmall = document.querySelector(".cursor-small");
      document.getElementById('app-cursor').classList.add('next');
      gsap.to(cursor, 0.3,  {height: 60, width: 60, top: -30, left: -30});
      gsap.to(cursorSmall, 0.3,  {height: 60, width: 60, top: -30, left: -30});
    },
    cursorReset() {
      const cursor = document.querySelector(".cursor");
      const cursorSmall = document.querySelector(".cursor-small");
      document.getElementById('app-cursor').classList.remove('next');
      document.getElementById('app-cursor').classList.remove('prev');
      gsap.to(cursor, 0.3, {height: 16, width: 16, top: -8, left: -8});
      gsap.to(cursorSmall, 0.3, {height: 16, width: 16, top: -8, left: -8});
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
.swiper-pagination{
  letter-spacing: .2em;
}
section.left>div, section.right>div, section.center>div {
  width: 75%;
}
section.left>div {
  margin-left: 0;
}
section.right>div {
  margin-right: 0;
}
.slider-block {
  -webkit-mask-image: -webkit-radial-gradient(white, black);
}
@media (min-width: 1024px) {
  section.left>div, section.right>div, section.center>div {
    width: calc(50% - .5em);
  }
}
</style>