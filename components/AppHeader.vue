<template>
<header class="header relative z-10">
    <div class="logo-wrap fixed top-4 left-4 transition duration-300" :class="{ 'has-scroll-over opacity-0': scrollOver }">
        <nuxt-link to='/' class="logo">
            <Logo class="w-24 logo"/>
        </nuxt-link>
    </div>
    <div class="mode-switcher fixed top-4 right-4 transition duration-300 rounded-full" :class="{ 'has-scroll-over opacity-0': scrollOver }">
        <ul class="flex">
            <li v-for="color of colors" :key="color.name" :class="color.name" @click="$colorMode.preference = color.name">
                <a class="relative flex h-4 w-4 m-1 justify-center leading-none cursor-pointer">{{color.symbol}}</a>
            </li>
        </ul>
        <div class="toggle bg-current absolute h-4 w-4 rounded-full top-1 left-1 pointer-events-none transition duration-300"></div>
    </div>
    <nav class="site-nav fixed bottom-4 right-4 transition duration-300 transform translate-x-4 md:translate-x-0" :class="{ 'has-scroll-over pointer-events-none translate-y-4 md:translate-y-0': scrollOver, 'menu-open pointer-events-auto': menuOpen, 'translate-y-20 translate-x-4 md:translate-x-0': !scrollOver }">
        <div class="site-nav-origin">
            <div class="site-nav-body transition duration-300 relative z-10 px-6" :class="{ 'opacity-0 pointer-events-none': scrollOver, 'pointer-events-auto opacity-100 delay-200': menuOpen }">
                <ul class="pt-6" @mouseover="menuOpen = true" @mouseleave="menuOpen = false" @click="menuOpen = false">
                    <li class="overflow-hidden">
                        <nuxt-link to="/" class="relative">
                        <span class="link-text">HOME</span>
                        <div class="u left-px origin-right transition duration-500 absolute bottom-0 h-px">
                            <div class="transition-transform duration-500 origin-left w-full h-full"></div>
                        </div>
                        </nuxt-link>
                    </li>
                    <li class="overflow-hidden">
                        <nuxt-link to="/projects" class="relative">
                        <span class="link-text">PROJECTS</span>
                        <div class="u left-px origin-right transition duration-500 absolute bottom-0 h-px">
                            <div class="transition-transform duration-500 origin-left w-full h-full"></div>
                        </div>
                        </nuxt-link>
                    </li>
                    <li class="overflow-hidden">
                        <nuxt-link to="/about" class="relative">
                        <span class="link-text">ABOUT</span>
                        <div class="u left-px origin-right transition duration-500 absolute bottom-0 h-px">
                            <div class="transition-transform duration-500 origin-left w-full h-full"></div>
                        </div>
                        </nuxt-link>
                    </li>
                    <li class="overflow-hidden">
                        <nuxt-link to="/contact" class="relative">
                        <span class="link-text">CONTACT</span>
                        <div class="u left-px origin-right transition duration-500 absolute bottom-0 h-px">
                            <div class="transition-transform duration-500 origin-left w-full h-full"></div>
                        </div>
                        </nuxt-link>
                    </li>
                    <!-- <li class="overflow-hidden">
                        <a :class="{'active': audio}" class="audio cursor-pointer relative" @mousedown="togglebgm()">BGM:
                        <div class="label inline-block transition duration-300">
                            <div class="block">OFF</div>
                            <div class="block absolute">ON</div>
                        </div>
                        </a>
                        <audio loop id="bgm">
                        <source src="/bgm.mp3" type="audio/mpeg">
                        </audio>
                    </li> -->
                </ul>
            </div>
            <div class="site-nav-footer transition duration-300 pointer-events-none opacity-0 z-10 relative transform scale-90" :class="{ 'pointer-events-auto opacity-100 scale-100': scrollOver }" @mouseover="menuOpen = true" @mouseleave="menuOpen = false" @click.prevent="menuOpen = true">
                <a href="#" class="flex justify-center items-center px-2 h-20 w-full">
                    <div class="menu-btn rounded-full text-center overflow-hidden">
                        <div class="btn-txt-wrap h-auto rounded-full overflow-visible transition duration-300 relative">
                            <div class="btn-txt transition duration-300 px-2 h-auto flex justify-center items-center relative">MENU</div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="site-nav-bg absolute w-full h-full top-0 left-0 p-1 opacity-0 scale-90 z-0 transition duration-300" :class="{ 'has-scroll-over': scrollOver, 'scale-100 opacity-100': menuOpen && scrollOver }">
                <div class="w-full h-full rounded-2xl"></div>
            </div>
        </div>  
    </nav> 
</header>
</template>

<script>
import Logo from '@/components/Logo';
export default {
    name: 'AppHeader',
    components: {
        Logo
    },
    data() {
        return {
        menuOpen: false,
        scrollOver: false,
        audio: false,
        colors: [{name: 'light', symbol: ' '}, {name: 'dark', symbol: ' '}]
        }
    },
    mounted () {
    window.addEventListener('scroll', this.onScroll);
    },
    beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll);
    },
    methods: {
        onScroll () {
        // Get the current scroll position
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
        // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
        if (currentScrollPosition < 0) {
        return
        }
        if (currentScrollPosition > 0) {
        this.scrollOver = true
        } else {
        this.scrollOver = false
        }
        // Here we determine whether we need to show or hide the navbar
        this.hideOnScroll = currentScrollPosition > this.lastScrollPosition
        // Set the current scroll position as the last scroll position
        this.lastScrollPosition = currentScrollPosition
        },
        togglebgm() {
        this.audio = !this.audio
        if (this.audio) {
        document.getElementById("bgm").play();
        } else {
        document.getElementById("bgm").pause();
        }
        }
    }
}
</script>
<style scoped>
.menu-btn {
    background-color: var(--color);
    color: var(--bg);
    border: 1px solid var(--color);
}
.has-scroll-over.logo-wrap, .has-scroll-over.mode-switcher {
    transform: translate3d(0, -50%, 0);
}
.site-nav-bg>div {
    background-color: var(--color);
}
.btn-txt{
    z-index: 2;
}
.mode-switcher a, .btn-txt {
    color: var(--bg);
}
.has-scroll-over.site-nav li a{
    bottom:1em;
    color: var(--bg);
    opacity: 0;
}
.site-nav:not(.has-scroll-over) li a{
    bottom:0;
    transition: .6s ease .1s, color .3s ease;
}
.site-nav:not(.has-scroll-over) li:nth-child(2) a{
    transition: .6s ease .2s, color .3s ease;
}
.site-nav:not(.has-scroll-over) li:nth-child(3) a{
    transition: .6s ease .3s, color .3s ease;
}
.site-nav:not(.has-scroll-over) li:nth-child(4) a{
    transition: .6s ease .4s, color .3s ease;
}
.site-nav:not(.has-scroll-over) li:nth-child(5) a{
    transition: .6s ease .5s, color .3s ease;
}
.has-scroll-over.menu-open.site-nav li a{
    bottom:0;
    opacity: 1;
    color: var(--bg);
    transition: .6s ease .1s, color .3s ease;
}
.has-scroll-over.menu-open.site-nav li:nth-child(2) a{
    transition: .6s ease .2s, color .3s ease;
}
.has-scroll-over.menu-open.site-nav li:nth-child(3) a{
    transition: .6s ease .3s, color .3s ease;
}
.has-scroll-over.menu-open.site-nav li:nth-child(4) a{
    transition: .6s ease .4s, color .3s ease;
}
.has-scroll-over.menu-open.site-nav li:nth-child(5) a{
    transition: .6s ease .5s, color .3s ease;
}
.menu-open .btn-txt {
    color: var(--color);
}
.btn-txt-wrap::after, .btn-txt-wrap::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 1em;
    transition: transform .3s,background .3s;
}
.btn-txt-wrap::before {
    z-index: 0;
    background-color: var(--color);
}
.btn-txt-wrap::after {
    z-index: 1;
    transform: scaleX(0);
    transform-origin: right;
    background-color: var(--bg);
}
.menu-open .btn-txt-wrap::after {
    transform: scaleX(1);
    transform-origin: left;
}
.u {
    width: calc(100% - 1px);
    transform: scaleX(0);
}
.nuxt-link-exact-active .u, a:hover .u {
    transform: scaleX(1);
    transform-origin: left;
}
.u div {
    transform: scaleX(1);
    background-color: var(--color-primary);
}
.has-scroll-over .u div {
    background-color: var(--bg);
}
.toggle {
    background-color: var(--bg);
}
.mode-switcher {
    background-color: var(--color);
}
.dark-mode .toggle{
    transform: translateX(1.5em);
}
.dark-mode .mode-switcher {
    background-color: #fec150;
}
.audio.active .label {
    transform: translateY(-1.49rem);
}
</style>