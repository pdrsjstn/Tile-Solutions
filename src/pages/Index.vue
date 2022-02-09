<template>
  <q-page class="flex flex-center">
    <!-- <h1 class="t-text-blue-600 t-text-4xl hover:t-cursor-pointer" @click="test">test</h1> -->
    <!-- <testing @click="test"/> -->
    asd
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    // 'testing': require('components/testing.vue').default
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
  },
});
</script>
