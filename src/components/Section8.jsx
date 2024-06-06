import React from "react";

const Section8 = () => {
  return (
    <section class="bg-black border-[#CFCFCF] border-b-2px font-bricolage">
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
          class="text-black text-[0.9rem] btn  bg-[#E1AC18] border-none group btn-wide plausible-event-name=Checkout hover:bg-[#E1AC18]/80"
          title="Go to ShipFast Checkout"
        >
          <svg
            class="w-5 h-5 fill-black group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200 ease-in-out"
            viewBox="0 0 375 509"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M249.685 14.125C249.685 11.5046 248.913 8.94218 247.465 6.75675C246.017 4.57133 243.957 2.85951 241.542 1.83453C239.126 0.809546 236.463 0.516683 233.882 0.992419C231.301 1.46815 228.917 2.69147 227.028 4.50999L179.466 50.1812C108.664 118.158 48.8369 196.677 2.11373 282.944C0.964078 284.975 0.367442 287.272 0.38324 289.605C0.399039 291.938 1.02672 294.226 2.20377 296.241C3.38082 298.257 5.06616 299.929 7.09195 301.092C9.11775 302.255 11.4133 302.867 13.75 302.869H129.042V494.875C129.039 497.466 129.791 500.001 131.205 502.173C132.62 504.345 134.637 506.059 137.01 507.106C139.383 508.153 142.01 508.489 144.571 508.072C147.131 507.655 149.516 506.503 151.432 504.757L172.698 485.394C247.19 417.643 310.406 338.487 359.975 250.894L373.136 227.658C374.292 225.626 374.894 223.327 374.882 220.99C374.87 218.653 374.243 216.361 373.065 214.341C371.887 212.322 370.199 210.646 368.17 209.482C366.141 208.318 363.841 207.706 361.5 207.707H249.685V14.125Z"></path>
          </svg>
          Get ShipFast
        </button>
      </div>
    </section>
  );
};

export default Section8;
