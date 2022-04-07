<template>
<div>
    <MenuBar></MenuBar>
    <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="img">
        </div>
        <div class="product-info">
            <div class="product-name">
                {{slug}}
            </div>
            <div class="product-price">
            </div>
            <div class="product-number">
                <button>+</button>
                <input class="w-8 mr-2 text-center" type="text" :disabled="false" value="1">
                <button>-</button>
            </div>
            <div class="add-to-cart">
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full" @click="addToCart(item.id)">
                    Add to cart
                </button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import MenuBar from "@/components/MenuBar.vue";
export default {
    name: "ProductDetail",
    data() {
        return {
            slug:'',
            imagePath:'',
            price:0,

        }
    }, 
    mounted: function () {
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                this.close();
            }
        });
    this.slug= this.$route.params.name;
    // this.price = this.$route.params.price;
    // this.imagePath = this.$route.params.image;
    },
    
    components: {
        MenuBar
    }
}
</script>

<style scoped>
</style>
