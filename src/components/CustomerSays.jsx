import React from "react";
import { FaStar } from "react-icons/fa";

const CustomerSays = () => {
  return (
    <section className="bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:py-20 py-10">
        <div className=" flex flex-col gap-5 justify-center items-center w-full">
          <h1 className="sm:text-5xl text-3xl font-bold">Our customer says</h1>
          <p className="text-gray-600 text-lg">
            Search deals on hotels, homes and much more
          </p>
        </div>
        <div className="grid gap-10 md:pt-20 pt-10 md:grid-cols-2 grid-cols-1 items-center">
          <div className="flex p-5 rounded-lg bg-white flex-col gap-5">
            <img
              src="https://images.unsplash.com/photo-1573878741117-1653384427db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG9mZmljZSUyMHdvbWVufGVufDB8fDB8fHww"
              className="rounded-lg w-full h-full"
              alt=""
            />
            <p className="sm:text-lg text-sm font-medium">
              "Just booked the most amazing trip of my life thanks to Admire
              Holidays. I love the convineance and ease of booking. Thanks to
              Admire Holidays"
            </p>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-3">
                <p className="font-bold text-xl">Ana Watson</p>
                <p className="text-gray-500">Product Designer at sendgrid</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaStar size={20} color="#FFD700" />
                <p>4.8/5</p>
              </div>
            </div>
          </div>
          <div className="flex p-5 bg-white rounded-lg flex-col gap-5">
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-lg w-full h-full"
              alt=""
            />
            <p className=" sm:text-lg text-sm font-medium">
              "The Best travel deals can always on Admire Holidays. I never
              thought planning a trip could be so stress free, Recommendation
              platform"
            </p>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-3">
                <p className="font-bold text-xl">James Cooper</p>
                <p className="text-gray-500">Ceo at Vrotech.com</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaStar size={20} color="#FFD700" />
                <p>4.9/5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSays;
