<template>
  <div
    class="z-10 fixed w-full flex justify-between items-center py-3 px-4 md:px-6 bg-light-blue"
  >
    <a href="#" class="text-green font-extrabold text-3xl">
      <img :src="getStaticImg('brand.png')" alt="brand" />
    </a>
    <a href="#" class="text-black text-sm font-extrabold">Sign In</a>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped></style>
