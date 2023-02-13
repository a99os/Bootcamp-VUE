const app = Vue.createApp({
  data() {
    return {
      message: "Hello vue js",
      toggle: false,
      navLinks: [
        { id: 1, title: "Dashboard", href: "/#" },
        { id: 2, title: "Pages", href: "/#" },
        { id: 3, title: "Users", href: "/#" },
        { id: 4, title: "Lists", href: "/#" },
        { id: 5, title: "Info", href: "/#" },
        { id: 6, title: "Search", href: "/#" },
      ],
      tasks: [],
      taskName: "",
      taskDeadline: "",
    };
  },
  methods: {
    setToggle() {
      this.toggle = !this.toggle;
      console.log(this.toggle);
    },
    mounted() {
      console.log(this.message);    
    },
    addNewTask() {
      const newTask = {
        id: Date.now(),
        title: this.taskName,
        deadline: this.taskDeadline,
        isDone: false,
      };
      if (
        newTask.deadline.trim().length === 0 ||
        newTask.title.trim().length === 0
      ) {
        console.log("Please fill in the task title and deadline");
      } else {
        this.tasks.push(newTask);
        this.taskName = "";
        this.taskDeadline = "";
        console.log(this.tasks);
      }
    },
  },
});

app.mount("#root");
