<template>
  <div class="bg-light-blue mt-10 px-3 sm:px-6 tab-wrapper flex">
    <div
      v-for="(tab, index) in tabs"
      :key="index"
      @click="active_index = index"
      class="group cursor-pointer"
    >
      <div
        class="text-sm font-semibold group-hover:text-black px-4 py-3 transition-colors duration-500"
        :class="[
          active_index == index && 'text-black',
          active_index !== index && 'text-dark-grey',
        ]"
      >
        {{ tab }}
      </div>
      <div
        class="h-1 w-full group-hover:bg-black rounded-tl-md rounded-tr-md transition-colors duration-700"
        :class="[
          active_index == index && 'bg-black',
          active_index !== index && 'bg-transparent',
        ]"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FundRaisingTabs",

  props: {
    tabs: {
      type: Array,
      default: () => ["Overview", "Blessors", "Rewards", "Comments"],
    },
  },

  data() {
    return {
      active_index: 0,
    };
  },
};
</script>

<style scoped>
.tab-wrapper {
  max-width: 100%;
  overflow-x: auto;
}

.tab-wrapper::-webkit-scrollbar {
  height: 0;
}
</style>
