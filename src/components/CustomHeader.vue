<template>
  <div class="t-text-black t-bg-white t-px-6 t-sticky t-top-0 t-z-50 t-flex-row t-flex t-h-[50px] t-items-center">
    <span
      class="material-icons md-36 t-cursor-pointer t-text-zinc-700 t-text-opacity-90"
      @click="toggleLeftDrawer"
    >
      drag_handle
    </span>
    <div class="t-w-full t-text-center t-text-red-700">
      <slot></slot>
    </div>
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
  </div>

  <q-drawer
    id="leftDrawer"
    v-model="leftDrawerOpen"
    side="left"
    overlay
    behavior="mobile"
    class="t-rounded-r-[45px]"
    :width="370"
    persistent
  >
    <div class="t-h-full t-flex t-flex-col">
      <div class="t-p-6 t-h-24">
        <div class="t-flex t-gap-3 t-items-center">
          <q-avatar>
            <img src="../assets/logo.png" />
          </q-avatar>
          <div class="t-flex t-flex-col t-text-white">
            <p class="t-text-xl">Tile Solutions</p>
            <p class="t-text-xs">Online Shop</p>
          </div>
        </div>
      </div>
      <div class="t-p-6 t-h-full t-flex t-flex-col t-gap-1">
        <p class="t-text-xs t-pb-2 t-text-white">MENU</p>
        <sidebar-link name="Home" icon="home" active />
        <sidebar-link name="Special Offers" icon="loyalty" />
        <sidebar-link name="My Cart" icon="shopping_cart" />
        <sidebar-link name="My Orders" icon="list_alt" />
        <sidebar-link name="Points" icon="monetization_on" />
        <sidebar-link name="My Vouchers" icon="card_giftcard" />
        <sidebar-link name="My Rewards" icon="emoji_events" />
        <sidebar-link name="My Card" icon="credit_card" />
      </div>
      <div class="t-p-6 t-h-24">
        <div class="flex t-flex t-items-center t-gap-2 t-justify-between">
          <div class="t-flex t-items-center t-gap-3 t-cursor-pointer">
            <span
              class="material-icons-outlined md-36 t-text-zinc-300 t-bg-neutral-900 t-rounded-full t-h-12 t-w-12 t-bg-opacity-50"
            >
              person
            </span>
            <div class="t-text-lg t-text-white">John Doe</div>
          </div>
          <span
            class="material-icons-outlined md-36 t-text-zinc-300 t-cursor-pointer"
          >
            more_horiz
          </span>
        </div>
      </div>
    </div>
  </q-drawer>
</template>

<script>
import { ref } from "vue";
import SidebarLink from "./SidebarLink.vue";

export default {
  components: { SidebarLink },
  name: "CustomHeader",
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
