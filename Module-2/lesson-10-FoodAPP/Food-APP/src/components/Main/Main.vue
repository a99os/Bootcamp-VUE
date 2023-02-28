<template>
  <ul class="flex gap-7 py-10 items-start justify-evenly flex-wrap mt-[58px]">
    <li v-for="item in meals" class="">
      <Card
        :title="item.strMeal"
        :img="item.strMealThumb"
        :type="item.strTags"
        :nation="item.Area"
      />
    </li>
  </ul>
</template>
<script>
import Card from "../../ui/Card.vue";
import axios from "@/service/axios";

export default {
  name: "Main",
  components: { Card },
  data() {
    return {
      meals: [],
    };
  },
  methods: {
    async getMeals(to) {
      this.meals = (
        await axios.get("/filter.php?c=" + to.params.value)
      ).data.meals;
    },
    async getByLetters(to) {
      console.log(to);
      this.meals = (
        await axios.get("/search.php?f=" + to.params.value)
      ).data.meals;
    },
  },
  mounted() {
    if (this.$route.path.split("/")[2] == "category") {
      this.getMeals(this.$route);
    } else if (this.$route.path.split("/")[2] == "letter") {
      this.getByLetters(this.$route);
    } else {
      this.meals = this.$store.state.meals;
    }
  },
  beforeRouteUpdate(to, from, next) {
    if (to.path.split("/")[2] == "category") {
      this.getMeals(to);
    } else if (to.path.split("/")[2] == "letter") {
      this.getByLetters(to);
    } else this.meals = this.$store.state.meals;
    next();
  },
};
</script>
<style scoped></style>
