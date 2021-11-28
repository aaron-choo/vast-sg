<template>
  <main>
      <section class="project-header">
        <div class="w-full">
          <div id="header-text" class="w-full flex flex-col justify-center p-4 py-52 pt-60 relative">
            <h1 id="header-title" class="tracking-tight text-5xl uppercase overflow-hidden mb-4"><span v-for="word in titleWords" :key="word" class="inline-block"><span v-for="letter in Array.from(word)" :key="letter" class="inline-block">{{ letter }}</span>&nbsp;</span></h1>
            <p id="header-scope" class="font-light inline-block tag capitalize text-3xl transition duration-300 leading-3 transform"  :class="{ 'has-scroll-over opacity-0 translate-y-4': scrollOver }"><span class="summary font-light text-sm lg:text-base uppercase inline-block mr-16 mb-2">(Scope)</span><span v-for="(tag, index) in tags" :key="tag" class="inline-block serif">
                  {{ tag }}
                  <template v-if="Object.keys(tags).length > 1">
                  <span v-if="index != Object.keys(tags).length - 1">+</span>
                  &nbsp;
                  </template>
              </span>
            </p>
          </div>
          <div v-if="image.url !== undefined" id="header-image-wrapper" class="z-0 relative">
            <nuxt-img v-if="image.url" id="header-image" class="w-full" :src="image.url" sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"/>
          </div>
          <div class="description-section section my-24 px-4 lg:px-40">
            <p class="description-wrapper"><span class="summary font-light text-sm lg:text-base uppercase inline-block mr-16 mb-2 align-top">({{$prismic.asText(summary)}})</span><span class="description font-light serif text-xl lg:text-3xl">{{$prismic.asText(description)}}</span></p>
          </div>
          <div v-if="projectLink" class="project-link section my-24 px-4 lg:px-40">
            <p class="description-wrapper mt-6"><span class="summary font-light text-sm lg:text-base uppercase inline-block mr-16 mb-2 align-top">(Live)</span><a :href="projectLink" target="_blank" class="description uppercase font-light text-xl lg:text-2xl">Visit Website ↗</a></p>
          </div>
          <div id="header-separator" class="uppercase my-24 mx-4 pb-4 relative grid-cols-6 gap-x-4 grid font-light">
            <div class="col-span-4 lg:col-span-2">
              <span>{{$prismic.asText(client)}}</span>
            </div>
            <div class="col-span-2 lg:col-span-1 text-right">
              <span>{{date.substring(0, 4)}}</span>
            </div>
            <div class="col-span-6 lg:col-span-3 text-left lg:text-right"><span v-for="(tag, index) in tags" :key="tag">{{ tag }}<template v-if="Object.keys(tags).length > 1"><span v-if="index != Object.keys(tags).length - 1"> / </span></template></span>
            </div>
          </div>
        </div>
      </section>
 
      <section class="content">
        <slice-zone type="project" :uid="$route.params.uid" />
      </section>

      <section v-if="relatedProjects.length > 0" class="more-projects grid grid-cols-12 gap-4 p-4 py-52">
        <div class="col-span-12">
          <h2 class="text-2xl tracking-wider text-center uppercase text-bold">Related posts</h2>
        </div>
        <div v-for="project in relatedProjects" :key="project.id" class="col-span-12 lg:col-span-6">
          <GridPost :projectdata="project" :imgsize="'(min-width: 768px) 25vw, 90vw'" />
        </div>
      </section>
  </main>
</template>

<script>
import SliceZone from 'vue-slicezone'
import gsap from 'gsap'
import GridPost from '~/components/GridPost'
export default {
  name: 'Project',
  components: {
    SliceZone,
    GridPost
  },
  async asyncData({ $prismic, params, error }) {
    try {
        // Query post
        const project = await $prismic.api.getByUID('project', params.uid)
        const relatedprojects = await $prismic.api.query(
          [
            $prismic.predicates.similar(project.id, 10),
            $prismic.predicates.at('document.type', 'project')
          ],
          { pageSize: 3 }
        )
        // Returns data to be used in template
        return {
        page: project,
        title: project.data.title,
        titleSplit: Array.from($prismic.asText(project.data.title)),
        titleWords: Array.from($prismic.asText(project.data.title).split(' ')),
        date: project.data.date,
        description: project.data.description,
        summary: project.data.summary,
        client: project.data.client,
        image: project.data.image,
        backgroundColor: project.data.background_color,
        textColor: project.data.text_color,
        tags: project.tags,
        projectLink: project.data.link.url,
        relatedProjects: relatedprojects.results
        }

    } catch (e) {
        // Returns error page
        error({ statusCode: 404, message: 'Page not found' })
    }
  },
    data() {
        return {
        menuOpen: false,
        scrollOver: false,
        colors: [{name: 'light', symbol: ' '}, {name: 'dark', symbol: ' '}]
        }
  },
  head () {
    return {
      title: this.$prismic.asText(this.page.data['meta-title']),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$prismic
            .asText(this.page.data['meta-description'])
            .substring(0, 158)
        }
      ]
    }
  },
  beforeMount() {
    document.documentElement.style.setProperty('--bg', this.page.data['background-color']);
    document.documentElement.style.setProperty('--color-primary', this.page.data['text-color']);
    document.documentElement.style.setProperty('--color', this.page.data['text-color']);
  },
  mounted() {
    this.headerAnimation();
    window.addEventListener('scroll', this.headerScroll);
    window.addEventListener('scroll', this.onScroll);
  },
  destroyed() {
    document.documentElement.style.setProperty('--bg', '');
    document.documentElement.style.setProperty('--color-primary', '');
    document.documentElement.style.setProperty('--color', '');
    window.removeEventListener('scroll', this.headerScroll);
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    headerScroll () {
      document.getElementById('header-text').style.transform = "translateY(" + document.documentElement.scrollTop/1.8 + "px)"
    },
    headerAnimation() {
      gsap.set("#header-title span", {y: -30, opacity: 0 });
      gsap.set("#header-scope span", {y: 15, opacity: 0 });
      gsap.set("#header-image", {y: 30, opacity: 0 });
      gsap.to("#header-image", {y: 0, opacity: 1, duration: 1, ease: 'power4.out' }).delay(1.25)
      gsap.to("#header-title span", {y: 0, opacity: 1, stagger: 0.01, duration: 1, ease: 'power4.out' })
      gsap.to("#header-scope span", {y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: 'power4.out' }).delay(0.5)
    },
    onScroll () {
      // Get the current scroll position
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
      return
      }
      if (currentScrollPosition > 0) {
      this.scrollOver = true
      } else {
      this.scrollOver = false
      }
    }
  }
}
</script>
<style scoped>
#header-image img{
  width: 100%;
}
</style>