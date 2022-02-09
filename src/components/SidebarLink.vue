<template>
  <div
    class="t-rounded-full t-cursor-pointer t-text-base t-px-5 t-py-3 t-flex t-justify-between t-bg-opacity-50"
    :class="active ? 't-bg-zinc-800' : ''"
  >
    <div class="t-flex t-items-center t-gap-3">
      <span
        class="material-icons md-36"
        :class="
          active
            ? 'material-icons t-text-white'
            : 'material-icons-outlined t-text-white t-text-opacity-75'
        "
      >
        {{ icon }}
      </span>

      <p
        :class="
          active
            ? 't-text-white t-font-medium'
            : 't-text-white t-text-opacity-75 t-font-medium'
        "
      >
        {{ name }}
      </p>
    </div>
    <span
      class="md-36"
      :class="
        active
          ? 'material-icons t-text-white'
          : 'material-icons t-text-white t-text-opacity-75'
      "
    >
      chevron_right
    </span>
  </div>
</template>

<script>
export default {
  name: "SidebarLink",
  props: {
    name: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
    },

    icon: {
      type: String,
      default: "",
    },
  },
};
</script>
