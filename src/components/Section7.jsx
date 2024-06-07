import React from "react";

const Section7 = () => {
  const dataArr = [
    {
      type: "textR",
      normaltext1: "I transitioned",
      highlitedtext:
        "from using no-code tools to launching a fully-coded saas — Explorify — in two weeks, all while having a full-time job",
      normaltext2: "I transitioned",
      logo: "https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrabriel.5bc4a207.jpg&w=48&q=75",
      name: "Danuuu",
    },

    {
      type: "videoR",
      normaltext1: "",
      highlitedtext:
        "I made more in 6 days than the minimum wage here in Spain.",
      normaltext2:
        "I wanna cry 🥲 It would have taken me months to do the website without the boilerplate.",
      img: "https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjuanjomrr.c149586f.jpeg&w=256&q=75",
      logo: "https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrabriel.5bc4a207.jpg&w=48&q=75",
      name: "Danuuu",
    },
    {
      type: "videoR",
      normaltext1: "",
      highlitedtext:
        "I made more in 6 days than the minimum wage here in Spain.",
      normaltext2:
        "I wanna cry 🥲 It would have taken me months to do the website without the boilerplate.",
      img: "https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjuanjomrr.c149586f.jpeg&w=256&q=75",
      logo: "https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrabriel.5bc4a207.jpg&w=48&q=75",
      name: "Danuuu",
    },
    {
      type: "videoR",
      normaltext1: "",
      highlitedtext:
        "I made more in 6 days than the minimum wage here in Spain.",
      normaltext2:
        "I wanna cry 🥲 It would have taken me months to do the website without the boilerplate.",
      img: "https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjuanjomrr.c149586f.jpeg&w=256&q=75",
      logo: "https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrabriel.5bc4a207.jpg&w=48&q=75",
      name: "Danuuu",
    },

    {
      type: "textR",
      normaltext1:
        "Setting up everything from the ground up is a really hard, and time consuming process. What you pay for will ",
      highlitedtext: "save you a lot of time",
      normaltext2: ".",
      logo: "https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrabriel.5bc4a207.jpg&w=48&q=75",
      name: "Danuuu",
    },
    {
      type: "textR",
      normaltext1:
        "Setting up everything from the ground up is a really hard, and time consuming process. What you pay for will ",
      highlitedtext: "save you a lot of time",
      normaltext2: ".",
      logo: "https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrabriel.5bc4a207.jpg&w=48&q=75",
      name: "Danuuu",
    },
    {
      type: "textR",
      normaltext1:
        "Setting up everything from the ground up is a really hard, and time consuming process. What you pay for will ",
      highlitedtext: "save you a lot of time",
      normaltext2: ".",
      logo: "https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrabriel.5bc4a207.jpg&w=48&q=75",
      name: "Danuuu",
    },
    {
      type: "fullvideoR",
      normaltext1: `"Everything you need to ship your SaaS ASAP"`,
      name: "Danuuu",
      poster: "https://d1wkquwg5s1b04.cloudfront.net/landing/alex.jpg",
      videoLink: "https://d1wkquwg5s1b04.cloudfront.net/landing/alex.mp4",
    },
  ];

  return (
    <section
      className="bg-black text-[#CFCFCF] font-bricolage px-[1rem] "
      id="testimonials"
    >
      <div className="flex flex-col text-center w-full">
        <div className="mb-8">
          <h2 className="sm:text-5xl text-4xl font-extrabold text-[#CFCFCF]">
            3539 makers built AI toolsQ, SaaS, and more
          </h2>
        </div>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-[#CFCFCF]/80">
          They made their first $ online, and some even quit their 9-5!
        </p>
        <ul
          role="list"
          className="max-w-7xl mt-[5rem] mb-[2rem] mx-auto md:columns-2 lg:columns-3 xl:columns-4 space-y-4 md:space-y-6 md:gap-6"
        >
          {dataArr.map((elem, i) => {
            // console.log(typeof(elem.type))
            if (elem.type === "textR") {
              return (
                <li
                  key={i}
                  className="break-inside-avoid max-md:flex justify-center bg-[#121212] "
                >
                  <figure className="relative h-full w-full max-w-[550px] p-6 rounded-xl border border-[#CFCFCF]/50 bg-[#121212]">
                    <blockquote className="relative">
                      <div className="text-base xl:text-sm text-[#CFCFCF]">
                        {elem.normaltext1}{" "}
                        <span className="bg-[#E1AC18] text-[#121212] px-0.5">
                          {elem.highlitedtext}
                        </span>{" "}
                        {elem.normaltext2}
                      </div>
                    </blockquote>
                    <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-[#CFCFCF]/20">
                      <div className="overflow-hidden rounded-full bg-[#121212] shrink-0">
                        <img
                          alt={`${elem.name}'s testimonial for ShipFast`}
                          loading="lazy"
                          width="48"
                          height="48"
                          decoding="async"
                          data-nimg="1"
                          className="w-10 h-10 rounded-full object-cover"
                          style={{ color: "transparent" }}
                          src={elem.logo}
                        />
                      </div>
                      <div className="w-full flex items-end justify-between gap-2">
                        <div>
                          <div className="text-sm font-medium text-[#CFCFCF]">
                            {elem.name}
                          </div>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </li>
              );
            } else if (elem.type === "videoR") {
              return (
                <li
                  key={i}
                  className="break-inside-avoid max-md:flex justify-center"
                >
                  <figure className="relative h-full w-full max-w-[550px] p-6 rounded-xl border border-[#cfcfcf]/50 bg-[#121212]">
                    <blockquote className="relative">
                      <div className="text-base xl:text-sm text-[#CFCFCF]">
                        <div className="space-y-2">
                          <div className="-mx-6 -mt-6 rounded-t-xl overflow-hidden">
                            <img
                              alt={elem.highlitedtext}
                              loading="lazy"
                              width="250"
                              height="200"
                              decoding="async"
                              data-nimg="1"
                              className="w-full object-cover mb-6"
                              style={{ color: "transparent" }}
                              src={elem.img}
                            />
                          </div>
                          <p>
                            <span className="bg-[#E1AC18] text-black px-0.5">
                              {elem.highlitedtext}
                            </span>{" "}
                            {elem.normaltext1}
                          </p>
                          <p className="text-[#CFCFCF]">{elem.normaltext2}</p>
                        </div>
                      </div>
                    </blockquote>
                    <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-[#CFCFCF]/20">
                      <div className="overflow-hidden rounded-full bg-[#121212] shrink-0 ">
                        <img
                          className="w-10 h-10 rounded-full flex justify-center items-center text-lg font-medium bg-[#121212]"
                          src={elem.logo}
                          alt={elem.name}
                        />
                      </div>
                      <div className="w-full flex items-end justify-between gap-2">
                        <div>
                          <div className="text-sm font-medium text-[#CFCFCF]">
                            {elem.name}
                          </div>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </li>
              );}
            //  else if (elem.type == "fullvideoR") {
            //   return (
            //     <li key={i} className="break-inside-avoid max-md:flex justify-center">
            //     <div className="max-w-[550px] border border-solid border-[#cfcfcf] rounded-xl relative">
            //       <video
            //         className="w-full"
            //         poster={elem.poster}
            //         preload="metadata"
            //         playsInline
            //         onMouseOver={(e) => e.target.play()}
            //         onMouseOut={(e) => {
            //           e.target.pause();
            //           e.target.currentTime = 0;
            //         }}
            //       >
            //         <source src={elem.videoLink} type="video/mp4" />
            //         Your browser does not support the video tag.
            //       </video>
            //       <div className="absolute bottom-0 -inset-x-4 border bg-[#E1AC18] blur-lg h-24 translate-y-1/4 animate-opacity">
            //         <p className="text-center text-sm text-black" id={`caption-${i}`}>
            //           Play
            //         </p>
            //       </div>
            //       <div className="absolute w-full bottom-0 z-50">
            //         <div className="flex justify-between items-end p-4">
            //           <button
            //             className="group"
            //             type="button"
            //             title="Play video"
                        
            //           >
            //             <svg
            //               xmlns="http://www.w3.org/2000/svg"
            //               width="50"
            //               height="600"
            //               viewBox="0 0 24 24"
            //               fill="none"
            //               stroke="currentColor"
            //               strokeWidth="2"
            //               strokeLinecap="round"
            //               strokeLinejoin="round"
            //               className="stroke-[#E1AC18] group-hover:scale-[1.05] duration-100 ease-in animate-opacity"
            //             >
            //               <polygon points="5 3 19 12 5 21 5 3"></polygon>
            //             </svg>
            //           </button>
            //           <div className="animate-opacity text-right">
            //             <p className="text-black font-medium ">{elem.name}</p>
            //           </div>
            //         </div>
            //       </div>
            //       <div className="relative z-20 bg-[#E1AC18] text-black text-lg font-medium p-4 leading-tight select-none rounded-b-xl">
            //         <div>{elem.normaltext1}</div>
            //       </div>
            //     </div>
            //   </li>
                          
            //   );
            // }
            return null; // Return null if type is not "typeR"
          })}
        </ul>
      </div>
    </section>
  );
};

export default Section7;
