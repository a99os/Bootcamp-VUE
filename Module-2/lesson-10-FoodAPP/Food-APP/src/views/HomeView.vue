<template>
  <div class="w-full h-screen p-6 overflow-y-scroll bg-[#252836] text-white">
    <Header />
    <Letters />
    <RouterView :key="$route.fullPath" />
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import { RouterView } from "vue-router";
import Letters from "../components/Main/Letters.vue";
export default {
  name: "HomeView",
  data() {
    return {};
  },
  components: { Header, Letters },
};
</script>
<style scoped></style>
