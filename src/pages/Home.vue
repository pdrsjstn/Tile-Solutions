<template>
  <custom-header>
    <p>Tile Solutions</p>
  </custom-header>
  <q-page>
    <div class="t-flex t-flex-col">
      <div class="t-flex t-flex-col t-pt-3">
        <div class="t-flex t-justify-between t-items-center t-px-6">
          <p class="t-text-2xl t-font-bold">Special Offers</p>
          <p
            class="t-text-red-700 t-cursor-pointer"
            @click="goTo('all-products')"
          >
            See all
          </p>
        </div>
        <div
          class="t-overflow-scroll hide-scroll-bar t-scroll-smooth t-h-fit t-py-5 t-px-2 t-flex t-gap-x-[15px]"
        >
          <!-- product lists -->

          <item
            v-for="(item, id) in special_offers"
            :key="id"
            :id="item.id"
            :name="item.Description"
            :original_price="item.ListPrice"
            :price="item.SFPrice ?? item.ListPrice"
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
      <div class="t-flex t-flex-col t-sticky t-top-[50px] t-z-50 t-bg-white">
        <div class="t-flex t-flex-col">
          <div
            class="t-px-6 t-flex t-justify-between t-items-center t-bg-white"
          >
            <p class="t-text-2xl t-font-bold">Categories</p>
            <p
              class="t-text-red-700 t-cursor-pointer"
              @click="goTo('all-products')"
            >
              See all
            </p>
          </div>
          <div
            class="t-overflow-scroll hide-scroll-bar t-scroll-smooth t-h-fit t-py-5 t-flex t-flex-row t-gap-x-[10px]"
          >
            <div class="t-pr-[14px]"></div>
            <!-- category buttons -->
            <category-button
              v-for="category in categories"
              :key="category.id"
              @click="selectCategory(category.id)"
              :active="currentCategory == category.id"
              :name="category.name"
            />
            <!-- category buttons -->
            <div class="t-pr-[14px]"></div>
          </div>
        </div>
      </div>
      <div class="t-flex t-flex-col t-items-center">
        <div class="t-grid t-grid-cols-2 t-gap-4 t-pb-10">
          <item
            v-for="(item, id) in items_by_category"
            :key="id"
            :id="item.id"
            :name="item.Description"
            :original_price="item.ListPrice"
            :price="item.SFPrice ?? item.ListPrice"
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
            :category="item.RootCollectionid"
            @click="goToProduct(item)"
          />
        </div>
      </div>
    </div>
  </q-page>

  <custom-footer />
</template>

<script>
import CustomHeader from "src/components/CustomHeader.vue";
import Item from "src/components/Item.vue";
import CategoryButton from "src/components/CategoryButton.vue";
import CustomFooter from "src/components/CustomFooter.vue";
import { api } from "boot/axios";

export default {
  components: { CustomHeader, Item, CategoryButton, CustomFooter },
  name: "Home",
  computed: {
    special_offers: function () {
      return this.items.filter(function (x) {
        return (
          (x.SFPrice != x.ListPrice) &
          (x.ListPrice != null) &
          (x.SFPrice != null) &
          (x.SFPrice < x.ListPrice)
        );
      });
    },
    items_by_category: function () {
      let curCat = this.currentCategory;
      return this.items.filter(function (x) {
        return x.RootCollectionid == curCat;
      });
    },
  },
  data() {
    return {
      currentCategory: 84,
      categories: [],
      items: [],
    };
  },
  created() {
    api
      .get("/collections")
      .then((response) => {
        this.categories = response.data;
        console.log(response.data);
      })
      .catch(() => {
        console.log("data not found");
      });
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
    goTo(route) {
      this.$router.push(route);
    },
    selectCategory(n) {
      this.currentCategory = n;
    },
  },
};
</script>
