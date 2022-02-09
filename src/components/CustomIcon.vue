<template>
  <div class=" t-w-9 t-h-9 t-flex t-justify-center t-items-center">
    <span
      class="md-24 t-cursor-pointer t-text-opacity-90"
      :class="o ? 'material-icons-outlined ' : 'material-icons'"
    >
      {{ name }}
    </span>
  </div>
</template>

<script>
export default {
  name: "CustomIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
    o: {
      type: Boolean,
    },
  },
  setup() {
    return {};
  },
};
</script>
