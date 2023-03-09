<template>
    <ul class="flex p-5 bg-indigo-50 rounded-sm w-full justify-center">
        <li>
            <router-link class="mx-3 block bg-indigo-500 text-white  py-2 px-6 rounded-xl" to="/admin/add">ADD</router-link>
        </li>


        <li>
            <router-link class="mx-3 block bg-indigo-500 text-white  py-2 px-6 rounded-xl"
                to="/admin/list">LIST</router-link>
        </li>
    </ul>
    <router-view></router-view>
</template>
<script>
export default {
    name: "Admin"
}
</script>
<style lang="css" scoped>
.router-link-active {
    background-color: indigo;
}
</style>