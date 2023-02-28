<template>
  <div class="flex"><Sidebar /><RouterView /></div>
</template>
<script>
import Sidebar from "./components/Sidebar/Sidebar.vue";

import { RouterView } from "vue-router";
export default {
  name: "App",
  components: { Sidebar },
};
</script>

<style scoped></style>
