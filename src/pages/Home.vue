<template>
<div class="container mx-auto">
    <MenuBar></MenuBar>
    <div class="Product w-full">
        <div class="w-full h-11 mt-8">
            <p class="text-left font-bold">THE LASTEST PRODUCTS</p>
        </div>
        <div>
            <div class="NewProd w-full grid grid-cols-1 lg:grid-cols-4">
                <div class="productCard justify-center items-center w-fit m-8" v-for="item in listProducts.lastProducts" :key="item.id">
                    <div class="productImg ">
                        <img class="object-contain h-80 w-64" :src="item.image.full_image_path" alt="">
                    </div>
                    <div class="productInfo">
                        <div class="productName font-bold text-left">
                            <router-link @click="_goToDetail()" :to="{name:'detail-product',params:{id:item.id,name:item.name,price:item.price,image:item.image.full_image_path,content:item.content}}">
                                <h3>{{item.name}}</h3>
                            </router-link>
                        </div>
                        <div class="productPrice font-bold text-red-500 text-left">
                            <h3>{{item.price}}</h3>
                        </div>
                    </div>
                    <div class="flex justify-end">
                        <div class="addToCart text-right">
                            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full" @click="_addToCart(item)">
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
            <div class="productCard justify-center items-center w-fit m-8" v-for="item in listProducts.topViewProducts" :key="item.id">
                <div class="productImg">
                    <img class="object-contain h-80 w-64" :src="item.image.full_image_path" alt="">
                </div>
                <div class="productInfo">
                    <div class="productName font-bold text-left">
                        <router-link @click="_goToDetail()" :to="{name:'detail-product',params:{id:item.id,name:item.name,price:item.price,image:item.image.full_image_path,content:item.content}}">
                            <h3>{{item.name}}</h3>
                        </router-link>
                    </div>
                    <div class="productPrice font-bold text-red-500 text-left">
                        <h3>{{item.price}}</h3>
                    </div>
                </div>
                 <div class="flex justify-end">
                        <div class="addToCart text-right">
                            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full" @click="_addToCart(item)">
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
            <div class="productCard justify-center items-center w-fit m-8" v-for="item in listProducts.topSoldProducts" :key="item.id">
                <div class="productImg">
                    <img class="object-contain h-80 w-64" :src="item.image.full_image_path" alt="">
                </div>
                <div class="productInfo">
                    <div class="productName flex justify-between font-bold text-left">
                        <router-link @click="_goToDetail()" :to="{name:'detail-product',params:{id:item.id,name:item.name,price:item.price,image:item.image.full_image_path,content:item.content}}">
                            <h3>{{item.name}}</h3>
                        </router-link>
                    </div>
                </div>
                <div class="productPrice text-left font-bold text-red-500">
                    <h3>{{item.price}}</h3>
                </div>
                 <div class="flex justify-end">
                        <div class="addToCart text-right">
                            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full" @click="_addToCart(item)">
                                Add to cart
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</div>
</template>

<script>
import MenuBar from "../components/MenuBar.vue";
import Footer from "../components/Footer.vue";
export default {
    data() {
        return {
            listProducts: [],
            addToCart: [],
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
                    this.listProducts = data;
                }).catch(error => {
                    console.log(error);
                });
        },
        _goToDetail() {
            this.$router.go({
                name: 'detail-product'
            });
        },
        _addToCart(item) {
            // this.addToCart.push({
            //     id: item.id,
            //     name: item.name,
            //     price: item.price,
            //     image: item.image.full_image_path,
            //     content: item.content,
            //     quantity: 1
            // })
            let addToCart = localStorage.getItem('addToCart');
            if (addToCart == null) {
                localStorage.setItem('addToCart', JSON.stringify([{
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    image: item.image.full_image_path,
                    content: item.content,
                    quantity: 1
                }]));
            } else {
                let cart = JSON.parse(localStorage.getItem('addToCart'));
                let index = -1;
                for (let i = 0; i < cart.length; i++) {
                    if (cart[i].id == item.id) {
                        index = i;
                        break;
                    }
                }
                if (index == -1) {
                    cart.push({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        image: item.image.full_image_path,
                        content: item.content,
                        quantity: 1
                    });
                    localStorage.setItem('addToCart', JSON.stringify(cart));
                } else {
                    cart[index].quantity += 1;
                    localStorage.setItem('addToCart', JSON.stringify(cart));
                }
            }
        },
    },
    mounted() {
        this.ApiHome();
        try {
            this.addToCart = JSON.parse(localStorage.getItem('addToCart'));
        } catch (e) {
            console.log(e);
            this.addToCart = [];
        }
    },
    components: {
        MenuBar,
        Footer
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
