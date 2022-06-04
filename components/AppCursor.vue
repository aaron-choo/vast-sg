<template>
  <div
    id="app-cursor"
    class="
      fixed
      z-50
      left-0
      right-0
      top-0
      bottom-0
      pointer-events-none
      opacity-0
      mix-blend-difference
    "
  >
    <svg class="z-40"></svg>
    <div
      class="
        cursor-text
        relative
        w-16
        h-16
        -left-8
        -top-11
        text-center
        z-50
        uppercase
        heading-font
        opacity-0
      "
      data-cursor-text=""
    ></div>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  watch: {
    $route() {
      console.log('route change', this.$route)
      this.$nextTick(this.init)
      this.disableCursorText()
      this.endHoverAnimation()
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

    window.addEventListener('mousemove', (e) => {
      gsap.to('.cursor-text', 0.1, { x: e.clientX, y: e.clientY })
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
        links = document.querySelectorAll('a, button, .swiper-container, .iiz')
        console.log(links)
        links.forEach((link) =>
          link.addEventListener('mouseover', this.startHoverAnimation)
        )
        links.forEach((link) =>
          link.addEventListener('mouseleave', this.endHoverAnimation)
        )
        document.addEventListener('mousedown', this.startClickAnimation)
        document.addEventListener('mouseup', this.endClickAnimation)
        this.activateCursor('drag')
        this.activateCursor('view')
        this.activateCursor('next')
        this.activateCursor('prev')
        this.activateCursor('facebook')
        this.activateCursor('instagram')
        this.activateCursor('linkedin')
        this.activateCursor('dribbble')
        this.activateCursor('filter')
        this.activateCursor('zoom')
      }, 1000)
    },
    changeCursor(a, b) {
      const mouseCursor = document.querySelector('#app-cursor')
      mouseCursor.classList.add(a)
      mouseCursor.classList.remove(b)
    },
    startHoverAnimation() {
      this.changeCursor('hover', 'no-hover')
    },
    endHoverAnimation() {
      this.changeCursor('no-hover', 'hover')
    },
    startClickAnimation() {
      this.changeCursor('click', 'no-click')
    },
    endClickAnimation() {
      this.changeCursor('no-click', 'click')
    },
    activateCursor(a) {
      const cursorText = document.querySelector('.cursor-text')
      const enableCursor = function () {
        cursorText.setAttribute('data-cursor-text', a)
        cursorText.classList.add('opacity-100')
      }
      const disableCursor = function () {
        cursorText.setAttribute('data-cursor-text', '')
        cursorText.classList.remove('opacity-100')
      }
      document
        .querySelectorAll('.cursor-' + a)
        .forEach((link) => link.addEventListener('mouseover', enableCursor))
      document
        .querySelectorAll('.cursor-' + a)
        .forEach((link) => link.addEventListener('mouseleave', disableCursor))
    },
    disableCursorText() {
      const cursorText = document.querySelector('.cursor-text')
      cursorText.setAttribute('data-cursor-text', '')
      cursorText.classList.remove('opacity-100')
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
  stroke-width: 24;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: stroke-width 0.1s ease;
}

#app-cursor.hover line {
  stroke-width: 48;
}

#app-cursor.click line {
  stroke-width: 12;
}

.cursor-text {
  transition: opacity 0.3s ease;
}

.cursor-text::after {
  content: attr(data-cursor-text);
  color: white;
}
</style>
