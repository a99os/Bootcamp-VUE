<template>
    <!-- <template v-if="!isAuth">
        <Login />
    </template> -->
    <Header />
    <main class="min-h-screen">
        <router-view></router-view>
    </main>
    <Footer />
</template>

<script>
import Header from '../components/Header/Header.vue';
import Footer from '../components/Footer/Footer.vue';
import Login from '../views/Login.vue';
export default {
    name: 'MainApp',

    components: {
        Header,
        Footer,
        Login
    },

    computed: {
        isAuth() {
            return false
        }
    }
}
</script>
<style lang="css"></style>