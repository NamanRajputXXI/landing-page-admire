import React from "react";
import { IoEarthSharp } from "react-icons/io5";

const WhyUs = () => {
  return (
    <section className="max-w-7xl py-20 flex flex-col gap-10 mx-auto px-4">
      <div className=" flex flex-col gap-5  items-center justify-center">
        <h1 className="text-3xl font-bold">Why us</h1>
        <p className="text-gray-500">
          There are many advantages to booking your travel tickets over other
          competitors
        </p>
      </div>
      <div className="grid lg:grid-cols-3 items-center justify-center">
        <div className="flex">
          <div className="bg-gray-300 flex justify-center items-center rounded-full h-16 w-16">
            <IoEarthSharp size={40} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
