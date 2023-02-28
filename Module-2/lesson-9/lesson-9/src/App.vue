<template>
  <header class="bg-cyan-700">
    <div class="container mx-auto">
      <nav class="flex h-[75px] justify-between px-4 items-center">
        <a href="#" class="text-white uppercase text-2xl">Vue-Router</a>
        <ul class="flex w-3/12 justify-between items-center">
          <li>
            <RouterLink class="p-[10px] text-white" to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink class="p-[10px] text-white" to="/post">Post</RouterLink>
          </li>
          <li>
            <RouterLink class="p-[10px] text-white" to="/user"
              >Users</RouterLink
            >
          </li>
          <li>
            <RouterLink class="p-[10px] text-white" to="/about"
              >About</RouterLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    <section class="main">
      <div class="container mx-auto">
        <RouterView />
      </div>
    </section>
  </main>
  <footer class="bg-cyan-700 p-5 text-center">
    <div class="container mx-auto text-white">
      VUE-ROUTER-{{ new Date().getFullYear() }}
    </div>
  </footer>
</template>
<script>
import { RouterView, RouterLink } from "vue-router";
export default {
  name: "App",
};
</script>
<style scoped>
.router-link-active {
  font-weight: bold;
  text-decoration: underline;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  color: black;
}
.main {
  min-height: calc(100vh - 70px - 69px);
}
</style>
