<template>
  <footer id="footer" class="footer relative p-4">
    <div class="
        my-4
        tracking-tight
        leading-none
        text-4xl
        lg:text-7xl
        uppercase
        header-font
        footer-header-container
        overflow-hidden
      ">
      <div class="footer-header">
        <span v-for="(word, index) in footerHeaderWords" :key="index" class="inline-block overflow-hidden"><span
            v-for="(letter, index2) in Array.from(word)" :key="index2" class="letter inline-block">{{ letter
            }}</span>&nbsp;</span>
      </div>
    </div>
    <div class="footer-container relative grid lg:gap-y-3 my-4">
      <p class="text-sm lg:text-base uppercase">(Socials)</p>
      <p class="font-light text-3xl sm:text-4xl lg:text-5xl flex gap-1">
        <a class="facebook relative inline-block mb-1" href="https://facebook.com/vast.sg" target="_blank"
          aria-label="Connect with us on Facebook" tabindex="0" tabposition="bottom" rel="noopener">
          <div class="social-btn rounded-full text-center overflow-hidden">
            <div class="
                btn-txt-wrap
                h-auto
                rounded-full
                overflow-visible
                transition
                duration-300
                relative
              ">
              <div class="
                  btn-txt
                  transition
                  duration-300
                  px-2
                  md:px-3
                  lg:px-4
                  h-auto
                  flex
                  justify-center
                  items-center
                  relative
                ">
                FB
              </div>
            </div>
          </div>
        </a>
        <a class="instagram relative inline-block mb-1" href="https://instagram.com/vast.sg" target="_blank"
          aria-label="Connect with us on Instagram" tabindex="0" tabposition="bottom" rel="noopener">
          <div class="social-btn rounded-full text-center overflow-hidden">
            <div class="
                btn-txt-wrap
                h-auto
                rounded-full
                overflow-visible
                transition
                duration-300
                relative
              ">
              <div class="
                  btn-txt
                  transition
                  duration-300
                  px-2
                  md:px-3
                  lg:px-4
                  h-auto
                  flex
                  justify-center
                  items-center
                  relative
                ">
                IG
              </div>
            </div>
          </div>
        </a>
        <a class="linkedin relative inline-block mb-1" href="https://www.linkedin.com/company/vast-sg/" target="_blank"
          aria-label="Connect with us on LinkedIn" tabindex="0" tabposition="bottom" rel="noopener">
          <div class="social-btn rounded-full text-center overflow-hidden">
            <div class="
                btn-txt-wrap
                h-auto
                rounded-full
                overflow-visible
                transition
                duration-300
                relative
              ">
              <div class="
                  btn-txt
                  transition
                  duration-300
                  px-2
                  md:px-3
                  lg:px-4
                  h-auto
                  flex
                  justify-center
                  items-center
                  relative
                ">
                LI
              </div>
            </div>
          </div>
        </a>
        <a class="dribbble relative inline-block" href="https://dribbble.com/vastdesign" target="_blank"
          aria-label="Connect with us on Dribbble" tabindex="0" tabposition="bottom" rel="noopener">
          <div class="social-btn rounded-full text-center overflow-hidden">
            <div class="
                btn-txt-wrap
                h-auto
                rounded-full
                overflow-visible
                transition
                duration-300
                relative
              ">
              <div class="
                  btn-txt
                  transition
                  duration-300
                  px-2
                  md:px-3
                  lg:px-4
                  h-auto
                  flex
                  justify-center
                  items-center
                  relative
                ">
                DR
              </div>
            </div>
          </div>
        </a>
      </p>
      <p class="text-sm lg:text-base uppercase">(Email)</p>
      <p class="font-light text-3xl sm:text-4xl lg:text-5xl">
        <a class="relative inline-block" href="mailto:hello@vast.sg" aria-label="Email us" rel="noopener">
          <div class="rounded-full text-center overflow-hidden">
            <div class="
                btn-txt-wrap
                h-auto
                rounded-full
                overflow-visible
                transition
                duration-300
                relative
              ">
              <div class="
                  btn-txt
                  transition
                  duration-300
                  px-2
                  md:px-3
                  lg:px-4
                  h-auto
                  flex
                  justify-center
                  items-center
                  relative
                ">
                HELLO@VAST.SG
              </div>
            </div>
          </div>
        </a>
      </p>
      <p class="text-sm lg:text-base uppercase">(Phone)</p>
      <p class="font-light text-3xl sm:text-4xl lg:text-5xl">
        <a class="relative inline-block" href="tel:+6569424062" aria-label="Call us" rel="noopener">
          <div class="rounded-full text-center overflow-hidden">
            <div class="
                btn-txt-wrap
                h-auto
                rounded-full
                overflow-visible
                transition
                duration-300
                relative
              ">
              <div class="
                  btn-txt
                  transition
                  duration-300
                  px-2
                  md:px-3
                  lg:px-4
                  h-auto
                  flex
                  justify-center
                  items-center
                  relative
                ">
                +65 6942 4062
              </div>
            </div>
          </div>
        </a>
      </p>
      <p class="text-sm lg:text-base uppercase">(Studio)</p>
      <p class="font-light text-3xl sm:text-4xl lg:text-5xl">
        <a class="relative inline-block" href="https://maps.google.com/?q=VAST%20632%20Veerasamy%20Road%20#19-102"
          target="_blank" aria-label="View on map" rel="noopener">
          <div class="rounded-full text-center overflow-hidden">
            <div class="
                btn-txt-wrap
                h-auto
                rounded-full
                overflow-visible
                transition
                duration-300
                relative
              ">
              <div class="
                  btn-txt
                  transition
                  duration-300
                  px-2
                  md:px-3
                  lg:px-4
                  h-auto
                  flex
                  justify-center
                  items-center
                  relative
                ">
                1°18’22”N 103°51’16”E
              </div>
            </div>
          </div>
        </a>
      </p>
    </div>
    <div class="copyright flex items-end justify-end">
      <div class="copyright-text text-base mr-px">©</div>
      <div class="footer-logo-container h-6 w-24">
        <Logo class="logo" />
      </div>
    </div>
  </footer>
</template>
<script>
import gsap from 'gsap'
import Logo from '@/components/Logo'
export default {
  name: 'AppFooter',
  components: {
    Logo,
  },
  data() {
    return {
      footerHeaderWords: Array.from("Looking to build something awesome?".split(' '))
    }
  },
  mounted() {
    this.animations()
  },
  methods: {
    animations() {
      gsap.set('.footer-header .letter', {
        translateY: '-1em',
      })
      gsap.to('.footer-header .letter', {
        scrollTrigger: {
          trigger: '.footer-container',
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 2,
        },
        translateY: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power4.easeOut',
      })
    }
  },
}
</script>
<style scoped>
.footer-container {
  grid-template-columns: 6em 1fr;
}

@media (min-width: 1024px) {
  .footer-container {
    grid-template-columns: 9em 1fr;
  }
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
  border-radius: 1em;
  transition: transform 0.3s, background 0.3s;
}

.btn-txt-wrap::before {
  z-index: 0;
  background-color: var(--color);
  opacity: .1;
}

.btn-txt-wrap::after {
  z-index: 1;
  transform: scaleY(0);
  transform-origin: bottom;
  background: var(--color);
}

.btn-txt {
  z-index: 2;
  min-width: 1.8em;
}

.btn-txt:hover {
  color: var(--bg);
}

.social-btn .btn-txt:hover {
  color: #fff;
}

.facebook .btn-txt-wrap::after {
  background: #4267b2;
}

.instagram .btn-txt-wrap::after {
  background: linear-gradient(200deg,
      rgba(79, 91, 213, 1) 0%,
      rgba(150, 47, 191, 1) 25%,
      rgba(214, 41, 118, 1) 50%,
      rgba(250, 126, 30, 1) 75%,
      rgba(254, 218, 117, 1) 100%)
}

.linkedin .btn-txt-wrap::after {
  background: #2867b2;
}

.dribbble .btn-txt-wrap::after {
  background: linear-gradient(200deg, rgb(219, 73, 130) 0%, rgb(169, 31, 85) 100%);
}


.btn-txt-wrap:hover::after {
  transform: scaleY(1);
  transform-origin: top;
}

.u {
  width: calc(100% - 1px);
  transform: scaleX(0);
}

a:hover .u {
  transform: scaleX(1);
  transform-origin: left;
}

.u div {
  transform: scaleX(1);
  background-color: var(--color-primary);
}

.copyright-text {
  line-height: 1;
}
</style>
