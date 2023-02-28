<template>
  <div>
    <div class="w-full p-5 bg-slate-300">
      <h1 class="text-center">Home</h1>
      <Card :number="number" :incr="increment" />
    </div>
  </div>
</template>
<script>
import Card from "../ui/Card.vue";


export default {
  name: "HomeView",
  components: { Card },
};
</script>
<style scoped></style>
