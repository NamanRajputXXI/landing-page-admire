import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
const PopularDestinationCard = ({
  imgUrl,
  heading,
  location,
  rating,
  reviews,
  cost,
}) => {
  return (
    <div className="flex shadow-xl w-full justify-center rounded-b-lg flex-col  ">
      <img
        src={imgUrl}
        alt=""
        className=" w-full sm:h-[400px] h-[300px]  rounded-t-lg"
      />
      <div className="flex px-5 flex-col py-4 gap-4">
        <h5 className="text-xl font-semibold">{heading}</h5>
        <div className="flex gap-2 items-center">
          <FaLocationDot /> {location}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <FaStar color="#FFD700" />
            <FaStar color="#FFD700" />
            <FaStar color="#FFD700" />
            <FaStar color="#FFD700" />
            <FaStar color="#FFD700" />
          </div>
          <div className="flex font-medium items-center gap-1">
            <p className=" sm:text-base text-sm">{rating}</p>
            <p className="text-gray-500  sm:text-base text-sm">{reviews}</p>
          </div>
        </div>
        <div className="flex font-medium sm:text-base text-sm items-center text-gray-500">
          <h5>{cost}</h5>/night
        </div>
        <a href="#header">
          <button className="bg-[#FD4A4C] cursor-pointer px-4 py-2 flex items-center w-44 rounded-lg text-white justify-center">
            Enquire
          </button>
        </a>
      </div>
    </div>
  );
};

export default PopularDestinationCard;
