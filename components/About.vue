<template>
  <div
    style="background-color: #ffffff"
    class="container mx-auto flex flex-col items-center pb-8"
  >
    <h1
      class="
        aboutheading
        font-medium
        leading-tight
        sm:text-5xl
        text-3xl
        pt-6
        mb-6
        text-gray-900
      "
      style="font-family: 'DM Serif Display', serif;"
    >
      <span style="color: #00db80">A</span>bout ACE
    </h1>
    <div class="grid grid-cols-3 gap-8 px-4 md:px-16">
      <p
        class="
          container
          col-span-3
          md:col-span-2
          text-gray-700 text-lg text-center md:text-left
        "
      >
        <span id="content-desktop">
          <span class="font-semibold italic"
            >“Innovation is the outcome of a habit, not a random act.”</span
          >
          Hence here at PHCET the Department of Information Technology are
          introducing the ACE. This community driven program will not only
          enhance to improve Coding ability but also gives a broad perspective
          of problem-solving. Creating a climate of inclusion that reflects our
          domain’s values and promotes an open exchange of ideas where each
          voice is heard. Many elements of our modern life are already powered
          by software, which is governed by code, as a result of people learning
          to code and deploying their abilities to create such software. Our
          banking system, entertainment systems, social media accounts and
          mobile phones are all in some way or another powered by software
          written by people who’ve learnt how to code. Code plays a pivotal role
          in our daily lives, most of us just haven’t realised the immense
          impact it has on how we live our lives yet.
        </span>
        <span id="content-mobile">
          <span class="font-semibold italic"
            >“Innovation is the outcome of a habit, not a random act.”</span
          >
          Hence here at PHCET the Department of Information Technology are
          introducing the ACE. This community driven program will not only
          enhance to improve Coding ability but also gives a broad perspective
          of problem-solving. Creating a climate of inclusion that reflects our
          domain’s values and promotes an open exchange of ideas where each
          voice is heard.
        </span>
        <br />
        <NuxtLink to="about">
          <MoreButton />
        </NuxtLink>
      </p>
      <img
        src="https://flowbite.com/docs/images/blog/image-1.jpg"
        class="ax-w-full rounded-lg border-4 hover:border-green-300"
        style="height: 250px"
        id="content-desktop"
      />
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
      this.$gsap.to(".aboutheading", {
        x: -300,
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