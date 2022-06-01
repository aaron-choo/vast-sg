<template>
  <main>
    <section class="home-header">
      <div
        id="home-hero"
        class="h-screen flex justify-center items-center p-4 sticky top-0"
      >
        <svg
          class="home-hero-logo logo-v"
          width="280"
          height="280"
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0.000244141H139.899V70.0503C139.899 108.682 108.582 140 69.9497 140V140C31.3175 140 0 108.682 0 70.0503V0.000244141Z"
            fill="url(#paint0_linear_201_10)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_201_10"
              x1="-2.28496e-09"
              y1="3.18591e-06"
              x2="139.398"
              y2="0.099981"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="var(--color)" />
              <stop offset="1" stop-color="var(--color)" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          class="home-hero-logo logo-a"
          width="280"
          height="280"
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.200589 69.9498C0.200582 31.3177 31.5181 0.000116591 70.1503 0.000109831V0.000109831C108.782 0.000103072 140.1 31.3176 140.1 69.9498L140.1 140L0.200601 140L0.200589 69.9498Z"
            fill="url(#paint0_linear_201_11)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_201_11"
              x1="1.7983e-09"
              y1="-2.53575e-06"
              x2="139.599"
              y2="0.0999755"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="var(--color)" />
              <stop offset="1" stop-color="var(--color)" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          class="home-hero-logo logo-s"
          width="280"
          height="280"
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M109.537 70.2509H139.8V0H35.5021C16.1168 0 0.401827 15.7262 0.401827 35.1255C0.401827 53.4969 14.4957 68.5743 32.4537 70.1203C14.505 71.6061 0.401154 86.6547 0.401154 105C0.401154 124.33 16.0599 140 35.376 140H105.326C124.642 140 140.301 124.33 140.301 105C140.301 87.0961 126.867 72.3321 109.537 70.2509Z"
            fill="url(#paint0_linear_201_19)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_201_19"
              x1="1.64109e-08"
              y1="-0.000241648"
              x2="139.799"
              y2="0.100053"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="var(--color)" />
              <stop offset="1" stop-color="var(--color)" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          class="home-hero-logo logo-t"
          width="280"
          height="280"
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M140 70.2509V0H0.601715V70.2509H36.077V140H106.027V70.2509H140Z"
            fill="url(#paint0_linear_201_17)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_201_17"
              x1="1"
              y1="-6.99443e-07"
              x2="139.498"
              y2="0.596044"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="var(--color)" />
              <stop offset="1" stop-color="var(--color)" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <a
        onclick="document.querySelector('#header-text').scrollIntoView({behavior: 'smooth'});"
        class="
          scroll-down-button scroll-down
          absolute
          right-4
          bottom-4
          flex
          items-center
          gap-2
          leading-none
          cursor-pointer
        "
      >
        <p>EXPLORE</p>
        <div class="scroll-down-icon rounded-full w-3 h-3 relative">
          <div
            class="
              scroll-down-icon-helper
              absolute
              rounded-full
              top-0
              left-0
              w-full
              h-full
            "
          ></div>
          <div
            class="
              scroll-down-icon-helper
              absolute
              rounded-full
              top-0
              left-0
              w-full
              h-full
            "
            style="animation-delay: 0.25s"
          ></div>
        </div>
      </a>
      <div
        id="header-text"
        class="
          w-full
          h-screen
          flex flex-col
          justify-center
          p-4
          relative
          mix-blend-difference
        "
      >
        <h1
          id="header-title"
          class="
            tracking-tighter
            leading-none
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            my-4
            inline
          "
        >
          <span
            class="
              relative
              text-sm
              lg:text-base
              tracking-normal
              uppercase
              inline-block
              mr-16
              -mb-4
              body-font
              dot
            "
            >We are VAST</span
          >

          <span
            v-for="(word, index) in titleWords"
            :key="index"
            class="title-words inline align-top relative heading-font"
            >{{ word }}
            <div
              v-if="index === 10"
              :key="index"
              class="marker-underline absolute left-0 w-full"
              style="bottom: 20%"
            >
              <svg
                id="markerunderline"
                width="448"
                height="20"
                viewBox="0 0 224 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style="width: 95%; height: auto"
              >
                <g clip-path="url(#underlinemask)">
                  <path
                    d="M0 5.5H224.5"
                    stroke="currentColor"
                    stroke-width="20"
                  />
                </g>
                <defs>
                  <clipPath id="underlinemask">
                    <path
                      d="M223.698 2.46782C224.102 2.05486 223.914 0.804663 223.798 0.221991C222.941 -0.0803056 221.749 -0.00473102 220.846 0.0525089C220.786 0.0563248 220.727 0.0600593 220.669 0.0635948C219.76 0.123597 218.871 0.20756 217.991 0.290689C216.133 0.466195 214.315 0.637984 212.425 0.572725C211.72 0.549487 211.022 0.47255 210.316 0.394764C209.648 0.321067 208.973 0.246608 208.278 0.216334C207.336 0.17516 206.358 0.188474 205.35 0.202195C204.835 0.209211 204.312 0.216334 203.782 0.216334C203.208 0.216334 202.691 0.198297 202.193 0.180889C201.475 0.155803 200.795 0.132025 200.033 0.165421C198.194 0.246994 196.149 0.206619 193.998 0.164164C190.929 0.103573 187.645 0.0387477 184.441 0.31816C183.808 0.374204 183.169 0.399275 182.529 0.424367C181.749 0.454996 180.967 0.485658 180.194 0.572725C179.242 0.677871 178.287 0.83144 177.33 0.985382C175.61 1.26212 173.882 1.54007 172.149 1.54007C171.646 1.54007 171.143 1.54764 170.641 1.5552C169.64 1.57027 168.641 1.58529 167.653 1.54007C166.889 1.50753 166.128 1.387 165.362 1.26572C164.797 1.17617 164.229 1.08621 163.655 1.03094C161.704 0.840717 159.74 0.949855 157.777 1.05894C156.822 1.11205 155.866 1.16516 154.912 1.18368C154.154 1.19936 153.4 1.28458 152.643 1.36996C152.036 1.43858 151.427 1.5073 150.815 1.54007C150.363 1.56259 149.91 1.59008 149.456 1.6176C148.541 1.67305 147.624 1.7286 146.718 1.74373C145.686 1.7598 144.585 1.81627 143.455 1.87423C140.211 2.04061 136.729 2.21919 133.977 1.48916C132.632 1.13277 131.38 0.98003 129.98 0.98003C129.479 0.98003 128.978 0.98632 128.476 0.992609C127.474 1.00518 126.473 1.01774 125.484 0.98003C124.915 0.959535 124.351 0.922541 123.789 0.885651C122.955 0.830899 122.124 0.776378 121.287 0.776378C119.351 0.776378 117.408 0.739316 115.465 0.702243C111.576 0.628062 107.685 0.553833 103.845 0.776378C103.054 0.823041 102.274 0.814072 101.509 0.805283C100.791 0.797024 100.086 0.788923 99.399 0.827291C95.7834 1.02529 92.7768 1.64756 89.7536 2.46217C89.564 2.51277 89.3776 2.57038 89.1927 2.62751C88.7782 2.75558 88.3715 2.88126 87.9541 2.92038C86.7664 3.028 85.5858 2.85809 84.4076 2.68854C83.7898 2.59963 83.1727 2.51081 82.5556 2.46217C80.7505 2.32074 78.9455 2.14537 77.2069 1.95303C76.2888 1.8549 75.4499 1.66399 74.6293 1.47723C73.8415 1.29795 73.0705 1.12249 72.2624 1.0366C71.0837 0.90984 69.8454 1.0771 68.5872 1.24704C68.0485 1.31979 67.5063 1.39303 66.9635 1.4439C65.3135 1.59664 63.6303 1.92475 62.019 2.36034C60.4411 2.79288 58.8085 3.11386 57.2081 3.42852L57.1742 3.43517C54.9647 3.87397 52.311 3.79592 49.8158 3.72252C49.4159 3.71076 49.02 3.69911 48.6307 3.68974C48.2229 3.67999 47.8162 3.64611 47.4126 3.6125C46.8792 3.56807 46.3515 3.52411 45.8345 3.537C45.244 3.55227 44.6585 3.63714 44.061 3.72375C43.7734 3.76545 43.483 3.80755 43.1879 3.84248C42.4888 3.92601 41.7536 3.91395 41.02 3.90191C40.76 3.89765 40.5001 3.89339 40.2422 3.89339C38.3375 3.89339 36.3996 4.07441 34.6444 4.24978C33.156 4.40139 31.6055 4.28809 30.0374 4.1735C29.6746 4.147 29.3109 4.12042 28.9468 4.09704C28.5321 4.07056 28.1163 4.06764 27.703 4.06474C27.1451 4.06083 26.5917 4.05695 26.051 3.99521C25.8111 3.96864 25.5655 3.94072 25.315 3.91225C22.9528 3.64375 20.1647 3.32682 17.7567 3.63882C17.0389 3.73109 16.3453 3.87677 15.6455 4.02375C14.672 4.22823 13.6865 4.43523 12.6073 4.50434C11.9206 4.54834 11.218 4.65016 10.494 4.75509C9.44936 4.9065 8.35998 5.06439 7.20879 5.06439C6.92267 5.06439 6.62571 5.06963 6.31773 5.07507C5.66616 5.08658 4.96526 5.09896 4.2133 5.06439C3.90028 5.04985 3.51114 4.99262 3.12287 4.93552C2.45348 4.83707 1.78664 4.73901 1.5168 4.86074C1.17561 5.01476 0.968029 6.06622 1.00404 6.80605C0.795165 6.7986 0.624414 6.81219 0.516804 6.86074C0.0406265 7.0757 -0.175314 9.03868 0.167976 9.46296C3.31296 9.91552 5.98731 10.0569 8.46233 9.66661C9.23976 9.54372 10.0358 9.48118 10.8349 9.4184C11.544 9.36269 12.2555 9.3068 12.9583 9.20839C13.6717 9.10927 14.3703 8.93804 15.0694 8.7667C15.7269 8.60556 16.3848 8.44432 17.0557 8.34287C18.9261 8.05565 20.9944 8.28953 23.0614 8.52325C24.0477 8.63477 25.0338 8.74627 25.9978 8.80109C29.093 8.98211 32.3155 9.03303 35.4439 8.90292C36.1388 8.87502 36.8259 8.82895 37.5107 8.78303C38.3537 8.7265 39.1933 8.6702 40.0395 8.64835C40.3264 8.64027 40.6125 8.64301 40.8982 8.64576C41.4122 8.65069 41.9246 8.65561 42.437 8.59744C42.685 8.56929 42.9318 8.53553 43.1787 8.50176C43.6762 8.43371 44.1744 8.36555 44.685 8.34287C45.5083 8.30687 46.3594 8.35986 47.2146 8.41311C47.8377 8.45191 48.463 8.49084 49.0814 8.49561C50.078 8.50618 51.0704 8.48822 52.0531 8.47044C52.6482 8.45967 53.2397 8.44897 53.8265 8.4447C55.2385 8.43904 56.5618 8.21276 57.9239 7.88465C58.515 7.74168 59.1104 7.61482 59.7026 7.48862C60.4694 7.32521 61.231 7.16293 61.9714 6.96822C63.2449 6.63446 64.69 6.29504 66.1186 6.15361C66.6311 6.10422 67.1503 6.02929 67.6711 5.95413C68.6414 5.81411 69.6171 5.67331 70.5648 5.69539C71.3601 5.71133 72.1466 5.9229 72.9501 6.13904C73.573 6.30661 74.2061 6.47692 74.8614 6.56091C77.1537 6.85508 79.6011 7.07005 82.0096 7.22278C82.4389 7.24784 82.8511 7.33014 83.2614 7.41205C83.5921 7.47807 83.9216 7.54383 84.2576 7.57918C85.819 7.74889 87.3472 7.7206 88.8533 7.2737C91.6716 6.43646 94.5951 5.9047 97.5961 5.58791C98.7693 5.46579 100.077 5.47385 101.397 5.482C101.728 5.48404 102.06 5.48608 102.391 5.48608C103.189 5.48608 104.039 5.43072 104.853 5.3777C105.621 5.32764 106.358 5.27968 106.987 5.28243C108.269 5.28999 109.613 5.34801 110.982 5.40706C112.687 5.48064 114.429 5.55583 116.134 5.537C116.679 5.53081 117.203 5.52312 117.718 5.51557C118.615 5.50241 119.483 5.48968 120.381 5.48608C121.114 5.48333 121.873 5.53153 122.664 5.58173C123.498 5.63463 124.366 5.68974 125.275 5.68974C125.801 5.68974 126.323 5.67764 126.842 5.66563C128.061 5.63741 129.259 5.60969 130.425 5.74065C131.135 5.82098 131.833 5.99219 132.537 6.16461C133.27 6.34431 134.008 6.52534 134.771 6.60617C136.964 6.83687 139.168 6.73226 141.416 6.62559C142.586 6.57009 143.767 6.51403 144.965 6.50434C145.622 6.49955 146.278 6.44197 146.949 6.3832C147.069 6.37261 147.191 6.36197 147.312 6.35161C147.78 6.31076 148.251 6.31354 148.723 6.31634C149.101 6.31857 149.48 6.32081 149.859 6.30069C150.562 6.26503 151.263 6.18579 151.966 6.10634C152.824 6.00935 153.684 5.91205 154.555 5.89339C155.308 5.87821 156.055 5.83586 156.799 5.79369C157.719 5.74158 158.634 5.68974 159.549 5.68974C161.182 5.68974 162.738 5.79722 164.394 6.04613C167.489 6.51 171.132 6.49869 174.189 6.04613C174.727 5.96787 175.255 5.87893 175.78 5.79068C176.733 5.63014 177.674 5.47187 178.635 5.38426C183.441 4.95433 188.457 4.92604 193.773 4.92604C194.929 4.92604 196.087 4.92918 197.246 4.93233C199.562 4.93861 201.877 4.9449 204.166 4.92604C205.622 4.91473 206.663 4.90907 208.363 5.02787C208.599 5.04477 208.838 5.06265 209.08 5.08079C210.38 5.17797 211.777 5.28243 213.307 5.28243C214.963 5.28243 216.408 5.09575 218.102 4.87513C218.465 4.82904 219.06 4.82076 219.704 4.81178C220.958 4.79432 222.402 4.77422 222.698 4.46782C223.009 4.15052 222.969 3.33896 222.882 2.71568C223.28 2.66656 223.58 2.58992 223.698 2.46782Z"
                      fill="black"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div
              v-if="index === 12"
              :key="index"
              class="digital-underline absolute left-0 w-0 mix-blend-difference"
            ></div>
          </span>
        </h1>
      </div>
    </section>
    <section class="home-scroller section relative">
      <div class="relative">
        <div
          class="
            scroller-wrapper
            m-4
            lg:m-8 lg:grid lg:grid-cols-12 lg:gap-x-4
            items-top
          "
        >
          <div
            v-for="project in recentprojects"
            :key="project.id"
            class="
              scroller-slide
              relative
              self-start
              lg:col-span-7
              mb-10
              md:mb-0
            "
            :data-color="project.data.textColor"
            :data-background="project.data.backgroundColor"
            :style="
              '--project-color:' +
              project.data.textColor +
              '; --project-bg-color:' +
              project.data.backgroundColor
            "
          >
            <nuxt-link :to="LinkGetter(project)" class="cursor-view">
              <div
                class="
                  item-overlay
                  hidden
                  absolute
                  top-0
                  left-0
                  right-0
                  bottom-0
                  md:block
                  z-10
                  transition
                  duration-300
                  rounded-lg
                  opacity-0
                  pointer-events-none
                "
              ></div>
              <p
                class="
                  relative
                  item-meta item-meta-tag
                  text-sm
                  leading-tight
                  lg:text-base lg:leading-tight
                  2xl:text-lg 2xl:leading-tight
                  uppercase
                  inline-block
                  mb-2
                  md:opacity-0 md:absolute md:top-4 md:left-4 md:right-4
                  transition
                  duration-300
                  z-10
                  pointer-events-none
                  dot
                "
              >
                <span>{{ $prismic.asText(project.data.summary) }}</span>
                <!-- <span
                  v-for="(tag, index) in project.tags"
                  :key="tag"
                  class="inline-block"
                  >{{ tag
                  }}<template v-if="Object.keys(project.tags).length > 1"
                    ><span
                      v-if="index != Object.keys(project.tags).length - 1"
                      class="sep"
                      >/</span
                    ></template
                  ></span
                > -->
              </p>
              <div
                class="
                  scroller-media-container
                  block
                  overflow-hidden
                  rounded-lg
                "
                :class="project.data.kind"
              >
                <div class="scroller-media-wrapper">
                  <nuxt-img
                    v-if="project.data.image.url"
                    format="webp"
                    :src="project.data.image.url"
                    sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
                    :width="project.data.image.dimensions.width"
                    :height="project.data.image.dimensions.height"
                    class="
                      scroller-image
                      w-full
                      object-cover
                      transition
                      duration-1000
                    "
                    loading="lazy"
                  />
                  <video
                    v-if="project.data.video.url"
                    :poster="project.data.image.url"
                    class="
                      scroller-video
                      absolute
                      top-0
                      w-full
                      transition
                      duration-1000
                    "
                    autoplay
                    muted
                    loop
                    playsinline
                  >
                    <source :src="project.data.video.url" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div
                class="
                  item-meta
                  text-2xl
                  lg:text-3xl
                  xl:text-4xl
                  3xl:text-5xl
                  uppercase
                  title
                  flex
                  justify-between
                  tracking-tight
                  md:opacity-0 md:absolute md:left-4 md:bottom-4 md:right-4
                  z-10
                  transition
                  duration-300
                  pointer-events-none
                  heading-font
                  mt-2
                "
              >
                {{ $prismic.asText(project.data.title) }}
                <span class="date font-light tracking-normal">{{
                  $moment(project.data.date).format('MM/YY')
                }}</span>
              </div>
            </nuxt-link>
          </div>
          <div
            class="scroller-slide relative self-end lg:col-span-5 mb-10 md:mb-0"
          >
            <nuxt-link
              to="/projects"
              class="
                link
                inline-block
                uppercase
                font-light
                text-2xl
                lg:text-3xl
                leading-none
                lg:leading-none
              "
              >View all projects
              <span class="link-arrow inline-block align-bottom"
                >→</span
              ></nuxt-link
            >
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="description-section section grid my-24 px-4 lg:px-8">
        <p
          id="home-description"
          class="
            inline-block
            leading-none
            text-2xl
            lg:text-3xl lg:leading-none
            transition
            duration-300
            transform
          "
        >
          <span
            class="
              summary
              relative
              text-sm
              lg:text-base
              uppercase
              inline-block
              mr-16
              -mb-4
              dot
            "
            >Multi-disciplinary Design Studio</span
          ><span class="home-description serif font-light"
            >Vast is a design studio with a focus on branding and communication,
            digital design and web development, as well as interior design and
            architectural visualization.<br />Founded in 2021, the studio
            provides branding and design services to small- and medium sized
            businesses.</span
          >
        </p>
        <nuxt-link
          to="/about"
          class="
            link
            inline-block
            uppercase
            font-light
            text-2xl
            lg:text-3xl
            leading-none
            lg:leading-none
            mt-8
            text-right
          "
          >About us
          <span class="link-arrow inline-block align-bottom">→</span></nuxt-link
        >
      </div>
    </section>
    <slice-zone type="home_page" queryType="single" />
  </main>
</template>

<script>
import gsap from 'gsap'
import { directive } from 'vue-awesome-swiper'
import SliceZone from 'vue-slicezone'
import LinkResolver from '~/plugins/link-resolver.js'
export default {
  name: 'HomePage',
  components: {
    SliceZone,
  },
  directives: {
    swiper: directive,
  },
  async asyncData({ $prismic, error }) {
    try {
      const pageContent = (await $prismic.api.getSingle('home_page')).data
      // Query projects
      const recentprojects = await $prismic.api.query(
        $prismic.predicates.at('document.type', 'project'),
        {
          orderings: '[my.project.date desc]',
          pageSize: 5,
        }
      )
      return {
        page: pageContent,
        title: pageContent.title,
        titleWords: Array.from($prismic.asText(pageContent.title).split(' ')),
        backgroundColor: pageContent.backgroundColor,
        textColor: pageContent.textColor,
        recentprojects: recentprojects.results,
        intro: pageContent.intro,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  data() {
    return {
      page: null,
      swiperOption: {
        effect: 'fade',

        autoplay: {
          delay: 100,
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  head() {
    return {
      title: this.page.metaTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.metaDescription,
        },
      ],
    }
  },
  beforeMount() {
    this.rootVariable('--bg', this.backgroundColor)
    this.rootVariable('--color-primary', this.textColor)
    this.rootVariable('--color', this.textColor)
  },
  mounted() {
    window.addEventListener('scroll', this.headerScroll)
    const gsap = this.$gsap
    const ExpoScaleEase = this.$ExpoScaleEase
    const ScrollToPlugin = this.$ScrollToPlugin
    const ScrollTrigger = this.$ScrollTrigger
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, ExpoScaleEase)
    this.$ScrollTrigger.refresh()
    this.heroAnimation()
  },
  updated() {
    this.$ScrollTrigger.refresh()
  },
  destroyed() {
    window.removeEventListener('scroll', this.headerScroll)
  },
  methods: {
    LinkGetter(post) {
      return LinkResolver(post)
    },
    rootVariable(a, b) {
      document.documentElement.style.setProperty(a, b)
    },
    heroAnimation() {
      gsap.set('.title-words:nth-child(n+7)', {
        opacity: 0,
      })
      gsap.set('#header-text', {
        translateY: '0',
      })
      gsap.set('.home-hero-logo', {
        opacity: '0.15',
      })
      gsap.to('.home-hero-logo', {
        scrollTrigger: {
          trigger: '#header-text',
          start: 'top 50%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0.05,
        duration: 0.5,
        stagger: 0.2,
      })
      gsap.to('#header-text', {
        scrollTrigger: {
          trigger: '.home-header',
          start: 'bottom bottom',
          end: 'bottom 50%',
          scrub: true,
        },
        translateY: '0',
      })
      gsap.to('.title-words:nth-child(n+7)', {
        scrollTrigger: {
          trigger: '#header-text',
          start: 'top 25%',
          end: 'top top',
          scrub: 2,
        },
        opacity: 1,
        duration: 1,
        stagger: 0.2,
      })
      gsap.to('.title-words:not(:nth-child(n+7))', {
        scrollTrigger: {
          trigger: '#header-text',
          start: 'top 25%',
          end: 'top top',
          scrub: 2,
        },
        opacity: 0.25,
        duration: 1,
        stagger: 0.2,
      })
      gsap.to('#markerunderline', {
        scrollTrigger: {
          trigger: '#header-text',
          start: 'top 5%',
          toggleActions: 'play none none reverse',
        },
        strokeDashoffset: 0,
        duration: 0.5,
        delay: 0.8,
        ease: 'Power4.easeOut',
      })
      gsap.to('.digital-underline', {
        scrollTrigger: {
          trigger: '#header-text',
          start: 'top 5%',
          toggleActions: 'play none none reverse',
        },
        width: '105%',
        duration: 0.5,
        delay: 0.8,
        ease: 'Power4.easeOut',
      })
      gsap.to('.scroll-down-button', {
        scrollTrigger: {
          trigger: '.scroll-down-button',
          start: 'bottom bottom',
          end: 'bottom 50%',
          scrub: 1,
        },
        opacity: 0,
        duration: 1,
      })
      const scrollerslides = document.getElementsByClassName('scroller-slide')
      const scrollerMediaWrappers = document.getElementsByClassName(
        'scroller-media-wrapper'
      )
      const scrollerMediaContainers = document.getElementsByClassName(
        'scroller-media-container'
      )
      for (let i = 0; i < scrollerslides.length; i++) {
        gsap.set(scrollerMediaWrappers[i], {
          y: '-20%',
          scale: 1.2,
        })
        gsap.to(scrollerMediaWrappers[i], {
          scrollTrigger: {
            trigger: scrollerMediaContainers[i],
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
          y: '20%',
        })
      }
    },
  },
}
</script>
<style scoped>
.home-hero-logo {
  opacity: 0.08;
  transition: opacity 1s ease;
}

.home-hero-logo.logo-v {
  transform: translateX(75%);
}
.home-hero-logo.logo-a {
  transform: translateX(25%);
}
.home-hero-logo.logo-s {
  transform: translateX(-25%);
}
.home-hero-logo.logo-t {
  transform: translateX(-75%);
}
#header-text {
  max-width: 65em;
  margin: 0 auto;
}
.title-words {
  vertical-align: baseline;
  margin-right: 0.1em;
}

.title-words:nth-child(2) {
  margin-left: 1.8em;
}
.title-words:nth-child(12) {
  font-family: 'IM Fell English', serif;
  font-size: 1.1em;
  vertical-align: text-bottom;
  font-style: italic;
}
.title-words:nth-child(14) {
  font-family: 'PP Mondwest', serif;
  font-size: 1.05em;
  font-style: italic;
  padding-right: 0.1em;
}

#markerunderline {
  stroke-dasharray: 230;
  stroke-dashoffset: 230;
}

.digital-underline {
  bottom: 10%;
  right: -5%;
  left: auto;
  height: 0.4em;
  background: currentColor;
}

.scroll-down-icon {
  background: currentColor;
}

.scroll-down-icon-helper {
  background: currentColor;
  animation: scroll-down 1.5s ease infinite;
}
@keyframes scroll-down {
  0% {
    opacity: 0;
    transform: translateY(-200%);
  }
  60% {
    opacity: 0.8;
    transform: translateY(0);
  }
}
.scroller-media-container {
  transform: translateZ(0);
}

.scroller-slide:hover .scroller-image,
.scroller-slide:hover .scroller-video {
  transform: scale(1.02);
}

.scroller-media-container.document * {
  transform: none !important;
}

.scroller-slide {
  margin-bottom: 6rem;
}

.scroller-slide:nth-child(5),
.scroller-slide:nth-child(6) {
  margin-bottom: 1rem;
}

@media (max-width: 767px) {
  .scroller-slide {
    transform: none !important;
  }
}
@media (min-width: 768px) {
  .item-meta {
    color: var(--project-color);
  }
}
@media (min-width: 1024px) {
  .scroller-slide:nth-child(1) {
    grid-column-start: 6;
    grid-row-start: 1;
  }
  .scroller-slide:nth-child(2) {
    grid-column-start: 1;
    grid-row-start: 2;
  }
  .scroller-slide:nth-child(3) {
    grid-column-start: 6;
    grid-row-start: 3;
  }
  .scroller-slide:nth-child(4) {
    grid-column-start: 1;
    grid-row-start: 4;
  }
  .scroller-slide:nth-child(5) {
    grid-column-start: 6;
    grid-row-start: 5;
  }
  .scroller-slide:nth-child(6) {
    grid-column-start: 1;
    grid-row-start: 5;
  }
}
.item-overlay {
  background: var(--project-bg-color);
}
.scroller-slide:hover .item-overlay {
  opacity: 0.5;
}
.scroller-slide:hover .item-meta {
  opacity: 1;
}
</style>
<style>
.title *,
.summary * {
  display: inline-block;
}

.summary p::before {
  content: '(';
}

.summary p::after {
  content: ')';
}

:root.dark-mode .module.slider-block {
  filter: invert(1);
}
</style>
