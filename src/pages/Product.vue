<template>
  <!-- <q-header
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
      favorite_border
    </span>
  </q-header> -->
  <q-page class="t-h-full">
    <span
      class="t-z-50 material-icons md-36 t-cursor-pointer t-bg-white t-rounded-full t-text-zinc-700 t-text-opacity-90 t-flex t-justify-center t-items-center t-absolute t-m-2 t-bg-opacity-40"
      @click="back"
    >
      chevron_left
    </span>
    <div
      class="t-bg-neutral-700 t-h-96 t-flex t-items-center t-justify-center t-text-white t-text-2xl"
    >
      <q-img
        :src="this.product.LargeImage"
        spinner-color="dark"
        spinner-size="82px"
        fit="cover"
        height="100%"
        width="100%"
      />
    </div>
    <div class="t-px-6 t-h-full t-pt-3">
      <p class="t-uppercase t-text-zinc-500 t-font-medium">
        {{ product.SecondCollectionName }}
      </p>
      <p class="t-text-xl t-font-bold t-py-2">{{ product.Description }}</p>
      <p class="t-text-zinc-500">{{ product.Code }}</p>

      <div
        class="t-flex t-flex-row t-justify-between t-pt-6 t-pb-4 t-items-center"
      >
        <p class="t-font-medium t-text-base">Related Products</p>
        <p class="t-text-red-700">See All</p>
      </div>
      <div
        class="t-overflow-scroll hide-scroll-bar t-scroll-smooth t-h-fit t-px-1 t-grid t-grid-flow-col t-gap-x-[15px]"
      >
        <div
          class="t-h-28 t-w-28 t-bg-neutral-200 t-flex-none t-rounded-xl"
        ></div>
        <div
          class="t-h-28 t-w-28 t-bg-neutral-200 t-flex-none t-rounded-xl"
        ></div>
        <div
          class="t-h-28 t-w-28 t-bg-neutral-200 t-flex-none t-rounded-xl"
        ></div>
        <div
          class="t-h-28 t-w-28 t-bg-neutral-200 t-flex-none t-rounded-xl"
        ></div>
        <div
          class="t-h-28 t-w-28 t-bg-neutral-200 t-flex-none t-rounded-xl"
        ></div>
        <div
          class="t-h-28 t-w-28 t-bg-neutral-200 t-flex-none t-rounded-xl"
        ></div>
        <div
          class="t-h-28 t-w-28 t-bg-neutral-200 t-flex-none t-rounded-xl"
        ></div>
      </div>
    </div>

    <q-footer class="t-bg-white t-h-20 t-text-black t-px-6 t-w-full">
      <div class="t-flex t-flex-row t-justify-between">
        <div class="t-flex t-flex-col">
          <p class="t-text-zinc-500 t-font-medium">Total Price</p>
          <p class="t-font-medium t-text-2xl">${{ product.SFPrice }} / SF</p>
        </div>
        <q-btn
          color="black"
          icon="add"
          label="Add to Cart"
          class="t-rounded-full t-px-9"
        />
      </div>
    </q-footer>
  </q-page>
</template>

<script>
import { api } from "boot/axios";

export default {
  name: "Product",
  data() {
    return {
      item_id: null,
      product: [],
      related_products: [],
    };
  },
  created() {
    // this.item_id = this.$route.params;
    api
      .get("/products/" + this.$route.params.id)
      .then((response) => {
        // data.value = response.data;
        this.product = response.data;
        console.log(response.data);
      })
      .catch(() => {
        console.log("data not found");
      });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
