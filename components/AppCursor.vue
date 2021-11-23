<template>
  <span>
      <span class="appCursor transition-all duration-200 m-0 ease-out hidden sm:block"></span>
      <span class="appCursor--Small hidden"></span>
  </span>
</template>

<script>
import gsap from 'gsap'
export default {
    props: {
        scaleElement: {},
        dotSize: {
            default: 6
        },
        circleSize: {
            default: 30
        }
    },

    mounted() {
        const appCursor = document.querySelector(".appCursor");
        const links = document.querySelectorAll("a, .send, button");
        const mouseCursor = document.querySelector(".appCursor");
        function changeCursor(a, b) {
            mouseCursor.classList.add(a);
            mouseCursor.classList.remove(b);
        }
        function enableAnimation() {
            changeCursor("active", "inactive");
        }
        function disableAnimation() {
            changeCursor("inactive", "active");
        }
        links.forEach(link => link.addEventListener("mouseover", enableAnimation));
        links.forEach(link => link.addEventListener("mouseleave", disableAnimation));
        document.addEventListener("mousedown", enableAnimation);
        document.addEventListener("mouseup", disableAnimation);

        window.addEventListener("mousemove", e => {
            gsap.to(appCursor, 0.9, { x: e.clientX, y: e.clientY });
        })
    }
}
</script>

<style>
.appCursor,
.appCursor--Small {
  position: fixed;
  z-index: 100000;
  border-radius: 50%;
  pointer-events: none;
  box-sizing: border-box;
  backface-visibility: hidden;
  mix-blend-mode: exclusion;
  background-color: var(--color);
    width:40px;
    height:40px;
    left: -20px;
    top: -20px;
}

.appCursor {
  border: 1px solid transparent;
}

.appCursor--Small {
  background-color: transparent;
}

.appCursor.active {
    width:10px;
    height:10px;
    left: -5px;
    top: -5px;
    opacity: 0.5;
}

</style>