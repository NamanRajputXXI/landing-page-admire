import React from "react";
import { FaHotel } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { FaMountainSun } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const DestinationPicker = () => {
  return (
    <div className="flex relative mt-10 flex-col items-center justify-center">
      <div className="grid sm:grid-cols-4 grid-cols-2 sm:top-[-30px] top-[-50px] absolute md:gap-10 gap-5 bg-gray-800   text-lg bg-opacity-90 px-2 py-2 rounded-3xl text-white items-center justify-around">
        <div className="flex items-center justify-center text-blue-700 py-1 md:px-3 px-1 rounded-2xl bg-white gap-2">
          <FaHotel color="blue" />
          Hotel
        </div>
        <div className="flex justify-center items-center gap-2">
          <MdFlight color="white" />
          Flight
        </div>
        <div className="flex justify-center items-center gap-2">
          <FaCar color="white" />
          Car
        </div>
        <div className="flex justify-center items-center gap-2">
          <FaMountainSun color="white" />
          Attraction
        </div>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 text-lg h-fit rounded-3xl justify-center gap-10 items-center bg-white px-5 lg:pb-5 lg:py-10 sm:py-10 py-20">
        <div className="flex flex-col sm:w-56 w-fit">
          <p className="text-black">select a city</p>
          <p className="text-gray-400">Where are you going</p>
        </div>
        <div className="flex flex-col border-l-[1px] border-gray-500 px-2 sm:w-56 w-fit ">
          <p className="text-black">Check in</p>
          <p className="text-gray-400">Select Dates</p>
        </div>
        <div className="flex flex-col border-l-[1px] border-gray-500 px-2  sm:w-56 w-fit ">
          <p className="text-black">Check out</p>
          <p className="text-gray-400">Select Dates</p>
        </div>
        <div className="flex flex-col border-l-[1px] border-gray-500 px-2  sm:w-56 w-fit">
          <p className="text-black">Guests</p>
          <p className="text-gray-400">Add Guest</p>
        </div>
        <div
          className="flex flex-row bg-blue-500 rounded-xl text-white w-32 justify-center gap-3 py-2  items-center"
          id="enquire"
        >
          <CiSearch color="white" size={30} /> Enquire
        </div>
      </div>
    </div>
  );
};

export default DestinationPicker;
