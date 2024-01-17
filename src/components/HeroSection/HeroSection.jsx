import React from "react";
import DestinationPicker from "./DestinationPicker";

const HeroSection = () => {
  return (
    <section
      className="bg-cover z-0  flex justify-around items-center   bg-center w-full  md:h-[700px] h-fit py-10"
      style={{
        backgroundImage: `url("/hero-section-bg.jpg")`,
      }}
      id="header"
    >
      <div className=" max-w-7xl flex md:flex-row flex-col gap-10 items-center w-full justify-between mx-auto px-4 ">
        <div className="flex flex-col  items-center justify-center gap-5">
          <div className="flex justify-center text-lg lg:text-xl text-white h-fit w-fit items-center py-3 px-4 rounded-xl bg-black bg-opacity-30">
            Best Travel Platform in 2023 ⭐😀
          </div>
          <h1 className="lg:text-5xl md:text-4xl text-2xl text-white font-bold">
            Where will your travel take you
          </h1>
          <p
            className="lg:text-xl text-lg text-white
        "
          >
            Search deals on hotels, homes and much more...
          </p>
          <img
            src="https://exportcomments.com/resources/content/images/2022/05/google-reviews-1-.png"
            className="sm:w-80 w-64 "
            alt=""
          />
        </div>
        <div className="bg-white flex rounded-lg w-fit flex-col items-center justify-center px-8 py-5">
          <img src="/logo.jpg" className="w-64" alt="" />

          <form
            action="
        "
            className="py-5 flex flex-col w-full  justify-center gap-5"
          >
            <input
              type="text"
              placeholder="Name"
              className="border-2 border-gray-500 rounded-lg md:w-80 w-full  px-4 py-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-2 border-gray-500 rounded-lg md:w-80 w-full px-4 py-2"
            />
            <input
              type="Destination"
              placeholder="Destination"
              className="border-2 border-gray-500 rounded-lg md:w-80 w-full px-4 py-2"
            />
            <button
              className="bg-red-500 mt-5 font-semibold text-xl rounded-lg md:w-44 w-fit px-6 flex justify-center text-white items-center py-3 "
              type="Submmit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
