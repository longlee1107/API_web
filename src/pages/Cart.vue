<template>
<transition name="modal-fade">
    <div class="modal-backdrop fixed inset-0 bg-neutral-500 flex justify-center items-center">
        <div class="modal flex flex-col bg-white shadow-lg w-full h-full overflow-x-auto" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
            <header class="modal-header p-4 flex" id="modalTitle">
                <slot name="header">
                    <b>Cart</b>
                </slot>
                <button type="button" class="btn-close absolute right-0 top-0 p-2.5 text-xl cursor-pointer font-bold text-sky-500 bg-transparent" @click="close" aria-label="Close modal">
                    x
                </button>
            </header>
            <section class="modal-body relative p-5 h-5/6" id="modalDescription">
                <slot name="body">
                    <!-- <div>
                        <h1 class="text-center text-xl ">Giỏ hàng</h1>
                        <div v-for="(cartItem, cartIndex) in Cart" :key="cartIndex" class="grid  grid-rows-1 grid-cols-1 my-2">
                            <div class="grid grid-rows-1 grid-cols-4">
                                <div class="text-center  border-solid border-2 border-black-600">
                                    <p>Tên sản phẩm</p>
                                    {{cartItem.name}}
                                    <div class="flex align-center justify-center">
                                        <img class="w-20" :src='cartItem.image.full_image_path' alt="">
                                    </div>
                                </div>
                                <div class="text-center border-solid border-2 border-black-600">
                                    <p>Số lượng</p>
                                    <div>
                                        <button @click="decrease(cartIndex)">-</button>
                                        <input type="text" :value="cartItem.quantity" class="w-8 mr-2 text-center">
                                        <button @click="increase(cartIndex)">+</button>
                                    </div>
                                </div>
                                <div class="text-center border-solid border-2 border-black-600">
                                    <p>Đơn giá</p>
                                    {{cartItem.price}}
                                </div>
                                <div class="text-center border-solid border-2 border-black-600">
                                    <p>Thành tiền</p>
                                    {{cartItem.price * cartItem.quantity}}
                                </div>
                            </div>
                        </div>
                    </div> -->
                </slot>
            </section>
            <footer class="modal-footer relative text-right items-end font-bold p-2.5">
                <slot name="footer">
                </slot>
            </footer>
        </div>
    </div>
</transition>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
      close() {
        this.$emit('close');
      },
    },
    mounted:function() {
    document.addEventListener('keydown', (e) => {
      if (e.key === "Escape") {
        this.close();
      }
    });
  }
}
</script>
<style scope>
    .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }
</style>