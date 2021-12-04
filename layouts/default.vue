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
  }
}
</script>
<style scoped>
.site-container::before {
  animation: grain 2s steps(3) infinite both;
  background-image: url(/noise.png);
  background-size: 200px;
  content: '';
  height: 300%;
  left: -50%;
  opacity: 0.65;
  position: fixed;
  top: -100%;
  width: 300%;
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
