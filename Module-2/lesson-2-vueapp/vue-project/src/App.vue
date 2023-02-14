<template>
  <Header />
  <main>
    <h2>Main</h2>
  </main>
  <Footer />
</template>
<script>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      message: "Hello vue js",
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main {
  min-height: calc(100vh - 70px - 70px);
  background: lime;
}
</style>
