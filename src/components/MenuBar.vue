<template>
<div class="header px-8 lg:px-0 shadow-2xl shadow-gray-400 border-gray-200 rounded-xl">
    <div class="flex justify-between items-center py-4 w-full container mx-auto px-2 ">
        <div class="header-left w-2/5 order-2 lg:order-1">
            <div class="logo">
                <img class="w-10" src="../assets/web-183282388.jpg" alt="" />
            </div>
        </div>
        <div class="header-mid flex justify-between items-center w-2/5 lg:order-2 hidden lg:block">
            <div class="menu">
                <ul class="flex justify-between">
                    <li class="font-medium">
                        <a href="">HOME</a>
                    </li>
                    <li class=" font-medium">
                        <a href="">CATEGORY</a>
                    </li>
                    <li class="font-medium"><a href="">BLOG</a></li>
                    <li class="font-medium"><a href="">CONTACT</a></li>
                    <li class="font-medium">
                        <div>
                            <router-link @click="_goToLogin()" :to="{name:'login'}">
                                <a href="">LOGIN</a>
                            </router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="order-2 lg:hidden text-right w-1/3">
            <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 18H3V16H21V18ZM21 13H3V11H21V13ZM21 8H3V6H21V8Z" fill="#2E3A59" />
                </svg>
            </button>
        </div>
        <div class="button flex gap-4 order-3 ml-15">
            <button class="btn-search hidden lg:block">
                <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="0.1" cx="18.5" cy="18" r="18" fill="#356C07" />
                    <path d="M26.2064 25.0087L26.2064 25.0087C26.2892 25.0915 26.3876 25.1572 26.4958 25.2021C26.604 25.2469 26.72 25.27 26.8372 25.27C26.9543 25.27 27.0703 25.2469 27.1786 25.2021C27.2868 25.1572 27.3852 25.0915 27.468 25.0087C27.5508 24.9258 27.6165 24.8275 27.6614 24.7192C27.7062 24.611 27.7293 24.495 27.7293 24.3779C27.7293 24.2607 27.7062 24.1447 27.6614 24.0365C27.6165 23.9282 27.5508 23.8299 27.468 23.747L27.468 23.747L24.1363 20.4161C25.1015 19.1351 25.5542 17.5386 25.4033 15.9396C25.2496 14.3107 24.4811 12.8015 23.2541 11.7191C22.0272 10.6367 20.434 10.0624 18.7986 10.113C17.1633 10.1636 15.6086 10.8354 14.451 11.9915C13.2923 13.1485 12.6184 14.7038 12.5666 16.3404C12.5147 17.9769 13.0889 19.5717 14.1721 20.7997C15.2553 22.0276 16.7659 22.7963 18.3962 22.9492C19.9967 23.0992 21.5943 22.6446 22.8752 21.6767L26.2064 25.0087ZM22.289 13.2538C22.7266 13.6843 23.0746 14.1972 23.3129 14.7628C23.5513 15.3285 23.6753 15.9357 23.6778 16.5496C23.6803 17.1634 23.5612 17.7716 23.3275 18.3392C23.0937 18.9068 22.7499 19.4225 22.3159 19.8565C21.8818 20.2906 21.3661 20.6344 20.7986 20.8682C20.231 21.1019 19.6227 21.221 19.0089 21.2185C18.3951 21.216 17.7878 21.092 17.2221 20.8536C16.6565 20.6152 16.1436 20.2672 15.7131 19.8297C14.8528 18.9552 14.3729 17.7762 14.3779 16.5496C14.3829 15.3229 14.8724 14.1479 15.7398 13.2805C16.6072 12.413 17.7822 11.9235 19.0089 11.9185C20.2356 11.9135 21.4145 12.3935 22.289 13.2538Z" fill="#356C07" stroke="#356C07" stroke-width="0.2" />
                </svg>
            </button>
            <button class="btn-cart" @click="showModalCart()">
                <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="0.74" cx="18.5" cy="18" r="18" fill="#356C07" />
                    <path d="M20.1 20.0545C19.7686 20.0545 19.5 20.3308 19.5 20.6718V22.318C19.5 22.659 19.7686 22.9354 20.1 22.9354C20.4314 22.9354 20.7 22.659 20.7 22.318V20.6718C20.7 20.3308 20.4314 20.0545 20.1 20.0545Z" fill="white" />
                    <path d="M16.3 20.6718C16.3 20.3308 16.5686 20.0545 16.9 20.0545C17.2314 20.0545 17.5 20.3308 17.5 20.6718V22.318C17.5 22.659 17.2314 22.9354 16.9 22.9354C16.5686 22.9354 16.3 22.659 16.3 22.318V20.6718Z" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3804 11.9261C20.2147 11.6308 20.313 11.2533 20.6 11.0828C20.887 10.9123 21.2539 11.0135 21.4196 11.3088L23.0196 14.1602C23.0436 14.2029 23.062 14.2473 23.0752 14.2926H23.3C24.515 14.2926 25.5 15.306 25.5 16.5562C25.5 17.2633 25.1848 17.8948 24.6911 18.3099L24.1576 22.0836L23.8002 23.8066C23.586 24.8388 22.767 25.6229 21.7509 25.7684C19.594 26.0772 17.406 26.0772 15.2491 25.7684C14.233 25.6229 13.414 24.8388 13.1998 23.8066L12.8424 22.0836L12.3089 18.3099C11.8152 17.8948 11.5 17.2633 11.5 16.5562C11.5 15.306 12.485 14.2926 13.7 14.2926H13.9248C13.938 14.2473 13.9564 14.2029 13.9804 14.1602L15.5804 11.3088C15.7461 11.0135 16.113 10.9123 16.4 11.0828C16.687 11.2533 16.7853 11.6308 16.6196 11.9261L15.2917 14.2926H21.7083L20.3804 11.9261ZM13.5932 18.8171C13.6286 18.8189 13.6642 18.8198 13.7 18.8198H23.3C23.3358 18.8198 23.3714 18.8189 23.4068 18.8171L22.9758 21.8657L22.6266 23.5488C22.5178 24.0733 22.1017 24.4716 21.5855 24.5455C19.5384 24.8386 17.4616 24.8386 15.4145 24.5455C14.8983 24.4716 14.4822 24.0733 14.3734 23.5488L14.0242 21.8657L13.5932 18.8171ZM24.3 16.5562C24.3 15.9879 23.8523 15.5273 23.3 15.5273H13.7C13.1477 15.5273 12.7 15.9879 12.7 16.5562C12.7 17.1244 13.1477 17.5851 13.7 17.5851H23.3C23.8523 17.5851 24.3 17.1244 24.3 16.5562Z" fill="white" />
                </svg>
            </button>
        </div>
    </div>

    <Cart v-show="showModal" @close="closeModalCart()">
        <template v-slot:body>
            <div class="bg-scroll">
                <div class="grid grid-rows-1 grid-cols-1 my-2">
                    <div class="grid grid-rows-1 grid-cols-4">
                        <div class="text-center border-solid border-2 border-black-600">
                            <p>Tên sản phẩm</p>
                        </div>
                        <div class="text-center border-solid border-2 border-black-600">
                            <p>Số lượng</p>
                        </div>
                        <div class="text-center border-solid border-2 border-black-600">
                            <p>Đơn giá</p>
                        </div>
                        <div class="text-center border-solid border-2 border-black-600">
                            <p>Thành tiền</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-4 h-5">
                        <div class="text-center border-solid border-2 border-black-600">
                            <!-- <div v-for="(cartItem, cartIndex) in cart" :key="cartIndex" class="flex align-center justify-center">
                                <img class="w-20" :src='cartItem.image' alt="">
                            </div> -->
                            <div v-for="(cartItem, cartIndex) in cart" :key="cartIndex">
                                {{cartItem.name}}
                            </div>
                        </div>
                        <div class="text-center border-solid border-2 border-black-600">
                            <div v-for="(cartItem, cartIndex) in cart" :key="cartIndex">
                                <button @click="decrease(cartIndex)">-</button>
                                <input type="text" :value="cartItem.quantity" class="w-8 mr-2 text-center">
                                <button @click="increase(cartIndex)">+</button>
                            </div>
                        </div>
                        <div class="text-center border-solid border-2 border-black-600">
                            <div v-for="(cartItem, cartIndex) in cart" :key="cartIndex">
                                {{cartItem.price}}
                            </div>
                        </div>
                        <div class="text-center border-solid border-2 border-black-600">
                            <div v-for="(cartItem, cartIndex) in cart" :key="cartIndex">
                                {{cartItem.price * cartItem.quantity}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template v-slot:footer>
            <div>
                <span class="mr-3">Total: {{Total}}</span>
                <button class="bg-red-600 text-white py-2 px-4 rounded" @click="makeOrder()">Thanh toán</button>
            </div>

        </template>
    </Cart>
    <Order v-show="showModalChild" @close="closeModalOrder()">
        <template v-slot:body>
            <div class="block lg:flex">
                <div class="user w-1/2 text-left p-3">
                    <div class="name">
                        Họ tên: {{user.full_name}}
                    </div>
                    <div class="email">
                        Email: {{user.email}}
                    </div>
                    <div class="phone">
                        Phone: {{user.phone}}
                    </div>
                    <div class="address">
                        Address: <input v-model="address" type="text" placeholder="Address" class="inline-block border-0 bg-white focus:outline-none focus:bg-gray-300 w-full p-4 mt-1.5 mb-5">
                    </div>
                    <div class="note">
                        Note: <input v-model="note" type="text" placeholder="Note" class="inline-block border-0 bg-white focus:outline-none focus:bg-gray-300 w-full p-4 mt-1.5 mb-5">
                    </div>
                </div>
                <div class="order block w-1/2 lg:border-l-2 lg:border-gray-500 text-left mt-1 p-3" >
                    <div v-for="item in order" :key="item.id">
                        <div class="order-name">
                        Tên sản phẩm: {{item.name}}
                    </div>
                    <div class="order-quantity border-b-2 lg:border-gray-500">
                        Số lượng: {{item.quantity}}
                    </div>
                    </div>
                </div>
            </div>
        </template>
        <template v-slot:footer>
            <div class="items-end">
                <span class="mr-3">Total: {{total}}</span>
                <button class="bg-red-600 text-white py-2 px-4 rounded" @click="makeOrder()">Thanh toán</button>
            </div>
        </template>
    </Order>
</div>
</template>

<script>
import Order from '@/pages/Order.vue';
import Cart from "../pages/Cart.vue";
import {userOrderService} from '@/services/userOrderService'
export default {
    data() {
        return {
            showModal: false,
            showModalChild: false,
            Total: 0,
            cart: [],
            user: {
                full_name: '',
                email: '',
                phone: '', 
            },
            order: [],
            total: 0,
            note: "",
            address: ""
        }
    },
    methods: {
        orderSend() {
            let data = JSON.parse(localStorage.getItem('addToCart'));
            if (data == null) {
                alert('Bạn chưa có sản phẩm nào trong giỏ hàng');
                return;
            } else {
                this.order = data;
                this.address = '';
                this.note = '';
                this.total = this.order.reduce((total, item) => {
                    return total + item.price * item.quantity;
                }, 0);
                localStorage.setItem('order', JSON.stringify([ ...this.order ]));
            }
        },
        showModalCart() {
            this.showModal = true;
            let cart = localStorage.getItem('addToCart');
            if (!cart) {
                this.cart = [];
            } else {
                this.cart = JSON.parse(cart);
                this.Total = this.cart.reduce((total, item) => {
                    return total += item.price * item.quantity;
                }, 0);
            }
        },
        closeModalCart() {
            this.showModal = false;
        },
        async makeOrder() {
            this.showModalChild = true;
            let token = localStorage.getItem('token');
            console.log(token)
            try {
               const resp = await userOrderService.makeOrder(token);
                // console.log(resp);
                this.user.full_name = resp.data.full_name;
                this.user.email = resp.data.email;
                this.user.phone = resp.data.phone;
                
            } catch (error) {
                console.log(error);
            }
        },
        closeModalOrder() {
            this.showModalChild = false;
        },
    },
    increase(cartIndex) {
        this.cart[cartIndex].quantity++;
        this.Total = this.cart.reduce((total, item) => {
            return total += item.price * item.quantity;
        }, 0);
    },
    decrease(cartIndex) {
        if (this.cart[cartIndex].quantity > 1) {
            this.cart[cartIndex].quantity--;
        } else {
            this.cart.splice(cartIndex, 1);
        }
        this.Total = this.cart.reduce((total, item) => {
            return total += item.price * item.quantity;
        }, 0);
    },
    _goToLogin() {
        this.$router.push('/login');
    },
    mounted() {
        this.orderSend();
    },
    components: {
        Cart,
        Order
    }
}
</script>
