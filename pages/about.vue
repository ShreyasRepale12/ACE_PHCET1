<template>
  <div>
    <Navbar />
    <AboutHero />
    <div class="grid grid-cols-6 gap-4 pt-12 pb-8">
      <div
        class="
          col-start-1 col-span-6
          md:px-1
          px-2
          md:col-start-2 md:col-span-4
          text-xl
          font-normal
          text-center
          md:text-left
          mx-0
        "
      >
        <p class="">
          <span class="font-semibold italic"
            ><span class="text-4xl">I</span>nnovation is the outcome of a habit, not a random act.</span
          >
          Hence here at PHCET the Department of Information Technology are
          introducing the ACE. This community driven program will not only
          enhance to improve Coding ability but also gives a broad perspective
          of problem-solving. Creating a climate of inclusion that reflects our
          domain’s values and promotes an open exchange of ideas where each
          voice is heard.
        </p>
        <br />
        <p>
          Many elements of our modern life are already powered
          by software, which is governed by code, as a result of people learning
          to code and deploying their abilities to create such software. Our
          banking system, entertainment systems, social media accounts and
          mobile phones are all in some way or another powered by software
          written by people who’ve learnt how to code. Code plays a pivotal role
          in our daily lives, most of us just haven’t realised the immense
          impact it has on how we live our lives yet.
        </p>
        <br />
        <p>
          Knowing this, ACE will help learning to code is one of the best choices one can make.
        </p>
        <br />
        <p>
          With the ability to code, you’ll have the power to change the world! ❤️
        </p>
      </div>
    </div>
    <Team />
    <Footer />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
};
</script>

<style>
</style>