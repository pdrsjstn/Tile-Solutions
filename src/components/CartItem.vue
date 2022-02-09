<template>
  <div class="t-flex t-flex-row t-w-full t-border-b-2 t-pb-3 t-pt-1">
    <div class="t-h-28 t-w-28 t-bg-neutral-500 t-rounded-xl t-flex-none"></div>
    <div class="t-flex t-flex-col t-justify-center t-px-2 t-py-1 t-w-full">
      <div class="t-h-full">
        <p class="t-text-base t-font-bold">Driftwood Dark Grey</p>
        <p class="t-text-neutral-500">Size: 3" x 6" | Item #123</p>
      </div>

      <div class="t-flex t-items-center t-justify-between t-w-full">
        <p class="t-text-red-700 t-font-medium t-flex-none t-text-base">
          $5.00 /SF
        </p>
        <div
          class="t-h-full t-w-full t-items-center t-flex t-justify-end t-gap-1"
        >
          <span class="material-icons md-36 t-cursor-pointer">
            remove_circle_outline
          </span>
          <input
            type="text"
            class="t-h-8 t-w-12 t-text-center t-border-neutral-300 t-border t-rounded-lg t-text-lg t-font-bold"
            value="2"
          />
          <span class="material-icons md-36 t-cursor-pointer">
            add_circle
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  setup() {
    return {};
  },
};
</script>
