import React from "react";

const Subscribe = () => {
  return (
    <section className="max-w-7xl sm:py-20 py-10 mx-auto px-4">
      <div className="bg-blue-600 flex md:flex-row flex-col  gap-10 md:items-center justify-center md:justify-between rounded-3xl w-full py-10 sm:px-8 px-4">
        <div className="flex flex-col gap-4 text-white">
          <p className="text-3xl font-bold ">Get our best offer now</p>
          <p className="text-sm font-medium">
            Sign up and we will send best offer to you
          </p>
        </div>
        <div className="flex relative  items-center ">
          <input
            type="text"
            className="py-4 sm:pl-6 pl-2 sm:text-base text-sm   pr-4 w-full md:w-96 sm:w-80 flex items-center bg-white rounded-3xl text-gray-700"
            placeholder="your email address"
          />
          <button className="bg-blue-600 text-white sm:text-base text-sm font-medium rounded-3xl right-2 absolute py-2 px-2">
            Subscribe now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
