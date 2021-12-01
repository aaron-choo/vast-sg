<template>
  <main>
      <section class="project-header">
        <div class="w-full">
          <div id="header-text" class="w-full flex flex-col justify-center p-4 py-52 pt-60 relative">
            <h1 id="header-title" class="tracking-tight text-5xl uppercase overflow-hidden"><span v-for="(word, index) in titleWords" :key="index" class="title-words inline-block"><span v-for="(letter, index2) in Array.from(word)" :key="index2" class="">{{ letter }}</span>&nbsp;</span></h1>
            <p id="header-scope" class="inline-block tag capitalize text-3xl transition duration-300 transform leading-8"  :class="{ 'has-scroll-over opacity-0 translate-y-4': scrollOver }"><span class="summary font-light text-sm lg:text-base uppercase inline-block mr-16 -mb-4">(Scope)</span><span v-for="(tag, index) in tags" :key="tag" class="inline-block serif font-light">
                  {{ tag }}
                  <template v-if="Object.keys(tags).length > 1">
                  <span v-if="index != Object.keys(tags).length - 1">+</span>
                  &nbsp;
                  </template>
              </span>
            </p>
          </div>
          <div v-if="image.url !== undefined" id="header-image-wrapper" class="z-0 relative mx-4">
            <nuxt-img v-if="image.url" id="header-image" class="w-full rounded-lg" :src="image.url" sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"/>
          </div>
          <div class="description-section section my-24 px-4 lg:px-40">
            <p class="description-wrapper"><span class="summary font-light text-sm lg:text-base uppercase inline-block mr-16 mb-2 align-top">({{$prismic.asText(summary)}})</span><span v-for="(paragraph, index) in description" :key="index" class="description font-light serif text-xl lg:text-3xl">{{paragraph.text}}<br/></span></p>
          </div>
          <div v-if="projectLink" class="project-link section my-24 px-4 lg:px-40">
            <p class="description-wrapper mt-6"><span class="summary font-light text-sm lg:text-base uppercase inline-block mr-16 mb-2 align-top">(Live)</span><a :href="projectLink" target="_blank" class="description uppercase font-light text-xl lg:text-2xl">Visit Website ↗</a></p>
          </div>
          <hr class="h-px w-full opacity-20"/>
          <div id="header-separator" class="uppercase mt-4 mb-24 mx-4 pb-4 relative grid-cols-6 gap-x-4 grid font-light">
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

      <section id="more-projects" class="mt-80">
        <div id="contact-link" class="all-projects-link block relative whitespace-nowrap text-5xl sm:text-8xl font-light p-4 serif text-center">That's all folks!</div>
        <hr class="h-px w-full opacity-20"/>
        <nuxt-link to="/contact/">
          <div class="all-projects relative	overflow-hidden">
            <div id="contact-link" class="all-projects-link block relative tracking-tighter whitespace-nowrap text-4xl sm:text-6xl font-light p-4 uppercase text-right">Let's Chat</div>
            <div class="marquee absolute top-0 lef-0 overflow-hidden w-full h-full pointer-events-none">	
              <div class="marquee-inner-wrap flex overflow-hidden whitespace-nowrap">
                <div class="marquee-inner" aria-hidden="true">
                  <span class="whitespace-nowrap text-4xl md:text-6xl py-4 font-light uppercase text-center flex items-center w-max">Like what you see?<img src="/emoji-eyes.png" class="emoji h-10 md:h-14 relative mx-4"/>or just wanna say hi?<img src="/emoji-waving-hand.png" class="emoji h-10 md:h-14 relative mx-4"/></span>
                </div><!--/marquee-inner-->
                <div class="marquee-inner" aria-hidden="true">
                  <span class="whitespace-nowrap text-4xl md:text-6xl py-4 font-light uppercase text-center flex items-center w-max">Like what you see?<img src="/emoji-eyes.png" class="emoji h-10 md:h-14 relative mx-4"/>or just wanna say hi?<img src="/emoji-waving-hand.png" class="emoji h-10 md:h-14 relative mx-4"/></span>
                </div><!--/marquee-inner-->
              </div><!--/marquee-inner-wrap-->
            </div><!--/marquee-->
          </div>
        </nuxt-link>
        <hr class="h-px w-full opacity-20"/>
        <nuxt-link to="/projects/">
          <div class="all-projects relative	overflow-hidden">
            <div id="all-projects-link" class="all-projects-link block relative tracking-tighter whitespace-nowrap text-4xl sm:text-6xl font-light p-4 uppercase">← All Projects</div>
            <div class="marquee absolute top-0 lef-0 overflow-hidden w-full h-full pointer-events-none">	
              <div class="marquee-inner-wrap flex overflow-hidden whitespace-nowrap">
                <div class="marquee-inner reverse" aria-hidden="true">
                  <span v-for="project in latestProjects" :key="project" class="whitespace-nowrap text-4xl md:text-6xl py-4 font-light uppercase text-center flex">{{$prismic.asText(project.data.title)}}<span class="spinner relative mx-4">✺</span></span>
                </div><!--/marquee-inner-->
                <div class="marquee-inner reverse" aria-hidden="true">
                  <span v-for="project in latestProjects" :key="project" class="whitespace-nowrap text-4xl md:text-6xl py-4 font-light uppercase text-center flex">{{$prismic.asText(project.data.title)}}<span class="spinner relative mx-4">✺</span></span>
                </div><!--/marquee-inner-->
              </div><!--/marquee-inner-wrap-->
            </div><!--/marquee-->
          </div>
        </nuxt-link>
        <hr class="h-px w-full opacity-20"/>
        <!-- <div class="w-full p-4 py-12 relative">
          <h2 class="more-projects-header tracking-tight text-5xl uppercase flex">
            <span class="whitespace-nowrap w-1/2">Curious For More? </span>
          </h2>
        </div> -->
        <nuxt-link v-if="nextProject !== undefined" id="next-project-section" :to="$prismic.linkResolver(nextProject)" class="next-project-section sticky top-4 block">
        <div class="w-auto relative m-4">
            <div v-if="nextProjectImage.url !== undefined" id="next-header-image-wrapper" class=" z-0 absolute overflow-hidden w-full rounded-lg h-full">
              <div id="next-project-bg" class="absolute h-full w-full pointer-events-none opacity-70 z-10"></div>
              <nuxt-img v-if="nextProjectImage.url" id="next-header-image" class="w-full h-full object-cover z-0" :src="nextProjectImage.url" sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"/>
            </div>
            <p class="text-xl uppercase z-0 absolute top-0 left-0 p-4 opacity-50">Up next</p>
            <div id="next-header-text" class="w-full flex flex-col justify-center p-4 py-44 z-0">
              <!-- <p class="font-light text-sm lg:text-base uppercase z-0 mb-2">Next Project</p> -->
              <h3 id="next-header-title" class="tracking-tight text-5xl uppercase z-0">{{nextProjectTitle}}</h3>
              <p id="next-header-scope" class="font-light inline-block tag capitalize text-3xl leading-8 z-0"><span class="summary font-light text-sm lg:text-base uppercase inline-block mr-16 -mb-4">(Scope)</span><span v-for="(tag, index) in nextProjectTags" :key="tag"  class="inline-block serif">{{tag}}
                <template v-if="Object.keys(nextProjectTags).length > 1">
                    <span v-if="index != Object.keys(nextProjectTags).length - 1">+</span>
                    &nbsp;
                </template>
              </span>
              </p>
            </div>
        </div>
        </nuxt-link>
        <nuxt-link v-if="prevProject !== undefined" id="prev-project-section" :to="$prismic.linkResolver(prevProject)" class="prev-project-section sticky top-4 block">
        <div class="w-auto relative m-4">
            <div v-if="prevProjectImage.url !== undefined" id="prev-header-image-wrapper" class=" z-0 absolute overflow-hidden w-full rounded-lg h-full">
              <div id="prev-project-bg" class="absolute h-full w-full pointer-events-none opacity-70 z-10"></div>
              <nuxt-img v-if="prevProjectImage.url" id="next-header-image" class="w-full h-full object-cover z-0" :src="prevProjectImage.url" sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"/>
            </div>
            <p class="text-xl uppercase z-0 absolute top-0 left-0 p-4 opacity-50">Previously on</p>
            <div id="prev-header-text" class="w-full flex flex-col justify-center p-4 py-44 z-10">
              <h3 id="prev-header-title" class="tracking-tight text-5xl uppercase z-0">{{prevProjectTitle}}</h3>
              <p id="prev-header-scope" class="font-light inline-block tag capitalize text-3xl leading-8 z-0"><span class="summary font-light text-sm lg:text-base uppercase inline-block mr-16 -mb-4">(Scope)</span><span v-for="(tag, index) in prevProjectTags" :key="tag"  class="inline-block serif">{{tag}}
                <template v-if="Object.keys(prevProjectTags).length > 1">
                    <span v-if="index != Object.keys(prevProjectTags).length - 1">+</span>
                    &nbsp;
                </template>
              </span>
              </p>
            </div>
        </div>
        </nuxt-link>
      </section>

  </main>
</template>

<script>
import SliceZone from 'vue-slicezone'
import gsap from 'gsap'
// import GridPost from '~/components/GridPost'
export default {
  name: 'Project',
  components: {
    SliceZone
  },
  async asyncData({ $prismic, params, error }) {
    try {
        // Query post
        const project = await $prismic.api.getByUID('project', params.uid)
        const relatedProjects = await $prismic.api.query(
          [
            $prismic.predicates.similar(project.id, 10),
            $prismic.predicates.at('document.type', 'project')
          ],
          { pageSize: 3 }
        )
        const NextProject = (await $prismic.api.query($prismic.predicates.at('document.type', 'project'), { pageSize : 1 , after : `${project.id}`, orderings: '[my.project.date desc]'})).results[0] || (await $prismic.api.query($prismic.predicates.at('document.type', 'project'), { pageSize : 1 , orderings: '[my.project.date desc]'})).results[0]
        const PrevProject = (await $prismic.api.query($prismic.predicates.at('document.type', 'project'), { pageSize : 1 , after : `${project.id}`, orderings: '[my.project.date]'})).results[0] || (await $prismic.api.query($prismic.predicates.at('document.type', 'project'), { pageSize : 1 , orderings: '[my.project.date]'})).results[0]
        const LatestProjects = (await $prismic.api.query($prismic.predicates.at('document.type', 'project'), { pageSize : 4 , orderings: '[my.project.date]'})).results
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
        backgroundColor: project.data.backgroundColor,
        textColor: project.data.textColor,
        tags: project.tags,
        projectLink: project.data.link.url,
        relatedProjects: relatedProjects.results,
        nextProject: NextProject,
        nextProjectTitle: $prismic.asText(NextProject.data.title),
        nextProjectTags: NextProject.tags,
        nextProjectImage: NextProject.data.image,
        nextTextColor: NextProject.data.textColor,
        nextBackgroundColor: NextProject.data.backgroundColor,
        prevProject: PrevProject,
        prevProjectTitle: $prismic.asText(PrevProject.data.title),
        prevProjectTags: PrevProject.tags,
        prevProjectImage: PrevProject.data.image,
        prevTextColor: PrevProject.data.textColor,
        prevBackgroundColor: PrevProject.data.backgroundColor,
        latestProjects: LatestProjects
        }

    } catch (e) {
        // Returns error page
        error({ statusCode: 404, message: 'Page not found' })
    }
  },
    data() {
        return {
        scrollOver: false
        }
  },
  head () {
    return {
      title: this.$prismic.asText(this.page.data.metaTitle),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$prismic.asText(this.page.data.metaDescription)
        }
      ]
    }
  },
  beforeMount() {
    document.documentElement.style.setProperty('--bg', this.page.data.backgroundColor);
    document.documentElement.style.setProperty('--color-primary', this.page.data.textColor);
    document.documentElement.style.setProperty('--color', this.page.data.textColor);
  },
  mounted() {
    this.headerAnimation();
    window.addEventListener('scroll', this.headerScroll);
    window.addEventListener('scroll', this.onScroll);
    document.getElementById('next-project-section').style.color=this.nextTextColor;
    document.getElementById('next-project-bg').style.backgroundColor=this.nextBackgroundColor;
    document.getElementById('prev-project-section').style.color=this.prevTextColor;
    document.getElementById('prev-project-bg').style.backgroundColor=this.prevBackgroundColor;
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
      const screenHeight = window.innerHeight;
      if (document.documentElement.scrollTop < screenHeight) {
      document.getElementById('header-text').style.transform = "translateY(" + document.documentElement.scrollTop/1.8 + "px)"
       }
    },
    headerAnimation() {
      gsap.set("#header-title span", {y: -30, opacity: 0 });
      gsap.set("#header-scope span", {y: 15, opacity: 0 });
      gsap.set("#header-image", {y: 30, opacity: 0 });
      gsap.to("#header-image", {y: 0, opacity: 1, duration: 1, ease: 'power4.out' }).delay(1.25)
      gsap.to("#header-title span", {y: 0, opacity: 1, stagger: 0.02, duration: 1, ease: 'power4.out' })
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
.dark-mode #next-project-bg {
  background-color: var(--bg) !important;
}
#next-header-text, #prev-header-text {
  min-height: calc(100vh - 2em);
}
.dark-mode #next-header-text {
  color: var(--color) !important;
}
a.next-project-section img, a.prev-project-section img{
  transition: 1s ease;
}
a.next-project-section:hover img, a.prev-project-section:hover img{
  transform:scale(1.02);
}
.marquee {
	background: var(--color);
  color: var(--bg);
	transform: translate3d(0,101%,0);
  transition: .3s ease;
}

.marquee-inner-wrap {
	height: 100%;
	width: 100%;
	transform: translate3d(0,-101%,0);
  transition: .3s ease;
}

.all-projects:hover .marquee,.all-projects:hover .marquee-inner-wrap{
  transform: translate3d(0,0,0);
}

.marquee-inner {
	height: 100%;
	width: fit-content;
	align-items: center;
	display: flex;
	position: relative;
	animation: marquee 10s linear infinite;
	will-change: transform;
}

.marquee-inner.reverse {
	animation: marquee 20s linear reverse infinite;
}

span.spinner {
    bottom: 0.02em;
    transform-origin: 50% 55%;
    animation: rotate 5s linear infinite;
}

@keyframes marquee {
	100% {
		transform: translate3d(-100%, 0, 0);
	}
}
@keyframes rotate {
	100% {
		transform: rotate(360deg);
	}
}

.description:nth-child(n+3) {
  display: inline-block;
  text-indent: 4em;
}
</style>