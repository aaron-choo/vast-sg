<template>
  <main>
    <article>
      <div class="project-header">
        <div class="w-full">
          <div id="header-text" class="w-full flex flex-col justify-center p-4 py-32 mt-10 z-0 relative">
            <!-- <h1 id="header-title" class="tracking-tighter text-5xl lg:text-8xl">{{ $prismic.asText(title) }}</h1> -->
            <!-- <h1 id="header-title" class="tracking-tighter text-5xl md:text-8xl overflow-hidden"><span><span v-for="character in titleSplit" :key="character" class="inline-block">{{ character.replace(/\s/g, "&nbsp;") }}</span></h1> -->
            <h1 id="header-title" class="tracking-tighter text-5xl md:text-8xl overflow-hidden"><span v-for="word in titleWords" :key="word" class="inline-block"><span v-for="letter in Array.from(word)" :key="letter" class="inline-block">{{ letter }}</span>&nbsp;</span></h1>
            <p id="header-scope" class="font-light inline-block tag tracking-tighter capitalize text-4xl md:text-5xl">
              <span v-for="(tag, index) in tags" :key="tag">
                  {{ tag }}
                  <template v-if="Object.keys(tags).length > 1">
                    <span v-if="index != Object.keys(tags).length - 1">+</span>
                  </template>
              </span>
            </p>
          </div>
          <div id="header-image" v-if="heroimage.url !== undefined" class="px-4 z-10 relative">
            <img :src="heroimage.url" class="rounded-2xl"/>
          </div>
          <div class="description-wrapper px-4">
            <p class="description tracking-tighter uppercase text-5xl lg:text-4xl">{{$prismic.asText(description)}}</p>
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
        date: project.date,
        description: project.data.description,
        heroimage: project.data.image,
        backgroundColor: project.data.background_color,
        textColor: project.data.text_color,
        tags: project.tags
        }

    } catch (e) {
        // Returns error page
        error({ statusCode: 404, message: 'Page not found' })
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
  },
  destroyed() {
    document.documentElement.style.setProperty('--bg', '');
    document.documentElement.style.setProperty('--color-primary', '');
    document.documentElement.style.setProperty('--color', '');
  },
  methods: {
    headerScroll () {
      document.getElementById('header-text').style.transform = "translateY(" + document.documentElement.scrollTop/1.8 + "px)"
    },
    headerAnimation() {
      gsap.set("#header-title span", {y: -30, opacity: 0 });
      gsap.set("#header-scope span", {y: -30, opacity: 0 });
      gsap.set("#header-image", {y: 30, opacity: 0 });
      gsap.to("#header-image", {y: 0, opacity: 1, duration: 1, ease: 'power4.out' })
      gsap.to("#header-title span", {y: 0, opacity: 1, stagger: 0.01, duration: 1, ease: 'power4.out' })
      gsap.to("#header-scope span", {y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: 'power4.out' }).delay(1)
    }
  }
}
</script>
<style scoped>
#header-title{
  line-height: 0.8;
}
#header-title>span>span{
    margin-bottom: 0.25em;
}
</style>