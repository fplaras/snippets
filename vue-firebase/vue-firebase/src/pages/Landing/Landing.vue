<template>
  <div>
    <b-button variant="primary" v-on:click="signOut">Sign Out</b-button>
  </div>
</template>
<script>
import firebase from "firebase";

export default {
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
            this.$router.replace({ name: "Landing" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
