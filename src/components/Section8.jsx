import React from "react";

const Section8 = () => {
  return (
    <section class="bg-black border-[#CFCFCF] border-b-2px">
      <div class="pb-32 pt-16 px-8 max-w-3xl mx-auto flex flex-col items-center gap-8 md:gap-12">
        <div class="text-center">
          <svg
            class="fill-[#CFCFCF] w-8 h-8 md:w-12 md:h-12 rotate-12 ml-auto md:-mr-8"
            viewBox="0 0 154 136"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG Paths */}
          </svg>
          <h2 class="relative text-[#CFCFCF] font-bold text-3xl md:text-5xl tracking-tight mt-4 mb-4 md:mb-8 ">
            Boost your app, launch, earn
          </h2>
          <p class="relative text-[#CFCFCF]/80  text-lg ">
            Don't waste time on Stripe subscriptions or designing a pricing
            section...
          </p>
        </div>
        <button
          class="btn bg-[#E1AC18] border-none group btn-wide plausible-event-name=Checkout hover:bg-[#E1AC18]/80"
          title="Go to ShipFast Checkout"
        >
          <svg
            class="w-5 h-5 fill-black group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200 ease-in-out"
            viewBox="0 0 375 509"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG Path */}
          </svg>
          Get ShipFast
        </button>
      </div>
    </section>
  );
};

export default Section8;
