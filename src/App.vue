<template>
<div id="app">
    <!-- <router-view>
        <Home></Home>
    </router-view> -->
    <OrderDetail>

    </OrderDetail>
</div>
</template>

<script>
// import Register from "./pages/Register.vue";
// import Home from "./pages/Home.vue";
import OrderDetail from './pages/orderDetail.vue';
export default {
    components: {
        // Home,
        OrderDetail
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
