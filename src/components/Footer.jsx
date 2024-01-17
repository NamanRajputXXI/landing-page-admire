import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
      <section className="max-w-7xl  mx-auto px-4 pt-10  pb-5 flex flex-col gap-20  sm:pt-20 ">
        <footer className=" flex items-center justify-between ">
          <img src="/logo.jpg" className="sm:w-80 w-32" alt="" />

          <div className="flex items-center gap-2">
            <FaInstagram size={30} />
            <FaFacebook size={30} />
            <FaLinkedin size={30} />
            <FaTwitter size={30} />
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
