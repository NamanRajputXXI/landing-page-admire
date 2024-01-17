import Link from "next/link";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const DropDown = () => {
  const [isDomesticHovered, setIsDomesticHovered] = useState(false);
  const [isInternationalHovered, setIsInternationalHovered] = useState(false);

  const handleDomesticHover = () => {
    setIsDomesticHovered(true);
    setIsInternationalHovered(false);
  };

  const handleInternationalHover = () => {
    setIsDomesticHovered(false);
    setIsInternationalHovered(true);
  };

  const handleMouseLeave = () => {
    setIsDomesticHovered(false);
    setIsInternationalHovered(false);
  };
  return (
    <>
      <div
        className="font-medium cursor-pointer   items-center md:text-lg flex rounded-lg p-2 relative"
        onMouseEnter={handleDomesticHover}
        onMouseLeave={handleMouseLeave}
      >
        Why us
        <RiArrowDropDownLine size={30} />
        {isDomesticHovered && (
          <div className="dropdown-content  font-light text-base absolute z-50 text-black   p-8 top-12 ">
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/product-category/india/himachal-pradesh">
                  Himachal
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default DropDown;
