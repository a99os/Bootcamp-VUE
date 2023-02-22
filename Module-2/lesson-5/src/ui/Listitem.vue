<template>
  <tr
    class="px-5 py-3 bg-green-300 rounded-xl justify-between items-center my-2"
  >
    <td>
      <strong>{{ +num + 1 }}</strong>
    </td>
    <td>{{ item.name }}</td>
    <td>{{ item.email }}</td>
    <td
      class="bg-cyan-600 focus:ring-2 focus:ring-cyan-200 px-4 py-2 duration-200 rounded-2xl text-white"
    >
      Edit
    </td>
    <td
      @click="removeUser(item.id)"
      class="bg-red-600 cursor-pointer focus:ring-2 focus:ring-red-200 px-4 py-2 duration-200 rounded-2xl text-white"
    >
      Remove
    </td>
  </tr>
</template>
<script>
export default {
  name: "ListItem",
  props: {
    num: String,
    item: Object,
    removeUser: Function,
  },
};
</script>
<style lang="scss"></style>
