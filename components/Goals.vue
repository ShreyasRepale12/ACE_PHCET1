<template>
  <div>
    <div
      style="background-color: #ffffff"
      class="container mx-auto flex flex-col items-center py-8"
    >
      <h1
        class="
          goalsheadingdesktop
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
        Our Go<span style="color: #00db80">a</span>ls
      </h1>
      <h1
        class="
          goalsheadingmobile
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
        <span style="color: #00db80">O</span>ur Goa<span style="color: #00db80"
          >l</span
        >s
      </h1>
      <div class="grid grid-cols-3 gap-6 px-4">
        <img
          src="https://flowbite.com/docs/images/blog/image-1.jpg"
          class="ax-w-full rounded-lg border-4 hover:border-green-300 ml-12"
          style="height: 250px"
          id="content-desktop"
        />
          <p class="container col-span-3 md:col-span-2 text-gray-700 text-lg text-center md:text-left">
            <span id="content-desktop">
              The Ace want to be centre of excellence in technical
              education,research,innovation for improved productivity & quality
              of life at national and global level. To establish fully fledged
              tech driven program to the students from the students. <br />To
              offer the knowledge and skills to tech minded students so that
              they are recognized globally as well as become socio-economically
              responsible. <br />
              Demonstrating fluency in various languages so that will develop
              technically sound peoples.To encourage the students to nurture
              their intellectual curiosity and research temperament.
            </span>
            <span id="content-mobile">
              The Ace want to be centre of excellence in technical
              education,research,innovation for improved productivity & quality
              of life at national and global level. To establish fully fledged
              tech driven program to the students from the students. <br />To
              offer the knowledge and skills to tech minded students so that
              they are recognized globally as well as become socio-economically
              responsible.<br />
              Demonstrating fluency in various languages so that will develop
              technically sound peoples.To encourage the students to nurture
              their intellectual curiosity and research temperament.
            </span>
            <NuxtLink to="/outcomes#our-goals">
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
      this.$gsap.to(".goalsheadingdesktop", {
        x: 300,
        ease: "Power2.easeInOut",
        scrollTrigger: {
          trigger: "bottom",
          pin: true,
          end: "bottom",
          scrub: true,
        },
      });
      this.$gsap.to(".goalsheadingmobile", {
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