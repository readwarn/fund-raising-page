<template>
  <div class="update-block border-b-1.5 border-gray-300 pb-7">
    <p class="text-black text-md font-semibold mb-4">Fundraiser Members</p>
    <div class="members-block">
      <div
        class="flex gap-x-3 items-center"
        v-for="(member, index) in members"
        :key="index"
      >
        <div
          v-bg="index"
          class="w-9 h-9 flex items-center justify-center text-xs font-bold rounded-full bg-light-blue"
        >
          {{ member.initials }}
        </div>
        <div class="">
          <p class="text-dark-grey text-xs mb-1 font-medium">
            {{ member.title }}
          </p>
          <p class="text-black text-xs font-bold">{{ member.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FundRaiseMembers",

  directives: {
    bg: {
      inserted(el, { value }) {
        const bgs = ["#E0F2FF", "#FFE3E7", "#E8F5FF", "#E3E2FF"];
        const text_colors = ["#567286", "#A0616A", "#1F90E1", "#545384"];
        const index = value % 4;

        el.style.backgroundColor = bgs[index];
        el.style.color = text_colors[index];
      },
    },
  },

  data() {
    return {
      members: [
        {
          name: "Fawale Gbolahan T",
          title: "Organiser",
          initials: "HJ",
        },

        {
          name: "Fawale Gbolahan T",
          title: "Beneficiary",
          initials: "GB",
        },

        {
          name: "Fawale Gbolahan T",
          title: "Observer",
          initials: "LK",
        },

        {
          name: "Fawale Gbolahan T",
          title: "Observer",
          initials: "EM",
        },
      ],
    };
  },
};
</script>

<style scoped>
.update-block {
  width: calc(100% - 3rem);
  margin: 20px auto;
}

.members-block {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 35px 10px;
}

@media screen and (max-width: 640px) {
  .update-block {
    width: calc(100% - 1.5rem);
    margin: 20px auto;
  }
}
</style>
