<template>
  <div>
    <div
      style="background-color: #ffffff"
      class="container mx-auto flex flex-col items-center py-8"
    >
      <h1
        class="
          whyaceheadingdesktop
          font-medium
          leading-tight
          sm:text-5xl
          text-3xl
          pt-6
          mb-6
          text-gray-900
        "
        style="font-family: 'DM Serif Display', serif"
        id="content-desktop"
      >
        Why <span style="color: #00db80">A</span>CE?
      </h1>
      <h1
        class="
          whyaceheadingmobile
          font-medium
          leading-tight
          sm:text-5xl
          text-3xl
          pt-6
          mb-6
          text-gray-900
        "
        style="font-family: 'DM Serif Display', serif"
        id="content-mobile"
      >
        Why <span style="color: #00db80">A</span>CE?
      </h1>
      <div class="grid grid-cols-3 gap-6 px-4">
        <img
          src="https://flowbite.com/docs/images/blog/image-1.jpg"
          class="ax-w-full rounded-lg border-4 hover:border-green-300 ml-12"
          style="height: 250px"
          id="content-desktop"
        />
        <p
          class="
            container
            col-span-3
            md:col-span-2
            text-gray-700 text-lg text-center md:text-left
          "
        >
           ACE helps you to make you for industry reday. Here we can offer to <b>Build leadership quality, Hands on practicals, Help to build resume, Learn more about yourself, Develop your soft skills, Learn to Be a Team Player, Be practical, Help you to stay motivated, Expand Your Friend Circle, Enjoy with us</b>. <br>
           We are always ready to take interacting and new events for our members. This helps to students to learn Something new and improve the knowledge. 
           Not just that!, Learn more about why to choose ACE press the below button.
          <br />
          <NuxtLink to="about" class="text-center">
            <MoreButton />
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.animateOnScroll();
  },

  methods: {
    animateOnScroll() {
      this.$gsap.to(".whyaceheadingdesktop", {
        x: 300,
        ease: "Power2.easeInOut",
        scrollTrigger: {
          trigger: "bottom",
          pin: true,
          end: "bottom",
          scrub: true,
        },
      });
      this.$gsap.to(".whyaceheadingmobile", {
        x: 100,
        ease: "Power2.easeInOut",
        scrollTrigger: {
          trigger: "bottom",
          pin: true,
          end: "bottom",
          scrub: true,
        },
      });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap");
</style>