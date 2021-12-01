<template>
<footer id="footer" class="footer overflow-hidden relative">
    <div class="absolute bottom-4 left-4 right-4 w-auto flex justify-between z-10">
        <nuxt-link to="/" class="copyright">
        <Logo class="logo w-16 transform translate-x-4"/>
        </nuxt-link>
    </div>
    <div class="opacity-0 absolute bottom-0 w-full z-0">
        <Logo class="w-full transform translate-y-1/2"/>
    </div>
</footer>
</template>

<script>
import Logo from '@/components/Logo';
export default {
    name: 'AppFooter',
    components: {
        Logo
    }
}
</script>
<style scoped>
footer{
    min-height:50vh;
    z-index: -2;
}
.logo::before{
    content:"©";
    position:absolute;
    bottom:-0.2em;
    left: -1em;
}
</style>
<style>
#footer .logo>div{
    background: #fff;
}
</style>