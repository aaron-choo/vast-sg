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
        function activateCursor(a, b) {
            const enableCursor = function () {
                mouseCursor.classList.add(b);
            }
            const disableCursor = function () {
                mouseCursor.classList.remove(b);
            }
            document.querySelectorAll("." + a).forEach(link => link.addEventListener("mouseover", enableCursor));
            document.querySelectorAll("." + a).forEach(link => link.addEventListener("mouseleave", disableCursor));
        };
        activateCursor("drag", "drag");
        activateCursor("view", "view");
        activateCursor("swiper-button-next", "next");
        activateCursor("swiper-button-prev", "prev");
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
    width:30px;
    height:30px;
    left: -15px;
    top: -15px;
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
.appCursor::after {
content: "";
transition: 0.3s ease;
color: var(--bg);
font-size: 12px;
line-height: 1;
text-align: center;
display: flex;
height: 100%;
width: 100%;
justify-content: center;
align-items: center;
opacity: 0;
text-transform: uppercase;
}

.appCursor.next,
.appCursor.prev {
left: -30px;
top: -30px;
width: 60px;
height: 60px;
}

.appCursor.next::after {
content: "next";
opacity: 1;
}

.appCursor.prev::after {
content: "prev";
opacity: 1;
}
</style>