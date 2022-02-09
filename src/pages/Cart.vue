<template>
  <q-header
    class="t-text-black t-bg-white t-flex t-items-center t-justify-center t-px-3 t-h-[50px]"
  >
    <span
      class="material-icons md-36 t-cursor-pointer t-text-zinc-700 t-text-opacity-90 t-flex t-justify-center t-items-center"
      @click="back"
    >
      chevron_left
    </span>
    <div class="t-w-full"></div>
    <span
      class="material-icons md-36 t-cursor-pointer t-text-zinc-700 t-text-opacity-90"
    >
      more_horiz
    </span>
  </q-header>

  <q-page class="t-flex t-flex-col t-gap-2 t-px-6 t-pb-6">
    <div
      class="t-flex t-flex-col t-border-b-2 t-border-neutral-300 t-pb-1 t-sticky t-top-[50px] t-bg-white"
    >
      <p class="t-text-2xl t-font-bold">Shopping Cart</p>
      <p class="t-text-sm t-text-neutral-500">7 items</p>
    </div>

    <!-- cart product -->
    <cart-item />
    <cart-item />
    <cart-item />
    <cart-item />
    <cart-item />
    <cart-item />
    <cart-item />
    <!-- cart product -->
  </q-page>

  <q-footer class="t-flex t-flex-col t-px-6 t-bg-white t-pb-6">
    <div
      class="t-flex-col t-flex t-text-black t-border-b-2 t-border-neutral-300 t-py-4"
    >
      <div class="t-flex t-flex-row t-justify-between">
        <p class="t-text-base">Sub total</p>
        <p class="t-text-base">$12.32</p>
      </div>
      <div class="t-flex t-flex-row t-justify-between">
        <p class="t-text-base">HST 13%</p>
        <p class="t-text-base">$12.32</p>
      </div>
    </div>

    <div class="t-flex t-flex-row t-justify-between t-text-black t-py-4">
      <p class="t-text-base t-font-medium">Total</p>
      <p class="t-font-bold t-text-lg">$123.45</p>
    </div>

    <button
      class="t-rounded-full t-w-full t-h-16 t-text-base t-bg-black t-bg-opacity-90 t-font-bold"
      @click="checkout"
    >
      Shipping / Pickup
    </button>
  </q-footer>
</template>

<script>
import CartItem from "src/components/CartItem.vue";
export default {
  components: { CartItem },
  name: "Cart",
  methods: {
    back() {
      this.$router.go(-1);
    },
    checkout() {
      this.$router.push("checkout");
    },
  },
};
</script>
