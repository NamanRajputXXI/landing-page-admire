import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-blue-50">
      <section className="max-w-7xl  mx-auto px-4 pt-10  pb-5 flex flex-col gap-20  sm:pt-20 ">
        <footer className=" justify-center  md:gap-10 gap-16 grid md:grid-cols-3 grid-cols-2  lg:grid-cols-5">
          <div className="flex flex-col gap-4 ">
            <img src="/logo.jpg" alt="" />
            <p className="text-gray-500 sm:text-base text-sm ">
              Search details on hotel, homes and much more
            </p>
            <div className="flex items-center gap-2">
              <FaInstagram size={30} />
              <FaFacebook size={30} />
              <FaLinkedin size={30} />
              <FaTwitter size={30} />
            </div>
          </div>
          <div className="flex items-center   flex-col gap-4">
            <p className="text-xl font-semibold">Products</p>
            <p className="sm:text-base text-sm ">Flight</p>
            <p className="sm:text-base text-sm ">Hotel</p>
            <p className="sm:text-base text-sm ">Rent Car</p>
            <p className="sm:text-base text-sm ">Attraction</p>
          </div>
          <div className="flex flex-col items-center  gap-4">
            <p className="text-xl font-semibold">About</p>
            <p className="sm:text-base text-sm ">How to book</p>
            <p className="sm:text-base text-sm ">Community</p>
            <p className="sm:text-base text-sm ">Seasonal Deals</p>
            <p className="sm:text-base text-sm ">Rewards</p>
            <p className="sm:text-base text-sm ">Partner</p>
            <p className="sm:text-base text-sm ">Blogs</p>
          </div>
          <div className="flex flex-col items-center   gap-4">
            <p className="text-xl font-semibold">Support</p>
            <p className="sm:text-base text-sm ">Help Center</p>
            <p className="sm:text-base text-sm ">Support Policy </p>
            <p>Contact us</p>
          </div>
          <div className="flex flex-col items-center  gap-4">
            <p className="text-xl font-semibold">Install App</p>
            <img
              src="https://logowik.com/content/uploads/images/app-store-and-google-play.jpg"
              alt=""
            />
          </div>
        </footer>
        <div className="flex w-full sm:flex-row flex-col items-start gap-5 sm:items-center justify-between">
          <p className="sm:text-base text-sm ">@copyright 2024</p>
          <div className="flex  items-center gap-10">
            <p className="sm:text-base text-sm ">Terms and Conditions</p>
            <p className="sm:text-base text-sm ">Privacy and Policy</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
