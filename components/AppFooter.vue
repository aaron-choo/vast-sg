<template>
  <footer id="footer" class="footer relative p-4">
    <div class="footer-container relative grid lg:gap-y-3 uppercase">
      <p class="text-sm lg:text-base uppercase">(Socials)</p>
      <p class="font-light text-3xl lg:text-5xl header-font">
        <a class="relative inline-block" href="https://facebook.com/vast.sg" target="_blank"
          aria-label="Connect with us on Facebook" tabindex="0" tabposition="bottom" rel="noopener"><span
            class="link-text"></span>Facebook</span>
          <div class="
                  u
                  left-px
                  origin-right
                  transition
                  duration-500
                  absolute
                  bottom-1
                  h-0.5
                ">
            <div class="
                    transition-transform
                    duration-500
                    origin-left
                    w-full
                    h-full
                  "></div>
          </div>
        </a><br><a class="relative inline-block" href="https://instagram.com/vast.sg" target="_blank"
          aria-label="Connect with us on Instagram" tabindex="0" tabposition="bottom" rel="noopener"><span
            class="link-text"></span>Instagram</span>
          <div class="
                  u
                  left-px
                  origin-right
                  transition
                  duration-500
                  absolute
                  bottom-1
                  h-0.5
                ">
            <div class="
                    transition-transform
                    duration-500
                    origin-left
                    w-full
                    h-full
                  "></div>
          </div>
        </a><br><a class="relative inline-block" href="https://www.linkedin.com/company/vast-sg/" target="_blank"
          aria-label="Connect with us on LinkedIn" tabindex="0" tabposition="bottom" rel="noopener"><span
            class="link-text"></span>LinkedIn</span>
          <div class="
                  u
                  left-px
                  origin-right
                  transition
                  duration-500
                  absolute
                  bottom-1
                  h-0.5
                ">
            <div class="
                    transition-transform
                    duration-500
                    origin-left
                    w-full
                    h-full
                  "></div>
          </div>
        </a><br><a class="relative inline-block" href="https://dribbble.com/vastdesign" target="_blank"
          aria-label="Connect with us on Dribbble" tabindex="0" tabposition="bottom" rel="noopener"><span
            class="link-text"></span>Dribbble</span>
          <div class="
                  u
                  left-px
                  origin-right
                  transition
                  duration-500
                  absolute
                  bottom-1
                  h-0.5
                ">
            <div class="
                    transition-transform
                    duration-500
                    origin-left
                    w-full
                    h-full
                  "></div>
          </div>
        </a>
      </p>
      <p class="text-sm lg:text-base uppercase">(Email)</p>
      <p class="font-light text-3xl lg:text-5xl header-font"><a class="relative inline-block"
          href="mailto:hello@vast.sg" aria-label="Email us" rel="noopener">
          <span class="link-text">hello@vast.sg</span>
          <div class="
                  u
                  left-px
                  origin-right
                  transition
                  duration-500
                  absolute
                  bottom-1
                  h-0.5
                ">
            <div class="
                    transition-transform
                    duration-500
                    origin-left
                    w-full
                    h-full
                  "></div>
          </div>
        </a>
      </p>
      <p class="text-sm lg:text-base uppercase">(Phone)</p>
      <p class="font-light text-3xl lg:text-5xl header-font"><a class="relative inline-block" href="tel:+6569424062"
          aria-label="Call us" rel="noopener"><span class="link-text">+65 6942 4062</span>
          <div class="
                  u
                  left-px
                  origin-right
                  transition
                  duration-500
                  absolute
                  bottom-1
                  h-0.5
                ">
            <div class="
                    transition-transform
                    duration-500
                    origin-left
                    w-full
                    h-full
                  "></div>
          </div>
        </a>
      </p>
      <p class="text-sm lg:text-base uppercase">(Studio)</p>
      <p class="font-light text-3xl lg:text-5xl header-font"><a class="relative inline-block"
          href="https://maps.google.com/?q=VAST%20632%20Veerasamy%20Road%20#19-102" target="_blank"
          aria-label="View on map" rel="noopener"><span class="link-text">1°18’22”N<br />103°51’16”E</span>
          <div class="
                  u
                  left-px
                  origin-right
                  transition
                  duration-500
                  absolute
                  bottom-1
                  h-0.5
                ">
            <div class="
                    transition-transform
                    duration-500
                    origin-left
                    w-full
                    h-full
                  "></div>
          </div>
        </a>
      </p>
    </div>
    <div class="footer-logo-container mt-20 mb-4 overflow-hidden">
      <Logo class="logo" />
    </div>
    <p class="text-sm lg:text-base uppercase text-right">© 2021-2022 · VAST</p>
  </footer>
</template>
<script>
import gsap from 'gsap'
import Logo from '@/components/Logo'
export default {
  name: 'AppFooter',
  components: {
    Logo
  },
  data() {
    return {
    }
  },
  mounted() {
    this.animations()
  },
  methods: {
    animations() {
      gsap.set('#footer .logo-block div', {
        translateY: '25vw',
        borderRadius: 0,
        width: '25%',
      })
      gsap.set('#footer .logo-block-t-bottom', {
        left: '75%',
      })
      gsap.to('#footer .logo-block-v', {
        scrollTrigger: {
          trigger: '.footer-logo-container',
          start: 'top bottom',
          end: '20% bottom',
          scrub:true,
        },
        translateY: 0,
        ease:"none",
      })
      gsap.to('#footer .logo-block-v', {
        scrollTrigger: {
          trigger: '.footer-logo-container',
          start: '80% bottom',
          end: 'bottom bottom',
          scrub:2,
        },
        ease:"none",
        borderRadius: '0 0 50% 50%',
      })
      gsap.to('#footer .logo-block-a', {
        scrollTrigger: {
          trigger: '.footer-logo-container',
          start: '20% bottom',
          end: '40% bottom',
          scrub:true,
        },
        translateY: 0,
        ease:"none",
      })
      gsap.to('#footer .logo-block-a', {
        scrollTrigger: {
          trigger: '.footer-logo-container',
          start: '80% bottom',
          end: 'bottom bottom',
          scrub:2,
        },
        ease:"none",
        borderRadius: '50% 50% 0 0',
      })
      gsap.to('#footer .logo-block-s', {
        scrollTrigger: {
          trigger: '.footer-logo-container',
          start: '40% bottom',
          end: '60% bottom',
          scrub:true,
        },
        translateY: 0,
        ease:"none",
      })
      gsap.to('#footer .logo-block-s-top', {
        scrollTrigger: {
          trigger: '.footer-logo-container',
          start: '80% bottom',
          end: 'bottom bottom',
          scrub:2,
        },
        ease:"none",
        borderRadius: '6.25vw 0 0 6.25vw',
      })
      gsap.to('#footer .logo-block-s-bottom', {
        scrollTrigger: {
          trigger: '.footer-logo-container',
          start: '80% bottom',
          end: 'bottom bottom',
          scrub:2,
        },
        ease:"none",
        borderRadius: '6.25vw',
      })
      gsap.to('#footer .logo-block-t', {
        scrollTrigger: {
          trigger: '.footer-logo-container',
          start: '60% bottom',
          end: '80% bottom',
          scrub:true,
        },
        translateY: 0,
        ease:"none",
      })
       gsap.to('#footer .logo-block-t-bottom', {
        scrollTrigger: {
          trigger: '.footer-logo-container',
          start: '80% bottom',
          end: 'bottom bottom',
          scrub:2,
        },
        width: '12.5%',
        left: '81.25%',
        ease:"none",
      })
    },
  },
}
</script>
<style scoped>
.footer-container {
  grid-template-columns: 9em 1fr;
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
</style>
