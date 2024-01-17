import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
const PopularDestinationCard = () => {
  return (
    <div className="flex shadow-2xl  justify-center items-center w-fit h-fit rounded-b-lg flex-col  ">
      <img
        src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYWNofGVufDB8fDB8fHww"
        alt=""
        className="h-[350px] w-[350px] rounded-t-lg"
      />
      <div className="flex flex-col py-4 px-4 gap-4">
        <h5 className="text-xl font-semibold">Beach Walk Badung</h5>
        <div className="flex gap-2 items-center">
          <FaLocationDot /> Bali, Indonasia
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <FaStar color="#FFD700" />
            <FaStar color="#FFD700" />
            <FaStar color="#FFD700" />
            <FaStar color="#FFD700" />
            <FaStar color="#FFD700" />
          </div>
          <div className="flex items-center gap-1">
            <p>8.4/10</p>
            <p className="text-gray-500">(536 Reviews)</p>
          </div>
        </div>
        <div className="flex items-center text-gray-500">
          <h5>₹ 5000</h5>/night
        </div>
        <button className="bg-[#FD4A4C] px-4 py-2 flex items-center w-44 rounded-lg text-white justify-center">
          Explore
        </button>
      </div>
    </div>
  );
};

export default PopularDestinationCard;
