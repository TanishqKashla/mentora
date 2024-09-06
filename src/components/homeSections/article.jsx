import Image from "next/image";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Article = () => {
  return (
    <div className="w-full h-[520px] mt-[40px] ">
      <h1 className="w-[550px] font-bold text-4xl mt-1 leading-[48px] ml-10 mb-[30px]">
        Read Top Articles from our mental health experts!
      </h1>

      <a
        href="/blogs"
        className="font-semibold text-sm pl-11 flex items-center hover:underline mb-2"
      >
        <span className="flex-grow border-b-2 border-[rgb(37,43,97)]"></span>{" "}
        {/* Line */}
        <span className="text-[rgb(37,43,97)] ml-3">Read All Blogs</span>
        <FiArrowRight size={17} className="ml-2 text-[rgb(37,43,97)]" />
      </a>

      {/* BOXES */}
      
      <div className="flex gap-4 mt-4 w-full">
        <div className="bg-[rgb(232,238,240)] h-[350px] w-[50%] rounded-3xl  relative overflow-hidden">
        
            <Image
              src="/images/bg1.png"
              alt="problem"
              height={500}
              width={500}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          

          <div className="border border-[rgb(37,43,97)] rounded-md p-1 mt-4 w-[100px] ml-6 text-center font-semibold absolute top-5 left-5">
            Blog Topic
          </div>

          <h1 className="ml-6 mt-[150px] text-[30px] font-normal absolute bottom-24 left-5">
            Blog Title
          </h1>
          <p className="ml-6 mt-4 text-sm mr-4 absolute bottom-12 left-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            officiis at tenetur velit iste eius reiciendis ad cum aliquid neque.
          </p>
        </div>

        <div className="bg-[rgb(232,238,240)] h-[350px] w-[50%] rounded-3xl  relative overflow-hidden">
        
            <Image
              src="/images/bg1.png"
              alt="problem"
              height={500}
              width={500}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          

          <div className="border border-[rgb(37,43,97)] rounded-md p-1 mt-4 w-[100px] ml-6 text-center font-semibold absolute top-5 left-5">
            Blog Topic
          </div>

          <h1 className="ml-6 mt-[150px] text-[30px] font-normal absolute bottom-24 left-5">
            Blog Title
          </h1>
          <p className="ml-6 mt-4 text-sm mr-4 absolute bottom-12 left-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            officiis at tenetur velit iste eius reiciendis ad cum aliquid neque.
          </p>
        </div>

     
      </div>
      
    </div>
  );
};

export default Article;
