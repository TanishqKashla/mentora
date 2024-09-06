import Image from "next/image";
import React from "react";

const DoctorSectionHome = () => {
  const mentalHealthIssues = [
    { name: "Depression", link: "/depression" },
    { name: "Anxiety Disorder", link: "/anxiety disorder" },
    { name: "Bipolar Disorder", link: "/bipolar disorder" },
    { name: "Schizophrenia", link: "/Schizophrenia" },
    { name: "OCD", link: "/ocd" },
    { name: "PTSD", link: "/ptsd" },
    { name: "Eating Disorders", link: "/eating disorder" },
  ];


const doctors = [
  {
      name: "Dr. Tanishq Kashla",
      specialization: "Psychotherapist",
      image: "/images/doc1.png"
  },
  {
      name: "Dr. Tamanna Singh",
      specialization: "Clinical Psychologist",
      image: "/images/doc2.png"
  },
  {
      name: "Dr. Noah Centineo",
      specialization: "Psychiatrist",
      image: "/images/doc3.png"
  },
  {
      name: "Dr. Cristopher John",
      specialization: "Licensed Clinical Social Worker",
      image: "/images/doc4.png"
  }
];

  return (
    <div>
      <div className="w-[550px] mb-[30px] mt-[50px]">
        <h1 className="text-4xl font-bold">
          Book an appointment for an in-clinic consultation
        </h1>
      </div>
      <div className="flex gap-2">
        {mentalHealthIssues.map((issue, index) => (
          <a
            key={index}
            href={issue.link}
            className="text-[rgb(58,62,110)] hover:text-blue-800 bg-[rgb(190,193,196)] rounded-full text-xl px-4 py-2 "
          >
            {issue.name}
          </a>
        ))}
      </div>

      {/* DOCTOR PROFILES */}

      <div className="flex flex-wrap gap-8">
            {doctors.map((doctor, index) => (
                <div key={index}>
                    <div className="h-[300px] w-[250px] bg-[rgb(241,245,249)] mt-[30px] mb-[10px] rounded-xl relative">
                        <Image
                            src={doctor.image}
                            alt={doctor.name}
                            width={200}
                            height={200}
                            className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                        />
                    </div>
                    <div className="">
                        <h1 className="text-xl font-semibold">{doctor.name}</h1>
                        <p className="text-sm">{doctor.specialization}</p>
                    </div>
                </div>
            ))}
        </div>


    </div>
  );
};

export default DoctorSectionHome;
