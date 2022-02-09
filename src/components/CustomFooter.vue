<template>
  <div class="t-h-16 t-w-full t-px-6 t-sticky t-bottom-6">
    <div
      class="t-h-full t-w-full t-bg-neutral-700 t-bg-opacity-70 t-backdrop-blur-sm t-rounded-full t-grid t-grid-flow-col t-gap-x-5 t-justify-center"
    >
      <div class="t-w-16 t-h-16 t-flex t-justify-center">
        <span
          class="material-icons md-36 t-cursor-pointer t-text-white t-text-opacity-90"
        >
          home
        </span>
      </div>
      <div class="t-w-16 t-h-16 t-flex t-justify-center">
        <span
          class="material-icons-outlined md-36 t-cursor-pointer t-text-white t-text-opacity-90"
        >
          qr_code_scanner
        </span>
      </div>
      <div class="t-w-16 t-h-16 t-flex t-justify-center">
        <span
          class="material-icons-outlined md-36 t-cursor-pointer t-text-white t-text-opacity-90"
        >
          credit_card
        </span>
      </div>
      <div class="t-w-16 t-h-16 t-flex t-justify-center t-relative" @click="goToCart">
        <div
          class="t-h-[25px] t-w-[25px] t-bg-red-700 t-font-bold t-shadow t-absolute t-rounded-full t-top-1 t-right-1 t-text-white t-flex t-justify-center t-items-center"
        >
          2
        </div>
        <span
          class="material-icons-outlined md-36 t-cursor-pointer t-text-white t-text-opacity-90"
        >
          shopping_cart
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomFooter',
  methods: {
    goToCart() {
      this.$router.push("/cart");
    },
  },
  setup () {
    return {}
  }
}
</script>
