<template>
  <div
    class="t-bg-white t-border t-w-max t-flex-none t-px-5 t-py-2 t-font-medium t-text-base t-rounded-full t-cursor-pointer"
    :class="
      active
        ? 't-border-red-500 t-text-red-600'
        : 't-border-neutral-300 t-text-neutral-500'
        
    "
  >
    {{name}}
  </div>
</template>

<script>
export default {
  name: "CategoryButton",
  props: {
    id: {
      type: Number,
    },
    name: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
    },
  },
  setup() {
    return {};
  },
};
</script>
