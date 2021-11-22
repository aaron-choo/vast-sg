<template>
<header class="header fixed">
    <div class="header__logo-wrap absolute top-0 left-0 transition-all duration-300" :class="{ 'scroll--hidden': !showNavbar }">
        <nuxt-link to='/' class="header__logo">
            <Logo class="w-20 logo"/>
        </nuxt-link>
    </div>
    <div class="header__right absolute bottom-0 right-0">
        <nav class="header__nav-wrap"  @mouseover="menu = true" @mouseleave="menu = false">
            <div class="header__nav transition-all duration-300 rounded-2xl">
                <div class="header__nav-list" :class="{ 'scroll--hidden': !showNavbar }">
                    <ul>
                        <li>
                            <nuxt-link to="/">
                            <span>HOME</span>
                            <span class="underline"></span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/projects">
                            <span>PROJECTS</span>
                            <span class="underline"></span>
                            </nuxt-link>
                        </li>
                         <li>
                            <nuxt-link to="/about">
                            <span>ABOUT</span>
                            <span class="underline"></span>
                            </nuxt-link>
                        </li>
                         <li>
                            <nuxt-link to="/contact">
                            <span>CONTACT</span>
                            <span class="underline"></span>
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="text-center">
                    <a class="menu__btn block rounded-full">MENU</a>
                </div>
            </div>  
        </nav>
    </div>  
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
        showNavbar: true,
        lastScrollPosition: 0,
        menu: false
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
        // Here we determine whether we need to show or hide the navbar
        this.showNavbar = currentScrollPosition < this.lastScrollPosition
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
.menu__btn {
    background-color: var(--text-color);
    color: var(--background-color);
    border: 1px solid var(--text-color);
}
.header__nav-list {
  transform: translate3d(0, 0, 0);
  opacity: 1;
  transition: 0.3s all ease-out;
}
.scroll--hidden {
  transform: translate3d(0, -50%, 0);
  opacity: 0;
}
</style>