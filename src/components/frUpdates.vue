<template>
  <div class="pb-2 border-b-1.5 border-gray-300 update-block">
    <div class="flex justify-between items-center">
      <p class="text-black text-md font-semibold">Updates</p>
      <div class="flex items-center ga-x-3 cursor-pointer group">
        <span
          class="text-sm font-medium text-black transition-colors group-hover:text-dark-grey"
          >View all</span
        >
        <span
          class="icon icon-caret-right text-md font-semibold group-hover:text-dark-grey"
        ></span>
      </div>
    </div>

    <p class="text-sm mt-4 text-black">
      I need to raise 5 million naira for a wedding ceremony, that is scheduled
      to hold on the 26th June 2020, i need this money to support this couple
      and their newly born quadruplets in the earliest stages of their life.
      <br />
      <br />
      I appreaciate every little amount that you can use to bless me.
      <br />
      <span
        class="font-semibold underline hover:text-dark-grey transition-colors cursor-pointer"
        >Read More.</span
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "FundRaiseUpdates",
};
</script>

<style scoped>
.update-block {
  width: calc(100% - 3rem);
  margin: 20px auto;
}

@media screen and (max-width: 640px) {
  .update-block {
    width: calc(100% - 1.5rem);
    margin: 20px auto;
  }
}
</style>
