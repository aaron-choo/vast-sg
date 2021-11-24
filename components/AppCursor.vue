<template>
  <div class="relative z-50 mix-blend-difference">
      <span class="appCursor hidden sm:block"></span>
      <span class="appCursor--Small hidden sm:block"></span>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
    mounted() {
        const appCursor = document.querySelector(".appCursor");
        const appCursorSmall = document.querySelector(".appCursor--Small");
        window.addEventListener("mousemove", e => {
            gsap.to(appCursor, 0.2, { x: e.clientX, y: e.clientY });
            gsap.to(appCursorSmall, 0.5, { x: e.clientX, y: e.clientY });
        });
        const activeCursor = {height: 8, width: 8, top: -4, left: -4}
        const mainCursor = {height: 16, width: 16, top: -8, left: -8}
        window.addEventListener("mousedown", e => {
            gsap.to(appCursor, 0.1,  activeCursor );
            gsap.to(appCursorSmall, 0.1,  activeCursor );
        });
        window.addEventListener("mouseup", e => {
            gsap.to(appCursor, 0.1, mainCursor);
            gsap.to(appCursorSmall, 0.1, mainCursor);
        });        
    }
}
</script>

<style scoped>
.appCursor,
.appCursor--Small {
    position: fixed;
    border-radius: 50%;
    pointer-events: none;
    box-sizing: border-box;
    backface-visibility: hidden;
    background-color: var(--color);
    width:16px;
    height:16px;
    left: -8px;
    top: -8px;
    border: 1px solid transparent;
}
</style>