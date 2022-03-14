<template>
  <div>
    <Navbar />
    <div class="g-signin2 pt-24" id="google-signin-btn" data-onsuccess="onSignIn"></div>
    <a href="#" @click="signOut()">Sign Out</a>
    {{$store.state.name}}
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    onSignIn: function (googleUser) {
      var profile = googleUser.getBasicProfile();
      console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
      // this.name = profile.getName();
      console.log("Name: " + profile.getName());
      console.log("Image URL: " + profile.getImageUrl());
      console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
      this.$store.commit('updateThroughGoogleSignIn', {
        name: profile.getName(),
        email: profile.getEmail(),
        user_avatar: profile.getImageUrl(),
      })
      // this.$router.push('profile')
    },
    signOut: function () {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
        console.log("User signed out.");
      });
    },
  },
  mounted() {
    gapi.signin2.render('google-signin-btn', { // this is the button "id"
      onsuccess: this.onSignIn // note, no "()" here
    })
  }

};
</script>

<style>
</style>