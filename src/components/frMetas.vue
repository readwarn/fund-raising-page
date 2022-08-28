<template>
  <div class="mt-3 px-3 sm:px-6">
    <p class="text-xs text-dark-grey mb-4">
      Fundraiser ID:
      <span class="font-semibold text-black">548757458ID</span>
    </p>

    <div class="meta-grid text-xs">
      <span class="icon icon-flag -top-0.5 -left-0.5 relative"></span>
      <p
        class="underline font-semibold cursor-pointer justify-self-start hover:text-dark-grey hover:no-underline transition-colors"
      >
        Report Project
      </p>
      <span
        class="flex items-center gap-x-1 text-red cursor-pointer text-md font-semibold"
        @click="liked = !liked"
      >
        <span
          class="icon text-red"
          :class="liked ? 'icon-favorite-fill' : 'icon-favorite'"
        ></span>
        <span>{{ liked ? "2.3k" : "2.2k" }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "FundRaiseMetas",

  data() {
    return {
      liked: true,
    };
  },
};
</script>

<style scoped>
.meta-grid {
  display: grid;
  grid-template-columns: 25px 1fr 50px;
  align-items: center;
}
</style>
