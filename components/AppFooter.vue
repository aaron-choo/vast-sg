<template>
  <footer id="footer" class="footer overflow-hidden relative">
    <hr id="footer-hr" class="h-px w-full opacity-20" />
    <div class="fade absolute top-px w-full h-40 pointer-events-none"></div>
    <div
      class="fade absolute bottom-0 w-full h-40 transform rotate-180 pointer-events-none"
    ></div>
    <div
      class="absolute bottom-7 w-full z-10 flex justify-center align-center md:bottom-11 transition duration-300"
    >
      <button
        :class="{ hidden: !creditsFast }"
        class="speed-toggle down uppercase"
        @mousedown="resumeAnimation()"
      >
        <div class="rounded-full text-center overflow-hidden">
          <div
            class="btn-txt-wrap h-auto rounded-full overflow-visible transition duration-300 relative"
          >
            <div
              class="btn-txt transition duration-300 px-2 h-auto flex justify-center items-center relative"
            >
              Speed ↓
            </div>
          </div>
        </div>
      </button>
      <button
        :class="{ hidden: creditsFast }"
        class="speed-toggle up uppercase"
        @mousedown="speedAnimation()"
      >
        <div class="rounded-full text-center overflow-hidden">
          <div
            class="btn-txt-wrap h-auto rounded-full overflow-visible transition duration-300 relative"
          >
            <div
              class="btn-txt transition duration-300 px-2 h-auto flex justify-center items-center relative"
            >
              Speed ↑
            </div>
          </div>
        </div>
      </button>
    </div>
    <div
      id="credits-roll"
      class="credits mx-4 lg:mx-40 text-center uppercase relative h-screen"
    >
      <div
        class="marquee-vertical absolute top-0 left-0 overflow-hidden w-full h-full font-xs"
      >
        <div class="marquee-inner-wrap overflow-hidden">
          <div class="marquee-inner relative py-40">
            <ul class="grid grid-cols-1 gap-x-4 lg:grid-cols-2 items-start">
              <li class="col-span-1 lg:col-span-2">
                <LogoAscii
                  class="logo-ascii inline-block w-2/3 h-auto mb-8 opacity-50"
                />
              </li>
              <li
                class="col-span-1 lg:col-span-2 grid grid-cols-2 gap-x-4 leading-tight"
              >
                <p class="text-xs md:text-base text-right">
                  A <b>Vast</b> Production
                </p>
                <p class="text-xs md:text-base text-left"></p>
                <p class="text-xs md:text-base text-right">by</p>
                <p class="text-xs md:text-base text-left"></p>
                <p class="text-xs md:text-base text-right">
                  <nuxt-link to="/">VAST Design</nuxt-link>
                </p>
                <p class="text-xs md:text-base text-left"></p>
              </li>
              <li class="grid grid-cols-2 gap-x-4 leading-tight">
                <p
                  class="col-span-2 font-medium text-base tracking-wider text-center my-4 mt-8 md:my-6 md:mt-12"
                >
                  Contact
                </p>
                <p class="text-xs md:text-base text-right font-medium">
                  Telephone
                </p>
                <p class="text-xs md:text-base text-left">
                  <a href="tel:+6569424062" aria-label="Call us">
                    +65-6942-4062
                  </a>
                </p>
                <p class="text-xs md:text-base text-right font-medium">Email</p>
                <p class="text-xs md:text-base text-left">
                  <a
                    href="mailto:hello@vast.sg"
                    aria-label="Email us"
                    rel="noopener"
                  >
                    hello@vast.sg
                  </a>
                </p>
                <p class="text-xs md:text-base text-right font-medium">
                  Address
                </p>
                <p class="text-xs md:text-base text-left">1°18’22”N</p>
                <p class="text-xs md:text-base text-right font-medium"></p>
                <p class="text-xs md:text-base text-left">103°51’16”E</p>
                <p class="text-xs md:text-base text-right font-medium"></p>
                <p class="text-xs md:text-base text-left">
                  <a
                    href="https://maps.google.com/?q=VAST%20632%20Veerasamy%20Road%20#19-102"
                    target="_blank"
                    class="link-arrow-before out"
                    aria-label="View on map"
                    rel="noopener"
                    >View map</a
                  >
                </p>
                <p class="text-xs md:text-base text-right font-medium">
                  Local Time
                </p>
                <p class="text-xs md:text-base text-left">
                  {{ $moment().tz('Asia/Singapore').format('hh:mm A') }} SGT
                </p>
                <p class="text-xs md:text-base text-right font-medium"></p>
                <p class="text-xs md:text-base text-left">
                  {{ $moment().format('D MMMM Y') }}
                </p>
              </li>
              <li class="grid grid-cols-2 gap-x-4 leading-tight">
                <p
                  class="col-span-2 font-medium text-base tracking-wider text-center my-4 mt-8 md:my-6 md:mt-12"
                >
                  Social
                </p>
                <p class="text-xs md:text-base text-right font-medium">
                  Dribbble
                </p>
                <p class="text-xs md:text-base text-left">
                  <a
                    href="https://dribbble.com/vastdesign"
                    target="_blank"
                    aria-label="Connect with us on Dribbble"
                  >
                    vastdesign
                  </a>
                </p>
                <p class="text-xs md:text-base text-right font-medium">
                  Facebook
                </p>
                <p class="text-xs md:text-base text-left">
                  <a
                    href="https://facebook.com/vast.sg"
                    target="_blank"
                    aria-label="Connect with us on Facebook"
                    >vast.sg</a
                  >
                </p>
                <p class="text-xs md:text-base text-right font-medium">
                  Instagram
                </p>
                <p class="text-xs md:text-base text-left">
                  <a
                    href="https://instagram.com/vast.sg"
                    target="_blank"
                    aria-label="Connect with us on Instagram"
                  >
                    vast.sg
                  </a>
                </p>
                <p class="text-xs md:text-base text-right font-medium">
                  LinkedIn
                </p>
                <p class="text-xs md:text-base text-left">
                  <a
                    href="https://www.linkedin.com/company/vast-sg/"
                    target="_blank"
                    aria-label="Connect with us on LinkedIn"
                  >
                    vast-sg
                  </a>
                </p>
              </li>
              <li class="grid grid-cols-2 gap-x-4 leading-tight">
                <p
                  class="col-span-2 font-medium text-base tracking-wider text-center my-4 mt-8 md:my-6 md:mt-12"
                >
                  Technologies
                </p>
                <p class="text-xs md:text-base text-right font-medium">
                  Web Application Framework
                </p>
                <p class="text-xs md:text-base text-left">
                  <a href="https://nuxtjs.org/" target="_blank" rel="noopener">
                    Nuxt.JS (Vue.js)
                  </a>
                </p>
                <p class="text-xs md:text-base text-right font-medium">
                  CSS Framework
                </p>
                <p class="text-xs md:text-base text-left">
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noopener"
                  >
                    TailwindCSS
                  </a>
                </p>
                <p class="text-xs md:text-base text-right font-medium">
                  Headless CMS
                </p>
                <p class="text-xs md:text-base text-left">
                  <a href="https://prismic.io/" target="_blank" rel="noopener">
                    Prismic
                  </a>
                </p>
                <p class="text-xs md:text-base text-right font-medium">
                  Deployment Infrastructure
                </p>
                <p class="text-xs md:text-base text-left">
                  <a
                    href="https://www.netlify.com/"
                    target="_blank"
                    rel="noopener"
                  >
                    Netlify
                  </a>
                </p>
              </li>
              <li class="grid grid-cols-2 gap-x-4 leading-tight">
                <p
                  class="col-span-2 font-medium text-base tracking-wider text-center my-4 mt-8 md:my-6 md:mt-12"
                >
                  Credits
                </p>
                <p class="text-xs md:text-base text-right font-medium">
                  Background Music
                </p>
                <p class="text-xs md:text-base text-left">
                  <a
                    href="https://open.spotify.com/artist/73aKnLT4O8G2pBEfdlQzrE"
                    target="_blank"
                    rel="noopener"
                  >
                    Calm Waters (Purrple Cat)
                  </a>
                </p>
                <p class="text-xs md:text-base text-right font-medium">
                  Typography
                </p>
                <p class="text-xs md:text-base text-left">
                  <a
                    href="https://www.renebieder.com/retail-fonts/freigeist"
                    target="_blank"
                    rel="noopener"
                  >
                    Freigeist (Studio René Bieder)
                  </a>
                </p>
                <p class="text-xs md:text-base text-right font-medium"></p>
                <p class="text-xs md:text-base text-left">
                  <a
                    href="https://www.behance.net/gallery/78862427/Tropiline-Font-Family"
                    target="_blank"
                    rel="noopener"
                  >
                    Tropiline (Cahya Sofyan)
                  </a>
                </p>
              </li>
              <li class="col-span-1 lg:col-span-2">
                <p
                  class="font-medium text-base tracking-wider text-center mt-8"
                >
                  Special Thanks
                </p>
                <p class="text-xs md:text-base text-center">
                  All clients and friends of VAST
                </p>
              </li>
              <li class="text-center lg:text-right">
                <Logo class="logo inline-block mt-12" />
              </li>
              <li class="text-center lg:text-left">
                <LogoSquare
                  class="logo-square inline-block h-16 lg:ml-16 mt-8"
                />
              </li>
              <li class="rating col-span-1 lg:col-span-2 leading-tight mt-10">
                <div class="mx-auto block w-60 h-12 border flex">
                  <div
                    class="w-20 border-r serif text-3xl font-bold flex items-center justify-center pt-2"
                  >
                    PG
                  </div>
                  <div
                    class="w-full h-full flex flex-col items-center justify-center"
                  >
                    <div
                      class="w-full border-b h-5 text-sm font-medium flex items-center justify-center"
                    >
                      Phenomenally Good
                    </div>
                    <div
                      class="w-full h-full leading-none text-xs flex items-center justify-center"
                    >
                      The Contents of this Site Will Blow Your Mind
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="marquee-inner relative py-40">
            <ul class="grid grid-cols-1 gap-x-4 lg:grid-cols-2 items-start">
              <li class="col-span-1 lg:col-span-2">
                <LogoAscii
                  class="logo-ascii inline-block w-2/3 h-auto mb-8 opacity-50"
                />
              </li>
              <li
                class="col-span-1 lg:col-span-2 grid grid-cols-2 gap-x-4 leading-tight"
              >
                <p class="text-xs md:text-base text-right">
                  A <b>Vast</b> Production
                </p>
                <p class="text-xs md:text-base text-left"></p>
                <p class="text-xs md:text-base text-right">by</p>
                <p class="text-xs md:text-base text-left"></p>
                <p class="text-xs md:text-base text-right">
                  <nuxt-link to="/">VAST Design</nuxt-link>
                </p>
                <p class="text-xs md:text-base text-left"></p>
              </li>
              <li class="grid grid-cols-2 gap-x-4 leading-tight">
                <p
                  class="col-span-2 font-medium text-base tracking-wider text-center my-4 mt-8 md:my-6 md:mt-12"
                >
                  Contact
                </p>
                <p class="text-xs md:text-base text-right font-medium">
                  Telephone
                </p>
                <p class="text-xs md:text-base text-left">
                  <a href="tel:+6569424062" aria-label="Call us">
                    +65-6942-4062
                  </a>
                </p>
                <p class="text-xs md:text-base text-right font-medium">Email</p>
                <p class="text-xs md:text-base text-left">
                  <a
                    href="mailto:hello@vast.sg"
                    aria-label="Email us"
                    rel="noopener"
                  >
                    hello@vast.sg
                  </a>
                </p>
                <p class="text-xs md:text-base text-right font-medium">
                  Address
                </p>
                <p class="text-xs md:text-base text-left">1°18’22”N</p>
                <p class="text-xs md:text-base text-right font-medium"></p>
                <p class="text-xs md:text-base text-left">103°51’16”E</p>
                <p class="text-xs md:text-base text-right font-medium"></p>
                <p class="text-xs md:text-base text-left">
                  <a
                    href="https://maps.google.com/?q=VAST%20632%20Veerasamy%20Road%20#19-102"
                    target="_blank"
                    class="link-arrow-before out"
                    aria-label="View on map"
                    rel="noopener"
                    >View map</a
                  >
                </p>
                <p class="text-xs md:text-base text-right font-medium">
                  Local Time
                </p>
                <p class="text-xs md:text-base text-left">
                  {{ $moment().tz('Asia/Singapore').format('hh:mm A') }} SGT
                </p>
                <p class="text-xs md:text-base text-right font-medium"></p>
                <p class="text-xs md:text-base text-left">
                  {{ $moment().format('D MMMM Y') }}
                </p>
              </li>
              <li class="grid grid-cols-2 gap-x-4 leading-tight">
                <p
                  class="col-span-2 font-medium text-base tracking-wider text-center my-4 mt-8 md:my-6 md:mt-12"
                >
                  Social
                </p>
                <p class="text-xs md:text-base text-right font-medium">
                  Dribbble
                </p>
                <p class="text-xs md:text-base text-left">
                  <a
                    href="https://dribbble.com/vastdesign"
                    target="_blank"
                    aria-label="Connect with us on Dribbble"
                  >
                    vastdesign
                  </a>
                </p>
                <p class="text-xs md:text-base text-right font-medium">
                  Facebook
                </p>
                <p class="text-xs md:text-base text-left">
                  <a
                    href="https://facebook.com/vast.sg"
                    target="_blank"
                    aria-label="Connect with us on Facebook"
                    >vast.sg</a
                  >
                </p>
                <p class="text-xs md:text-base text-right font-medium">
                  Instagram
                </p>
                <p class="text-xs md:text-base text-left">
                  <a
                    href="https://instagram.com/vast.sg"
                    target="_blank"
                    aria-label="Connect with us on Instagram"
                  >
                    vast.sg
                  </a>
                </p>
                <p class="text-xs md:text-base text-right font-medium">
                  LinkedIn
                </p>
                <p class="text-xs md:text-base text-left">
                  <a
                    href="https://www.linkedin.com/company/vast-sg/"
                    target="_blank"
                    aria-label="Connect with us on LinkedIn"
                  >
                    vast-sg
                  </a>
                </p>
              </li>
              <li class="grid grid-cols-2 gap-x-4 leading-tight">
                <p
                  class="col-span-2 font-medium text-base tracking-wider text-center my-4 mt-8 md:my-6 md:mt-12"
                >
                  Technologies
                </p>
                <p class="text-xs md:text-base text-right font-medium">
                  Web Application Framework
                </p>
                <p class="text-xs md:text-base text-left">
                  <a href="https://nuxtjs.org/" target="_blank" rel="noopener">
                    Nuxt.JS (Vue.js)
                  </a>
                </p>
                <p class="text-xs md:text-base text-right font-medium">
                  CSS Framework
                </p>
                <p class="text-xs md:text-base text-left">
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noopener"
                  >
                    TailwindCSS
                  </a>
                </p>
                <p class="text-xs md:text-base text-right font-medium">
                  Headless CMS
                </p>
                <p class="text-xs md:text-base text-left">
                  <a href="https://prismic.io/" target="_blank" rel="noopener">
                    Prismic
                  </a>
                </p>
                <p class="text-xs md:text-base text-right font-medium">
                  Deployment Infrastructure
                </p>
                <p class="text-xs md:text-base text-left">
                  <a
                    href="https://www.netlify.com/"
                    target="_blank"
                    rel="noopener"
                  >
                    Netlify
                  </a>
                </p>
              </li>
              <li class="grid grid-cols-2 gap-x-4 leading-tight">
                <p
                  class="col-span-2 font-medium text-base tracking-wider text-center my-4 mt-8 md:my-6 md:mt-12"
                >
                  Credits
                </p>
                <p class="text-xs md:text-base text-right font-medium">
                  Background Music
                </p>
                <p class="text-xs md:text-base text-left">
                  <a
                    href="https://open.spotify.com/artist/73aKnLT4O8G2pBEfdlQzrE"
                    target="_blank"
                    rel="noopener"
                  >
                    Calm Waters (Purrple Cat)
                  </a>
                </p>
                <p class="text-xs md:text-base text-right font-medium">
                  Typography
                </p>
                <p class="text-xs md:text-base text-left">
                  <a
                    href="https://www.renebieder.com/retail-fonts/freigeist"
                    target="_blank"
                    rel="noopener"
                  >
                    Freigeist (Studio René Bieder)
                  </a>
                </p>
                <p class="text-xs md:text-base text-right font-medium"></p>
                <p class="text-xs md:text-base text-left">
                  <a
                    href="https://www.behance.net/gallery/78862427/Tropiline-Font-Family"
                    target="_blank"
                    rel="noopener"
                  >
                    Tropiline (Cahya Sofyan)
                  </a>
                </p>
              </li>
              <li class="col-span-1 lg:col-span-2">
                <p
                  class="font-medium text-base tracking-wider text-center mt-8"
                >
                  Special Thanks
                </p>
                <p class="text-xs md:text-base text-center">
                  All clients and friends of VAST
                </p>
              </li>
              <li class="text-center lg:text-right">
                <Logo class="logo inline-block mt-12" />
              </li>
              <li class="text-center lg:text-left">
                <LogoSquare
                  class="logo-square inline-block h-16 lg:ml-16 mt-8"
                />
              </li>
              <li class="rating col-span-1 lg:col-span-2 leading-tight mt-10">
                <div class="mx-auto block w-60 h-12 border flex">
                  <div
                    class="w-20 border-r serif text-3xl font-bold flex items-center justify-center pt-2"
                  >
                    PG
                  </div>
                  <div
                    class="w-full h-full flex flex-col items-center justify-center"
                  >
                    <div
                      class="w-full border-b h-5 text-sm font-medium flex items-center justify-center"
                    >
                      Phenomenally Good
                    </div>
                    <div
                      class="w-full h-full leading-none text-xs flex items-center justify-center"
                    >
                      The Contents of this Site Will Blow Your Mind
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import gsap from 'gsap'
import Logo from '@/components/Logo'
import LogoSquare from '@/components/LogoSquare'
import LogoAscii from '@/components/LogoAscii'
export default {
  name: 'AppFooter',
  components: {
    Logo,
    LogoSquare,
    LogoAscii,
  },
  data() {
    return {
      creditsSpeed: 68,
      creditsFast: false,
    }
  },
  mounted() {
    const gsap = this.$gsap
    const ExpoScaleEase = this.$ExpoScaleEase
    const ScrollToPlugin = this.$ScrollToPlugin
    const ScrollTrigger = this.$ScrollTrigger
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, ExpoScaleEase)
    const tl = gsap.timeline({ repeat: -1 })
    tl.to('#credits-roll .marquee-inner', {
      y: '-100%',
      duration: this.creditsSpeed,
      ease: 'linear',
    }).timeScale(1)
    this.creditsAppear()
  },
  methods: {
     creditsAppear(){
      gsap.set('#footer', { opacity: 0 })
      gsap.to('#footer', {
        scrollTrigger: {
          trigger: '#footer',
          start: 'top center',
          end: 'center bottom',
          scrub: false,
          pin: false,
          markers: false,
          toggleActions: 'restart none reverse none'
        },
        opacity: 1,
        ease: 'none',
        duration: .3
      })
    },
    speedAnimation() {
      const currentY =
        -gsap.getProperty('#credits-roll .marquee-inner', 'y') / 100
      // console.log(currentY)
      // console.log(this.creditsSpeed)
      // const tl = gsap.timeline({repeat: -1})
      // tl.fromTo("#credits-roll .marquee-inner", {y: '0%'}, {y: '-100%', duration: this.creditsSpeed, ease: 'linear'}).timeScale(0.2).seek(currentY*this.creditsSpeed);
      this.creditsFast = true
      const tween = gsap
        .timeline({ repeat: -1 })
        .fromTo(
          '#credits-roll .marquee-inner',
          { y: '0%' },
          { y: '-100%', duration: this.creditsSpeed, ease: 'linear' }
        )
        .timeScale(1)
        .seek(currentY * this.creditsSpeed)
      gsap.to(tween, { timeScale: 8, duration: 1 })
    },
    resumeAnimation() {
      // const tl = gsap.timeline({repeat: -1})
      const newY = -gsap.getProperty('#credits-roll .marquee-inner', 'y') / 100
      // // console.log(newY)
      // tl.fromTo("#credits-roll .marquee-inner", {y: '0%'}, {y: '-100%', duration: this.creditsSpeed, ease: 'linear'}).timeScale(1).seek(newY*this.creditsSpeed);
      this.creditsFast = false
      const tween = gsap
        .timeline({ repeat: -1 })
        .fromTo(
          '#credits-roll .marquee-inner',
          { y: '0%' },
          { y: '-100%', duration: this.creditsSpeed, ease: 'linear' }
        )
        .timeScale(8)
        .seek(newY * this.creditsSpeed)
      gsap.to(tween, { timeScale: 1, duration: 1 })
    },
  },
}
</script>
<style scoped>
.logo {
  width: 8em;
  padding-top: 2em;
}
.logo-big {
  width: 50vw;
  padding-top: 12.5vw;
}
.logo::before {
  content: '©';
  opacity: 0;
  position: absolute;
  bottom: 0;
  left: -1.2em;
}
.credits-header {
  letter-spacing: 0.25em;
}
.credit-entry a {
  transition: 0.5s ease;
}
.credit-entry a:hover {
  opacity: 0.5;
}
.credits-logo {
  font-size: 0.8vw;
  line-height: 1.3;
  letter-spacing: 0.05em;
}
.rating * {
  border-color: var(--color);
}
.marquee-inner-wrap {
  height: 100%;
  width: 100%;
}
.fade {
  background: var(--bg);
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0))
  );
  z-index: 1;
  transition: background 0.3s ease;
}
.btn-txt {
  color: var(--color);
  z-index: 2;
}
.speed-toggle:hover .btn-txt {
  color: var(--bg);
}
.speed-toggle > div {
  background: var(--bg);
  mask-image: -webkit-radial-gradient(white, black);
  -webkit-mask-image: -webkit-radial-gradient(white, black);
}
.btn-txt-wrap::after,
.btn-txt-wrap::before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 2em;
  transition: transform 0.3s;
  border: 1px solid var(--color);
}
.btn-txt-wrap::before {
  z-index: 0;
}
.up .btn-txt-wrap::after {
  z-index: 1;
  transform: scaleY(0);
  transform-origin: top;
  background-color: var(--color);
}
.down .btn-txt-wrap::after {
  z-index: 1;
  transform: scaleY(0);
  transform-origin: bottom;
  background-color: var(--color);
}
.up:hover .btn-txt-wrap::after {
  transform: scaleY(1);
  transform-origin: bottom;
}
.down:hover .btn-txt-wrap::after {
  transform: scaleY(1);
  transform-origin: top;
}
</style>
