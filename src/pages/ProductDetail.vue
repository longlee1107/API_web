<template>
<div class="w-full">
    <MenuBar></MenuBar>
    <div class="w-full h-1/6 box-border mx-auto mt-auto justitfy-center grid grid-cols-1 lg:grid-cols-2">
        <div class="img  h-full mt-10 ">
            <img class="mx-auto w-3/4 h-2/3 object-right object-cover" :src="imagePath" alt="" />
        </div>
        <div class=" w-full px-auto h-1/2 mt-96 text-center product-info lg:mt-5 lg:text-left lg:ml-6">
            <div class="product-name text-3xl font-bold ">
                {{name}}
            </div>
            <div class="product-price text-2xl font-bold text-red-500">
                Price: {{price}}
            </div>
            <div class="justify-center lg:justify-start items-center">
                <div class="add-to-cart">
                    <button class="bg-red-500 hover:bg-red-700 text-white text-xl font-bold py-1 px-2 rounded-full" @click="addToCart(item.id)">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="detail-prod  w-full px-auto h-1/2 my-36 lg:my-0 mx-auto grid grid-cols-1 text-center lg:text-left">
        <div class="detail-prod-title">
            <p class="text-2xl font-bold">Product details</p>
        </div>
        <div class="detail-prod-content">
            {{content}}
        </div>
    </div>
    <Footer></Footer>
</div>
</template>

<script>
import MenuBar from "@/components/MenuBar.vue";
import Footer from "@/components/Footer.vue";
export default {
    name: "ProductDetail",
    data() {
        return {
            name: '',
            imagePath: '',
            price: 0,
            content: ''

        }
    },
    mounted: function () {
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                this.close();
            }
        });
        this.name = this.$route.params.name;
        this.price = this.$route.params.price;
        this.imagePath = this.$route.params.image;
        this.content = this.$route.params.content;

    },

    components: {
        MenuBar,
        Footer
    }
}
</script>

<style scoped>
</style>
