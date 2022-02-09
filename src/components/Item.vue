<template>
  <div
    class="t-cursor-pointer t-h-auto t-w-[180px] t-bg-white t-rounded c-shadow t-flex t-flex-col t-gap-y-1 t-items-center t-p-4 t-relative"
  >
    <div
      class="t-h-[150px] t-w-[150px] t-bg-neutral-500 t-rounded-xl t-flex-none"
    >
      <!-- spinner-color="dark" spinner-size="82px" -->
      <q-img
        :src="image_url"
        fit="cover"
        height="100%"
        width="100%"
        no-spinner
      />
    </div>
    <p
      v-if="discount"
      class="t-bg-red-700 t-h-9 t-w-9 t-rounded-full t-absolute t-top-2 t-right-2 t-flex t-items-center t-justify-center t-text-white t-text-xs t-font-bold"
    >
      <!-- {{ price }}% -->
      {{ discount }}%
    </p>
    <div
      class="t-w-full t-flex t-flex-col t-gap-y-1 t-justify-between t-h-full"
    >
      <p class="t-font-bold t-w-full t-text-xs">{{ name }}</p>
      <div class="t-flex t-justify-between t-w-full t-items-center">
        <div class="t-flex t-h-[15px] t-flex-row t-gap-x-1">
          <p
            v-if="discount"
            class="t-line-through t-align-middle t-text-neutral-400"
          >
            ${{ original_price }}
          </p>
          <p class="t-text-red-700 t-font-bold">${{ price }} /SF</p>
        </div>
        <div class="t-w-max">
          <span class="material-icons md-20"> arrow_forward_ios </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  computed: {
    newPrice: function () {
      return parseFloat(
        // this.price - this.price * (this.discount / 100)
        this.price
      ).toFixed(2);
    },
  },
  props: {
    name: {
      type: String,
      default: "",
    },
    image_url: {
      type: String,
      default: "",
    },
    original_price: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      default: 0,
    },
    discount: {
      default: 0,
    },
  },
  setup() {
    return {};
  },
};
</script>
