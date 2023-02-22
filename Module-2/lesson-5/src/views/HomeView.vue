<template>
  <div class="container mx-auto flex justify-center items-center p-28">
    <form action="#" class="shadow-lg shadow-green-800 w-2/3 p-12" @submit="adduser">
      <Input
        labelId="username"
        inputType="text"
        placeholder="Enter username"
        :value="name"
        @input="($event) => (name = $event.target.value)"
      />

      <Input
        labelId="email"
        inputType="email"
        placeholder="Enter user email"
        :value="email"
        @input="emailHandler"
      />

      <Button
        btnType="submit"
        textContent="ADD NEW USER"
        class="bg-cyan-500 text-white mx-auto block w-1/2"
      />
    </form>
  </div>
</template>
<script>
import UserView from "./UserView.vue";
import Input from "../ui/Input.vue";
import Button from "../ui/Button.vue";
import { v4 as uuidv4 } from "uuid";
import axios from "@/service/axios";
import { toast } from "vue3-toastify";

export default {
  name: "HomeView",
  components: {
    UserView,
    Input,
    Button,
  },
  data() {
    return {
      name: "",
      email: "",
    };
  },

  methods: {
    adduser(e) {
      e.preventDefault();

      const newUser = {
        id: uuidv4(),
        name: this.name,
        email: this.email,
      };

      if (newUser.name.length === 0 || newUser.email.length === 0) {
        toast.error("please enter name and email", {
          autoClose: 3000,
          theme: "light",
          position: "bottom-right",
        });
      } else {
        this.name = "";
        this.email = "";
        axios.post("/user", newUser);
        toast.success("User added successfully", {
          autoClose: 3000,
          theme: "light",
          position: "bottom-right",
        });
      }

      console.log(newUser);
    },

    emailHandler(e) {
      this.email = e.target.value;
    },
  },
};
</script>
<style lang="scss"></style>
