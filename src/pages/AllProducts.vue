<template>
  <q-header
    class="t-text-black t-bg-white t-flex t-items-center t-justify-center t-pl-3 t-pr-6 t-h-[50px]"
  >
    <span
      class="material-icons md-36 t-cursor-pointer t-text-zinc-700 t-text-opacity-90 t-flex t-justify-center t-items-center"
      @click="$router.go(-1)"
    >
      chevron_left
    </span>
    <div class="t-w-full"></div>
    <div
      class="t-w-9 t-h-9 t-flex t-items-center t-justify-center t-cursor-pointer"
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.7 24.7L19 19M22 11.5C22 12.8789 21.7284 14.2443 21.2007 15.5182C20.6731 16.7921 19.8996 17.9496 18.9246 18.9246C17.9496 19.8996 16.7921 20.6731 15.5182 21.2007C14.2443 21.7284 12.8789 22 11.5 22C10.1211 22 8.75574 21.7284 7.48182 21.2007C6.20791 20.6731 5.05039 19.8996 4.07538 18.9246C3.10036 17.9496 2.32694 16.7921 1.79926 15.5182C1.27159 14.2443 1 12.8789 1 11.5C1 8.71523 2.10625 6.04451 4.07538 4.07538C6.04451 2.10625 8.71523 1 11.5 1C14.2848 1 16.9555 2.10625 18.9246 4.07538C20.8938 6.04451 22 8.71523 22 11.5Z"
          stroke="black"
          stroke-opacity="0.75"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </q-header>
  <q-page class="t-flex t-flex-col t-gap-2 t-pb-6">
    <div
      class="t-flex t-flex-row t-justify-between t-pb-1 t-sticky t-top-[50px] t-bg-white t-z-50 t-px-6"
    >
      <div>
        <p class="t-text-2xl t-font-bold">All Products</p>
        <p class="t-text-sm t-text-neutral-500">123 items</p>
      </div>

      <span
        class="material-icons md-36 t-cursor-pointer t-text-zinc-800 t-text-opacity-90 t-flex t-justify-center t-items-center"
        @click="toggleRightDrawer"
      >
        tune
      </span>
    </div>

    <div class="t-flex t-flex-col t-items-center">
      <div class="t-grid t-grid-cols-2 t-gap-4 t-pb-10">
        <!-- <item
          v-for="(item, id) in items"
          :key="id"
          :id="item.id"
          :name="item.name"
          :price="item.price"
          :discount="item.discount"
          @click="goToProduct(item)"
        /> -->
        <item
          v-for="(item, id) in items"
          :key="id"
          :id="item.id"
          :name="item.Description"
          :original_price="item.ListPrice"
          :price="item.SFPrice"
          :discount="
            (item.SFPrice != item.ListPrice) &
            (item.SFPrice != null) &
            (item.ListPrice != null) &
            (item.SFPrice < item.ListPrice)
              ? parseFloat(
                  100 - (item.SFPrice / item.ListPrice) * 100
                ).toFixed()
              : null
          "
          :image_url="item.MediumImage"
          @click="goToProduct(item)"
        />
      </div>
    </div>
  </q-page>

  <q-drawer
    v-model="rightDrawerOpen"
    side="right"
    overlay
    behavior="mobile"
    class="t-bg-white t-rounded-l-[45px]"
    :width="370"
  >
    <!-- drawer content -->
    <div class="t-flex t-flex-col t-justify-between t-w-full t-h-full t-p-6">
      <div class="t-flex-col t-flex t-gap-6">
        <div class="t-flex t-flex-row t-items-center">
          <div class="t-w-9"></div>
          <p class="t-w-full t-text-center t-font-medium t-text-xl">
            Filter & Sort
          </p>
          <div class="t-w-9">
            <span
              class="material-icons md-36 t-text-red-700 t-cursor-pointer"
              @click="toggleRightDrawer"
            >
              close
            </span>
          </div>
        </div>

        <div class="t-flex t-flex-col t-items-center t-gap-2">
          <div class="t-w-full t-text-lg">Select Categories</div>
          <div
            class="t-flex t-gap-2 t-flex-wrap t-place-self-start t-items-center"
          >
            <div
              class="t-text-sm t-bg-red-700 t-rounded-full t-py-2 t-px-4 t-text-white t-text-center t-cursor-pointer"
            >
              Tile Collection
            </div>
            <div
              class="t-text-sm t-bg-white t-rounded-full t-py-2 t-px-4 t-border-neutral-300 t-border t-text-center t-cursor-pointer"
            >
              Installation Materials
            </div>
            <div
              class="t-text-sm t-bg-white t-rounded-full t-py-2 t-px-4 t-border-neutral-300 t-border t-text-center t-cursor-pointer"
            >
              Tools & Accessories
            </div>
          </div>
        </div>

        <div class="t-flex t-flex-col t-items-center t-gap-2">
          <div class="t-w-full t-text-lg">Sort By</div>
          <div
            class="t-flex t-gap-2 t-flex-wrap t-place-self-start t-items-center"
          >
            <div
              class="t-text-sm t-bg-white t-rounded-full t-py-2 t-px-4 t-border-neutral-300 t-border t-text-center t-cursor-pointer"
            >
              Popularity
            </div>
            <div
              class="t-text-sm t-bg-white t-rounded-full t-py-2 t-px-4 t-border-neutral-300 t-border t-text-center t-cursor-pointer"
            >
              Deals & Discounts
            </div>
            <div
              class="t-text-sm t-bg-white t-rounded-full t-py-2 t-px-4 t-border-neutral-300 t-border t-text-center t-cursor-pointer"
            >
              Price
            </div>
            <div
              class="t-text-sm t-bg-red-700 t-rounded-full t-py-2 t-px-4 t-text-white t-text-center t-cursor-pointer"
            >
              Top Selling
            </div>
          </div>
        </div>
      </div>

      <div class="t-flex t-flex-col t-w-full t-gap-2">
        <button
          class="t-rounded-full t-w-full t-h-16 t-text-base t-bg-black t-bg-opacity-90 t-font-bold t-text-white"
        >
          Apply
        </button>
        <button
          class="t-rounded-full t-w-full t-h-16 t-text-base t-bg-white t-bg-opacity-90 t-font-bold t-text-black t-border-2 t-border-neutral-400"
        >
          Clear Filters
        </button>
      </div>
    </div>
  </q-drawer>
</template>

<script>
import Item from "src/components/Item.vue";
import { ref } from "vue";
import { api } from "boot/axios";

export default {
  components: { Item },
  name: "AllProducts",
  data() {
    return {
      items: [],
    };
  },
  setup() {
    const rightDrawerOpen = ref(false);

    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
  created() {
    api
      .get("/products")
      .then((response) => {
        this.items = response.data;
        console.log(response.data);
      })
      .catch(() => {
        console.log("data not found");
      });
  },
  methods: {
    goToProduct(item) {
      this.$router.push("/product/" + item.id);
      // this.$router.push({name:'product', params:{data:item});
      // console.log(item)
    },
  },
};
</script>
