import React from "react";

const WhatsComing = () => {
  return (
    <section className="max-w-7xl sm:py-20 py-10 flex flex-col gap-10 mx-auto px-4">
      <div className=" flex flex-col sm:gap-5  gap-2 items-center justify-center">
        <h1 className="sm:text-5xl text-3xl font-bold">See what is coming</h1>
        <p className="text-gray-500 sm:text-xl text-base">
          There is the latest update how to order on the Admire Holidays
        </p>
      </div>
      <video className="h-full w-full rounded-lg" controls>
        <source src="/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default WhatsComing;
