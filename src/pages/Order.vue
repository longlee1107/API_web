<template>
<transition name="modal-fade">
    <div class="modal-backdrop fixed inset-0 justify-center items-center">
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