<template>
<header class="header fixed">
    <div class="logo-wrap absolute top-0 left-0 transition duration-300" :class="{ 'has-scroll-over opacity-0': scrollOver }">
        <nuxt-link to='/' class="logo">
            <Logo class="w-20 logo"/>
        </nuxt-link>
    </div>
    <nav class="site-nav absolute bottom-0 right-0 transition duration-300 transform translate-y-20" :class="{ 'has-scroll-over pointer-events-none': scrollOver, 'menu-open pointer-events-auto': menuOpen }">
        <div class="site-nav-origin">
            <div class="site-nav-body transition duration-300 relative z-10 px-6" :class="{ 'opacity-0 pointer-events-none': scrollOver, 'pointer-events-auto opacity-100 delay-200': menuOpen }">
                <ul class="pt-6" @mouseover="menuOpen = true" @mouseleave="menuOpen = false" @click="menuOpen = false">
                    <li>
                        <nuxt-link to="/" class="relative">
                        <span>HOME</span>
                        <div class="u left-px origin-right transition duration-500 absolute bottom-0 h-px">
                            <div class="transition-transform duration-500 origin-left w-full h-full"></div>
                        </div>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/projects" class="relative">
                        <span>PROJECTS</span>
                        <div class="u left-px origin-right transition duration-500 absolute bottom-0 h-px">
                            <div class="transition-transform duration-500 origin-left w-full h-full"></div>
                        </div>
                        </nuxt-link>
                    </li>
                        <li>
                        <nuxt-link to="/about" class="relative">
                        <span>ABOUT</span>
                        <div class="u left-px origin-right transition duration-500 absolute bottom-0 h-px">
                            <div class="transition-transform duration-500 origin-left w-full h-full"></div>
                        </div>
                        </nuxt-link>
                    </li>
                        <li>
                        <nuxt-link to="/contact" class="relative">
                        <span>CONTACT</span>
                        <div class="u left-px origin-right transition duration-500 absolute bottom-0 h-px">
                            <div class="transition-transform duration-500 origin-left w-full h-full"></div>
                        </div>
                        </nuxt-link>
                    </li>
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
import Logo from '../components/Logo';
export default {
    name: 'AppHeader',
    components: {
        Logo
    },
    data() {
        return {
        hideOnScroll: false,
        lastScrollPosition: 0,
        menuOpen: false,
        scrollOver: false
        }
    },
    mounted () {
    window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
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
    }
    }
}
</script>
<style scoped>
.header {
    top: var(--outerGutter);
    left: var(--outerGutter);
    right: var(--outerGutter);
    bottom: var(--outerGutter);
}
.menu-btn {
    background-color: var(--text-color);
    color: var(--background-color);
    border: 1px solid var(--text-color);
}
.has-scroll-over.site-nav {
    transform: translateY(0);
}
.has-scroll-over.logo-wrap {
    transform: translate3d(0, -50%, 0);
}
.site-nav-bg>div {
    background-color: var(--text-color);
}
.btn-txt{
    z-index: 2;
}
.menu-open.has-scroll-over.site-nav li a, .btn-txt {
    color: var(--background-color);
}
.menu-open .btn-txt {
    color: var(--text-color);
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
    background-color: var(--text-color);
}
.btn-txt-wrap::after {
    z-index: 1;
    transform: scaleX(0);
    transform-origin: right;
    background-color: var(--background-color);
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
    background-color: var(--text-color);
}
.has-scroll-over.menu-open .u div {
    background-color: var(--background-color);
}
</style>