<template>
  <q-page class="fixed-center">
    <div
      id="xxx"
      class="t-flex t-flex-col t-space-y-10 t-h-screen t-w-screen t-items-center t-p-[25px]"
    >
      <div class="t-flex-col t-flex t-items-center t-mt-32 t-mb-16">
        <img src="../assets/logo.png" alt="image" width="138" height="138" />
        <label class="t-text-white t-font-bold t-text-base t-pt-1"
          >Tile Solutions</label
        >
        <label class="t-text-white">Online Shop</label>
      </div>
      <div class="t-grid t-gap-3 t-w-full t-max-w-[378px]">
        <input
          type="text"
          class="t-bg-white t-rounded-full t-h-[40px] t-w-full t-grid gridco t-py-[20px] t-px-[30px] t-text-base"
          placeholder="Username"
        />
        <input
          type="password"
          class="t-bg-white t-rounded-full t-h-[40px] t-w-full t-grid gridco t-py-[20px] t-px-[30px] t-text-base"
          placeholder="Password"
        />
        <div class="t-flex t-items-center t-justify-between t-px-2">
          <div class="t-flex t-items-center t-justify-center t-py-1">
            <input
              type="checkbox"
              name="rememberMeCheckbox"
              id="rememberMeCheckbox"
              class="t-h-[16px] t-w-[16px] t-bg-red-800"
            />
            <label
              for="rememberMeCheckbox"
              class="t-text-white t-pl-1 t-text-base t-pt-1"
              >Remember me</label
            >
          </div>
          <label class="t-text-white t-pl-1 t-text-right t-text-base t-pt-1"
            >Forgot Password?</label
          >
        </div>
        <button
          class="t-bg-[#ba2a31] t-h-[40px] t-rounded-full t-text-white t-text-base t-opacity-80"
          @click="login"
        >
          Login
        </button>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  methods: {
    login() {
      this.$router.push("/home");
    },
  },
});
</script>
