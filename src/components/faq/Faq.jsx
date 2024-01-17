"use client";

import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";

const Faq = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFaq = (index) => {
    setOpenIndexes((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter((prevIndex) => prevIndex !== index);
      } else {
        return [...prevIndexes, index];
      }
    });
  };

  const faqItems = [
    {
      question: "What destinations does Admire Etour cover?",
      answer:
        "Admire Etour covers a wide range of destinations, including popular tourist spots and hidden gems across the globe. From vibrant cities to serene beaches, our tours offer diverse experiences for every traveler.",
    },
    {
      question: "Can I customize my holiday package with Admire Holidays?",
      answer:
        "Yes, with Admire Holidays, you have the flexibility to customize your holiday package. Choose your preferred hotels, activities, and travel itinerary to tailor your vacation according to your preferences.",
    },
    {
      question: "What types of accommodations does Admire Holidays offer?",
      answer:
        "Admire Holidays provides a variety of accommodations to suit different preferences and budgets. You can choose from luxury hotels, cozy bed and breakfasts, and comfortable resorts, ensuring a pleasant stay during your holiday.",
    },
    {
      question:
        "Are there family-friendly options available with Admire Etour?",
      answer:
        "Absolutely! Admire Etour offers family-friendly tour packages with activities suitable for all ages. Whether you're traveling with kids or extended family, our tours are designed to create memorable experiences for everyone.",
    },
    {
      question: "How do I book a tour with Admire Etour and Holidays?",
      answer:
        "Booking a tour with Admire Etour and Holidays is easy. Simply visit our website, browse through the available packages, and follow the booking process. If you have specific requirements, our customer service team is ready to assist you.",
    },
  ];

  return (
    <section className="max-w-7xl sm:py-20 gap-14 py-10 grid grid-cols-1 md:grid-cols-2 mx-auto px-4">
      <div className="grid grid-cols-1 gap-10  ">
        <div className="flex flex-col gap-5">
          <h1 className="sm:text-5xl text-3xl font-bold">
            We have any answers? We can help answer it
          </h1>
          <p className="text-gray-500 sm:text-xl text-base">
            Everything you need to know, in one place just take a look from part
          </p>
        </div>
        <div className="flex p-6 rounded-lg bg-blue-50 gap-5 flex-col">
          <div className=" flex items-center gap-1">
            <FaRegUserCircle size={30} />
            <FaRegUserCircle size={30} />
            <FaRegUserCircle size={30} />
          </div>
          <h5 className="text-xl font-semibold">Do not see your questions?</h5>
          <p className="text-gray-500 sm:text-xl text-base">
            You can ask through our admin to be answered via email regarding
            your question
          </p>
          <button className="bg-[#FD4A4C] cursor-pointer px-4 py-2 flex items-center w-44 rounded-lg text-white justify-center">
            Connect
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {faqItems.map((faq, index) => (
          <div key={index} className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h5 className="font-medium text-base md:text-xl">
                {faq.question}
              </h5>
              <p
                className="cursor-pointer text-blue-600 text-2xl font-bold"
                onClick={() => toggleFaq(index)}
              >
                {openIndexes.includes(index) ? "-" : "+"}
              </p>
            </div>
            <div className="flex py-3 border-b-[1px] border-gray-500">
              {openIndexes.includes(index) && <p>{faq.answer}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
