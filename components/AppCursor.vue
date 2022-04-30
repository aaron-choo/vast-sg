<template>
  <div
    id="app-cursor"
    class="fixed z-50 mix-blend-difference left-0 right-0 top-0 bottom-0 pointer-events-none"
  >
    <svg></svg>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  mounted() {
    gsap.defaults({ ease: 'none' })

    const svgns = 'http://www.w3.org/2000/svg'
    const root = document.querySelector('svg')
    const ease = 0.8

    const pointer = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }

    window.addEventListener('mousemove', function (event) {
      pointer.x = event.clientX
      pointer.y = event.clientY
    })

    let leader = pointer

    const total = 80
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
}
</script>

<style>
#app-cursor {
  display: none;
}
.desktop #app-cursor {
  display: initial;
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
}
</style>
