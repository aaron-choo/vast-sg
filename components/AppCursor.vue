<template>
  <span>
      <span class="appCursor"></span>
      <span class="appCursor--Small"></span>
  </span>
</template>

<script>
export default {
    props: {
        scaleElement: {},
        dotSize: {
            default: 6
        },
        dotColor: {
            default: '#aaa'
        },
        circleSize: {
            default: 40
        },
        borderColor: {
            default: '#f00'
        }
    },

    mounted() {
        const appCursor = document.querySelector(".appCursor");
        const appCursorSmall = document.querySelector(".appCursor--Small");
        document.addEventListener("mousemove", e => {
        const scaleElementHovered =
            e.target &&
            (e.target.classList.contains(this.scaleElement) ||
            e.target.closest(`.${this.scaleElement}`));

        appCursor.style.cssText = `
        transform: translate3d(${e.clientX -
            this.circleSize +
            this.dotSize -
            1}px, ${e.clientY - this.circleSize + this.dotSize - 1}px, 0) scale(${
            scaleElementHovered ? 1 : 0.5
        });
            width: ${this.circleSize * 2}px;
            height: ${this.circleSize * 2}px;
            border-color: ${this.borderColor}
            `;

        appCursorSmall.style.cssText = `
        transform: translate3d(${e.clientX}px, ${e.clientY}px, 0) scale(${
            scaleElementHovered ? 1 : 0.5
        });
        width: ${this.dotSize * 2}px;
        height: ${this.dotSize * 2}px;
        background-color: ${this.dotColor}`;
        });
    }
}
</script>

<style>
*{
    cursor: none;
}
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
  transition: transform 100ms;
  border: 1px solid transparent;
}

.appCursor--Small {
  background-color: transparent;
}

</style>