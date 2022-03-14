<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 100"
      class="m-0 p-0"
    >
      <path
        fill="#e5f9ff"
        d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
      ></path>
    </svg>
    <div
      class="pt-1 container mx-auto flex flex-col items-center p-4"
      style="background-color: #e5f9ff"
    >
      <h1
        class="
          domainsheading
          font-medium
          leading-tight
          sm:text-5xl
          text-3xl
          pt-6
          md:pt-1
          mb-6
          text-gray-900
        "
        style="font-family: 'DM Serif Display', serif"
      >
        Dom<span style="color: #00db80">a</span>ins
      </h1>

      <div class="grid grid-cols-4 gap-4">
        <div class="w-full p-4 lg:col-span-1 col-span-4">
        <a
          href=""
          class="
            c-card
            block
            bg-white
            shadow-md
            hover:shadow-xl
            rounded-lg
            overflow-hidden
          "
        >
          <div class="relative pb-48 overflow-hidden">
            <img
              class="absolute inset-0 h-full w-full object-cover"
              src="https://images.pexels.com/photos/5380649/pexels-photo-5380649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
          <div class="p-4">
            <h2 class="mt-2 mb-2 font-bold text-xl font-semibold">Cyber-Security and Ethical Hacking</h2>
            <p class="text-sm">
              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
              ullamcorper nulla non metus auctor fringilla.
            </p>
          </div>
        </a>
      </div>
        <div
          class="w-full p-4 lg:col-span-1 col-span-4"
          v-for="(data, i) in data"
          :key="i"
        >
          <div
            class="
              c-card
              block
              bg-white
              shadow-md
              hover:shadow-xl
              rounded-lg
              overflow-hidden
              pb-6
            "
          >
            <div class="relative pb-48 overflow-hidden">
              <img
                class="absolute inset-0 h-full w-full object-cover"
                :src="data.image"
                alt=""
              />
            </div>
            <div class="p-4">
              <h2 class="mt-2 mb-2 font-bold text-xl font-semibold">
                {{ data.title }}
              </h2>
              <p class="text-sm">
                {{ data.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- <div class="w-full p-4 lg:col-span-1 col-span-4">
          <a
            href=""
            class="
              c-card
              block
              bg-white
              shadow-md
              hover:shadow-xl
              rounded-lg
              overflow-hidden
            "
          >
            <div class="relative pb-48 overflow-hidden">
              <img
                class="absolute inset-0 h-full w-full object-cover"
                src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
            </div>
            <div class="p-4">
              <h2 class="mt-2 mb-2 font-bold text-xl font-semibold">
                Web Development
              </h2>
              <p class="text-sm mb-4 pt-3">
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Donec ullamcorper nulla non metus auctor fringilla.
              </p>
            </div>
          </a>
        </div>

        <div class="w-full p-4 lg:col-span-1 col-span-4">
          <a
            href=""
            class="
              c-card
              block
              bg-white
              shadow-md
              hover:shadow-xl
              rounded-lg
              overflow-hidden
            "
          >
            <div class="relative pb-48 overflow-hidden">
              <img
                class="absolute inset-0 h-full w-full object-cover"
                src="https://images.pexels.com/photos/4385547/pexels-photo-4385547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
            </div>
            <div class="p-4">
              <h2 class="mt-2 mb-2 font-bold text-xl font-semibold">
                Core Programming
              </h2>
              <p class="text-sm mb-4 pt-3">
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Donec ullamcorper nulla non metus auctor fringilla.
              </p>
            </div>
          </a>
        </div>

        <div class="w-full p-4 lg:col-span-1 col-span-4">
          <a
            href=""
            class="
              c-card
              block
              bg-white
              shadow-md
              hover:shadow-xl
              rounded-lg
              overflow-hidden
            "
          >
            <div class="relative pb-48 overflow-hidden">
              <img
                class="absolute inset-0 h-full w-full object-cover"
                src="https://images.pexels.com/photos/1105379/pexels-photo-1105379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </div>
            <div class="p-4">
              <h2 class="mt-2 mb-2 font-bold text-xl font-semibold">
                Internet Of Things
              </h2>
              <p class="text-sm mb-4 pt-3">
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Donec ullamcorper nulla non metus auctor fringilla.
              </p>
            </div>
          </a>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          title: "Web Development",
          description:
            "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.",
          image:
            "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          title: "Core Programming",
          description:
            "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.",
          image:
            "https://images.pexels.com/photos/4385547/pexels-photo-4385547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          title: "Internet Of Things",
          description:
            "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.",
          image:
            "https://images.pexels.com/photos/1105379/pexels-photo-1105379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
      ],
    };
  },
  mounted() {
    this.animateOnScroll();
  },
  methods: {
    animateOnScroll() {
      this.$gsap.to(".domainsheading", {
        x: -100,
        ease: "Power2.easeInOut",
        scrollTrigger: {
          trigger: "bottom",
          pin: true,
          end: "bottom 200px",
          scrub: true,
        },
      });
    },
  },
};
</script>

<style>
</style>