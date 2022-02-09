<template>
  <div
    class="t-cursor-pointer t-h-auto t-w-[180px] t-bg-white t-rounded c-shadow t-flex t-flex-col t-gap-y-1 t-items-center t-p-4 t-relative"
    @click="goTo('product')"
  >
    <p
      class="t-bg-red-700 t-h-9 t-w-9 t-rounded-full t-absolute t-top-2 t-right-2 t-flex t-items-center t-justify-center t-text-white t-text-xs t-font-bold"
    >
      20%
    </p>
    <div
      class="t-h-[150px] t-w-[150px] t-bg-neutral-500 t-rounded-xl t-flex-none"
    ></div>
    <div
      class="t-w-full t-flex t-flex-col t-gap-y-1 t-justify-between t-h-full"
    >
      <p class="t-font-bold t-w-full t-text-xs">Fumo Di Londra Grey</p>
      <div class="t-flex t-justify-between t-w-full t-items-center">
        <div class="t-flex t-h-[15px] t-flex-row t-gap-x-1">
          <p class="t-line-through t-align-middle t-text-neutral-400">$5.00</p>
          <p class="t-text-red-700 t-font-bold">$5.00 /SF</p>
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
  data() {
    return {
      items: [
        {
          id: 1,
          name: "11111111",
          price: 2.00,
          discount: 20,
        },
        {
          id: 2,
          name: "2222",
          price: 10.00,
          discount: 0,
        },
        {
          id: 3,
          name: "333333",
          price: 6.00,
          discount: 10,
        },
      ],
    };
  },
  setup() {
    return {};
  },
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
  },
};
</script>
