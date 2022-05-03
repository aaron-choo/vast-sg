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
  async asyncData({ $prismic, params, error }) {
    try {
      // Query post
      const project = await $prismic.api.getByUID('project', params.uid)
      const relatedProjects = await $prismic.api.query(
        [
          $prismic.predicates.similar(project.id, 10),
          $prismic.predicates.at('document.type', 'project'),
        ],
        { pageSize: 3 }
      )
      const NextProject =
        (
          await $prismic.api.query(
            $prismic.predicates.at('document.type', 'project'),
            {
              pageSize: 1,
              after: `${project.id}`,
              orderings: '[my.project.date desc]',
            }
          )
        ).results[0] ||
        (
          await $prismic.api.query(
            $prismic.predicates.at('document.type', 'project'),
            { pageSize: 1, orderings: '[my.project.date desc]' }
          )
        ).results[0]
      const PrevProject =
        (
          await $prismic.api.query(
            $prismic.predicates.at('document.type', 'project'),
            {
              pageSize: 1,
              after: `${project.id}`,
              orderings: '[my.project.date]',
            }
          )
        ).results[0] ||
        (
          await $prismic.api.query(
            $prismic.predicates.at('document.type', 'project'),
            { pageSize: 1, orderings: '[my.project.date]' }
          )
        ).results[0]
      const LatestProjects = (
        await $prismic.api.query(
          $prismic.predicates.at('document.type', 'project'),
          { pageSize: 4, orderings: '[my.project.date]' }
        )
      ).results
      // Returns data to be used in template
      return {
        page: project,
        title: project.data.title,
        titleWords: Array.from($prismic.asText(project.data.title).split(' ')),
        date: project.data.date,
        description: project.data.description,
        summary: project.data.summary,
        client: project.data.client,
        image: project.data.image,
        backgroundColor: project.data.backgroundColor,
        textColor: project.data.textColor,
        tags: project.tags,
        projectLink: project.data.link.url,
        relatedProjects: relatedProjects.results,
        nextProject: NextProject,
        nextProjectTitleWords: Array.from(
          $prismic.asText(NextProject.data.title).split(' ')
        ),
        nextProjectTags: NextProject.tags,
        nextProjectImage: NextProject.data.image,
        nextTextColor: NextProject.data.textColor,
        nextBackgroundColor: NextProject.data.backgroundColor,
        prevProject: PrevProject,
        prevProjectTitleWords: Array.from(
          $prismic.asText(PrevProject.data.title).split(' ')
        ),
        prevProjectTags: PrevProject.tags,
        prevProjectImage: PrevProject.data.image,
        prevTextColor: PrevProject.data.textColor,
        prevBackgroundColor: PrevProject.data.backgroundColor,
        latestProjects: LatestProjects,
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
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