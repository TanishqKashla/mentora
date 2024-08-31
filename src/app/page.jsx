import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const page = () => {
  return (
    //TOP DESIGN

    <div>
      <div className="bg-[rgb(37,43,97)] pb-10 pt-0 p-16 h-[450px] w-full rounded-3xl py-10 relative flex flex-col justify-between">
        <Image
          src="/images/doc.png"
          alt="Logo"
          width={270}
          height={270}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        />
        <div className="w-fit  mx-auto text-[rgb(219,235,255)] pt-10">
          <h1 className="font-bold text-center text-[200px] leading-[180px] pb-5">
            Mentora
          </h1>
          <div className="flex justify-between">
            <h3 className="text-xl">Your Mental Well being Partner</h3>
            <p className=" text-xl">No More Struggles, Just Support</p>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <p className="text-[rgb(231,194,212)] w-[340px] uppercase">
            A mental health support platform designed to empower individuals in
            managing their mental well-being
          </p>

          <div className="flex gap-1 items-center">
            <div className="bg-[rgb(231,194,212)] py-3 font-semibold px-4 rounded-full">
              Book Appointment
            </div>

            <div className="bg-[rgb(231,194,212)] rounded-full h-full p-3">
              <FiArrowRight size={25} />
            </div>
          </div>
        </div>
      </div>

      {/* BOXES */}

      <div className="flex gap-3 mt-3 mb-2 justify-between">
        <div className="bg-[rgb(240,218,105)] h-[300px] rounded-2xl flex-1 flex flex-col justify-between relative">
          <div className="">
            <h2 className="font-semibold text-[31px] mt-1 pt-7 ml-6 leading-[35px]">
              Find Doctors You Prefer
            </h2>
            <p className="ml-6 mt-3 justify-center mr-6">
              Confirmed appointments
            </p>
          </div>
          <div className="bg-[rgb(37,43,97)] rounded-full w-fit p-3 ml-6 mb-5">
            <FiArrowRight size={25} color="rgb(236,237,241)" />
          </div>
          <div className="absolute bottom-0 right-5 ">
            <Image
              src="/images/doctor.png"
              alt="problem"
              height={150}
              width={140}
            ></Image>
          </div>
        </div>

        <div className="bg-[rgb(163,218,194)] h-[300px] rounded-2xl flex-1 flex flex-col justify-between relative">
          <div>
            <h2 className="font-semibold text-[31px] mt-1 pt-7 ml-6 leading-[35px]">
              Get Video Call Consultations
            </h2>
            <p className="ml-6 mt-3 justify-center mr-6">
              Connect within 60 secs
            </p>
          </div>
          <div className="bg-[rgb(37,43,97)] rounded-full w-fit p-3 ml-6 mb-5">
            <FiArrowRight size={25} color="rgb(236,237,241)" />
          </div>
          <div className="absolute bottom-0 right-5 ">
            <Image
              src="/images/vidConsult.png"
              alt="problem"
              height={200}
              width={180}
            ></Image>
          </div>
        </div>

        <div className="bg-[rgb(231,194,212)] h-[300px] rounded-2xl flex-1 flex flex-col justify-between relative">
          <div>
            <h2 className="font-semibold text-[31px] mt-1 pt-7 ml-6 leading-[35px]">
              Read Various Articles
            </h2>
            <p className="ml-6 mt-3 justify-center mr-6">
              Discover insights for a healthier mind
            </p>
          </div>

          <div className="bg-[rgb(37,43,97)] rounded-full w-fit p-3 ml-6 mb-5">
            <FiArrowRight size={25} color="rgb(236,237,241)" />
          </div>
          <div className="absolute bottom-0 right-5 ">
            <Image
              src="/images/article.png"
              alt="problem"
              height={150}
              width={140}
            ></Image>
          </div>
        </div>

        <div className="bg-[rgb(146,189,246)]  h-[300px] rounded-2xl flex-1 flex flex-col justify-between relative">
          <div>
            <h2 className="font-semibold text-[31px] mt-1 pt-7 ml-6 leading-[35px]">
              Discuss About Your Problems
            </h2>
            <p className="ml-6 mt-3 justify-center mr-6">
              Share and find support in our community
            </p>
          </div>

          
            <div className="bg-[rgb(37,43,97)] rounded-full w-fit p-3 ml-6 mb-5 flex">
              <FiArrowRight size={25} color="rgb(236,237,241)" />
            </div>
          
          <div className="absolute bottom-0 right-5 ">
            <Image
              src="/images/problem.png"
              alt="problem"
              height={150}
              width={140}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
