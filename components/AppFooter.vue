<template>
  <footer id="footer" class="footer">
    <div
      class="
        footer-container
        justify-end
        flex flex-col
        lg:flex-row
        gap-4 gap-y-2
        p-4
        lg:p-8
        items-end
        heading-font
        uppercase
        text-sm
        leading-none
        lg:text-base lg:leading-none
      "
    >
      <p
        class="flex socials gap-4 transition delay-300 duration-700 transform"
        :class="{
          'translate-y-0 opacity-100': scrollEnd,
          '-translate-y-4 opacity-0': !scrollEnd,
        }"
      >
        <a
          class="facebook dot cursor-facebook"
          href="https://facebook.com/vast.sg"
          target="_blank"
          aria-label="Connect with us on Facebook"
          tabindex="0"
          tabposition="bottom"
          rel="noopener"
        >
        </a>
        <a
          class="instagram dot cursor-instagram"
          href="https://instagram.com/vast.sg"
          target="_blank"
          aria-label="Connect with us on Instagram"
          tabindex="0"
          tabposition="bottom"
          rel="noopener"
        >
        </a>
        <a
          class="linkedin dot cursor-linkedin"
          href="https://www.linkedin.com/company/vast-sg/"
          target="_blank"
          aria-label="Connect with us on LinkedIn"
          tabindex="0"
          tabposition="bottom"
          rel="noopener"
        >
        </a>
        <a
          class="dribbble dot cursor-dribbble"
          href="https://dribbble.com/vastdesign"
          target="_blank"
          aria-label="Connect with us on Dribbble"
          tabindex="0"
          tabposition="bottom"
          rel="noopener"
        >
        </a>
      </p>
      <p class="flex items-end gap-4 gap-y-2 flex-col lg:flex-row">
        <span
          class="flex gap-2 transition delay-400 duration-700 transform"
          :class="{
            'translate-y-0 opacity-100': scrollEnd,
            '-translate-y-4 opacity-0': !scrollEnd,
          }"
        >
          <a
            class="relative"
            href="https://maps.google.com/?q=VAST%20632%20Veerasamy%20Road%20#19-102"
            target="_blank"
            aria-label="View on map"
            rel="noopener"
            ><span>Studio</span>
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
          <a
            class="relative"
            href="tel:+6569424062"
            aria-label="Call us"
            rel="noopener"
          >
            <span>Phone</span>
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
          <a
            class="relative"
            href="mailto:hello@vast.sg"
            aria-label="Email us"
            rel="noopener"
          >
            <span>Email</span>
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
        </span>
        <span
          class="flex gap-4 transition delay-500 duration-700 transform"
          :class="{
            'translate-y-0 opacity-50': scrollEnd,
            '-translate-y-4 opacity-0': !scrollEnd,
          }"
        >
          <a class="relative" href="/" aria-label="Copyright" rel="noopener">
            <span>Privacy</span>
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
          <p>© 2021-2022</p>
        </span>
      </p>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'AppFooter',
  components: {},
  data() {
    return {
      scrollEnd: false,
      footerHeaderWords: Array.from('Building something awesome?'.split(' ')),
    }
  },
  mounted() {
    window.addEventListener('scroll', this.checkScrollEnd)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkScrollEnd)
  },
  methods: {
    checkScrollEnd() {
      if (
        window.innerHeight + window.scrollY + 32 >=
        document.body.offsetHeight
      ) {
        console.log('reached end')
        this.scrollEnd = true
      } else {
        this.scrollEnd = false
      }
    },
  },
}
</script>
<style scoped>
.socials .dot::before {
  color: transparent !important;
  background-clip: text !important;
  margin: 0;
}
.facebook.dot::before {
  background: #4267b2;
}

.instagram.dot::before {
  background: linear-gradient(
    225deg,
    rgba(79, 91, 213, 1) 0%,
    rgba(150, 47, 191, 1) 25%,
    rgba(214, 41, 118, 1) 50%,
    rgba(250, 126, 30, 1) 75%,
    rgba(254, 218, 117, 1) 100%
  );
}

.linkedin.dot::before {
  background: #2867b2;
}

.dribbble.dot::before {
  background: linear-gradient(
    225deg,
    rgb(219, 73, 130) 0%,
    rgb(169, 31, 85) 100%
  );
}

.u {
  width: calc(100% - 1px);
  transform: scaleX(0);
}

a:hover .u,
.site-nav-body:not(.hover) .nuxt-link-exact-active .u {
  transform: scaleX(1);
  transform-origin: left;
}

.u div {
  transform: scaleX(1);
  background-color: currentColor;
}
</style>
