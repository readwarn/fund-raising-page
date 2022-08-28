<template>
  <div class="px-3 sm:px-6 mt-4">
    <h3 class="text-black text-xl font-bold mb-2">
      {{ title }}
    </h3>

    <p class="text-black text-sm">
      {{ details }}
      <span
        class="font-semibold hover:text-dark-grey transition-colors cursor-pointer"
        v-if="details.length > 180"
        >...See more</span
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "FundRaiseDetails",

  props: {
    title: {
      type: String,
      default: "Bless Chike and Shayo’s wedding",
    },

    details: {
      type: String,
      default:
        "I need to raise 5 million naira for a wedding ceremony, that is scheduled to hold on the 26th June 2020, i need this money to support this couple and their newly born quadruplets in th...",
    },
  },
};
</script>

<style></style>
