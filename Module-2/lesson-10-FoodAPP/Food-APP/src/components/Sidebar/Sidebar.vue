<template>
  <aside class="pl-[13px] bg-[#1f1d2b] w-[105px] h-screen">
    <RouterLink
      to="/"
      class="w-[92px] my-4 flex justify-center items-center h-[80px]"
      ><i
        class="bx text-[#ea7c69] bg-[rgba(234,124,105,0.2)] rounded-lg text-3xl w-[56px] h-[56px] flex justify-center items-center bxs-store-alt"
      ></i
    ></RouterLink>
    <ul class="">
      <li v-for="item in navlink" class="">
        <RouterLink
          :to="item.path"
          class="w-[92px] my-4 flex justify-center rounded-lg items-center h-[80px] bg-[#1F1D2B]"
          ><i
            :class="`bx text-[#ea7c69] ${item.icon} rounded-lg text-3xl w-[56px] h-[56px] flex justify-center items-center `"
          ></i>
        </RouterLink>
      </li>
    </ul>
  </aside>
</template>
<script>
import { navLinks } from "@/constants/navLinks.js";
export default {
  name: "Sidebar",
  data() {
    return {
      navlink: navLinks,
    };
  },
};
</script>
<style scoped>
.router-link-active {
  background-color: #252836 !important;
  border-radius: 12px 0 0 12px;
  position: relative;
}

.router-link-active::after {
  display: block;
  content: "";
  clip-path: polygon(
    79% 56%,
    93% 25%,
    100% 0,
    100% 100%,
    0 100%,
    40% 87%,
    63% 74%
  );
  background-color: #252836;
  width: 12px;
  height: 12px;
  position: absolute;
  top: 0px;
  right: 0px;
  transform: translateY(-100%);
}

.router-link-active::before {
  display: block;
  content: "";
  clip-path: polygon(
    79% 56%,
    93% 25%,
    100% 0,
    100% 100%,
    0 100%,
    40% 87%,
    63% 74%
  );
  background-color: #252836;
  width: 12px;
  height: 12px;
  position: absolute;
  bottom: 0px;
  right: 0px;
  transform: translateY(100%) rotate(-90deg);
}

.router-link-active i {
  color: #fff !important;
  background-color: #ea7c69;
  box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.32);
  border-radius: 8px;
}
</style>
