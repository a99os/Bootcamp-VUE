<template>
  <div>
    <h1 class="text-center m-5 font-bold uppercase text-2xl">Posts</h1>
    <ul class="shadow-lg w-2/3 mx-auto border p-5" v-if="isLoading">
      <li v-for="item in post">
        <RouterLink
          :to="`/post/${item.id}`"
          class="shadow p-4 my-1 hover:bg-slate-200 block"
        >
          {{ item.id }}. {{ item.title }}
        </RouterLink>
      </li>
    </ul>
    <h1 v-else="isLoading" class="w-2/3 mx-auto">Loading...</h1>
  </div>
</template>
<script>
import axios from "@/service/axios.js";
export default {
  name: "Post",
  data() {
    return {
      post: [],
      isLoading: false,
    };
  },
  methods: {
    async getPosts() {
      try {
        const response = await axios.get("/posts");
        if (response.status == 200) {
          this.post = response.data;
          this.isLoading = true;
          console.log(this.post);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>
<style lang="scss"></style>
