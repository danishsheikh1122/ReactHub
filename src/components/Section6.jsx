import React, { useState } from "react";

const Section6 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What do I get exactly?",
      answer: (
        <div className="space-y-4 leading-relaxed text-[#CFCFCF]">
          <p>
            1/ The NextJS starter with all the boilerplate code you need to run
            an online business: a payment system, a database, login, a blog, UI
            components, and much more.
            <br />
            The repo is available in:
            <br />- Javascript and Typescript
            <br />- /app router and /pages router.
          </p>
          <p>
            2/ The documentation helps you set up your app from scratch, write
            copy that sells, and ship fast.
          </p>
          <p>
            3/ Access to our Discord with makers who build fast to stay
            accountable!
          </p>
        </div>
      ),
    },
    {
      question: "Javascript or Typescript?",
      answer: <p className="text-[#CFCFCF]">Both! You can choose once you get access</p>,
    },
    {
      question: "/app router or /pages router?",
      answer: <p className="text-[#CFCFCF]">Both! You can choose once you get access</p>,
    },
    {
      question: "My tech stack is different, can I still use it?",
      answer: (
        <div className="space-y-2 leading-relaxed text-[#CFCFCF]">
          <p>Yes, as long as you're comfortable with React & NextJS.</p>
          <p>
            Libraries are independent. You can use SendGrid instead of Mailgun,
            LemonSqueezy instead of Stripe, or Postgres instead of MongoDB, for
            instance.
          </p>
        </div>
      ),
    },
    {
      question: "Is it a website template?",
      answer: (
        <div className="space-y-2 leading-relaxed text-[#CFCFCF]">
          <p>
            It's more than just a template. You can copy/paste sections to build
            your site quickly, like a pricing section, an FAQ, and even an
            entire blog. You also get a bunch of UI components like buttons,
            modals, popovers, etc.
          </p>
          <p>
            The NextJS starter also comes with handy tools you need to run an
            online business—payment processing, emails, SEO, etc.
          </p>
        </div>
      ),
    },
    {
      question: "How is ShipFast better than other boilerplates?",
      answer: (
        <div className="space-y-2 leading-relaxed text-[#CFCFCF]">
          <p>
            It's packed with everything you need to run an online business. It
            also helps you get started quickly with copywriting tips, tips to
            ship fast, and a Discord community of makers.
          </p>
          <p>Plus, it comes with the documentation you need to get started.</p>
        </div>
      ),
    },
    {
      question: "Is it open source?",
      answer: (
        <div className="space-y-2 leading-relaxed text-[#CFCFCF]">
          <p>No, it's a paid product.</p>
          <p>
            You can use the code as long as you want for your own projects. But
            you cannot create your own SaaS boilerplate starter based on
            ShipFast.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="flex justify-center items-center bg-black min-h-screen text-[#CFCFCF]">
    <div className="max-w-7xl mx-auto px-8 py-24 flex flex-col md:flex-row gap-12 font-bricolage">
      <div className="flex flex-col text-left md:w-1/2">
        <p className="sm:text-4xl text-3xl font-extrabold mb-8">
          Frequently Asked Questions
        </p>
        <div className="text-[#CFCFCF]">
          Have another question? Contact me on
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/marc_louvion"
          >{" "}
            Twitter
          </a>{" "}
          or by
          <a
            href="mailto:marc@shipfa.st"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {" "}
            email
          </a>
          .
        </div>
      </div>
      <ul className="md:w-1/2">
        {faqs.map((faq, index) => (
          <li key={index}>
            <button
              className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-[#CFCFCF]/40"
              aria-expanded={activeIndex === index}
              onClick={() => handleToggle(index)}
            >
              <span className="flex-1">{faq.question}</span>
              <svg
                className={`flex-shrink-0 w-4 h-4 ml-auto fill-current transition-transform duration-200 ${
                  activeIndex === index ? "rotate-90" : ""
                }`}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className="transition duration-200 ease-out"
                ></rect>
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className="transform origin-center rotate-90 transition duration-200 ease-out"
                ></rect>
              </svg>
            </button>
            <div
              className="transition-all duration-300 ease-in-out overflow-hidden"
              style={{
                maxHeight: activeIndex === index ? "1000px" : "0px",
                opacity: activeIndex === index ? 1 : 0,
              }}
            >
              <div className="pb-5 leading-relaxed">{faq.answer}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div> 
  );
};

export default Section6;
