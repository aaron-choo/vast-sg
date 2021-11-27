<template>
  <main>
    <article>
      <div class="project-header">
        <div class="w-full">
          <div id="header-text" class="w-full flex flex-col justify-center p-4 py-32 pt-40 relative">
            <h1 id="header-title" class="tracking-tight text-5xl md:text-5xl uppercase overflow-hidden"><span v-for="word in titleWords" :key="word" class="inline-block"><span v-for="letter in Array.from(word)" :key="letter" class="inline-block">{{ letter }}</span>&nbsp;</span></h1>
            <p id="header-scope" class="font-light inline-block tag capitalize text-3xl md:text-3xl transition duration-300"  :class="{ 'has-scroll-over opacity-0': scrollOver }"><span class="summary font-light text-sm lg:text-base uppercase inline-block mr-16 mb-2">(Scope)</span>
              <span v-for="(tag, index) in tags" :key="tag" class="inline-block serif">
                  {{ tag }}
                  <template v-if="Object.keys(tags).length > 1">
                  <span v-if="index != Object.keys(tags).length - 1">+</span>
                  &nbsp;
                  </template>
              </span>
            </p>
          </div>
          <div id="header-image" v-if="image.url !== undefined" class="px-4 z-0 relative">
            <img :src="image.url" class="rounded-2xl"/>
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
      </div>
 
      <div class="content">
        <slice-zone type="project" :uid="$route.params.uid" />
      </div>
    </article>
  </main>
</template>

<script>
import SliceZone from 'vue-slicezone'
import gsap from 'gsap'
export default {
  name: 'Project',
  components: {
    SliceZone
  },
  async asyncData({ $prismic, params, error }) {
    try {
        // Query post
        const project = await $prismic.api.getByUID('project', params.uid)
    
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
        projectLink: project.data.link.url
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
      gsap.to("#header-image", {y: 0, opacity: 1, duration: 1, ease: 'power4.out' })
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
#header-title{
  line-height: 0.8;
  margin-bottom: -.2em;
}
#header-title>span>span{
    margin-bottom: 0.25em;
}
#header-image img{
  width: 100%;
}
</style>