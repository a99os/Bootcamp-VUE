<template lang="">
  <ul class="flex p-5 bg-indigo-200 rounded-sm w-full justify-center">
    <li>
      <router-link
        to="admin/add"
        class="mx-3 block bg-indigo-500 text-white py-2 px-3 rounded-xl"
        >ADD</router-link
      >
    </li>
    <li>
      <router-link
        to="admin/list"
        class="mx-3 block bg-indigo-500 text-white py-2 px-3 rounded-xl"
        >List</router-link
      >
    </li>
  </ul>
  <router-view></router-view>
</template>
<script>
export default {
  name: "AdminView",
};
</script>
<style scoped>
.router-link-active {
  background-color: blue;
}
</style>
