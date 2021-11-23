<template>
<footer class="footer overflow-hidden z-0 relative mt-24">
    <div class="absolute bottom-4 left-4 right-4 w-auto flex justify-between z-10">
        <nuxt-link to="/" class="copyright">
        <Logo class="logo w-16 transform translate-x-14"/>
        </nuxt-link>
    </div>
    <div class="opacity-10 absolute bottom-0 w-full z-0">
        <Logo class="w-full transform translate-y-1/2"/>
    </div>
</footer>
</template>

<script>
import Logo from '@/components/Logo';
export default {
    name: 'AppHeader',
    components: {
        Logo
    }
}
</script>
<style scoped>
footer{
    min-height:100vh;
}
.logo::before{
    content:"© 2021";
    position:absolute;
    bottom:-0.2em;
    left: -3.5em;
}
</style>