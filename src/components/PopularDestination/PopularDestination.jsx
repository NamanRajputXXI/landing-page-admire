import React from "react";
import PopularDestinationCard from "./PopularDestinationCard";

const PopularDestination = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20 gap-20 px-4 max-w-7xl mx-auto">
      <div className="w-full flex sm:flex-row gap-5 flex-col justify-between">
        <div className="flex flex-col  gap-1">
          <h1 className="sm:text-2xl text-xl font-bold">Popular Destination</h1>
          <p className="text-gray-600 text-base">
            Recommendation Places for you
          </p>
        </div>
        <button className="bg-[#FD4A4C] h-12 rounded-xl w-44 px-3 py-1 flex items-center justify-center text-white">
          See all Destination
        </button>
      </div>
      <div className="grid md:grid-cols-2 items-center w-fit justify-center gap-10 grid-cols-1 lg:grid-cols-3">
        <PopularDestinationCard />
        <PopularDestinationCard />
        <PopularDestinationCard />
      </div>
    </section>
  );
};

export default PopularDestination;
