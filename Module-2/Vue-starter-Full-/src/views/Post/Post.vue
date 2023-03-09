<template lang="">
  <div class="container mx-auto">
    <div class="flex flex-wrap gap-10 justify-center p-10">
      <div
        v-for="item in getPosts"
        class="max-w-sm flex flex-col bg-white h-auto flex-grow border lg:min-w-[300px] border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img class="rounded-t-lg" :src="item.base_image" alt="" />
        </a>
        <div class="p-5 flex flex-col gap-5 flex-grow justify-center">
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {{ item.title }}
            </h5>
          </a>
          <p class="mb-3 font-normal flex-grow text-gray-700 dark:text-gray-400">
            {{ item.full_text }}
          </p>
          <div class="flex justify-between">
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <button
              @click="deletePost"
              :id="item.id"
              v-if="getRole == 1 || getRole == 2"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Delete
            </button>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {{ item.category.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Post",
  data() {
    return { id: "" };
  },

  mounted() {
    this.$store.dispatch("GET_POST");
  },

  methods: {
    getId(e) {
      console.log(e);
      this.id = e.target.id;
    },
    deletePost(e) {
      this.id = e.target.id;
      console.log(this.id);
      this.$store.dispatch("DELETE_POST", this.id).then((res) => {
        if (res) {
          toast.success("successfully deleted post");
          this.id = "";
        } else {
          toast.error(this.$store.state.post.authMessage);
        }
      });
    },
  },

  computed: {
    getPosts() {
      console.log(this.$store.state.postActions.postList);
      return this.$store.state.postActions.postList;
    },

    getRole() {
      return this.$store.state.auth.role || window.localStorage.getItem("role");
    },
  },
};
</script>
<style lang=""></style>
