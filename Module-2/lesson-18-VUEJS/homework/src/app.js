Vue.createApp({
  data() {
    return {
      categories: [
        { id: 1, name: "Smartfonlar", img: "./images/image 61.png" },
        {
          id: 2,
          name: "Kompyuterlar va notebooklar",
          img: "./images/image 62.png",
        },
        { id: 3, name: "Televizorlar", img: "./images/image 63.png" },
        { id: 4, name: "Aqlli soatlar", img: "./images/image 64.png" },
        { id: 5, name: "Quloqchinlar", img: "./images/image 65.png" },
        { id: 6, name: "Konditsioner", img: "./images/image 66.png" },
        { id: 7, name: "Sovutkichlar", img: "./images/image 67.png" },
        { id: 8, name: "Kir yuvish mashinalari", img: "./images/image 68.png" },
      ],
    };
  },
  methods: {},
  mounted() {
    console.log("vue is working...");
  },
}).mount("#root");
