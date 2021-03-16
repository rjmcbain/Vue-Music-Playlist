<template>
  <div class="navbar">
    <nav>
      <h1><router-link :to="{ name: 'Home' }">Music Playlist</router-link></h1>
      <!-- <p>Hello {{ user.displayName }}</p> -->
      <div class="links">
        <button @click="handleClick" v-if="user">Logout</button>
        <router-link v-if="!user" class="btn" :to="{ name: 'Signup' }"
          >Sign Up</router-link
        >
        <router-link v-if="!user" class="btn" :to="{ name: 'Login' }"
          >Log In</router-link
        >
      </div>
    </nav>
  </div>
</template>

<script>
import useLogout from "../composables/useLogout";
import { useRouter } from "vue-router";
import getUser from "../composables/getUser";
export default {
  setup() {
    const router = useRouter();
    const { logout, error } = useLogout();
    const { user } = getUser();
    const handleClick = async () => {
      await logout();
      if (!error.value) {
        console.log("User Logged Out");
        router.push({ name: "Login" });
      }
    };
    return { handleClick, user };
  },
};
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: white;
}
nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
nav img {
  max-height: 60px;
}
nav h1 {
  margin-left: 20px;
}
nav .links {
  margin-left: auto;
}
nav .links a,
button {
  margin-left: 16px;
  font-size: 14px;
}
</style>
