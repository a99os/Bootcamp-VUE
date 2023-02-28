<template>
  <div
    class="w-[192px] h-[226px] flex flex-col justify-center items-center shadow-xl m-5 p-4 bg-[#1F1D2B] rounded-2xl"
  >
    <img
      :src="img"
      :alt="title"
      class="rounded-full w-[150px] h-[135px] -translate-y-[46px]"
    />
    <h1 class="text-center font-medium text-[14px] leading-[130%]">
      {{ title }}
    </h1>
    <h3 class="mt-2 text-center font-normal text-[14px] leading-[140%]">
      {{ $store.state.price }} $
    </h3>
    <h3 class="mt-2 text-center font-normal text-[14px] leading-[140%]">
      {{ nation }}-{{ type }}
    </h3>
  </div>
</template>
<script>
export default {
  name: "Card",
  data() {
    return {
      meals: this.$store.state.meals,
    };
  },
  props: {
    title: String,
    img: String,
    nation: String,
    type: String,
  },
};
</script>
<style lang=""></style>
