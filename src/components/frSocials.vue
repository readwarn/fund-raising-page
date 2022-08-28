<template>
  <div class="update-block pb-3 border-b-1.5 border-gray-300">
    <p class="text-black text-md font-bold mb-3">Fundraiser on Social Media</p>

    <div class="flex gap-x-4">
      <img
        class="cursor-pointer transition-all hover:scale-105"
        v-for="social in socials"
        :key="social"
        :src="getStaticImg(social)"
        alt="social-icon"
      />
      <!-- <span v-for="i in 4" :key="i" class="flaticon icon-ig"></span> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "FundRaiseSocials",

  data() {
    return {
      socials: ["facebook.svg", "instagram.svg", "twitter.svg", "youtube.svg"],
    };
  },
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
