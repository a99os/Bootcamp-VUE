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
      salers: [
        {
          id: 1,
          img: "./images/image 64.png",
          price: "299 000 so’m",
          info: "Apple Airpods Pro simsiz quloqchin , Oq rangda",
          order: 1230,
        },
        {
          id: 2,
          img: "./images/image 64.png",
          price: "16 114 285 so'm",
          info: "Apple Macbook Pro 13 2.4 2019 Intel core i5 DDR3 8 GB SSD 256 GB",
          order: 230,
          top: true,
        },
        {
          id: 3,
          img: "./images/image 64.png",
          price: "4 234 000 so’m",
          info: "Apple watch 4",
          order: 543,
          new: true,
        },
        {
          id: 4,
          img: "./images/image 64.png",
          price: "1 340 000 so’m",
          info: "Robot - tozalagich Xiaomi Mi Robot",
          order: 876,
        },
        {
          id: 5,
          img: "./images/image 64.png",
          price: "1 345 000 so’m",
          info: "Oynali Fotoaparat Canon EOS 6D Body",
          order: 565,
          new: true,
        },
        {
          id: 6,
          img: "./images/image 64.png",
          price: "299 000 so’m",
          info: "Apple Airpods Pro simsiz quloqchin , Oq rangda",
          order: 1230,
          new: true,
        },
        {
          id: 7,
          img: "./images/image 64.png",
          price: "16 114 285 so'm",
          info: "Apple Macbook Pro 13 2.4 2019 Intel core i5 DDR3 8 GB SSD 256 GB",
          order: 230,
        },
        {
          id: 8,
          img: "./images/image 64.png",
          price: "4 234 000 so’m",
          info: "Apple watch 4",
          order: 543,
        },
        {
          id: 9,
          img: "./images/image 64.png",
          price: "1 340 000 so’m",
          info: "Robot - tozalagich Xiaomi Mi Robot",
          order: 876,
          top: true,
        },
        {
          id: 10,
          img: "./images/image 64.png",
          price: "1 345 000 so’m",
          info: "Oynali Fotoaparat Canon EOS 6D Body",
          order: 565,
        },
      ],
    };
  },
  methods: {},
  mounted() {
    console.log("vue is working...");
  },
}).mount("#root");
