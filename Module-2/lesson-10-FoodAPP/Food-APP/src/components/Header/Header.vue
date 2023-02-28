<template>
  <div
    class="w-full bg-[#252836] text-white flex gap-5 justify-between items-center h-[65px]"
  >
    <div>
      <h1 class="font-semibold text-[28px] leading-[140%]">Jaegar Resto</h1>
      <p class="text-[#E0E6E9] font-normal text-base leading-[140%]">
        {{ weekName }}, {{ new Date().getDate() }} {{ monthName }}
        {{ new Date().getFullYear() }}
      </p>
    </div>
    <div
      class="bg-[#393C49] flex-grow p-[14px] flex items-center rounded-lg gap-2 w-[220px]"
    >
      <i class="bx bx-search text-[20px]"></i>
      <input
        @input="($event) => searchMeal($event)"
        placeholder="Search for food, coffe, etc.."
        type="search"
        class="outline-none bg-transparent h-5 font-normal text-sm leading-[140%] flex-grow placeholder:text-sm"
      />
    </div>
  </div>
  <ul class="flex gap-8 mt-6 w-full flex-wrap">
    <li v-for="item in categories" class="font-semibold text-sm leading-[140%]">
      <RouterLink :to="`/home/category/${item.strCategory}`">
        {{ item.strCategory }}
      </RouterLink>
    </li>
  </ul>
</template>
<script>
import axios from "@/service/axios";
import { weekName, monthName } from "@/service/getDateName.js";
export default {
  name: "Header",
  data() {
    return {
      weekName: weekName,
      monthName: monthName,
      categories: [],
    };
  },
  methods: {
    async getCategories() {
      try {
        this.categories = (await axios.get("/list.php?c=list")).data.meals;
      } catch (error) {
        console.log(error);
      }
    },

    async searchMeal(e) {
      try {
        if (e.target.value) {
          this.$store.state.meals = (
            await axios.get("/search.php?s=" + e.target.value)
          ).data.meals;
          this.$router.push("/home/search/" + e.target.value);
        } else {
          this.$store.state.meals = [];
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getCategories();
  },
};
</script>
<style scoped>
.router-link-active {
  color: #ea7c69;
}
</style>
