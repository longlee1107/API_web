<template>
    <div>
        <MenuBar></MenuBar>
        <div class="Cart">
            <div>
                <p>Giỏ hàng</p>
            </div>
            <div class="cart-title w-full grid grid-cols-1 lg:grid-cols-4">
                <div class="Product">Product</div>
                <div class="Count">Count</div>
                <div class="Price">Price</div>
                <div class="Total">Total</div>
            </div>
        </div>
    </div>
</template>
<script>
    import MenuBar from "../components/MenuBar.vue";
   export default {
       components: {
           MenuBar
       }
   }
</script>