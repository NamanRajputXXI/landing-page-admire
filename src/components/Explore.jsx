import React from "react";

const Explore = () => {
  return (
    <section className="max-w-7xl sm:py-20 py-10 mx-auto px-4">
      <div className="grid lg:grid-cols-2 items-center grid-cols-1 gap-10 ">
        <div className="flex flex-col gap-5">
          <h1 className="sm:text-4xl text-3xl font-bold">
            Lets Explore the world with <br /> Admire Holidays
          </h1>
          <p className="text-gray-500">
            Embark on a journey of unparalleled exploration with Admire Holidays
            Tour and Travel. Discover the world is most breathtaking
            destinations, from pristine beaches to cultural wonders, as we
            curate unforgettable experiences tailored just for you. Our passion
            is crafting seamless, immersive adventures, ensuring every moment is
            a celebration of wanderlust. Immerse yourself in luxury
            accommodations, savor exquisite cuisine, and create lasting memories
            with our expertly crafted itineraries. Whether you seek serene
            escapes or vibrant city life, Admire Holidays promises an
            extraordinary voyage filled with joy, discovery, and unparalleled
            hospitality. Let your travel dreams come to life with us - where
            every journey is an admiration.
          </p>
          <button className="bg-[#FD4A4C] px-4 py-3 flex items-center w-44 rounded-xl text-white justify-center">
            Learn More
          </button>
        </div>
        <div className="grid gap-5 justify-center items-center  md:grid-cols-2">
          <div>
            <img
              src="
            https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2Fwb3JlfGVufDB8fDB8fHww
            "
              className=" lg:h-[250px] w-full  lg:w-[300px] rounded-lg"
              alt=""
            />
          </div>
          <img
            src="https://images.unsplash.com/photo-1476158085676-e67f57ed9ed7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kb25lc2lhfGVufDB8fDB8fHww"
            className=" lg:h-[250px] w-full lg:w-[300px] rounded-lg"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJlYWNofGVufDB8fDB8fHww"
            className=" rounded-lg"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJhbmNlfGVufDB8fDB8fHww"
            className=" rounded-lg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Explore;
