<template>
  <div class="bg-white pt-5 w-1/2 mx-auto min-h-[300px] shadow">
    <h1 class="text-green-700 text-center text-2xl uppercase font-semibold">
      User list
    </h1>
    <table
      class="table-auto list p-4 bg-green-100 mx-auto w-full border-separate"
    >
      <thead class="p-5 bg-green-500 rounded-2xl w-full">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Edit</th>
          <th>Remove</th>
        </tr>
      </thead>

      <h1 class="text-center" v-if="!userList.length && !isLoading">
        User list empty
      </h1>
      <span class="loader" v-if="isLoading"></span>

      <tbody class="w-full">
        <Listitem
          v-if="!isLoading"
          v-for="(item, index) in userList"
          :key="item.id"
          :num="index"
          :item="item"
          :removeUser="removeUser"
        />
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "@/service/axios";
import Listitem from "../ui/Listitem.vue";

export default {
  name: "UserView",
  data() {
    return {
      userList: [],
      isLoading: true,
    };
  },
  methods: {
    async getAllUsers() {
      try {
        setTimeout(async () => {
          const user = await axios.get("/user");
          console.log(user);
          if (user.status == 200) {
            this.userList = user.data;
          }
          this.isLoading = false;
        }, 30);
      } catch (error) {
        console.log(error);
      }
    },

    removeUser(id) {
      axios.delete("user/" + id);
      location.reload();
    },
  },
  mounted() {
    this.getAllUsers();
  },
  updated() {
    console.log("object");
  },
  components: { Listitem },
};
</script>
<style scoped>
.loader {
  display: block;
  margin: 0 auto;
  position: relative;
  width: 55px;
  height: 55px;
  background-repeat: no-repeat;
  background-image: linear-gradient(#2f9a12 50px, transparent 0),
    linear-gradient(#2f9a12 50px, transparent 0),
    linear-gradient(#2f9a12 50px, transparent 0),
    linear-gradient(#2f9a12 50px, transparent 0),
    linear-gradient(#2f9a12 50px, transparent 0),
    linear-gradient(#2f9a12 50px, transparent 0);
  background-size: 5px 40px;
  background-position: 0px center, 10px center, 20px center, 30px center,
    40px center, 50px center;
  animation: spikeUp 1s linear infinite alternate;
}
@keyframes spikeUp {
  0% {
    background-size: 5px 40px;
  }
  16% {
    background-size: 5px 55px, 5px 40px, 5px 40px, 5px 40px, 5px 40px, 5px 40px;
  }
  33% {
    background-size: 5px 40px, 5px 55px, 5px 40px, 5px 40px, 5px 40px, 5px 40px;
  }
  50% {
    background-size: 5px 40px, 5px 40px, 5px 55px, 5px 40px, 5px 40px, 5px 40px;
  }
  66% {
    background-size: 5px 40px, 5px 40px, 5px 40px, 5px 55px, 5px 40px, 5px 40px;
  }
  83% {
    background-size: 5px 40px, 5px 40px, 5px 40px, 5px 40px, 5px 55px, 5px 40px;
  }
  100% {
    background-size: 5px 40px, 5px 40px, 5px 40px, 5px 40px, 5px 40px, 5px 55px;
  }
}
</style>
