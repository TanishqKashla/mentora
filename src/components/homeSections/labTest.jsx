import Image from "next/image";
import React from "react";

const LabTest = () => {

  const tests = [
    {
        discount: "60% Off",
        title: "Psychological Assessment",
        description: "Tests like the MMPI, WAIS, and Beck Depression Inventory",
        price: "₹1200",
        originalPrice: "₹2000",
        image: "/images/test1.png",
        bgColor: "bg-[rgb(255,235,229)]",
        discountColor: "bg-[rgb(248,173,141)]",
        priceColor: "text-[rgb(248,173,141)]"
    },
    {
        discount: "50% Off",
        title: "Cognitive Behavioral Therapy",
        description: "Includes CBT techniques for anxiety and depression",
        price: "₹1500",
        originalPrice: "₹3000",
        image: "/images/test2.png",
        bgColor: "bg-[rgb(237,248,243)]",
        discountColor: "bg-[rgb(162,218,193)]",
        priceColor: "text-[rgb(118,172,150)]"
    },
    {
        discount: "40% Off",
        title: "Neuropsychological Testing",
        description: "Assessment of cognitive functions like memory and attention",
        price: "₹1800",
        originalPrice: "₹3000",
        image: "/images/test3.png",
        bgColor: "bg-[rgb(253,248,235)]",
        discountColor: "bg-[rgb(240,218,104)]",
        priceColor: "text-[rgb(240,218,106)]"
    }
];

  return (
    <div className="bg-[rgb(37,43,97)] w-full h-[520px] mt-[50px] rounded-3xl">
      <h1 className="text-[rgb(246,247,247)] font-bold text-4xl w-[400px] mt-2 pt-10 ml-10 ">
        Frequently Book Lab Tests!
      </h1>

      <a href="/labTest" className="text-[rgb(246,247,247)] font-sm pl-11 flex hover:underline mb-2">
        <span className="w-[80%]"></span>View All Lab Tests
     </a> 

      {/* TESTS */}

      <div className="ml-[40px] gap-[69px] mb-[40px] flex flex-wrap w-full">
            {tests.map((test, index) => (
                <div key={index} className={`${test.bgColor} h-[300px] w-[300px] rounded-3xl relative mb-4`}>
                    <div className={`${test.discountColor} w-[100px] text-center rounded-lg p-1 ml-6 mt-4`}>{test.discount}</div>

                    <h1 className="mt-4 font-semibold text-lg w-[150px] ml-6">{test.title}</h1>

                    <p className="mt-6 ml-6 w-[200px] text-sm">{test.description}</p>

                    <div className="gap-5 ml-6 mt-4">
                        <h1 className="font-bold text-2xl">{test.price}</h1>
                        <h1 className={`font-normal text-xl ml-12 line-through text-[rgb(196,81,81)] ${test.priceColor}`}>{test.originalPrice}</h1>
                    </div>

                    <Image src={test.image} alt="tests" width={120} height={150} className="absolute bottom-0 right-5 mb-4" />
                </div>
            ))}
        </div>
    </div>
  );
};

export default LabTest;
