<template>
  <tr
    class="px-5 py-3 bg-green-300 rounded-xl justify-between items-center my-2"
  >
    <td>
      <strong>{{ +num + 1 }}</strong>
    </td>
    <td>{{ item.name }}</td>
    <td>{{ item.email }}</td>
    <td>
      <button
        @click="openModal(item.id)"
        class="bg-cyan-600 focus:ring-2 focus:ring-cyan-200 px-4 py-2 duration-200 rounded-2xl text-white"
      >
        Edit
      </button>
    </td>
    <td>
      <button
        @click="removeUser(item.id)"
        class="bg-red-600 cursor-pointer focus:ring-2 focus:ring-red-200 px-4 py-2 duration-200 rounded-2xl text-white"
      >
        Remove
      </button>
    </td>
  </tr>
</template>
<script>
export default {
  name: "ListItem",
  data() {
    return {
      open: this.isOpen,
    };
  },
  methods: {
    openModal(id) {
      this.$emit("openModal", id);
    },
  },
  props: {
    num: String,
    item: Object,
    removeUser: Function,
    isOpen: Boolean,
    
  },
};
</script>
<style lang="scss"></style>
