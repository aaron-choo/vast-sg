<template>
  <div class="site-container">
    <AppCursor />
    <AppHeader />
    <nuxt />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import AppCursor from '../components/AppCursor'

export default {
  components: {
    AppHeader,
    AppFooter,
    AppCursor,
  },
  mounted() {
    console.log(`
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓     ░▒▓▓▓▓▓▓▓▓▓▓▓▓▒░      ░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  ░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░  ░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒ ░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░        ▓▓▓▓▓▓▓▓▓▓▓▓       
░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░       ▓▓▓▓▓▓▓▓▓▓▓▓       
 ▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓       ▓▓▓▓▓▓▓▓▓▓▓▓       
  ░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░       ▓▓▓▓▓▓▓▓▓▓▓▓       
     ░▒▓▓▓▓▓▓▓▓▓▓▓▓▒░     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░        ▓▓▓▓▓▓▓▓▓▓▓▓       
`)
    if (this.$device.isDesktop === true) {
      document.documentElement.classList.add('desktop')
    }
    if (this.$device.isTablet === true) {
      document.documentElement.classList.add('tablet')
    }
    if (this.$device.isMobile === true) {
      document.documentElement.classList.add('mobile')
    }
    if (this.$device.isMacOS === true) {
      document.documentElement.classList.add('macos')
    }
    if (this.$device.isWindows === true) {
      document.documentElement.classList.add('windows')
    }
  },
}
</script>
<style scoped>
.site-container::before {
  animation: grain 3s steps(3) infinite both;
  background-image: url(/noise.png);
  content: '';
  left: -150%;
  opacity: 0.68;
  position: fixed;
  top: -150%;
  width: 300%;
  height: 300%;
  pointer-events: none;
  z-index: 100;
}

@keyframes grain {
  0% {
    transform: translate3d(1%, -1%, 0);
  }

  10% {
    transform: translate3d(-5%, -2%, 0);
  }

  20% {
    transform: translate3d(10%, 5%, 0);
  }

  30% {
    transform: translate3d(5%, -11%, 0);
  }

  40% {
    transform: translate3d(-12%, -5%, 0);
  }

  50% {
    transform: translate3d(10%, 9%, 0);
  }

  60% {
    transform: translate3d(15%, 0, 0);
  }

  70% {
    transform: translate3d(-10%, 8%, 0);
  }

  80% {
    transform: translate3d(10%, 2%, 0);
  }

  90% {
    transform: translate3d(1%, 5%, 0);
  }

  100% {
    transform: translate3d(0, 8%, 0);
  }
}
</style>
