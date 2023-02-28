<template>
  <div class="mt-10 flex flex-wrap gap-10">
    <RouterLink
      v-for="letter in alphabet"
      :to="`/home/letter/${letter}`"
      class="w-5 h-5"
    >
      <h1 class="uppercase inline-block">{{ letter }}</h1>
    </RouterLink>
  </div>
</template>
<script>
export default {
  name: "Letter",
  data() {
    return {
      alphabet: "abcdefghijklmnopqrstuvwxyz".split(""),
    };
  },
};
</script>
<style scoped>
.router-link-active {
  color: #ea7c69;
}
</style>
