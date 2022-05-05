<template>
  <div class="logo-block relative">
    <div class="logo-blockform logo-blockform-v absolute left-0 top-0 w-1/4 h-full"></div>
    <div class="logo-blockform logo-blockform-a absolute left-1/4 top-0 w-1/4 h-full"></div>
    <div
      class="logo-blockform logo-blockform-s logo-blockform logo-blockform-s-bottom absolute left-1/2 top-1/2 w-1/4 h-1/2">
    </div>
    <div class="logo-blockform logo-blockform-s logo-blockform-s-top absolute left-1/2 top-0 w-1/4 h-1/2"></div>
    <div class="logo-blockform logo-blockform-t logo-blockform-t-top absolute left-3/4 top-0 w-1/4 h-1/2"></div>
    <div class="logo-blockform logo-blockform-t logo-blockform-t-bottom absolute top-1/2 h-1/2"></div>
  </div>
</template>

<script>
export default {
  name: 'Logo',
}
</script>

<style>
.logo-block {
  padding-top: 25%;
  height: auto;
}

.logo-blockform {
  background: var(--color);
  transition: transform 0.3s ease;
}

.logo-blockform-v {
  border-radius: 0 0 50% 50%;
  transform-origin: top right;
}

.logo-blockform-a {
  border-radius: 50% 50% 0 0;
  transform-origin: bottom right;
}

.logo-blockform-s-bottom {
  border-radius: 100ch;
  transform-origin: bottom left;
}

.logo-blockform-s-top {
  border-radius: 100ch 0 0 100ch;
}

.logo-blockform-t-bottom {
  left: 81.25%;
  width: 12.5%;
  transform-origin: bottom left;
}
</style>
