<template>
  <div class="logo-block relative" :class="{ 'has-scroll-over': scrollOver }">
    <div
      class="logo-container relative flex transition duration-700"
      :class="{ 'opacity-0': scrollOver }"
    >
      <svg
        class="logo-v"
        width="280"
        height="280"
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0.000244141H139.899V70.0503C139.899 108.682 108.582 140 69.9497 140V140C31.3175 140 0 108.682 0 70.0503V0.000244141Z"
          fill="var(--color)"
        />
      </svg>
      <svg
        class="logo-a"
        width="280"
        height="280"
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.200589 69.9498C0.200582 31.3177 31.5181 0.000116591 70.1503 0.000109831V0.000109831C108.782 0.000103072 140.1 31.3176 140.1 69.9498L140.1 140L0.200601 140L0.200589 69.9498Z"
          fill="var(--color)"
        />
      </svg>
      <svg
        class="logo-s"
        width="280"
        height="280"
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M109.537 70.2509H139.8V0H35.5021C16.1168 0 0.401827 15.7262 0.401827 35.1255C0.401827 53.4969 14.4957 68.5743 32.4537 70.1203C14.505 71.6061 0.401154 86.6547 0.401154 105C0.401154 124.33 16.0599 140 35.376 140H105.326C124.642 140 140.301 124.33 140.301 105C140.301 87.0961 126.867 72.3321 109.537 70.2509Z"
          fill="var(--color)"
        />
      </svg>
      <svg
        class="logo-t"
        width="280"
        height="280"
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M140 70.2509V0H0.601715V70.2509H36.077V140H106.027V70.2509H140Z"
          fill="var(--color)"
        />
      </svg>
    </div>
    <div
      class="
        logo-container-fade
        flex
        absolute
        top-0
        left-0
        w-full
        transition
        duration-700
        opacity-70
      "
    >
      <svg
        class="logo-v"
        width="280"
        height="280"
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0.000244141H139.899V70.0503C139.899 108.682 108.582 140 69.9497 140V140C31.3175 140 0 108.682 0 70.0503V0.000244141Z"
          fill="url(#linear_gradient)"
        />
        <defs>
          <linearGradient
            id="linear_gradient"
            x1="-2.28496e-09"
            y1="3.18591e-06"
            x2="139.398"
            y2="0.099981"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="var(--color)" />
            <stop offset="1" stop-color="var(--color)" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        class="logo-a"
        width="280"
        height="280"
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.200589 69.9498C0.200582 31.3177 31.5181 0.000116591 70.1503 0.000109831V0.000109831C108.782 0.000103072 140.1 31.3176 140.1 69.9498L140.1 140L0.200601 140L0.200589 69.9498Z"
          fill="url(#linear_gradient)"
        />
      </svg>
      <svg
        class="logo-s"
        width="280"
        height="280"
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M109.537 70.2509H139.8V0H35.5021C16.1168 0 0.401827 15.7262 0.401827 35.1255C0.401827 53.4969 14.4957 68.5743 32.4537 70.1203C14.505 71.6061 0.401154 86.6547 0.401154 105C0.401154 124.33 16.0599 140 35.376 140H105.326C124.642 140 140.301 124.33 140.301 105C140.301 87.0961 126.867 72.3321 109.537 70.2509Z"
          fill="url(#linear_gradient)"
        />
      </svg>
      <svg
        class="logo-t"
        width="280"
        height="280"
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M140 70.2509V0H0.601715V70.2509H36.077V140H106.027V70.2509H140Z"
          fill="url(#linear_gradient)"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  data() {
    return {
      scrollOver: false,
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
    },
  },
}
</script>

<style scoped>
svg {
  height: 100%;
  transition-property: transform;
  transition-timing-function: ease;
  transition-duration: 0.7s;
}
.logo-block.has-scroll-over svg:nth-child(2) {
  transform: translateX(-50%);
}
.logo-block.has-scroll-over svg:nth-child(3) {
  transform: translateX(-100%);
}
.logo-block.has-scroll-over svg:nth-child(4) {
  transform: translateX(-150%);
}
.logo-block.has-scroll-over:hover svg {
  transform: translateX(0);
}

.logo-block.has-scroll-over:hover .logo-container-fade {
  opacity: 0;
}
.logo-block.has-scroll-over:hover .logo-container {
  opacity: 1;
}
</style>
