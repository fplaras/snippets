<template>
  <div class="home">
       <div id="label">Sign-in with Microsoft Azure AD B2C</div>

    <button @click="login" v-if="!user">Login</button>
    <button @click="logout" v-if="user">Logout</button>

    <div v-if="user">Hello from Vue.js. User is {{user.name}}</div>
  </div>
</template>

<script>

// @ is an alias to /src
export default {
  name: 'Home',
  data: function() {
    return {
    }
  },
  created(){
    
  },
  components: {
    
  },
  methods: {
    login() {
      this.$AuthService.login();
    },
    logout() {
      this.$AuthService.logout();
    }
  },
  computed: {
    user: function() {
      if(this.$AuthService){
      //return this.$AuthService.getUser();
return null;
      }else{
      return null;

      }
    }
  }
}
</script>
