<template>
<footer id="footer" class="footer overflow-hidden relative">
    <hr class="h-px w-full opacity-20" />
    <div class="credits mx-4 lg:mx-40 text-center uppercase relative h-screen">
        <div
            class="
              marquee-vertical
              absolute
              top-0
              left-0
              overflow-hidden
              w-full
              h-full
              font-xs
            "
          >
            <div
              class="marquee-inner-wrap overflow-hidden"
            >
              <div class="marquee-inner relative py-40">
                <ul class="grid grid-cols-1 gap-x-4 lg:grid-cols-2">
                    <li @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()" class="col-span-1 lg:col-span-2">
                        <pre class="credits-logo text-center my-8">
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓     ░▒▓▓▓▓▓▓▓▓▓▓▓▓▒░      ░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  ░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░  ░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒ ░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░        ▓▓▓▓▓▓▓▓▓▓▓▓       
░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░       ▓▓▓▓▓▓▓▓▓▓▓▓       
 ▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓       ▓▓▓▓▓▓▓▓▓▓▓▓       
  ░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░       ▓▓▓▓▓▓▓▓▓▓▓▓       
     ░▒▓▓▓▓▓▓▓▓▓▓▓▓▒░     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░        ▓▓▓▓▓▓▓▓▓▓▓▓       
                        </pre>
                    </li>
                    <li @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()" class="col-span-1 lg:col-span-2 grid grid-cols-2 gap-x-4 leading-tight">
                        <p class="text-xs md:text-base text-right">A <b>Vast</b> Production</p>
                        <p class="text-xs md:text-base text-left"></p>
                        <p class="text-xs md:text-base text-right">by</p>
                        <p class="text-xs md:text-base text-left"></p>
                        <p class="text-xs md:text-base text-right"><nuxt-link to="/">VAST Design</nuxt-link></p>
                        <p class="text-xs md:text-base text-left"></p>
                    </li>
                    <li @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()" class="grid grid-cols-2 gap-x-4 leading-tight">
                        <p class="col-span-2 text-base tracking-wider text-center my-8">
                            Contact
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">Telephone</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="tel:+6569424062" aria-label="Call us">
                                +65-6942-4062
                            </a>
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">Email</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="mailto:hello@vast.sg" aria-label="Email us" rel="noopener">
                                hello@vast.sg
                            </a>
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">Address</p>
                        <p class="text-xs md:text-base text-left">1°18’22”N</p>
                        <p class="text-xs md:text-base text-right font-medium"></p>
                        <p class="text-xs md:text-base text-left">103°51’16”E</p>
                        <p class="text-xs md:text-base text-right font-medium"></p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://maps.google.com/?q=VAST%20632%20Veerasamy%20Road%20#19-102" target="_blank" class="link-arrow-before out" aria-label="View on map" rel="noopener">View map</a>
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">Local Time</p>
                        <p class="text-xs md:text-base text-left">{{$moment().tz("Asia/Singapore").format('hh:mm A')}} SGT</p>
                        <p class="text-xs md:text-base text-right font-medium"></p>
                        <p class="text-xs md:text-base text-left">{{$moment().format('D MMMM Y')}}</p>
                    </li>
                    <li @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()" class="grid grid-cols-2 gap-x-4 leading-tight">
                        <p class="col-span-2 text-base tracking-wider text-center my-8">
                            Social Media
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">Dribbble</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://dribbble.com/vastdesign" target="_blank" aria-label="Connect with us on Dribbble">
                            vastdesign
                            </a>
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">Facebook</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://facebook.com/vast.sg" target="_blank" aria-label="Connect with us on Facebook">
                            vast.sg
                            </a>
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">Instagram</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://instagram.com/vast.sg" target="_blank" aria-label="Connect with us on Instagram">
                            vast.sg
                            </a>
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">LinkedIn</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://www.linkedin.com/company/vast-sg/" target="_blank" aria-label="Connect with us on LinkedIn">
                            vast-sg
                            </a>
                        </p>
                    </li>
                    <li @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()" class="grid grid-cols-2 gap-x-4 leading-tight">
                        <p class="col-span-2 text-base tracking-wider text-center my-8">
                            Technologies
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">Web Application Framework</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://nuxtjs.org/" target="_blank" rel="noopener my-8">
                            Nuxt.JS (Vue.js)
                            </a>
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">CSS Framework</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://tailwindcss.com/" target="_blank" rel="noopener my-8">
                            TailwindCSS
                            </a>
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">Headless CMS</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://prismic.io/" target="_blank" rel="noopener my-8">
                            Prismic
                            </a>
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">Deployment Infrastructure</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://www.netlify.com/" target="_blank" rel="noopener my-8">
                            Netlify
                            </a>
                        </p>
                    </li>
                    <li @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()" class="grid grid-cols-2 gap-x-4 leading-tight">
                        <p class="col-span-2 text-base tracking-wider text-center my-8">
                            Credits
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">Background Music</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://open.spotify.com/artist/73aKnLT4O8G2pBEfdlQzrE" target="_blank" rel="noopener my-8">
                            Purrple
                            </a>
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">Typography</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://www.renebieder.com/retail-fonts/freigeist" target="_blank" rel="noopener my-8">
                            Freigeist (Studio René Bieder)
                            </a>
                        </p>
                        <p class="text-xs md:text-base text-right font-medium"></p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://www.behance.net/gallery/78862427/Tropiline-Font-Family" target="_blank" rel="noopener my-8">
                            Tropiline (Cahya Sofyan)
                            </a>
                        </p>
                    </li>
                    <li @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()" class="col-span-1 lg:col-span-2">
                       <p class="text-base tracking-wider text-center mt-8">
                            Special Thanks
                        </p>
                        <p class="text-xs md:text-base text-center font-medium">All clients and friends of VAST</p>
                    </li>
                    <li @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()" class="text-center lg:text-right">
                            <Logo class="logo inline-block mt-10"/>
                    </li>
                    <li @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()" class="text-center lg:text-left">
                            <LogoSquare class="logo-square inline-block h-8 mt-8"/>
                    </li>
                </ul>
              </div>
                <div class="marquee-inner relative py-40">
                <ul class="grid grid-cols-1 gap-x-4 lg:grid-cols-2">
                    <li @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()" class="col-span-1 lg:col-span-2">
                        <pre class="credits-logo text-center my-8">
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓     ░▒▓▓▓▓▓▓▓▓▓▓▓▓▒░      ░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  ░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░  ░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒ ░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░        ▓▓▓▓▓▓▓▓▓▓▓▓       
░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░       ▓▓▓▓▓▓▓▓▓▓▓▓       
 ▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓       ▓▓▓▓▓▓▓▓▓▓▓▓       
  ░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░       ▓▓▓▓▓▓▓▓▓▓▓▓       
     ░▒▓▓▓▓▓▓▓▓▓▓▓▓▒░     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░        ▓▓▓▓▓▓▓▓▓▓▓▓       
                        </pre>
                    </li>
                    <li @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()" class="col-span-1 lg:col-span-2 grid grid-cols-2 gap-x-4 leading-tight">
                        <p class="text-xs md:text-base text-right">A <b>Vast</b> Production</p>
                        <p class="text-xs md:text-base text-left"></p>
                        <p class="text-xs md:text-base text-right">by</p>
                        <p class="text-xs md:text-base text-left"></p>
                        <p class="text-xs md:text-base text-right"><nuxt-link to="/">VAST Design</nuxt-link></p>
                        <p class="text-xs md:text-base text-left"></p>
                    </li>
                    <li @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()" class="grid grid-cols-2 gap-x-4 leading-tight">
                        <p class="col-span-2 text-base tracking-wider text-center my-8">
                            Contact
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">Telephone</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="tel:+6569424062" aria-label="Call us">
                                +65-6942-4062
                            </a>
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">Email</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="mailto:hello@vast.sg" aria-label="Email us" rel="noopener">
                                hello@vast.sg
                            </a>
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">Address</p>
                        <p class="text-xs md:text-base text-left">1°18’22”N</p>
                        <p class="text-xs md:text-base text-right font-medium"></p>
                        <p class="text-xs md:text-base text-left">103°51’16”E</p>
                        <p class="text-xs md:text-base text-right font-medium"></p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://maps.google.com/?q=VAST%20632%20Veerasamy%20Road%20#19-102" target="_blank" class="link-arrow-before out" aria-label="View on map" rel="noopener">View map</a>
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">Local Time</p>
                        <p class="text-xs md:text-base text-left">{{$moment().tz("Asia/Singapore").format('hh:mm A')}} SGT</p>
                        <p class="text-xs md:text-base text-right font-medium"></p>
                        <p class="text-xs md:text-base text-left">{{$moment().format('D MMMM Y')}}</p>
                    </li>
                    <li @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()" class="grid grid-cols-2 gap-x-4 leading-tight">
                        <p class="col-span-2 text-base tracking-wider text-center my-8">
                            Social Media
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">Dribbble</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://dribbble.com/vastdesign" target="_blank" aria-label="Connect with us on Dribbble">
                            vastdesign
                            </a>
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">Facebook</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://facebook.com/vast.sg" target="_blank" aria-label="Connect with us on Facebook">
                            vast.sg
                            </a>
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">Instagram</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://instagram.com/vast.sg" target="_blank" aria-label="Connect with us on Instagram">
                            vast.sg
                            </a>
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">LinkedIn</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://www.linkedin.com/company/vast-sg/" target="_blank" aria-label="Connect with us on LinkedIn">
                            vast-sg
                            </a>
                        </p>
                    </li>
                    <li @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()" class="grid grid-cols-2 gap-x-4 leading-tight">
                        <p class="col-span-2 text-base tracking-wider text-center my-8">
                            Technologies
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">Web Application Framework</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://nuxtjs.org/" target="_blank" rel="noopener my-8">
                            Nuxt.JS (Vue.js)
                            </a>
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">CSS Framework</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://tailwindcss.com/" target="_blank" rel="noopener my-8">
                            TailwindCSS
                            </a>
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">Headless CMS</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://prismic.io/" target="_blank" rel="noopener my-8">
                            Prismic
                            </a>
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">Deployment Infrastructure</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://www.netlify.com/" target="_blank" rel="noopener my-8">
                            Netlify
                            </a>
                        </p>
                    </li>
                    <li @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()" class="grid grid-cols-2 gap-x-4 leading-tight">
                        <p class="col-span-2 text-base tracking-wider text-center my-8">
                            Credits
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">Background Music</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://open.spotify.com/artist/73aKnLT4O8G2pBEfdlQzrE" target="_blank" rel="noopener my-8">
                            Purrple
                            </a>
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">Typography</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://www.renebieder.com/retail-fonts/freigeist" target="_blank" rel="noopener my-8">
                            Freigeist (Studio René Bieder)
                            </a>
                        </p>
                        <p class="text-xs md:text-base text-right font-medium"></p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://www.behance.net/gallery/78862427/Tropiline-Font-Family" target="_blank" rel="noopener my-8">
                            Tropiline (Cahya Sofyan)
                            </a>
                        </p>
                    </li>
                    <li @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()" class="col-span-1 lg:col-span-2">
                       <p class="text-base tracking-wider text-center mt-8">
                            Special Thanks
                        </p>
                        <p class="text-xs md:text-base text-center font-medium">All clients and friends of VAST</p>
                    </li>
                    <li @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()" class="text-center lg:text-right">
                            <Logo class="logo inline-block mt-10"/>
                    </li>
                    <li @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()" class="text-center lg:text-left">
                            <LogoSquare class="logo-square inline-block h-8 mt-8"/>
                    </li>
                </ul>
              </div>
            </div>
        </div>
    </div>
</footer>
</template>

<script>
import gsap from 'gsap';
import Logo from '@/components/Logo';
import LogoSquare from '@/components/LogoSquare';
export default {
    name: 'AppFooter',
    components: {
        Logo,
        LogoSquare
    },
    data() {
        return {
            creditsSpeed: 8
        }
    },
    mounted() {
        this.creditsAnimation()
    },
    methods: {
        creditsAnimation() {
            const tl = gsap.timeline({repeat: -1})   
            tl.fromTo(".marquee-inner", {y: '0%'}, {y: '-100%', duration: this.creditsSpeed, ease: 'linear'}).timeScale(1);
        },
        slowAnimation() {
            console.log('slowing down')
            const currentY = -gsap.getProperty(".marquee-inner", "y")/100
            console.log(currentY)
            const tl = gsap.timeline({repeat: -1})   
            tl.fromTo(".marquee-inner", {y: '0%'}, {y: '-100%', duration: this.creditsSpeed, ease: 'linear'}).timeScale(0.2).seek(currentY*this.creditsSpeed);
        },
        resumeAnimation() {
            const tl = gsap.timeline({repeat: -1})
            const newY = -gsap.getProperty(".marquee-inner", "y")/100
            console.log(newY)
            tl.fromTo(".marquee-inner", {y: '0%'}, {y: '-100%', duration: this.creditsSpeed, ease: 'linear'}).timeScale(1).seek(newY*this.creditsSpeed);
            console.log('speeding up')
        }
    }
}
</script>
<style scoped>
.logo {
    width: 4em;
    padding-top: 1em;
}
.logo::before{
    content:"©";
    opacity: 0;
    position:absolute;
    bottom:0;
    left: -1.2em;
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
.credits-logo {
    font-size: .8vw;
    line-height: 1.3;
    letter-spacing: .05em;
}
.marquee-inner-wrap {
  height: 100%;
  width: 100%;
}


</style>