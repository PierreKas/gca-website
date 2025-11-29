import React from "react";
import { weeklyProgram } from "../constants/index.jsx";
import picture from "../assets/program-pictures/service.jpg";

const ChurchProgram = () => {
  return (
    <div>
      <div className=" relative flex flex-col items-center min-h-screen">
        {/* Background Image */}
        <img
          className="absolute inset-0 w-full h-full object-cover z-0 bg-black opacity-90"
          src={picture}
          alt="Assembly"
        />

        {/* Overlay */}
        <div className="relative z-20 mb-20 mt-20 p-10 bg-black/50 rounded-xl  text-white max-w-4xl w-full">
          <h2 className="text-3xl font-bold text-center mb-6">Our Programs</h2>
          <div className="grid grid-cols-2 gap-4">
            {weeklyProgram.map((program, index) => (
              <div
                key={index}
                //  className="bg-white/20 p-4 rounded-md "
                className="bg-white/20 p-4 rounded-md col-span-1 
                  even:col-start-1 odd:col-start-2
                  first:row-start-1 first:col-span-1
                  [&:nth-child(n+3)]:col-span-1 [&:nth-child(n+3)]:col-start-auto"
              >
                {program.day.toLocaleLowerCase() === "sunday" ||
                program.day.toLocaleLowerCase() === "saturday" ? (
                  <h3 className="text-xl bg-gradient-to-r px-3 from-red-600 to-yellow-300  font-semibold">
                    {program.day}
                  </h3>
                ) : (
                  <h3 className="text-xl  font-semibold">{program.day}</h3>
                )}
                <p className="">{program.description}</p>
                <p className="text-sm">{program.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChurchProgram;
