<template>
  <q-layout view="lHr lpR lFr" class="t-bg-white">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$router.push("/login");
    },
  },
};
</script>
