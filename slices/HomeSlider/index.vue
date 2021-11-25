<template>
  <section class="section mb-24">
    <div v-swiper="swiperOption" class="relative overflow-hidden">
      <div class="swiper-wrapper h-screen">
        <div v-for="(item, index) in slice.items" :key="index" class="swiper-slide">
            <div class="absolute top-0 left-0 bottom-0 right-0 z-10 flex flex-col justify-end p-4">
              <prismic-rich-text :field="item.title" class="text-xl serif"/>
              <prismic-rich-text :field="item.subtitle" class="text-xl serif"/>
            </div>
            <img class="transition-transform animate ease-out" :src="item.image.url"/>  
        </div>
        <div slot="pagination" class="swiper-pagination w-full h-full flex justify-center items-center"></div>
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
        allowTouchMove: false,
        speed: 0,
        effect: 'fade',
        fadeEffect: {
          crossFade: false,
        },
        autoplay: {
          delay: 80,
          pauseOnMouseEnter: false,
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          bulletClass: "slide-trigger",
          clickable: true,
        },
      }
    }
  },
  mounted() {
    document.querySelectorAll('.slide-trigger').forEach(item => {
      item.addEventListener('mouseover', event => {
        console.log("test");
        item.click();
      })
    })
  }
}
</script>
<style scoped>
.animate{
  opacity: 0;
  transition: opacity .3s ease;
}
.swiper-slide-active .animate{
  opacity: 1;
  transition: opacity 0s;
}
.swiper-slide, .swiper-container {
  height:auto;
}
.swiper-slide img {
  height:100vh;
  width: 100%;
  object-fit: contain;
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

<style>
.slide-trigger {
    height: 30vh;
    display:inline-block;
    opacity: 0;
    animation: appear .3s ease 3s forwards;
}
@keyframes appear {
  from {
    width:0;
  }  
  to {
    width:3vw;
  }
}
</style>