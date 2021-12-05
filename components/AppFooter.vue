<template>
<footer id="footer" class="footer overflow-hidden relative">
    <hr class="h-px w-full opacity-20" />
    <!-- <div class="credits-header m-4 my-12 text-center uppercase">
        <p class="text-lg opacity-50">
            Hope you enjoyed your time with Vast.
        </p>
    </div> -->
    <div class="credits m-4 text-center uppercase my-12 lg:mx-40 mt-16 md:mt-20">
        <div class="credit-entry inline-block mx-1 mb-1">
            <p class="inline-block text-right text-xs md:text-sm mb-1 mr-1 leading-none md:leading-none">Vast<br/>Presents</p>
            <span class="inline-block narrow text-5xl font-light md:text-6xl">
                <nuxt-link to="/">VAST.SG</nuxt-link>
            </span>
        </div>
        <div class="credit-entry inline-block mx-1 mb-1">
            <p class="inline-block text-right text-xs md:text-sm mb-1 mr-1 leading-none md:leading-none">In Association<br/>With</p>
            <span class="inline-block narrow text-5xl font-light md:text-6xl">
                <a href="https://prismic.io/" target="_blank" rel="noopener">Prismic</a>+<a href="https://www.netlify.com/" target="_blank" rel="noopener">Netlify</a>
            </span>
        </div>
        <div class="credit-entry inline-block mx-1 mb-1">
            <p class="inline-block text-right text-xs md:text-sm mb-1 mr-1 leading-none md:leading-none">Music<br/>By</p>
            <span class="inline-block narrow text-5xl font-light md:text-6xl">
                <a href="https://open.spotify.com/artist/73aKnLT4O8G2pBEfdlQzrE" target="_blank" rel="noopener">Purrple Cat</a>
            </span>
        </div>
        <div class="credit-entry inline-block mx-1 mb-1">
            <p class="inline-block text-right text-xs md:text-sm mb-1 mr-1 leading-none md:leading-none">Email<br/>At</p>
            <span class="inline-block narrow text-5xl font-light md:text-6xl">
                <a href="mailto:hello@vast.sg" aria-label="Email us">hello@vast.sg</a>
            </span>
        </div>
        <div class="credit-entry inline-block mx-1 mb-1">
            <p class="inline-block text-right text-xs md:text-sm mb-1 mr-1 leading-none md:leading-none">Phone<br/>At</p>
            <span class="inline-block narrow text-5xl font-light md:text-6xl">
                <a href="tel:+6569424062"  aria-label="Call us">+65-6942-4062</a>
            </span>
        </div>
        <div class="credit-entry inline-block mx-1 mb-1">
            <p class="inline-block text-right text-xs md:text-sm mb-1 mr-1 leading-none md:leading-none">Located<br/>At</p>
            <span class="inline-block narrow text-5xl font-light md:text-6xl">
                <a href="https://maps.google.com/?q=VAST%20632%20Veerasamy%20Road%20#19-102" target="_blank" aria-label="View on map" rel="noopener">Veerasamy Road</a>
            </span>
        </div>
        <div class="credit-entry inline-block mx-1 mb-1">
            <p class="inline-block text-right text-xs md:text-sm mb-1 mr-1 leading-none md:leading-none">Social<br/>Media</p>
            <span class="inline-block narrow text-5xl font-light md:text-6xl">
                <a href="https://dribbble.com/vastdesign" target="_blank" aria-label="Connect with us on Dribbble" rel="noopener">Dribbble</a>
            </span>
        </div>
        <div class="credit-entry inline-block mx-1 mb-1">
            <p class="inline-block text-right text-xs md:text-sm mb-1 mr-1 leading-none md:leading-none">And</p>
            <span class="inline-block narrow text-5xl font-light md:text-6xl">
                <a href="https://facebook.com/vast.sg" target="_blank" aria-label="Connect with us on Facebook" rel="noopener">Facebook</a>
            </span>
        </div>
        <div class="credit-entry inline-block mx-1 mb-1">
            <p class="inline-block text-right text-xs md:text-sm mb-1 mr-1 leading-none md:leading-none">And</p>
            <span class="inline-block narrow text-5xl font-light md:text-6xl">
                <a href="https://instagram.com/vast.sg" target="_blank" aria-label="Connect with us on Instagram" rel="noopener">Instagram</a>
            </span>
        </div>
        <div class="credit-entry inline-block mx-1 mb-1">
            <p class="inline-block text-right text-xs md:text-sm mb-1 mr-1 leading-none md:leading-none">And</p>
            <span class="inline-block narrow text-5xl font-light md:text-6xl">
                <a href="https://www.linkedin.com/company/vast-sg/" target="_blank" aria-label="Connect with us on LinkedIn" rel="noopener">LinkedIn</a>
            </span>
        </div>
        <div class="credit-entry inline-block mx-1 mb-1">
            <span class="inline-block narrow font-light text-2xl md:text-4xl">
                A Vast Production
            </span>
        </div>
    </div>
    <div class="credits-footer grid grid-cols-3 items-center my-12 lg:mx-40 mb-16 md:mb-20">
        <div class="text-center col-span-1">
            <Logo class="logo inline-block"/>
        </div>
        <div class="inline-block mx-1 mb-1 uppercase col-span-1 text-center">
            <span class="inline-block narrow text-5xl font-light md:text-6xl tracking-wide">
                {{$moment().format('DD MMMM YY')}}
            </span>
        </div>
        <div class="text-center col-span-1">
            <LogoSquare class="logo-square relative inline-block h-8"/>
        </div>
    </div>
    <!-- <div class="absolute bottom-4 left-4 right-4 w-auto flex justify-between z-10">
        <nuxt-link to="/" class="copyright">
        <Logo class="logo w-16 transform translate-x-4"/>
        </nuxt-link>
    </div> -->
</footer>
</template>

<script>
import Logo from '@/components/Logo';
import LogoSquare from '@/components/LogoSquare';
export default {
    name: 'AppFooter',
    components: {
        Logo,
        LogoSquare
    }
}
</script>
<style scoped>
.logo {
    width: 6em;
    padding-top: 1.5em;
}
.logo::before{
    content:"©";
    opacity: 0;
    position:absolute;
    bottom:0;
    left: -1.2em;
}
.logo-square::before{
    content:"©";
    position:absolute;
    bottom: 0.3em;
    left: -1em;
}
.credits-header{
    letter-spacing: .25em;
}
.credit-entry a {
    transition: .5s ease;
}
.credit-entry a:hover {
    opacity: .5;
}
</style>