import React from "react";
import PopularDestinationCard from "./PopularDestinationCard";

const PopularDestination = () => {
  return (
    <section className="flex flex-col items-center justify-center sm:py-20 py-10 gap-20 px-4 max-w-7xl mx-auto">
      <div className="w-full flex sm:flex-row gap-5 flex-col justify-between">
        <div className="flex flex-col  gap-2">
          <h1 className="sm:text-5xl text-3xl font-bold">
            Popular Destination
          </h1>
          <p className="text-gray-600 text-lg">Recommendation Places for you</p>
        </div>
        <button className="bg-[#FD4A4C] h-12 rounded-xl w-44 px-3 py-1 flex items-center justify-center text-white">
          See all Destination
        </button>
      </div>
      <div className="grid md:grid-cols-2 items-center w-fit justify-center gap-10 grid-cols-1 lg:grid-cols-3">
        <PopularDestinationCard
          imgUrl={
            "https://images.unsplash.com/photo-1591797762236-77dd6dcaa956?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          heading={"Beach Walk, Badung"}
          location={"Bali, Indonasia"}
          rating={"8.4/10"}
          reviews={"(536 Reviews)"}
          cost={"₹5000"}
        />
        <PopularDestinationCard
          imgUrl={
            "https://images.unsplash.com/photo-1605537964076-3cb0ea2ff329?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBhcmFkaXNlfGVufDB8fDB8fHww"
          }
          heading={"The Singhasari royal hotel"}
          location={"Jakarta, Indonasia"}
          rating={"9.2/10"}
          reviews={"(758 Reviews)"}
          cost={"₹3000"}
        />
        <PopularDestinationCard
          imgUrl={
            "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsfGVufDB8fDB8fHww"
          }
          heading={"Paradise Luxury Hotel"}
          location={"Maland, Indonasia"}
          rating={"9.0/10"}
          reviews={"(977 Reviews)"}
          cost={"₹8000"}
        />
      </div>
    </section>
  );
};

export default PopularDestination;
