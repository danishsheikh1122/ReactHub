import React, { useState } from "react";

const Section3 = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const TabTemplate = ({ active, tabNumber, handleTabChange, children }) => {
    return (
      <span
        className={`flex flex-col items-center justify-center gap-3 select-none cursor-pointer p-2 duration-100 ${
          active ? "text-primary" : "text-[#CFCFCF]/50"
        }`}
        onClick={() => handleTabChange(tabNumber)}
      >
        {children}
      </span>
    );
  };

  return (
    <section
      className="py-24 bg-[#212121] text-[#CFCFCF] font-bricolage "
      id="features"
    >
      <div className="max-w-3xl mx-auto">
        <div className="max-md:px-8 max-w-3xl bg-[#212121]">
          <p className="text-accent font-medium text-sm font-mono mb-3">
            const launch_time = "01:54 PM";
          </p>
          <h2 className="font-bold text-3xl lg:text-5xl tracking-tight mb-8 text-[#CFCFCF]">
            Supercharge your app instantly, launch faster, make $
          </h2>
          <div className="text-[#CFCFCF] leading-relaxed mb-8 lg:text-lg">
            Login users, process payments and send emails at lightspeed. Spend
            your time building your startup, not integrating APIs. ShipFast
            provides you with the boilerplate code you need to launch, FAST.
          </div>
        </div>
        <div className="grid grid-cols-4 md:flex justify-start gap-3 md:gap-10 max-md:px-8 max-w-3xl mx-auto mb-8">
          {/* Tab 1 */}
          <TabTemplate
            active={activeTab === 1}
            tabNumber={1}
            handleTabChange={handleTabChange}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#777777"
                className="w-8 h-8 hover:stroke-[#E1AC18]"
              >
                <path
                  strokeLinecap="round"
                  d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                ></path>
              </svg>
            </span>
            <span className="font-medium text-sm  text-[#777777]">Emails</span>
          </TabTemplate>
          {/* Tab 2 */}
          <TabTemplate
            active={activeTab === 2}
            tabNumber={2}
            handleTabChange={handleTabChange}
          >
            <span className="flex flex-col items-center justify-center gap-3 select-none cursor-pointer p-2 duration-100 text-primary">
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#777777"
                  className="w-8 h-8  hover:stroke-[#E1AC18]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                  ></path>
                </svg>
              </span>
              <span className="font-medium text-sm  text-[#777777]">
                Payments
              </span>
            </span>{" "}
          </TabTemplate>
          {/* Tab 3 */}
          <TabTemplate
            active={activeTab === 3}
            tabNumber={3}
            handleTabChange={handleTabChange}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#777777"
                className="w-8 h-8 hover:stroke-[#E1AC18]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </span>
            <span className="font-medium text-sm text-[#777777]">Login</span>
          </TabTemplate>
          <TabTemplate
            active={activeTab === 4}
            tabNumber={4}
            handleTabChange={handleTabChange}
          >
            <span className="flex flex-col items-center justify-center gap-3 select-none cursor-pointer p-2 duration-100 text-[#CFCFCF]/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#777777"
                className="w-8 h-8 hover:stroke-[#E1AC18]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                ></path>
              </svg>

              <span className="font-medium text-sm text-[#777777]">Style</span>
            </span>
          </TabTemplate>
          <TabTemplate
            active={activeTab === 5}
            tabNumber={5}
            handleTabChange={handleTabChange}
          >
            <span className="flex flex-col items-center justify-center gap-3 select-none cursor-pointer p-2 duration-100 text-[#CFCFCF]/50">
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#777777"
                  className="w-8 h-8 hover:stroke-[#E1AC18]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  ></path>
                </svg>
              </span>
              <span className="font-medium text-sm  text-[#777777]">SEO</span>
            </span>
          </TabTemplate>

          <TabTemplate
            active={activeTab === 6}
            tabNumber={6}
            handleTabChange={handleTabChange}
          >
            <span className="flex flex-col items-center justify-center gap-3 select-none cursor-pointer p-2 duration-100 text-[#CFCFCF]/50">
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#777777"
                  className="w-8 h-8 hover:stroke-[#E1AC18]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  ></path>
                </svg>
              </span>
              <span className="font-medium text-sm  text-[#777777]">
                Database
              </span>
            </span>
          </TabTemplate>
          <TabTemplate
            active={activeTab === 7}
            tabNumber={7}
            handleTabChange={handleTabChange}
          >
            <span className="flex flex-col items-center justify-center gap-3 select-none cursor-pointer p-2 duration-100 text-[#CFCFCF]/50">
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#777777"
                  className="w-8 h-8 hover:stroke-[#E1AC18]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </span>
              <span className="font-medium text-sm  text-[#777777]">More</span>
            </span>
          </TabTemplate>
          {/* Add more tabs here */}
        </div>
      </div>

      <div
        role="tablist"
        className="tabs tabs-bordered bg-black w-full h-[22rem] px-[23rem] justify-start items-start "
      >
        {/* Tab Content 1 */}
        <div
          role="tab"
          aria-label="Tab 1"
          className={`tab text-white ${activeTab !== 1 ? "hidden" : ""}`}
        >
          <div className="text-[#CFCFCF]/80  leading-relaxed space-y-4 md:px-0 py-12 max-w-xl animate-opacity felx justify-start items-start">
            <p className=" text-[#CFCFCF]  text-xl text-left ">Emails</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2 text-[#CFCFCFCF] text-[1rem] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Send transactional emails
              </li>
              <li className="flex items-start gap-2 text-[#CFCFCFCF] text-[1rem] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                DNS setup to avoid spam folder (DKIM, DMARC, SPF in subdomain)
              </li>
              <li className="flex items-start gap-2 text-[#CFCFCFCF] text-[1rem] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Webhook to receive & forward emails
              </li>
              <li className="flex items-start gap-2 text-[#CFCFCFCF] text-[1rem]  text-accent font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Time saved: 3 hours
              </li>
              <li className="flex items-start gap-2 text-[1rem]  text-accent font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Headaches: 0
              </li>
            </ul>
            <div className="pt-3 flex items-center gap-2 text-[#CFCFCFCF] text-[1rem]  text-sm font-semibold text-[#CFCFCF]/90">
              <img
                alt="Mailgun"
                loading="lazy"
                width="250"
                height="256"
                decoding="async"
                data-nimg="1"
                className="w-8 h-8"
                src="https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmailgun.459dea11.png&w=256&q=75"
                style={{ color: "transparent" }}
              />
              <span>
                with{" "}
                <a
                  className="link"
                  href="https://www.mailgun.com/"
                  target="_blank"
                  style={{ color: "#CFCFCF" }}
                >
                  Mailgun
                </a>
              </span>
            </div>
          </div>
        </div>
        {/* Tab Content 2 */}
        <div
          role="tab"
          aria-label="Tab 2"
          className={`tab text-white ${activeTab !== 2 ? "hidden" : ""}`}
        >
          <div className="text-base-content/80 leading-relaxed space-y-4 px-12 md:px-0 py-12 max-w-xl animate-opacity">
            <p className="font-medium text-lg text-[#CFCFCFCF] text-left">
              Payments
            </p>
            <ul className="space-y-1">
              <li className="flex items-center gap-2 text-[#CFCFCFCF] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Create checkout sessions
              </li>
              <li className="flex items-center gap-2 text-[#CFCFCFCF] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Handle webhooks to update user's account (subscriptions,
                one-time payments...)
              </li>
              <li className="flex items-center gap-2 text-[#CFCFCFCF]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Tips to setup your account & reduce chargebacks
              </li>
              <li className="flex items-center gap-2 text-accent font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Time saved: 5 hours
              </li>
            </ul>
            <div className="pt-3 flex items-center gap-2 text-[#CFCFCFCF] text-sm font-semibold">
              <img
                alt="Stripe"
                loading="lazy"
                width="250"
                height="256"
                decoding="async"
                data-nimg="1"
                className="w-8 h-8"
                srcSet="https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstripe.ea4baaef.png&w=256&q=75"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstripe.ea4baaef.png&amp;w=640&amp;q=75"
                style={{ color: "transparent" }}
              />
              <span>
                with{" "}
                <a
                  className="link text-white opacity-90"
                  href="https://stripe.com/"
                  target="_blank"
                >
                  Stripe
                </a>
              </span>
              <span className="mx-2 text-base-content/60 text-xs">OR</span>
              <img
                alt="Lemon Squeezy"
                loading="lazy"
                width="400"
                height="400"
                decoding="async"
                data-nimg="1"
                className="w-8 h-8"
                srcSet="https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fls.dc29c23a.png&w=640&q=75"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fls.dc29c23a.png&amp;w=828&amp;q=75"
                style={{ color: "transparent" }}
              />
              <span>
                with{" "}
                <a
                  className="link text-white opacity-90"
                  href="https://www.lemonsqueezy.com/"
                  target="_blank"
                >
                  Lemon Squeezy
                </a>
              </span>
            </div>
          </div>
        </div>
        {/* Tab Content 3 */}
        <div
          role="tab"
          aria-label="Tab 3"
          className={`tab text-white ${activeTab !== 3 ? "hidden" : ""}`}
        >
          <div className="text-base-content/80 leading-relaxed space-y-4 px-12 md:px-0 py-12 max-w-xl animate-opacity">
            <p
              className="font-medium text-[#CFCFCF] text-left opacity-90 text-lg "
              style={{ color: "#CFCFCF" }}
            >
              User authentication
            </p>
            <ul className="space-y-1">
              <li
                className="flex items-center gap-2 opacity-80"
                style={{ color: "#CFCFCF" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Magic links setup
              </li>
              <li
                className="flex items-center gap-2 opacity-80"
                style={{ color: "#CFCFCF" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Login with Google walkthrough
              </li>
              <li
                className="flex items-center gap-2 opacity-80"
                style={{ color: "#CFCFCF" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Save user in MongoDB/Supabase
              </li>
              <li
                className="flex items-center gap-2 opacity-80"
                style={{ color: "#CFCFCF" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Private/protected pages &amp; API calls
              </li>
              <li className="flex items-center gap-2 text-accent font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Time saved: 4 hours
              </li>
            </ul>
            <div className="pt-3 flex items-center gap-2 text-sm font-semibold">
              <img
                alt="NextAuth"
                loading="lazy"
                width="250"
                height="256"
                decoding="async"
                data-nimg="1"
                className="w-8 h-8"
                srcSet="https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnextauth.de85000d.png&w=256&q=75"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnextauth.de85000d.png&amp;w=640&amp;q=75"
                style={{ color: "transparent" }}
              />
              <span className="text-[#cfcfcf]">
                <span className="opacity-90">with </span>
                <a
                  className="link "
                  href="https://next-auth.js.org/"
                  target="_blank"
                >
                  NextAuth
                </a>
              </span>
              <span className="mx-2 text-base-content/60 text-xs">OR</span>
              <img
                alt="Supabase"
                loading="lazy"
                width="293"
                height="300"
                decoding="async"
                data-nimg="1"
                className="w-8 h-8"
                srcSet="https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsupabase.c6aaae9c.png&w=384&q=75"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsupabase.c6aaae9c.png&amp;w=640&amp;q=75"
                style={{ color: "transparent" }}
              />
              <span className="text-[#cfcfcf]">
                <span className="opacity-90">with </span>
                <a
                  className="link  opacity-1"
                  href="https://supabase.com/"
                  target="_blank"
                  style={{ color: "#CFCFCF" }}
                >
                  Supabase
                </a>
              </span>
            </div>
          </div>
        </div>
        <div
          role="tab"
          aria-label="Tab 4"
          className={`tab  text-white ${activeTab !== 4 ? "hidden" : ""}`}
        >
          <div className="text-base-content/80 leading-relaxed space-y-4 px-12 md:px-0 py-12 max-w-xl animate-opacity">
            <p
              className="font-medium text-base-content text-left text-lg"
              style={{ color: "#CFCFCF" }}
            >
              Style
            </p>
            <ul className="space-y-1">
              <li
                className="flex items-center gap-2 opacity-80"
                style={{ color: "#CFCFCF" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Components, animations & sections (like this features section)
              </li>
              <li
                className="flex items-center gap-2 opacity-80"
                style={{ color: "#CFCFCF" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  20+ themes with{" "}
                  <a
                    className="link"
                    target="_blank"
                    href="https://daisyui.com/"
                    style={{ color: "#CFCFCF" }}
                  >
                    daisyUI
                  </a>
                </span>
              </li>
              <li
                className="flex items-center gap-2 opacity-80"
                style={{ color: "#CFCFCF" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Automatic dark mode
              </li>
              <li className="flex items-center gap-2 text-accent font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Time saved: 8 hours
              </li>
            </ul>
            <div className="pt-3 flex items-center gap-2 text-sm font-semibold">
              <img
                alt="TailwindCSS"
                loading="lazy"
                width="250"
                height="256"
                decoding="async"
                data-nimg="1"
                className="w-8 h-8"
                src="https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftailwind.6173d7f6.png&w=256&q=75"
                style={{ color: "transparent" }}
              />
              <span>
                <span className="text-[#CFCFCF]/80">with </span>
                <a
                  className="link"
                  href="https://tailwindcss.com/"
                  target="_blank"
                  style={{ color: "#CFCFCF" }}
                >
                  TailwindCSS
                </a>
              </span>
            </div>
          </div>
        </div>
        <div
          role="tab"
          aria-label="Tab 5"
          className={`tab  text-white ${activeTab !== 5 ? "hidden" : ""}`}
        >
          <div
            className="text-base-content/80 leading-relaxed space-y-4 px-12 md:px-0 py-12 max-w-xl animate-opacity"
            style={{ color: "#CFCFCF" }}
          >
            <p
              className="font-medium text-base-content text-left text-lg"
              style={{ color: "#CFCFCF" }}
            >
              SEO
            </p>
            <ul className="space-y-1" style={{ color: "#CFCFCF" }}>
              <li
                className="flex items-center gap-2"
                style={{ color: "#CFCFCF" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                  style={{ color: "#CFCFCF" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Entire blog structure (
                <a
                  className="link"
                  href="https://byedispute.com/blog"
                  target="_blank"
                >
                  example
                </a>
                )
              </li>
              <li
                className="flex items-center gap-2"
                style={{ color: "#CFCFCF" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                  style={{ color: "#CFCFCF" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                All meta tags to rank on Google
              </li>
              <li
                className="flex items-center gap-2"
                style={{ color: "#CFCFCF" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                  style={{ color: "#CFCFCF" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                OpenGraph tags to share on social media
              </li>
              <li
                className="flex items-center gap-2"
                style={{ color: "#CFCFCF" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                  style={{ color: "#CFCFCF" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Automated sitemap generation to fasten Google indexing
              </li>
              <li
                className="flex items-center gap-2"
                style={{ color: "#CFCFCF" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                  style={{ color: "#CFCFCF" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Structured data markup for Rich Snippets
              </li>
              <li
                className="flex items-center gap-2"
                style={{ color: "#CFCFCF" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                  style={{ color: "#CFCFCF" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                SEO-optimized UI components
              </li>
              <li
                className="flex items-center gap-2 text-accent font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                  style={{ color: "#CFCFCF" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Time saved: 8 hours
              </li>
            </ul>
          </div>
        </div>
        <div
          role="tab"
          aria-label="Tab 6"
          className={`tab  text-white ${activeTab !== 6 ? "hidden" : ""}`}
        >
          <div className="text-base-content/80 leading-relaxed space-y-4 px-12 md:px-0 py-12 max-w-xl animate-opacity">
            <p
              className="font-medium text-base-content text-lg text-left"
              style={{ color: "#CFCFCF" }}
            >
              Database
            </p>
            <ul className="space-y-1">
              <li className="flex items-center gap-2 text-[#cfcfcf]/80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Mongoose schema | Postgres tables
              </li>
              <li className="flex items-center gap-2 text-[#cfcfcf]/80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Mongoose plugins to make your life easier
              </li>
              <li className="flex items-center gap-2 text-accent font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Time saved: 2 hours
              </li>
            </ul>
            <div className="pt-3 flex items-center gap-2 text-sm font-semibold">
              <img
                alt="Mongodb"
                loading="lazy"
                width="250"
                height="256"
                decoding="async"
                data-nimg="1"
                className="w-8 h-8"
                src="https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmongodb.8c1e98a7.png&w=256&q=75"
                style={{ color: "transparent" }}
              />
              <span>
                <span className="text-[#CFCFCF]/60">with </span>
                <a
                  className="link"
                  href="https://www.mongodb.com/"
                  target="_blank"
                  style={{ color: "#CFCFCF" }}
                >
                  Mongodb
                </a>
              </span>
              <span className="mx-2 text-base-content/60 text-xs">OR</span>
              <img
                alt="Supabase"
                loading="lazy"
                width="293"
                height="300"
                decoding="async"
                data-nimg="1"
                className="w-8 h-8"
                src="https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsupabase.c6aaae9c.png&w=384&q=75"
                style={{ color: "transparent" }}
              />
              <span className="text-[#CFCFCF]/60">
                with{" "}
                <a
                  className="link"
                  href="https://supabase.com/"
                  target="_blank"
                  style={{ color: "#CFCFCF" }}
                >
                  Supabase
                </a>
              </span>
            </div>
            <div className="text-sm text-base-content/60 pt-2">
              <span className="font-light text-[#CFCFCF]/70">
                ShipFast is modular—you can easily swap with your favorite
                database.
              </span>
            </div>
          </div>
        </div>
        <div
          role="tab"
          aria-label="Tab 7"
          className={`tab  text-white ${activeTab !== 7 ? "hidden" : ""}`}
        >
          <div
            className="text-base-content/80 leading-relaxed space-y-4 px-12 md:px-0 py-12 max-w-xl animate-opacity"
            style={{ color: "#CFCFCF", opacity: "0.8" }}
          >
            <ul className="space-y-1">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Tips to write copy that sells
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Discord community to stay accountable
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <a
                    className="link"
                    target="_blank"
                    href="https://crisp.chat/en/"
                    style={{ color: "#CFCFCF" }}
                  >
                    Crisp
                  </a>{" "}
                  customer support (auto show/hide, variables...)
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Collect emails for a waitlist if your product isn't ready
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Prompts to generate terms & privacy policy with ChatGPT
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Copy paste code templates
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Dead simple tutorials
              </li>
              <li className="flex items-center gap-2 text-accent font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75
.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Time saved: ∞ hours
              </li>
            </ul>
          </div>
        </div>
        {/* Add more tab contents here */}
      </div>
    </section>
  );
};

export default Section3;
