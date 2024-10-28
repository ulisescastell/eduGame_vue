<template>
  <nav>
    <div class="nav-container">
      <div class="logo">
        <router-link to="/"><img :src=logo alt="Logo"></router-link>
      </div>
      <div class="nav-main-routes">
        <ul class="nav-main-ul" :class="{ 'nav-active': isNavActive }">
          <li><router-link to="/" class="nav-login-li">Home</router-link></li>
          <li><router-link to="/about" class="nav-login-li">About us</router-link></li>
          <li><router-link to="/contact" class="nav-login-li">Contact</router-link></li>
          <li><router-link to="/register" class="nav-login-li">Register</router-link></li>
          <li v-if="!isAuthenticated"><router-link to="/login" class="nav-login-li">Login</router-link></li>
          <li v-else><router-link to="/logout" class="nav-login-li">Logout</router-link></li>
          <li v-if="existsToken"><router-link to="/myAccount" class="nav-login-li">My account</router-link></li>
          </ul>
      </div>
      <div class="hamburger" @click="toggleNav">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const isAuthenticated = computed(() => store.state.isAuthenticated);
    const user = computed(() => store.state.user);

    return { isAuthenticated, user };
  }
};
</script>



<style scoped>
nav {
  background-color: #565151;
  padding: 10px 30px;
}


.nav-container {
  display: flex;
  align-items: center;
  height: 40px;
  justify-content: space-around;
}

.logo a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
}

ul {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
}

.nav-main-ul {
  margin: 0;
  display: flex;
}

li {
  position: relative;
  padding: 15px 20px;
  margin: 0 10px;
  cursor: pointer;
  color: #fff;
  transition: background-color 0.3s ease;
}

li::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #fff;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

li:hover {
  background-color: #555;
}

li:hover::before {
  transform: scaleX(1);
  background-color: #fc0
}

a {
  text-decoration: none;
  color: #fff;

}

.nav-login-ul {
  display: flex;
}


.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.hamburger span {
  height: 3px;
  width: 25px;
  background-color: #fff;
  margin: 4px;
  border-radius: 2px;
}

img {
  width: 100px;
  height: auto;
}

@media (max-width: 800px) {
  .nav-main-ul {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #565151;
    display: none;
    z-index: 10;
  }


  .nav-main-ul.nav-active {
    display: flex;
  }

  .nav-login-ul {
    display: none;
  }

  .hamburger {
    display: flex;

  }

  li {
    text-align: center;
    width: 100%;
    margin: 0;
  }
}
</style>
