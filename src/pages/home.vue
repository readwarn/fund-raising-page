<template>
  <div class="home-layout">
    <div class="home-section border-1.5 border-gray-300 pb-8 rounded-md">
      <fr-banner />
      <fr-tags />
      <fr-details />
      <fr-tabs />
      <fr-updates />
      <fr-members />
      <fr-socials />
      <fr-metas />
    </div>

    <div
      class="home-section border-1.5 border-gray-300 rounded-md px-3 sm:px-6 py-6"
    >
      <payment-details-card />
    </div>
  </div>
</template>

<script>
import frBanner from "@/components/frBanner";
import frTags from "@/components/frTags";
import frDetails from "@/components/frDetails";
import frTabs from "@/components/frTabs";
import frUpdates from "@/components/frUpdates";
import frMembers from "@/components/frMembers";
import frSocials from "@/components/frSocials";
import frMetas from "@/components/frMetas";
import paymentDetailsCard from "@/components/paymentDetailsCard";

export default {
  name: "HomePage",

  components: {
    frBanner,
    frTags,
    frDetails,
    frTabs,
    frUpdates,
    frMembers,
    frSocials,
    frMetas,
    paymentDetailsCard,
  },
};
</script>

<style scoped>
.home-layout {
  display: grid;
  grid-template-columns: 6fr 4fr;
  gap: 30px;
  padding: 70px 40px 100px 40px;
  align-items: flex-start;
}

.home-layout .home-section {
  width: 100%;
}

@media screen and (max-width: 1100px) {
  .home-layout {
    padding: 70px 30px 100px 30px;
  }
}

@media screen and (max-width: 950px) {
  .home-layout {
    grid-template-columns: 100%;
    padding: 70px 20px 100px 20px;
  }

  .home-layout .home-section {
    width: 700px;
    max-width: 85%;
    margin: auto;
  }
}

@media screen and (max-width: 750px) {
  .home-layout {
    padding: 70px 8px 100px 8px;
  }

  .home-layout .home-section {
    width: 550px;
    max-width: 98%;
  }
}

@media screen and (max-width: 500px) {
  .home-layout {
    padding: 70px 5px 100px 5px;
  }
}
</style>
