<template>
  <div class="tag-grid border-b-1.5 border-gray-300 py-2">
    <span
      class="icon icon-label text-black -rotate-145 -top-0.5 relative"
    ></span>
    <p class="text-sm text-black font-semibold">{{ type }}</p>
    <p class="text-sm text-dark-grey font-semibold justify-self-end">
      {{ daysLeft }} days left
    </p>
  </div>
</template>

<script>
export default {
  name: "FundRaiseTags",

  props: {
    type: {
      type: String,
      default: "Ceremony",
    },

    daysLeft: {
      type: Number,
      default: 10,
    },
  },
};
</script>

<style scoped>
.tag-grid {
  display: grid;
  grid-template-columns: 20px 7fr 3fr;
  gap: 0 8px;
  align-items: center;
  width: calc(100% - 3rem);
  margin: auto;
}

.tag-grid .icon-label {
  font-size: 1.3rem;
}

@media screen and (max-width: 640px) {
  .tag-grid {
    width: calc(100% - 1.5rem);
    margin: 20px auto;
  }
}
</style>
