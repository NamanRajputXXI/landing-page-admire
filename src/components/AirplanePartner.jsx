import React from "react";

const AirplanePartner = () => {
  return (
    <section className="max-w-7xl grid md:grid-cols-2 grid-cols-1 gap-10 sm:py-20 py-10 items-center justify-center mx-auto px-4">
      <div className="bg-blue-50 md:order-first order-last p-5 sm:p-10">
        <div className="grid sm:grid-cols-2 grid-cols-1  gap-5">
          <div className="bg-white rounded-md p-5">
            <p className="text-2xl font-bold">Garuda Indoness</p>
          </div>
          <div className="bg-white rounded-md p-5">
            <p className="text-2xl font-bold">Qatar Airways</p>
          </div>
          <div className="bg-white rounded-md p-5">
            <p className="text-2xl font-bold">ANA</p>
          </div>
          <div className="bg-white rounded-md p-5">
            <p className="text-2xl font-bold">Emirates</p>
          </div>
          <div className="bg-white rounded-md p-5">
            <p className="text-2xl font-bold">Airfance</p>
          </div>
          <div className="bg-white rounded-md p-5">
            <p className="text-2xl font-bold">British Airways</p>
          </div>
          <div className="bg-white rounded-md p-5">
            <p className="text-2xl font-bold">Singapore Airlines</p>
          </div>
          <div className="bg-white rounded-md p-5">
            <p className="text-2xl font-bold">Citilink</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="sm:text-5xl  text-3xl font-bold">
          We have many airplane partners
        </h1>
        <p className="text-gray-500   flex  text-lg">
          We have partners for your flight. You can choose according to your
          wishes.Flying high with my partner by my side
        </p>
        <button className="bg-[#FD4A4C]   text-lg px-4 py-3 flex items-center w-44 rounded-xl text-white justify-center">
          See all partners
        </button>
      </div>
    </section>
  );
};

export default AirplanePartner;
