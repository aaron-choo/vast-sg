<template>
  <div
    id="app-cursor"
    class="
      fixed
      z-50
      mix-blend-difference
      left-0
      right-0
      top-0
      bottom-0
      pointer-events-none
      opacity-0
    "
  >
    <svg></svg>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  watch: {
    $route() {
      console.log('route change', this.$route)
      this.$nextTick(this.init)
    },
  },
  mounted() {
    console.log('mounted')
    this.$nextTick(this.init)

    gsap.defaults({ ease: 'none' })

    const svgns = 'http://www.w3.org/2000/svg'
    const root = document.querySelector('svg')
    const ease = 0.2

    const pointer = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }

    window.addEventListener('mousemove', function (event) {
      pointer.x = event.clientX
      pointer.y = event.clientY
    })

    let leader = pointer

    const total = 1
    for (let i = 0; i < total; i++) {
      leader = createLine(leader, i)
    }

    function createLine(leader, i) {
      const line = document.createElementNS(svgns, 'line')
      root.appendChild(line)

      gsap.set(line, { x: -15, y: -15, alpha: (total - i + i) / total })

      gsap.to(line, {
        duration: 100,
        x: '+=1',
        y: '+=1',
        repeat: -1,
        modifiers: {
          x() {
            const posX = gsap.getProperty(line, 'x')
            const leaderX = gsap.getProperty(leader, 'x')
            const x = posX + (leaderX - posX) * ease
            line.setAttribute('x2', leaderX - x)
            return x
          },
          y() {
            const posY = gsap.getProperty(line, 'y')
            const leaderY = gsap.getProperty(leader, 'y')
            const y = posY + (leaderY - posY) * ease
            line.setAttribute('y2', leaderY - y)
            return y
          },
        },
      })

      return line
    }
  },
  beforeDestroy() {
    console.log('beforeDestroy')
  },
  methods: {
    init() {
      console.log('init')
      let links = null
      console.log(links)
      setTimeout(() => {
        links = document.querySelectorAll('a, .send, button, .slider')
        console.log(links)
        links.forEach((link) =>
          link.addEventListener('mouseover', this.enableAnimation)
        )
        links.forEach((link) =>
          link.addEventListener('mouseleave', this.disableAnimation)
        )
        document.addEventListener('mousedown', this.enableAnimation)
        document.addEventListener('mouseup', this.disableAnimation)
      }, 1000)
    },
    changeCursor(a, b) {
      const mouseCursor = document.querySelector('#app-cursor')
      mouseCursor.classList.add(a)
      mouseCursor.classList.remove(b)
    },
    enableAnimation() {
      this.changeCursor('active', 'inactive')
    },
    disableAnimation() {
      this.changeCursor('inactive', 'active')
    },
  },
}
</script>

<style>
#app-cursor {
  animation: fade-in 0.3s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

html:not(.desktop) #app-cursor {
  display: none;
}

#app-cursor svg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

#app-cursor line {
  stroke: var(--color);
  stroke-width: 28;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: stroke-width 0.3s ease;
}

#app-cursor.active line {
  stroke-width: 56;
}

#app-cursor.click line {
  stroke-width: 12;
}
</style>
