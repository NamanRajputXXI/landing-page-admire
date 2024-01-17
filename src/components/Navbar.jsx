"use client";
import React, { useState } from "react";
import Image from "next/image";
import DropDown from "./DropDown";
import Button from "./Button";
import Link from "next/link";
import { ImEarth } from "react-icons/im";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      <nav className=" absolute max-w-7xl mb-10 top-0 ">
        <div className=" py-4   px-4">
          <div className="flex items-center max-w-7xl mx-auto w-full text-white justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-white">
                  <Image src={"/logo.jpg"} width={140} height={50} alt="Logo" />
                </a>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center space-x-4">
              <DropDown />
              <Link
                href="/about"
                className="font-medium  text-white md:text-lg  rounded-lg p-2"
              >
                About
              </Link>
              <Link
                href="/company"
                className="font-medium text-white  md:text-lg   rounded-lg p-2"
              >
                Company
              </Link>
              <Link
                href="/contact"
                className="font-medium text-white  md:text-lg  rounded-lg p-2"
              >
                How to Book
              </Link>
              <Link
                href="/Earth"
                className="font-medium  md:text-lg  rounded-lg p-2"
              >
                <ImEarth size={30} color="white" />
              </Link>
              <Button />
            </div>
            <div className="lg:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns=""
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns=""
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeWidth={2}
                      d="M4 6H16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {isClick && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  href="/about"
                  className=" md:text-lg  font-medium block rounded-lg p-2"
                >
                  About
                </Link>

                <DropDown />
                <Link
                  href="/company"
                  className="font-medium  md:text-lg block rounded-lg p-2"
                >
                  Company
                </Link>
                <Link
                  href="/book"
                  className="font-medium  md:text-lg block rounded-lg p-2"
                >
                  How to book
                </Link>

                <Button />
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
