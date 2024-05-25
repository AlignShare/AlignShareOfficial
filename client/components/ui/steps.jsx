import React from "react";

const Steps = () => {
  return (
    <div id="steps" className="container bg-black mx-auto w-full">
      <div className="flex justify-center items-center">
        <h2 className="mb-8 text-4xl font-bold tracking-tighter text-blue-600 lg:text-6xl md:text-5xl animate-jump-in animate-once animate-delay-800 animate-ease-linear animate-fill-both text-center">
          <span>How to use?</span>
          <br className="hidden lg:block"></br>
        </h2>
      </div>
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div
          className="border-2-2 absolute border-opacity-20 border-white h-full border"
          style={{ left: "50%" }}
        ></div>

        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-blue-600 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
          </div>
          <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4 animate-wiggle animate-thrice animate-duration-[5000ms] animate-ease-linear">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">
              Create an account
            </h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
           Creating an account and logging in will allow you to fetch your company updates, generate content for social media, and have a direct option to post. Enjoy the benefits of AlignShare by logging in now!
            </p>
          </div>
        </div>

        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-blue-600 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
          </div>
          <div className="order-1 bg-blue-600 rounded-lg shadow-xl w-5/12 px-6 py-4 animate-wiggle animate-thrice animate-duration-[5000ms] animate-ease-linear">
            <h3 className="mb-3 font-bold text-white text-xl">Fetch your company updates</h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
              Get the latest updates about your company directly in AlignShare. Stay informed about important news, announcements, and events happening in your organization.
            </p>
          </div>
        </div>

        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-blue-600 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
          </div>
          <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4 animate-wiggle animate-thrice animate-duration-[5000ms] animate-ease-linear">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">
              Generate content for social media
            </h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              Create engaging content for your social media platforms with our ai-powered content generator using the latest updates fetched.

            </p>
          </div>
        </div>

        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-blue-600 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
          </div>
          <div className="order-1 bg-blue-600 rounded-lg shadow-xl w-5/12 px-6 py-4 animate-wiggle animate-thrice animate-duration-[5000ms] animate-ease-linear">
            <h3 className="mb-3 font-bold text-white text-xl">Direct option to post</h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
              Post the content generated directly to your social media platforms from AlignShare. Save time and effort by posting directly from our platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
