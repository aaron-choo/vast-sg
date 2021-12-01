<template>
  <div id="app-cursor" class="relative z-50 mix-blend-difference">
      <span class="cursor-small hidden md:block"></span>
      <span class="cursor hidden md:block"></span>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
    mounted() {
        const cursor = document.querySelector(".cursor");
        const cursorSmall = document.querySelector(".cursor-small");
        window.addEventListener("mousemove", e => {
            gsap.to(cursor, 0.2, { x: e.clientX, y: e.clientY });
            gsap.to(cursorSmall, 0.5, { x: e.clientX, y: e.clientY });
        });
        const activeCursor = {height: 8, width: 8, top: -4, left: -4}
        const mainCursor = {height: 16, width: 16, top: -8, left: -8}
        window.addEventListener("mousedown", e => {
            gsap.to(cursor, 0.1,  activeCursor );
            gsap.to(cursorSmall, 0.1,  activeCursor );
        });
        window.addEventListener("mouseup", e => {
            gsap.to(cursor, 0.1, mainCursor);
            gsap.to(cursorSmall, 0.1, mainCursor);
        });        
    }
}
</script>

<style scoped>
.cursor,
.cursor-small {
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
.cursor::before {
    content: '';
    font-weight: 300;
    font-size: 48px;
    display: block;
    position: relative;
    bottom: .2em;
    left: .22em;
    width: 100%;
    color: var(--bg);
    opacity:0;
    transition: .3s ease;
}
.next .cursor::before {
    content: '→';
    opacity:1;
}
.prev .cursor::before {
    content: '←';
    left: .22em;
    opacity:1;
}
</style>