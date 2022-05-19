<template>
  <header class="header relative z-20">
    <div
      class="logo-wrap fixed top-4 left-4 transition duration-300"
      :class="{ 'has-scroll-over opacity-0 pointer-events-none': scrollOver }"
    >
      <nuxt-link to="/" class="logo">
        <Logo class="w-28 logo" />
      </nuxt-link>
    </div>
    <div
      class="
        music-switcher
        fixed
        top-4
        right-4
        transition
        duration-300
        rounded-full
      "
      :class="{
        'has-scroll-over opacity-0 pointer-events-none': scrollOver,
        active: audio,
      }"
    >
      <a
        class="
          audio
          relative
          flex
          h-full
          w-full
          justify-center
          leading-none
          cursor-pointer
        "
        @mousedown="togglebgm()"
      >
        <div class="icon block pointer-event-none">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            height="28"
            width="28"
            viewBox="0 0 60 60"
            style="enable-background: new 0 0 60 60"
            xml:space="preserve"
          >
            <path
              d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M8.459,23.165	c-0.11,0.459-0.521,0.767-0.972,0.767c-0.077,0-0.156-0.009-0.234-0.027c-0.537-0.13-0.868-0.67-0.739-1.206	c0.946-3.935,2.955-7.522,5.809-10.376s6.441-4.862,10.376-5.809c0.536-0.127,1.077,0.202,1.206,0.739	c0.129,0.536-0.202,1.076-0.739,1.206c-3.575,0.859-6.836,2.685-9.429,5.277S9.318,19.59,8.459,23.165z M12.313,25.226	c-0.075,0-0.151-0.008-0.228-0.026c-0.538-0.125-0.873-0.663-0.747-1.2c0.72-3.09,2.282-5.904,4.52-8.141	c2.236-2.237,5.051-3.8,8.141-4.52c0.535-0.131,1.075,0.209,1.2,0.747c0.126,0.537-0.209,1.075-0.747,1.2	c-2.725,0.635-5.207,2.014-7.18,3.986s-3.352,4.455-3.986,7.18C13.179,24.914,12.768,25.226,12.313,25.226z M18.115,25.732	c-0.103,0.468-0.516,0.786-0.976,0.786c-0.071,0-0.143-0.008-0.215-0.023c-0.539-0.118-0.881-0.651-0.763-1.19	c0.997-4.557,4.586-8.146,9.143-9.143c0.537-0.116,1.071,0.222,1.19,0.763c0.118,0.539-0.224,1.072-0.763,1.19	C21.937,18.946,18.946,21.937,18.115,25.732z M21.92,30c0-4.455,3.625-8.08,8.08-8.08s8.08,3.625,8.08,8.08s-3.625,8.08-8.08,8.08	S21.92,34.455,21.92,30z M34.48,43.861c-0.46,0-0.873-0.318-0.976-0.786c-0.118-0.539,0.224-1.072,0.763-1.19	c3.796-0.831,6.786-3.821,7.617-7.617c0.118-0.541,0.65-0.881,1.19-0.763c0.539,0.118,0.881,0.651,0.763,1.19	c-0.997,4.557-4.586,8.146-9.143,9.143C34.623,43.854,34.552,43.861,34.48,43.861z M35.773,48.688c-0.454,0-0.865-0.312-0.973-0.773	c-0.126-0.537,0.209-1.075,0.747-1.2c2.725-0.635,5.207-2.014,7.18-3.986s3.352-4.455,3.986-7.18c0.125-0.538,0.662-0.88,1.2-0.747	c0.538,0.125,0.873,0.663,0.747,1.2c-0.72,3.09-2.282,5.904-4.52,8.141c-2.236,2.237-5.051,3.8-8.141,4.52	C35.925,48.68,35.849,48.688,35.773,48.688z M47.678,47.678c-2.854,2.854-6.441,4.862-10.377,5.809	c-0.078,0.019-0.157,0.027-0.234,0.027c-0.451,0-0.861-0.308-0.972-0.767c-0.129-0.536,0.202-1.076,0.739-1.206	c3.576-0.859,6.837-2.685,9.43-5.277s4.418-5.854,5.277-9.429c0.129-0.538,0.668-0.868,1.206-0.739	c0.537,0.13,0.868,0.67,0.739,1.206C52.54,41.236,50.531,44.824,47.678,47.678z"
            />
          </svg>
        </div>
      </a>
      <audio id="bgm" loop>
        <source src="/bgm.mp3" type="audio/mpeg" />
      </audio>
    </div>
    <div
      class="
        mode-switcher
        fixed
        top-4
        right-16
        transition
        duration-300
        rounded-full
      "
      :class="{ 'has-scroll-over opacity-0 pointer-events-none': scrollOver }"
    >
      <ul class="flex">
        <li
          v-for="color of colors"
          :key="color.name"
          :class="color.name"
          @click="$colorMode.preference = color.name"
        >
          <a
            class="
              relative
              flex
              h-5
              w-5
              m-1
              justify-center
              leading-none
              cursor-pointer
            "
          ></a>
        </li>
      </ul>
      <div
        class="
          toggle
          bg-current
          absolute
          h-5
          w-5
          rounded-full
          top-1
          left-1
          pointer-events-none
          transition
          duration-300
        "
      ></div>
    </div>
    <nav
      class="site-nav fixed top-4 right-4 transition duration-300 transform"
      :class="{
        'has-scroll-over pointer-events-none -translate-y-4 md:translate-y-0 translate-x-4 md:translate-x-0':
          scrollOver,
        'menu-open pointer-events-auto': menuOpen,
        '-translate-y-8': !scrollOver,
      }"
    >
      <div
        class="
          site-nav-footer
          transition
          duration-300
          pointer-events-none
          opacity-0
          z-10
          relative
          transform
          scale-90
        "
        :class="{ 'pointer-events-auto opacity-100 scale-100': scrollOver }"
        @mouseover="menuOpen = true"
        @mouseleave="menuOpen = false"
        @click.prevent="menuOpen = true"
      >
        <a
          href="#"
          class="flex justify-center items-center px-2 h-14 mt-4 w-full"
        >
          <div class="menu-btn rounded-full text-center overflow-hidden">
            <div
              class="
                btn-txt-wrap
                h-auto
                rounded-full
                overflow-visible
                transition
                duration-300
                relative
              "
            >
              <div
                class="
                  btn-txt
                  transition
                  duration-300
                  px-2
                  h-auto
                  flex
                  justify-center
                  items-center
                  relative
                "
              >
                MENU
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="site-nav-origin">
        <div
          class="site-nav-body transition duration-300 relative z-10 px-6"
          :class="{
            'opacity-0 pointer-events-none': scrollOver,
            'pointer-events-auto opacity-100 delay-200': menuOpen,
            hover: linkHover,
          }"
        >
          <ul
            class="pb-6"
            @mouseover="menuOpen = true"
            @mouseleave="menuOpen = false"
            @click="menuOpen = false"
          >
            <li class="overflow-hidden">
              <nuxt-link to="/" class="relative">
                <span
                  class="link-text tracking-tight uppercase"
                  @mouseover="linkHover = true"
                  @mouseleave="linkHover = false"
                  >Home</span
                >
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
              </nuxt-link>
            </li>
            <li
              v-for="(link, index) in links"
              :key="index"
              class="overflow-hidden"
            >
              <nuxt-link :to="'/' + link" class="relative">
                <span
                  class="link-text tracking-tight uppercase"
                  @mouseover="linkHover = true"
                  @mouseleave="linkHover = false"
                  >{{ link }}</span
                >
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
              </nuxt-link>
            </li>
          </ul>
        </div>

        <div
          class="
            site-nav-bg
            absolute
            w-full
            h-full
            top-0
            left-0
            p-1
            opacity-0
            scale-90
            z-0
            transition
            duration-300
          "
          :class="{
            'has-scroll-over': scrollOver,
            'scale-100 opacity-100': menuOpen && scrollOver,
          }"
        >
          <div class="w-full h-full rounded-2xl"></div>
        </div>
      </div>
    </nav>
    <div
      data-tf-popover="JuzMtES9"
      data-tf-custom-icon="https://images.typeform.com/images/DhEkLPECvzxe"
      data-tf-button-color="#FFFFFF"
      data-tf-button-text="Launch me"
      data-tf-iframe-props="title=VAST Contact Form"
      data-tf-medium="snippet"
      style="all: unset"
    ></div>
    <script src="//embed.typeform.com/next/embed.js"></script>
  </header>
</template>

<script>
import Logo from '@/components/Logo'
export default {
  name: 'AppHeader',
  components: {
    Logo,
  },
  data() {
    return {
      menuOpen: false,
      scrollOver: false,
      audio: false,
      linkHover: false,
      colors: [
        { name: 'light', symbol: ' ' },
        { name: 'dark', symbol: ' ' },
      ],
      links: ['projects', 'about', 'contact'],
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      // Get the current scroll position
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return
      }
      if (currentScrollPosition > 0) {
        this.scrollOver = true
      } else {
        this.scrollOver = false
      }
      // Here we determine whether we need to show or hide the navbar
      this.hideOnScroll = currentScrollPosition > this.lastScrollPosition
      // Set the current scroll position as the last scroll position
      this.lastScrollPosition = currentScrollPosition
    },
    togglebgm() {
      this.audio = !this.audio
      if (this.audio) {
        document.getElementById('bgm').play()
      } else {
        document.getElementById('bgm').pause()
      }
    },
  },
}
</script>
<style scoped>
.menu-btn {
  background-color: var(--color);
  color: var(--bg);
}

.has-scroll-over.logo-wrap,
.has-scroll-over.mode-switcher,
.has-scroll-over.music-switcher {
  transform: translate3d(0, -50%, 0);
}

.music-switcher,
.mode-switcher {
  z-index: 99;
}

.site-nav-bg > div {
  background-color: var(--color);
}

.btn-txt {
  z-index: 2;
}

.mode-switcher a,
.btn-txt {
  color: var(--bg);
}

.has-scroll-over.site-nav li a {
  bottom: 1em;
  color: var(--bg);
  opacity: 0;
}

.site-nav:not(.has-scroll-over) li a {
  bottom: 0;
  transition: 0.6s ease 0.1s, color 0.3s ease;
}

.site-nav:not(.has-scroll-over) li:nth-child(2) a {
  transition: 0.6s ease 0.2s, color 0.3s ease;
}

.site-nav:not(.has-scroll-over) li:nth-child(3) a {
  transition: 0.6s ease 0.3s, color 0.3s ease;
}

.site-nav:not(.has-scroll-over) li:nth-child(4) a {
  transition: 0.6s ease 0.4s, color 0.3s ease;
}

.site-nav:not(.has-scroll-over) li:nth-child(5) a {
  transition: 0.6s ease 0.5s, color 0.3s ease;
}

.has-scroll-over.menu-open.site-nav li a {
  bottom: 0;
  opacity: 1;
  color: var(--bg);
  transition: 0.6s ease 0.1s, color 0.3s ease;
}

.has-scroll-over.menu-open.site-nav li:nth-child(2) a {
  transition: 0.6s ease 0.2s, color 0.3s ease;
}

.has-scroll-over.menu-open.site-nav li:nth-child(3) a {
  transition: 0.6s ease 0.3s, color 0.3s ease;
}

.has-scroll-over.menu-open.site-nav li:nth-child(4) a {
  transition: 0.6s ease 0.4s, color 0.3s ease;
}

.has-scroll-over.menu-open.site-nav li:nth-child(5) a {
  transition: 0.6s ease 0.5s, color 0.3s ease;
}

.menu-open .btn-txt {
  color: var(--color);
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
}

.btn-txt-wrap::after {
  z-index: 1;
  transform: scaleY(0);
  transform-origin: bottom;
  background-color: var(--bg);
}

.menu-open .btn-txt-wrap::after {
  transform: scaleY(1);
  transform-origin: top;
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
  background-color: var(--color-primary);
}

.has-scroll-over .u div,
.toggle {
  background-color: var(--bg);
}

.mode-switcher {
  background-color: var(--color);
}

.music-switcher svg {
  fill: var(--color);
  animation: rotate 2s linear infinite;
  animation-play-state: paused;
}

.music-switcher.active svg {
  animation-play-state: running;
}

.dark-mode .toggle {
  transform: translateX(1.75em);
}

.dark-mode .mode-switcher {
  background-color: #fec150;
}

@keyframes rotate {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>

<style>
.tf-v1-popover-button {
  right: initial !important;
  left: 16px;
  bottom: 16px !important;
  box-shadow: none !important;
  color: var(--bg) !important;
  background: var(--color) !important;
}

.tf-v1-popover-wrapper {
  border-radius: 8px !important;
}

.tf-v1-popover-wrapper::after {
  content: '';
  background: var(--color);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: block;
  mix-blend-mode: hard-light;
  opacity: 0.4;
  pointer-events: none;
  border-radius: 8px;
}

.tf-v1-spinner {
  border: 3px solid #ffffff50 !important;
  border-top-color: var(--color) !important;
}

.tf-v1-popover:not(.open) .tf-v1-popover-button {
  background: transparent !important;
}

.tf-v1-popover:not(.open) .tf-v1-popover-button,
.tf-v1-popover-button-icon,
.tf-v1-popover-button-icon img {
  border-radius: 0 !important;
}

.tf-v1-popover-button-icon {
  filter: drop-shadow(0 2px 6px #00000014);
}

.tf-v1-popover {
  right: initial !important;
  left: 16px;
}

.tf-v1-popover-wrapper iframe {
  box-shadow: 0 0 0 1px #ebe3d750 !important;
}
</style>