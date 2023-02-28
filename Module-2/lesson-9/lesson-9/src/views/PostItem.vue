<template>
  <div class="p-5 w-3/4 shadow m-4 mx-auto border">
    <div class="w-full border p-5 shadow my-5">
      <button
        @click="goBack"
        class="bg-cyan-500 px-3 py-2 rounded-lg text-white font-bold focus:ring-2 focus:ring-cyan-600"
      >
        Go Back
      </button>
    </div>
    <div v-if="isload">
      <h1 class="px-5">
        {{ post.id }}.
        <strong>
          {{ post.title }}
        </strong>
      </h1>
      <p class="px-5">{{ post.body }}</p>
    </div>
    <div v-else><span class="loader"></span></div>
  </div>
</template>
<script>
import axios from "@/service/axios.js";
export default {
  name: "PostItem",
  data() {
    return {
      post: [],
      isload: false,
    };
  },
  methods: {
    async getPostItem() {
      try {
        const response = await axios.get("/posts/" + this.$route.params.id);
        this.post = response.data;
        this.isload = true;
      } catch (error) {
        console.log(error);
      }
    },
    goBack() {
      // this.$router.push("/post");
      // this.$router.go(-1);
      this.$router.back();
    },
  },
  mounted() {
    this.getPostItem();
  },
};
</script>
<style>
.loader {
  width: 360px;
  height: 100px;
  display: block;
  position: relative;
  background-image: linear-gradient(
      100deg,
      transparent,
      rgba(38, 50, 56, 0.5) 50%,
      transparent 80%
    ),
    linear-gradient(#6c90c5 20px, transparent 0),
    linear-gradient(#6c90c5 20px, transparent 0),
    linear-gradient(#6c90c5 20px, transparent 0);
  background-repeat: no-repeat;
  background-size: 75px 100px, 125px 20px, 260px 20px, 260px 20px;
  background-position: 0% 0, 120px 0, 120px 40px, 120px 80px;
  box-sizing: border-box;
  animation: animloader 1s linear infinite;
}
.loader::after {
  content: "";
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  border-radius: 8px;
  background: #6c90c5;
  position: absolute;
  top: 0;
  left: 0;
}

@keyframes animloader {
  0% {
    background-position: 0% 0, 120px 0, 120px 40px, 120px 80px;
  }
  100% {
    background-position: 100% 0, 120px 0, 120px 40px, 120px 80px;
  }
}
</style>
