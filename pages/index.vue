<template>
  <section class="container">
    <div class="text-center">
      <h1 class="title">fire-auth</h1>
      <h2 class="subtitle">My super-excellent Nuxt.js project</h2>
      <div class="p-5">
        <div>
          <label>
            Email
            <input v-model="email">
          </label>
        </div>
        <div>
          <label>
            Password
            <input v-model="password">
          </label>
        </div>
      </div>
      <div class="links">
        <a @click="signIn" class="button--grey">Login</a>
        <a @click="signUp" class="button--grey">Register</a>
      </div>
      <h2 class="p-3">▼Response▼</h2>
      {{response}}
    </div>
  </section>
</template>

<script>
import firebase from "@/plugins/firebase";

export default {
  data() {
    return {
      response: null,
      email: null,
      password: null
    };
  },
  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(res => {
          this.response = res;
          console.log(res);
        })
        .catch(err => {
          this.response = res;
          console.log(err);
        });
    },
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(res => {
          this.response = res;
          console.log(res);
        })
        .catch(err => {
          this.response = res;
          console.log(err);
        });
    }
  }
};
</script>
