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
      <div className="container lg:px-32 px-4 py-8 mx-auto items-center ">
        <div className="grid grid-cols-4 grid-rows-4 grid-flow-col gap-2">
          <div className="w-full row-span-2">
            <img
              src="/image1.jpg"
              alt=""
              className=" h-full w-full object-cover object-center rounded "
            />
          </div>
          <div className="w-full col-span-2 row-span-2">
            <img
              src="/image2.jpg"
              alt=""
              className=" h-full w-full object-cover object-center rounded  "
            />
          </div>
          <div className="w-full ">
            <img
              src="/image3.jpg"
              alt=""
              className=" h-full w-full object-cover object-center rounded  "
            />
          </div>
          <div className="w-full">
            <img
              src="/image4.jpg"
              alt=""
              className="h-full w-full object-cover object-center rounded "
            />
          </div>
          <div className="w-full col-span-2 row-span-2">
            <img
              src="/image5.jpg"
              alt=""
              className=" h-full w-full object-cover object-center rounded  "
            />
          </div>

          <div className="w-full col-span-2">
            <img
              src="/image6.jpg"
              alt=""
              className=" h-full w-full object-cover object-center rounded  "
            />
          </div>
          <div className="w-full">
            <img
              src="/image7.jpg"
              alt="Photo by Claudio Schwarz on Unsplash"
              className=" h-full w-full object-cover object-center rounded  "
            />
          </div>
          <div className="w-full">
            <img
              src="/image8.jpg"
              alt=""
              className=" h-full w-full object-cover object-center rounded "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsComing;
