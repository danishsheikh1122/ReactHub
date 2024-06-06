import React from "react";

const Section7 = () => {
  return (
    <section class="bg-black" id="testimonials ">
      <div class="flex flex-col text-center w-full font-bricolage ">
        <div class="mb-8 ">
          <h2 class="sm:text-5xl text-4xl font-extrabold text-[#CFCFCF]">
            3539 makers built AI toolsQ, SaaS, and more
          </h2>
        </div>
        <p class="lg:w-2/3 mx-auto leading-relaxed  text-[#CFCFCF]/80">
          They made their first $ online, and some even quit their 9-5!
        </p>
        <ul
          role="list"
          class="max-w-7xl mt-[5rem] mb-[2rem] mx-auto md:columns-2 lg:columns-3 xl:columns-4 space-y-4 md:space-y-6 md:gap-6"
        >
          <li className="break-inside-avoid max-md:flex justify-center">
    <div className="max-w-[550px] border border-base-content/20 rounded-xl">
        <div className="relative w-full overflow-hidden rounded-t-xl">
            <video className="w-full" poster="https://d1wkquwg5s1b04.cloudfront.net/landing/jack2.jpg" preload="metadata" playsInline>
                <source src="https://d1wkquwg5s1b04.cloudfront.net/landing/jack2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-0 -inset-x-4 border bg-yellow-400 blur-lg h-24 translate-y-1/4 animate-opacity"></div>
            <div className="absolute w-full bottom-0 z-50">
                <div className="flex justify-between items-end p-4">
                    <button className="group" type="button" title="Play video">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-gray-50 group-hover:scale-[1.05] duration-100 ease-in drop-shadow-lg animate-opacity">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                    </button>
                    <div className="animate-opacity text-right">
                        <p className="text-gray-50 font-medium drop-shadow">Jack F.</p>
                        <div className="rating">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-400 drop-shadow">
                                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path>
                            </svg>
                            {/* Repeat this block for the number of ratings */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="relative z-20 bg-yellow-400 text-yellow-900 text-lg font-medium p-4 leading-tight select-none rounded-b-xl">
            <div>"I shipped in 6 days as a noob coder... This is awesome"</div>
        </div>
    </div>
</li>

          <li className="break-inside-avoid max-md:flex justify-center">
            <div className="max-w-[550px] border border-base-content/20 rounded-xl">
              <div className="relative w-full overflow-hidden rounded-t-xl">
                <video
                  className="w-full"
                  poster="https://d1wkquwg5s1b04.cloudfront.net/landing/mateuszPoster.jpg"
                  preload="metadata"
                  playsInline
                >
                  <source
                    src="https://d1wkquwg5s1b04.cloudfront.net/landing/mateuszTestimonial.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute bottom-0 -inset-x-4 border bg-base-200/50 blur-lg h-24 translate-y-1/4 animate-opacity"></div>
                <div className="absolute w-full bottom-0 z-50">
                  <div className="flex justify-between items-end p-4">
                    <button className="group" type="button" title="Play video">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-gray-50 group-hover:scale-[1.05] duration-100 ease-in drop-shadow-lg animate-opacity"
                      >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </button>
                    <div className="animate-opacity text-right">
                      <p className="text-gray-50 font-medium drop-shadow">
                        Mateusz Siatrak
                      </p>
                      <div className="rating">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 text-primary drop-shadow"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        {/* Repeat this block for the number of ratings */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative z-20 bg-primary text-primary-content text-lg font-medium p-4 leading-tight select-none rounded-b-xl">
                <div>"Yesterday I've made a first sale !! 🎉🎊🍾"</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Section7;
