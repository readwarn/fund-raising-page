<template>
  <div>
    <div class="grid grid-cols-2 gap-y-3 pb-4 border-b-1.5 border-gray-300">
      <p class="justify-self-start text-sm font-semibold text-black">
        N2,000,320,000
      </p>
      <p class="justify-self-end text-sm font-semibold text-black">
        N5,000,000,000
      </p>

      <div class="col-span-full relative h-2 rounded-lg bg-light-blue">
        <div class="absolute bg-ashy w-4/12 h-full rounded-md"></div>
      </div>

      <p class="justify-self-start text-dark-grey text-sm font-medium">
        Raised
      </p>
      <p class="justify-self-end text-dark-grey text-sm font-medium">Target</p>
    </div>

    <p class="text-sm mt-5 mb-3">
      Bless this Fundraiser by making a transfer to the bank account below or
      use the “Bless” button.
    </p>

    <div class="bg-ashy rounded-md p-5 relative">
      <p class="text-sm mb-2 text-center text-light-blue font-semibold">
        STERLING BANK
      </p>
      <div
        @click="copyAccount"
        class="flex w-max mx-auto gap-x-2 justify-center items-center text-md text-white font-semibold hover:text-light-blue transition-colors cursor-pointer"
      >
        <p>0046748389</p>
        <span class="icon icon-copy text-md"></span>
      </div>
      <p class="text-sm font-semibold mt-3 text-center text-white">
        Gbolahan Fawale
      </p>

      <div
        v-if="copied"
        class="py-2 px-4 rounded-md text-black text-sm font-semibold bg-light-blue absolute copy-block drop-shadow-md"
      >
        Copied!!!
      </div>
    </div>

    <div class="flex gap-x-2 items-center my-6">
      <div class="h-0.5 w-full bg-gray-300"></div>
      <p class="text-xs font-semibold text-dark-grey">Or</p>
      <div class="h-0.5 w-full bg-gray-300"></div>
    </div>

    <p class="text-sm text-black">
      You can also bless this fundraiser from anywhere in the world by using
      Paypal or Card.
    </p>

    <div
      class="flex justify-center items-center py-6 px-3 rounded-md border-1.5 border-gray-300 mt-3"
    >
      <img :src="getStaticImg('PayPal.png')" alt="paypal" />
    </div>

    <div
      class="flex gap-x-3 justify-center items-center px-3 py-6 rounded-md border-1.5 border-gray-300 mt-6"
    >
      <img :src="getStaticImg('MasterCard_Logo.png')" alt="MasterCard_Logo" />
      <img :src="getStaticImg('VisaLogo.png')" alt="VisaLogo" />
      <img :src="getStaticImg('VerveLogo.png')" alt="VerveLogo" />
      <img :src="getStaticImg('UnionPay.png')" alt="UnionPay" />
    </div>

    <button
      class="bg-darky text-white text-sm font-semibold text-center py-3 rounded-md mx-auto w-full mt-8 hover:drop-shadow-md transition-all"
    >
      Share this Fundraiser
    </button>
  </div>
</template>

<script>
export default {
  name: "PaymentDetailsCard",

  data() {
    return {
      copied: false,
    };
  },

  methods: {
    copyAccount() {
      if (this.copied) return;
      navigator.clipboard.writeText("0046748389");
      this.copied = true;

      setTimeout(() => {
        this.copied = false;
      }, 2000);
    },
  },
};
</script>

<style scoped>
.copy-block {
  top: 0;
  left: 50%;
  transform: translate(-50%, -20px);
  animation: drop cubic-bezier(0, 0, 0.2, 1) 0.4s forwards;
}

@keyframes drop {
  from {
    transform: translate(-50%, -5px);
    opacity: 0.6;
  }

  to {
    transform: translate(-50%, -20px);
    opacity: 1;
  }
}
</style>
