<template>
  <section class="section mb-24">
    <div v-swiper="swiperOption" class="relative overflow-hidden">
      <div class="swiper-wrapper h-screen">
        <div v-for="(item, index) in slice.items" :key="index" class="swiper-slide">
            <div class="absolute top-0 left-0 bottom-0 right-0 z-10 flex flex-col justify-end p-4">
              <prismic-rich-text :field="item.title" class="text-xl serif"/>
              <prismic-rich-text :field="item.subtitle" class="text-xl serif"/>
            </div>
            <img class="transition duration-700 clip-1 absolute" :src="item.image.url"/>
            <img class="transition duration-700 clip-2 absolute" :src="item.image.url"/>
            <img class="transition-transform animate ease-out" :src="item.image.url"/>  
        </div>
      </div>
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
          crossFade: false
        },
        autoplay: {
          delay: 3000,
        },
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
.clip-1 {
  clip-path: circle(30% at 80% 100%);
  filter:contrast(1.2) saturate(1.2);
  z-index: 1;
}
.clip-2 {
  clip-path: circle(35% at 20% 0%);
  filter:contrast(1.2) saturate(1.2);
  z-index: 1;
}
.animate{
  transform: scale(1.07);
  transition: transform 1.5s ease-out;
}
.swiper-slide-active .animate{
  transform: scale(1);
}
.swiper-slide, .swiper-container {
  height:auto;
}
.swiper-slide img {
  height:100vh;
  width: 100%;
  object-fit: cover;
}
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
.serif {
  font-family: 'Tropiline', serif;
}
</style>