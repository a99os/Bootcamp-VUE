<template>
  <div class="bg-white pt-5 w-1/2 mx-auto min-h-[300px] shadow">
    <Modal
      :isOpen="isOpen"
      @hide="hideModal"
      :username="username"
      :useremail="useremail"
      @edit="updatePost"
    />
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
          @openModal="isOpenTrue"
        />
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "@/service/axios";
import { toast } from "vue3-toastify";
import Modal from "../components/Modal/Modal.vue";
import Listitem from "../ui/Listitem.vue";

export default {
  name: "UserView",
  data() {
    return {
      userList: [],
      isLoading: true,
      isOpen: false,
      editId: "",
      username: "",
      useremail: "",
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
      toast.info("User removed", {
        autoClose: 1000,
      });
      setTimeout(() => {
        location.reload();
      }, 1000);
    },

    async isOpenTrue(id) {
      this.isOpen = true;
      console.log(id);
      this.editId = id;
      try {
        const postItem = await axios.get("/user/" + this.editId);
        this.username = postItem.data.name;
        this.useremail = postItem.data.email;
      } catch (error) {
        console.log(error);
      }
    },

    hideModal() {
      this.isOpen = false;
    },

    updatePost(data) {
      axios.put("/user/" + this.editId, data);
      toast.info("User updated", {
        autoClose: 1000,
      });
      setTimeout(() => {
        location.reload();
      }, 1000);
    },
  },
  mounted() {
    this.getAllUsers();
  },
  updated() {
    console.log("object");
  },
  components: { Listitem, Modal },
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
