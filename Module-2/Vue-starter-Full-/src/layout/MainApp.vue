<template>
  <!-- <template v-if="!isAuth">
    <Login />
  </template> -->
  <Header />
  <main class="min-h-screen">
    <router-view></router-view>
  </main>
  <Footer />
</template>
<script>
import Footer from "../components/Footer/Footer.vue";
import Header from "../components/Header/Header.vue";
import Login from "../views/Login.vue";

export default {
  name: "MainApp",
  components: { Header, Footer, Login },

  computed: {
    isAuth() {
      return true;
    },
  },
};
</script>
<style lang="css"></style>
