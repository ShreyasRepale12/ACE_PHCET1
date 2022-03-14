<template>
  <div>
    <nav
      class="w-full lg:px-40 px-5 py-3 bg-transparent top-0 fixed z-10"
      style="background: rgba(0, 32, 33, 1)"
    >
      <div class="flex items-center justify-between">
        <!-- Header logo -->
        <div>
          <NavbarLogo />
        </div>

        <!-- Mobile toggle -->
        <div class="md:hidden">
          <button @click="drawer">
            <svg
              class="
                h-8
                w-8
                fill-current
                rounded-md
                hover:text-white hover:bg-gray-700
                focus:outline-none
                focus:ring-2
                focus:ring-inset
                focus:ring-white
              "
              style="color: #4ce6a7"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <!-- Navbar -->
        <div class="hidden md:block">
          <ul class="flex space-x-8 text-xl font-sans">
            <li>
              <NuxtLink to="/"
                ><h5
                  class="
                    text-white
                    hover:text-gray-300 hover:bg-gray-700 hover:text-green-300
                    block
                    px-2
                    py-2
                    rounded-md
                    text-base
                    font-medium
                  "
                  :class="activeMenuForHome"
                >
                  Home
                </h5></NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/about"
                ><h5
                  class="
                    text-white
                    hover:text-gray-300 hover:bg-gray-700 hover:text-green-300
                    block
                    px-2
                    py-2
                    rounded-md
                    text-base
                    font-medium
                  "
                  :class="activeMenuForAbout"
                >
                  About
                </h5></NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/events"
                ><h5
                  class="
                    text-white
                    hover:text-gray-300 hover:bg-gray-700 hover:text-green-300
                    block
                    px-2
                    py-2
                    rounded-md
                    text-base
                    font-medium
                  "
                  :class="activeMenuForEvents"
                >
                  Events
                </h5></NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/outcomes"
                ><h5
                  class="
                    text-white
                    hover:text-gray-300 hover:bg-gray-700 hover:text-green-300
                    block
                    px-2
                    py-2
                    rounded-md
                    text-base
                    font-medium
                  "
                  :class="activeMenuForOutcomes"
                >
                  Outcomes
                </h5></NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/login"
                ><h5
                  class="
                    text-white
                    hover:text-gray-300 hover:bg-gray-700 hover:text-green-300
                    block
                    px-2
                    py-2
                    rounded-md
                    text-base
                    font-medium
                  "
                  :class="activeMenuForLogin"
                >
                  Login
                </h5></NuxtLink
              >
            </li>
            <li v-if="this.$store.state.email">
              <NuxtLink to="/profile"
                ><button
                  class="
                    focus:outline-none
                    transition
                    duration-150
                    ease-in-out
                    text-white
                    hover:bg-green-600
                    rounded-full
                    text-white
                    px-5
                    sm:px-8
                    py-1
                    sm:py-2
                    text-sm
                    bg-gradient-to-r
                    from-green-400
                    to-blue-500
                    hover:from-pink-500 hover:to-yellow-500
                    animate__animated animate__pulse animate__infinite
                    font-medium
                  "
                  style="background-color: #4ce6a7"
                >
                  Profile
                </button></NuxtLink
              >
            </li>
            <li v-else>
              <NuxtLink to="/join"
                ><button
                  class="
                    focus:outline-none
                    transition
                    duration-150
                    ease-in-out
                    text-white
                    hover:bg-green-600
                    rounded-full
                    text-white
                    px-5
                    sm:px-8
                    py-1
                    sm:py-2
                    text-sm
                    bg-gradient-to-r
                    from-green-400
                    to-blue-500
                    hover:from-pink-500 hover:to-yellow-500
                    animate__animated animate__pulse animate__infinite
                    font-medium
                  "
                  style="background-color: #4ce6a7"
                >
                  Join Club
                </button></NuxtLink
              >
            </li>
          </ul>
        </div>

        <!-- Dark Background Transition -->
        <transition
          enter-class="opacity-0"
          enter-active-class="ease-out transition-medium"
          enter-to-class="opacity-100"
          leave-class="opacity-100"
          leave-active-class="ease-out transition-medium"
          leave-to-class="opacity-0"
        >
          <div
            @keydown.esc="isOpen = false"
            v-show="isOpen"
            class="z-10 fixed inset-0 transition-opacity"
          >
            <div
              @click="isOpen = false"
              class="absolute inset-0 bg-black opacity-50"
              tabindex="0"
            ></div>
          </div>
        </transition>

        <!-- Drawer Menu -->
        <aside
          class="
            p-5
            transform
            top-0
            left-0
            w-64
            fixed
            h-full
            overflow-auto
            ease-in-out
            transition-all
            duration-300
            z-30
          "
          style="background-color: #09262d"
          :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
        >
          <div class="close">
            <button
              class="
                absolute
                top-0
                right-0
                mt-4
                mr-4
                hover:text-white hover:bg-gray-700
                focus:outline-none
                focus:ring-2
                focus:ring-inset
                focus:ring-white
              "
              style="color: #4ce6a7"
              @click="isOpen = false"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <span
            @click="isOpen = false"
            class="flex w-full items-center p-4 border-b"
          >
            <NavbarLogo />
          </span>

          <ul class="divide-y font-sans text-white hover:text-gray-400">
            <li :class="activeMenuForHome">
              <NuxtLink to="/" @click="isOpen = false" class="my-4 inline-block"
                >Home</NuxtLink
              >
            </li>
            <li :class="activeMenuForAbout">
              <NuxtLink
                to="/about"
                @click="isOpen = false"
                class="my-4 inline-block"
                >About</NuxtLink
              >
            </li>
            <li :class="activeMenuForEvents">
              <NuxtLink
                to="/events"
                @click="isOpen = false"
                class="my-4 inline-block"
                >Events</NuxtLink
              >
            </li>
            <li :class="activeMenuForOutcomes">
              <NuxtLink
                to="/outcomes"
                @click="isOpen = false"
                class="my-4 inline-block"
                >Outcomes</NuxtLink
              >
            </li>
            <li :class="activeMenuForLogin">
              <NuxtLink
                to="/login"
                @click="isOpen = false"
                class="my-4 inline-block"
                >Login</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/join"
                @click="isOpen = false"
                class="
                  my-8
                  w-full
                  text-center
                  font-semibold
                  cta
                  inline-block
                  bg-gradient-to-r
                  from-green-400
                  to-blue-500
                  hover:from-pink-500 hover:to-yellow-500
                  px-3
                  py-2
                  rounded
                  text-white
                "
                >Join Club</NuxtLink
              >
            </li>
          </ul>

          <div class="follow">
            <p class="italic font-sans text-sm" style="color: #4ce6a7">
              follow us on:
            </p>
            <div class="social flex space-x-5 mt-4">
              <a href="#">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="twitter"
                  class="h-5 w-5 fill-current text-gray-600"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  ></path>
                </svg>
              </a>
              <a href="#">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="facebook-f"
                  class="h-5 w-5 fill-current text-gray-600"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  ></path>
                </svg>
              </a>
              <a href="#">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="instagram"
                  class="h-5 w-5 fill-current text-gray-600"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
              </a>
              <a href="#">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="youtube"
                  class="h-5 w-5 fill-current text-gray-600"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </nav>
    <!-- <div style="background: rgb(131,58,180);
background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 25%, rgba(252,176,69,1) 50%, rgba(69,252,133,1) 75%, rgba(71,69,252,1) 100%); height:4px;"></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      activeMenuForHome: "",
      activeMenuForAbout: "",
      activeMenuForEvents: "",
      activeMenuForOutcomes: "",
      activeMenuForLogin: "",
    };
  },
  mounted() {
    this.navClass();
  },
  created() {
    this.navClass();
  },
  methods: {
    navClass() {
      if ($nuxt.$route.name == "index") {
        this.activeMenuForHome = "text-green-300";
        this.activeMenuForAbout = "";
        this.activeMenuForEvents = "";
        this.activeMenuForOutcomes = "";
        this.activeMenuForLogin = "";
      } else if ($nuxt.$route.name == "about") {
        this.activeMenuForHome = "";
        this.activeMenuForAbout = "text-green-300";
        this.activeMenuForEvents = "";
        this.activeMenuForOutcomes = "";
        this.activeMenuForLogin = "";
      } else if ($nuxt.$route.name == "events") {
        this.activeMenuForHome = "";
        this.activeMenuForAbout = "";
        this.activeMenuForEvents = "text-green-300";
        this.activeMenuForOutcomes = "";
        this.activeMenuForLogin = "";
      } else if ($nuxt.$route.name == "outcomes") {
        this.activeMenuForHome = "";
        this.activeMenuForAbout = "";
        this.activeMenuForEvents = "";
        this.activeMenuForOutcomes = "text-green-300";
        this.activeMenuForLogin = "";
      } else if ($nuxt.$route.name == "login") {
        this.activeMenuForHome = "";
        this.activeMenuForAbout = "";
        this.activeMenuForEvents = "";
        this.activeMenuForOutcomes = "";
        this.activeMenuForLogin = "text-green-300";
      }
    },
    drawer() {
      this.isOpen = !this.isOpen;
    },
    signOut: function () {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
        console.log("User signed out.");
      });
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      },
    },
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap");

* {
  scroll-behavior: smooth;
}
.animation-bar {
  -webkit-animation: AnimationName 30s ease infinite;
  -moz-animation: AnimationName 30s ease infinite;
  animation: AnimationName 30s ease infinite;
}

@-webkit-keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-moz-keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>