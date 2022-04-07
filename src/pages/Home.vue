<template>
<div class="container mx-auto">
    <MenuBar></MenuBar>
    <div class="Product w-full">
        <div class="w-full h-11 mt-8">
            <p class="text-left font-bold">THE LASTEST PRODUCTS</p>
        </div>
        <div>
            <div class="NewProd w-full grid grid-cols-1 lg:grid-cols-4">
                <div class="productCard justify-center items-center w-fit m-8" v-for="item in lastProducts" :key="item.id">
                    <div class="productImg ">
                        <img class="object-contain h-80 w-64" :src="item.image.full_image_path" alt="">
                    </div>
                    <div class="productInfo">
                        <div class="productName font-bold text-left">
                            <h3>{{item.name}}</h3>
                        </div>
                        <div class="productPrice font-bold text-red-500 text-left">
                            <h3>{{item.price}}</h3>
                        </div>
                    </div>
                    <div class="flex justify-between">
                        <div class="number">
                            <button>+</button>
                            <input class=" w-8 mr-2 text-center" type="text" :disabled="false" value="1">
                            <button>-</button>
                        </div>
                        <div class="addToCart text-right">
                            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full" @click="addToCart(item.id)">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full h-11 mt-8">
            <p class="text-left font-bold">THE MOST VIEWED PRODUCTS</p>
        </div>
        <div class="MostViewedProd w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="productCard justify-center items-center w-fit m-8" v-for="item in mostViewedProducts" :key="item.id">
                <div class="productImg">
                    <img class="object-contain h-80 w-64" :src="item.image.full_image_path" alt="">
                </div>
                <div class="productInfo">
                    <div class="productName font-bold text-left">
                        <h3>{{item.name}}</h3>
                    </div>
                    <div class="productPrice font-bold text-red-500 text-left">
                        <h3>{{item.price}}</h3>
                    </div>
                </div>
                <div class="flex justify-between">
                    <div class="number">
                        <button>+</button>
                        <input class=" w-8 mr-2 text-center" type="text" :disabled="false" value="1">
                        <button>-</button>
                    </div>
                    <div class="addToCart text-right">
                        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full" @click="addToCart(item.id)">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full h-11 mt-8">
            <p class="text-left font-bold">THE BEST SELLER PRODUCTS</p>
        </div>
        <div class="BestSeller w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="productCard justify-center items-center w-fit m-8" v-for="item in bestSeller" :key="item.id">
                <div class="productImg">
                    <img class="object-contain h-80 w-64" :src="item.image.full_image_path" alt="">
                </div>
                <div class="productInfo">
                    <div class="productName flex justify-between font-bold text-left">
                        <router-link @click="_goToDetail()" :to="{name:'detail-product',params:{id:item.id,name:item.name,price:item.price,image:item.image.full_image_path}}">
                            <h3>{{item.name}}</h3>
                        </router-link>
                    </div>
                </div>
                <div class="productPrice text-left font-bold text-red-500">
                    <h3>{{item.price}}</h3>
                </div>
                <div class="flex justify-between">
                    <div class="number">
                        <button>+</button>
                        <input class=" w-8 mr-2 text-center" type="text" :disabled="false">
                        <button>-</button>
                    </div>
                    <div class="addToCart text-right">
                        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full" @click="addToCart(item.id)">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer class="flex md:flex-row flex-col justify-around mt-20 bg-gray-200 py-5">
        <div>
            <img src="https://thumbs.dreamstime.com/b/web-183282388.jpg" alt="logo" class="w-12">
            <p class="font-bold mt-5">Công ty TNHH 1 thành viên Luân</p>
            <address class="font-bold">Địa chỉ: Hạ Long - Quảng Ninh</address>
            <p><span class="font-bold">SDT: 0868120192</span></p>
            <p><span class="font-bold">Fax: 0868120192</span></p>
        </div>

        <div>
            <ul class="mt-10 space-y-2">
                <li>
                    <a href="">Về chúng tôi</a>
                </li>

                <li>
                    <a href="">Chính sách mua hàng</a>
                </li>

                <li>
                    <a href="">Chính sách trả hàng</a>
                </li>
            </ul>
        </div>

        <div>
            <h5 class="mt-10 font-semibold">Mạng xã hội</h5>
            <div class="flex space-x-5 ">
                <a href="https://facebook.com">
                    <i class="bi bi-facebook text-sm"></i>
                </a>
                <a href="https://facebook.com">
                    <i class="bi bi-google text-sm"></i>
                </a>
                <a href="https://facebook.com">
                    <i class="bi bi-instagram text-sm"></i>
                </a>
            </div>
        </div>
    </footer>
</div>
</template>

<script>
import MenuBar from "../components/MenuBar.vue";
export default {
    data() {
        return {
            lastProducts: [],
            mostViewedProducts: [],
            bestSeller: [],
            url: "http://128.199.211.17/api/v1/home",
            method: "GET",
        };
    },
    methods: {
        ApiHome() {
            fetch(this.url, {
                    method: this.method,
                    headers: {
                        "Accept": "application/json",
                    },
                }).then(response => response.json())
                .then(data => {
                    this.lastProducts = data.lastProducts;
                    this.mostViewedProducts = data.topViewProducts;
                    this.bestSeller = data.topSoldProducts;
                }).catch(error => {
                    console.log(error);
                });
        },
        _goToDetail() {
            this.$router.go({
                name: 'detail-product'
            });

        }
    },
    mounted() {
        this.ApiHome();
    },
    components: {
        MenuBar,

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
