export const state = () => ({
    name: "",
    email: "",
    user_avatar: "",
    user_class: "",
    user_department: "",
    phone: "",
  })
  
  export const mutations = {
    // increment(state) {
    //   state.counter++
    // }
    updateThroughGoogleSignIn(state, payload) {
        state.name = payload.name;
        state.email = payload.email;
        state.user_avatar = payload.user_avatar;
    }
  }