<template>
<footer id="footer" class="footer overflow-hidden relative">
    <hr id="footer-hr" class="h-px w-full opacity-20" />
    <div class="fade absolute top-px w-full h-40 pointer-events-none"></div>
    <div class="fade absolute bottom-0 w-full h-40 transform rotate-180 pointer-events-none"></div>
    <div class="absolute bottom-9 w-full h-4 z-10 flex justify-center align-center md:hidden">
        <button :class="{'hidden': !creditsSlow}" class="speed-toggle rounded-3xl border text-sm h-6 px-2 uppercase" @mousedown="resumeAnimation()">
            Toggle Speed
        </button>
        <button :class="{'hidden': creditsSlow}" class="speed-toggle rounded-3xl border text-sm h-6 px-2 uppercase" @mousedown="slowAnimation()">
            Toggle Speed
        </button>
    </div>
    <div id="credits-roll" class="credits mx-4 lg:mx-40 text-center uppercase relative h-screen">
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
                <ul class="grid grid-cols-1 gap-x-4 lg:grid-cols-2 items-start">
                    <li class="col-span-1 lg:col-span-2" @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()">
                        <pre class="credits-logo text-center my-8 font-mono">
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
                    <li class="col-span-1 lg:col-span-2 grid grid-cols-2 gap-x-4 leading-tight" @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()">
                        <p class="text-xs md:text-base text-right">A <b>Vast</b> Production</p>
                        <p class="text-xs md:text-base text-left"></p>
                        <p class="text-xs md:text-base text-right">by</p>
                        <p class="text-xs md:text-base text-left"></p>
                        <p class="text-xs md:text-base text-right"><nuxt-link to="/">VAST Design</nuxt-link></p>
                        <p class="text-xs md:text-base text-left"></p>
                    </li>
                    <li class="grid grid-cols-2 gap-x-4 leading-tight" @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()">
                        <p class="col-span-2 font-medium text-base tracking-wider text-center my-4 md:my-8">
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
                    <li class="grid grid-cols-2 gap-x-4 leading-tight" @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()">
                        <p class="col-span-2 font-medium text-base tracking-wider text-center my-4 md:my-8">
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
                            <a href="https://facebook.com/vast.sg" target="_blank" aria-label="Connect with us on Facebook">vast.sg</a>
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
                    <li class="grid grid-cols-2 gap-x-4 leading-tight" @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()">
                        <p class="col-span-2 font-medium text-base tracking-wider text-center my-4 md:my-8">
                            Technologies
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">Web Application Framework</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://nuxtjs.org/" target="_blank" rel="noopener">
                            Nuxt.JS (Vue.js)
                            </a>
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">CSS Framework</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://tailwindcss.com/" target="_blank" rel="noopener">
                            TailwindCSS
                            </a>
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">Headless CMS</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://prismic.io/" target="_blank" rel="noopener">
                            Prismic
                            </a>
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">Deployment Infrastructure</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://www.netlify.com/" target="_blank" rel="noopener">
                            Netlify
                            </a>
                        </p>
                    </li>
                    <li class="grid grid-cols-2 gap-x-4 leading-tight" @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()">
                        <p class="col-span-2 font-medium text-base tracking-wider text-center my-4 md:my-8">
                            Credits
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">Background Music</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://open.spotify.com/artist/73aKnLT4O8G2pBEfdlQzrE" target="_blank" rel="noopener">
                            Purrple
                            </a>
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">Typography</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://www.renebieder.com/retail-fonts/freigeist" target="_blank" rel="noopener">
                            Freigeist (Studio René Bieder)
                            </a>
                        </p>
                        <p class="text-xs md:text-base text-right font-medium"></p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://www.behance.net/gallery/78862427/Tropiline-Font-Family" target="_blank" rel="noopener">
                            Tropiline (Cahya Sofyan)
                            </a>
                        </p>
                    </li>
                    <li class="col-span-1 lg:col-span-2" @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()">
                       <p class="text-base tracking-wider text-center mt-8">
                            Special Thanks
                        </p>
                        <p class="text-xs md:text-base text-center font-medium">All clients and friends of VAST</p>
                    </li>
                    <li class="text-center lg:text-right" @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()">
                            <Logo class="logo inline-block mt-12"/>
                    </li>
                    <li class="text-center lg:text-left" @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()">
                            <LogoSquare class="logo-square inline-block h-16 lg:ml-16 mt-8"/>
                    </li>
                    <li class="col-span-1 lg:col-span-2 leading-tight mt-10" @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()">
                        <div class="mx-auto block w-60 h-12 border flex">
                            <div class="w-20 border-r serif text-3xl font-bold flex items-center justify-center pt-2">
                                NR
                            </div>
                            <div class="w-full h-full flex flex-col items-center justify-center">
                               <div class="w-full border-b h-6 text-sm font-medium flex items-center justify-center">
                                Not Rated
                                </div>
                                <div class="w-full h-full leading-none text-xs flex items-center justify-center">
                                The Content of this Site Has Not Been Evaluated
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
              </div>
              <div class="marquee-inner relative py-40">
                <ul class="grid grid-cols-1 gap-x-4 lg:grid-cols-2 items-start">
                    <li class="col-span-1 lg:col-span-2" @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()">
                        <pre class="credits-logo text-center my-8 font-mono">
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
                    <li class="col-span-1 lg:col-span-2 grid grid-cols-2 gap-x-4 leading-tight" @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()">
                        <p class="text-xs md:text-base text-right">A <b>Vast</b> Production</p>
                        <p class="text-xs md:text-base text-left"></p>
                        <p class="text-xs md:text-base text-right">by</p>
                        <p class="text-xs md:text-base text-left"></p>
                        <p class="text-xs md:text-base text-right"><nuxt-link to="/">VAST Design</nuxt-link></p>
                        <p class="text-xs md:text-base text-left"></p>
                    </li>
                    <li class="grid grid-cols-2 gap-x-4 leading-tight" @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()">
                        <p class="col-span-2 font-medium text-base tracking-wider text-center my-4 md:my-8">
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
                    <li class="grid grid-cols-2 gap-x-4 leading-tight" @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()">
                        <p class="col-span-2 font-medium text-base tracking-wider text-center my-4 md:my-8">
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
                            <a href="https://facebook.com/vast.sg" target="_blank" aria-label="Connect with us on Facebook">vast.sg</a>
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
                    <li class="grid grid-cols-2 gap-x-4 leading-tight" @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()">
                        <p class="col-span-2 font-medium text-base tracking-wider text-center my-4 md:my-8">
                            Technologies
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">Web Application Framework</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://nuxtjs.org/" target="_blank" rel="noopener">
                            Nuxt.JS (Vue.js)
                            </a>
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">CSS Framework</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://tailwindcss.com/" target="_blank" rel="noopener">
                            TailwindCSS
                            </a>
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">Headless CMS</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://prismic.io/" target="_blank" rel="noopener">
                            Prismic
                            </a>
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">Deployment Infrastructure</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://www.netlify.com/" target="_blank" rel="noopener">
                            Netlify
                            </a>
                        </p>
                    </li>
                    <li class="grid grid-cols-2 gap-x-4 leading-tight" @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()">
                        <p class="col-span-2 font-medium text-base tracking-wider text-center my-4 md:my-8">
                            Credits
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">Background Music</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://open.spotify.com/artist/73aKnLT4O8G2pBEfdlQzrE" target="_blank" rel="noopener">
                            Purrple
                            </a>
                        </p>
                        <p class="text-xs md:text-base text-right font-medium">Typography</p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://www.renebieder.com/retail-fonts/freigeist" target="_blank" rel="noopener">
                            Freigeist (Studio René Bieder)
                            </a>
                        </p>
                        <p class="text-xs md:text-base text-right font-medium"></p>
                        <p class="text-xs md:text-base text-left">
                            <a href="https://www.behance.net/gallery/78862427/Tropiline-Font-Family" target="_blank" rel="noopener">
                            Tropiline (Cahya Sofyan)
                            </a>
                        </p>
                    </li>
                    <li class="col-span-1 lg:col-span-2" @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()">
                       <p class="text-base tracking-wider text-center mt-8">
                            Special Thanks
                        </p>
                        <p class="text-xs md:text-base text-center font-medium">All clients and friends of VAST</p>
                    </li>
                    <li class="text-center lg:text-right" @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()">
                            <Logo class="logo inline-block mt-12"/>
                    </li>
                    <li class="text-center lg:text-left" @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()">
                            <LogoSquare class="logo-square inline-block h-16 lg:ml-16 mt-8"/>
                    </li>
                    <li class="col-span-1 lg:col-span-2 leading-tight mt-10" @mouseenter="slowAnimation()" @mouseleave="resumeAnimation()">
                        <div class="mx-auto block w-60 h-12 border flex">
                            <div class="w-20 border-r serif text-3xl font-bold flex items-center justify-center pt-2">
                                NR
                            </div>
                            <div class="w-full h-full flex flex-col items-center justify-center">
                               <div class="w-full border-b h-6 text-sm font-medium flex items-center justify-center">
                                Not Rated
                                </div>
                                <div class="w-full h-full leading-none text-xs flex items-center justify-center">
                                The Content of this Site Has Not Been Evaluated
                                </div>
                            </div>
                        </div>
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
            creditsSpeed: 12,
            creditsSlow: false,
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
            const currentY = -gsap.getProperty(".marquee-inner", "y")/100
            console.log(currentY)
            const tl = gsap.timeline({repeat: -1})
            tl.fromTo(".marquee-inner", {y: '0%'}, {y: '-100%', duration: this.creditsSpeed, ease: 'linear'}).timeScale(0.2).seek(currentY*this.creditsSpeed);
            this.creditsSlow=true
        },
        resumeAnimation() {
            const tl = gsap.timeline({repeat: -1})
            const newY = -gsap.getProperty(".marquee-inner", "y")/100
            console.log(newY)
            tl.fromTo(".marquee-inner", {y: '0%'}, {y: '-100%', duration: this.creditsSpeed, ease: 'linear'}).timeScale(1).seek(newY*this.creditsSpeed);
            this.creditsSlow=false
        },
    }
}
</script>
<style scoped>
.logo {
    width: 8em;
    padding-top: 2em;
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
.marquee-inner-wrap div, .speed-toggle {
    border-color: var(--color);
}
.speed-toggle {
    background: var(--bg);
    border-color: var(--color);
}
.fade {
background: var(--bg);
background: linear-gradient(0deg, transparent 0%, var(--bg) 100%); 
z-index: 1;
}

</style>