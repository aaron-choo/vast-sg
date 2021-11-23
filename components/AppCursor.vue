<template>
  <span>
      <span class="appCursor transition-all duration-200 m-0 ease-out hidden sm:block"></span>
      <span class="appCursor--Small hidden"></span>
  </span>
</template>

<script>
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
        const appCursorSmall = document.querySelector(".appCursor--Small");
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

        document.addEventListener("mousemove", e => {

        appCursor.style.cssText = `
        transform: translate3d(${e.clientX -
            this.circleSize +
            this.dotSize -
            1}px, ${e.clientY - this.circleSize + this.dotSize - 1}px, 0);
            width: ${this.circleSize * 2}px;
            height: ${this.circleSize * 2}px;
            border-color: var(--color-primary);
            background-color: var(--color-primary)
            `;

        appCursorSmall.style.cssText = `
            transform: translate3d(${e.clientX}px, ${e.clientY}px, 0);
            width: ${this.dotSize * 2}px;
            height: ${this.dotSize * 2}px;
            background-color: var(--color)
            `;
        });
    }
}
</script>

<style>
.appCursor,
.appCursor--Small {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100000;
  border-radius: 50%;
  pointer-events: none;
  box-sizing: border-box;
  backface-visibility: hidden;
}

.appCursor {
  border: 1px solid transparent;
}

.appCursor--Small {
  background-color: transparent;
}

.appCursor.active {
    width:10px !important;
    height:10px !important;
    margin-left: 20px;
    margin-top: 20px;
}

</style>