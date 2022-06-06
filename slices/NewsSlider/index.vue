<template>
  <div class="module news-slider section my-24">
    <div class="slider-container">
      <div v-swiper="swiperOption" class="swiper-container relative">
        <div class="swiper-wrapper">
          <div class="swiper-slide px-4 lg:px-8 self-end">
            <p
              class="
                summary
                relative
                text-sm
                lg:text-base
                uppercase
                inline-block
                mr-16
                -mb-4
                dot
              "
            >
              Latest News
            </p>
            <p
              class="text-2xl lg:text-3xl font-light heading-font pr-8"
              style="max-width: 18em"
            >
              Stay up-to-date on our latest news by following us on
              <a
                class="inline-block relative"
                href="https://facebook.com/vast.sg"
                target="_blank"
                aria-label="Connect with us on Facebook"
                tabindex="0"
                tabposition="bottom"
                rel="noopener"
              >
                <h2>Facebook</h2>
                <div
                  class="
                    u
                    left-px
                    origin-right
                    transition
                    duration-500
                    absolute
                    bottom-0
                    h-px
                  "
                >
                  <div
                    class="
                      transition-transform
                      duration-500
                      origin-left
                      w-full
                      h-full
                    "
                  ></div>
                </div> </a
              >,
              <a
                class="inline-block relative"
                href="https://instagram.com/vast.sg"
                target="_blank"
                aria-label="Connect with us on Instagram"
                tabindex="0"
                tabposition="bottom"
                rel="noopener"
              >
                <h2>Instagram</h2>
                <div
                  class="
                    u
                    left-px
                    origin-right
                    transition
                    duration-500
                    absolute
                    bottom-0
                    h-px
                  "
                >
                  <div
                    class="
                      transition-transform
                      duration-500
                      origin-left
                      w-full
                      h-full
                    "
                  ></div>
                </div>
              </a>
              and
              <a
                class="inline-block relative"
                href="https://www.linkedin.com/company/vast-sg/"
                target="_blank"
                aria-label="Connect with us on LinkedIn"
                tabindex="0"
                tabposition="bottom"
                rel="noopener"
              >
                <h2>LinkedIn</h2>
                <div
                  class="
                    u
                    left-px
                    origin-right
                    transition
                    duration-500
                    absolute
                    bottom-0
                    h-px
                  "
                >
                  <div
                    class="
                      transition-transform
                      duration-500
                      origin-left
                      w-full
                      h-full
                    "
                  ></div>
                </div> </a
              >.
            </p>
          </div>
          <div
            v-for="(item, index) in articles.results"
            :key="index"
            class="swiper-slide self-end pr-4 lg:pr-8"
          >
            <nuxt-img
              v-if="item.data.image.url"
              format="webp"
              :src="item.data.image.url"
              sizes="sm:65vw md:45vw lg:40vw xl:40vw 2xl:30vw"
              :width="item.data.image.dimensions.width"
              :height="item.data.image.dimensions.height"
              class="image rounded-lg"
              loading="lazy"
            />
            <article class="pt-4">
              <date class="opacity-50 heading-font uppercase">{{
                Intl.DateTimeFormat('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }).format($prismic.asDate(item.data.date))
              }}</date>
              <h2 class="uppercase text-lg lg:text-xl">
                {{ item.data.title }}
              </h2>

              <prismic-text
                class="h-28 mt-2 leading-snug"
                :field="item.data.description"
              />
              <a
                class="live-link heading-font uppercase opacity-50"
                target="_blank"
                :href="item.data.link.url"
                >{{ item.data.link.url.slice(8) }}
                <span
                  data-v-1521915d=""
                  class="live-link-arrow inline-block align-top body-font"
                  >↗</span
                ></a
              >
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { directive } from 'vue-awesome-swiper'
export default {
  name: 'NewsSlider',
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
        effect: 'slide',
        freeMode: {
          enabled: true,
          sticky: true,
        },
        mousewheel: {
          forceToAxis: true,
        },
        grabCursor: true,
        slidesPerView: 'auto',
      },
      articles: {},
    }
  },
  async fetch() {
    this.articles = await this.$prismic.api.query(
      this.$prismic.predicates.at('document.type', 'news'),
      {
        orderings: '[my.news.date desc]',
        pageSize: 14,
      }
    )
  },
  methods: {},
}
</script>
<style scoped>
.swiper-slide {
  width: 65%;
}
.swiper-slide:first-child {
  width: 50%;
  min-width: 340px;
}

@media (min-width: 640px) {
  .swiper-slide {
    width: 45%;
  }
}

@media (min-width: 768px) {
  .swiper-slide {
    width: 37.5%;
  }
}
@media (min-width: 1280px) {
  .swiper-slide {
    width: 27.5%;
  }
}
img {
  width: 100%;
}

.swiper-container {
  mask-image: -webkit-radial-gradient(white, black);
  -webkit-mask-image: -webkit-radial-gradient(white, black);
}

.live-link-arrow {
  position: relative;
  overflow: hidden;
  color: transparent;
}
.live-link-arrow::before {
  color: var(--color);
  content: '↗';
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
.live-link-arrow::after {
  color: var(--color);
  content: '↗';
  position: absolute;
  right: 1em;
  bottom: -1em;
  width: 100%;
  height: 100%;
}
.live-link:hover .live-link-arrow::before,
.live-link:hover .live-link-arrow::after {
  animation: livelinkarrow 1s infinite;
}
@keyframes livelinkarrow {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(1em, -1em);
  }
}
</style>
