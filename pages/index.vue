<template>
  <div>
    <Navbar />
    <Hero />
    <About />
    <Domains />
    <WhyAce />
    <Events />
    <Goals />
    <Footer />
  </div>
</template>

<script>
export default {
    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start();
            setTimeout(() => this.$nuxt.$loading.finish(), 500)
        });
    },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css");

</style>