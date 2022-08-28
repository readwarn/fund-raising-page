<template>
  <div class="mb-3">
    <div class="w-full aspect-banner rounded-tl-md rounded-tr-md">
      <img
        :src="getStaticImg('wedding.png')"
        alt="wedding"
        class="h-full w-full object-cover rounded-tl-md rounded-tr-md"
      />
    </div>

    <div
      class="bg-light-blue py-2 px-3 sm:px-6 flex items-center justify-between"
    >
      <p class="text-xs font-semibold text-light-grey">
        Organised by : <span class="text-black">Mustapha Mohammed</span>
      </p>
      <p class="text-xs font-semibold">One-Off</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FundRaiseBanner",
};
</script>

<style></style>
