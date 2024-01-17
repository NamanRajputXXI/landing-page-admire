import React from "react";
import { IoEarthSharp } from "react-icons/io5";
import { FaRegCreditCard } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

const WhyUs = () => {
  return (
    <section className=" bg-blue-50  ">
      <div className="max-w-7xl mx-auto sm:py-20   py-10 flex flex-col gap-10  px-4">
        <div className=" flex flex-col gap-5  items-center justify-center">
          <h1 className="sm:text-5xl text-3xl font-bold">Why us</h1>
          <p className="text-gray-500 sm:text-xl text-base">
            There are many advantages to booking your travel tickets over other
            competitors
          </p>
        </div>
        <div className="grid  gap-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center">
          <div className="flex flex-col bg-white gap-5 rounded-xl py-6 px-4">
            <div className="bg-gray-200 flex justify-center items-center rounded-full h-12 w-12">
              <IoEarthSharp size={30} color="#FD4A4C" />
            </div>
            <p className="font-bold text-2xl">Many Destinations</p>
            <p className="text-gray-500 text-lg  ">
              There are many choices of destinations that you can find according
              to your needs and desires
            </p>
          </div>
          <div className="flex flex-col bg-white gap-5 rounded-xl py-6 px-4">
            <div className="bg-gray-200 flex justify-center items-center rounded-full h-12 w-12">
              <FaRegCreditCard size={30} color="#FD4A4C" />
            </div>
            <p className="font-bold text-2xl">Many Payment options</p>
            <p className="text-gray-500 text-lg ">
              There are many payment methods when you make transactions to order
              ticket witout the hassie
            </p>
          </div>
          <div className="flex flex-col bg-white gap-5 rounded-xl py-6 px-4">
            <div className="bg-gray-200 flex justify-center items-center rounded-full h-12 w-12">
              <MdSecurity size={30} color="#FD4A4C" />
            </div>
            <p className="font-bold text-2xl">Secured Trasactions</p>
            <p className="text-gray-500 text-lg ">
              Your payment is safe and protected. We can also process it easily
              for tickets refund by waiting a maximum of one day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
