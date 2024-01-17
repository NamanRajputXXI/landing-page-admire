import React from "react";
import DestinationPicker from "./DestinationPicker";

const HeroSection = () => {
  return (
    <section
      className="bg-cover z-0  flex justify-center items-center   bg-center w-full  md:h-[700px] h-fit md:py-10 py-32"
      style={{
        backgroundImage: `url("/hero-section-bg.jpg")`,
      }}
      id="header"
    >
      <div className="flex flex-col max-w-7xl mx-auto px-4 items-center justify-center gap-5">
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
        <DestinationPicker />
      </div>
    </section>
  );
};

export default HeroSection;
