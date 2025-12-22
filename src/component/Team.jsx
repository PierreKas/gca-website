import React, { useState } from "react";
import { team } from "../constants";
import { User } from "lucide-react";

const Team = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Assuming team array has at least 1 founder, then board members, then staff
  // Adjust indices based on your actual data structure
  const founder = team.slice(0, 2);
  const board = team.slice(2, 4); // Adjust based on how many board members you have
  const staff = team.slice(4); // Rest are staff

  const TeamCard = ({ member, index, featured = false }) => {
    const isHovered = hoveredCard === index;

    return (
      <div
        className={`${featured ? "col-span-full max-w-2xl mx-auto" : ""} group`}
        onMouseEnter={() => setHoveredCard(index)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <div className="relative bg-gradient-to-br from-white to-neutral-50 rounded-3xl overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-br from-[#607838]/10 via-transparent to-[#F4A82D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          ></div>

          <div className="relative p-8">
            <div
              className={`flex ${
                featured
                  ? "flex-col md:flex-row items-center gap-8"
                  : "flex-col items-center text-center"
              }`}
            >
              <div className="relative flex-shrink-0">
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br from-[#607838] to-[#F4A82D] ${
                    isHovered ? "animate-spin" : ""
                  }`}
                  style={{ animationDuration: "3s" }}
                ></div>
                <div className="absolute inset-1 rounded-full bg-white"></div>
                {/* <User
                  className={`relative ${
                    featured ? "w-32 h-32 md:w-40 md:h-40" : "w-28 h-28"
                  } rounded-full object-cover p-1.5 text-[#F4A82D] `}
                  // size={10}
                /> */}
                <img
                  className={`relative ${
                    featured ? "w-32 h-32 md:w-40 md:h-40" : "w-28 h-28"
                  } rounded-full object-cover p-1.5`}
                  src={member.image}
                  alt={member.user}
                />
                {/* <div className="absolute bottom-2 right-2 w-5 h-5 bg-[#607838] rounded-full border-4 border-white shadow-lg animate-pulse"></div> */}
              </div>

              <div
                className={`flex-1 ${
                  featured ? "lg:text-left" : "text-center"
                }`}
              >
                <div className="space-y-3">
                  <h4
                    className={`${
                      featured ? "text-2xl" : "text-xl"
                    } font-bold text-neutral-800 group-hover:text-[#607838] transition-colors duration-300`}
                  >
                    {member.user}
                  </h4>

                  <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#607838] to-[#607838]/80 rounded-full shadow-lg">
                    <div className="w-2 h-2 bg-[#F4A82D] rounded-full animate-pulse"></div>
                    <span className="text-white font-medium text-sm">
                      {member.role}
                    </span>
                  </div>

                  <p
                    className={`${
                      featured ? "text-lg" : "text-base"
                    } text-neutral-600 leading-relaxed mt-4`}
                  >
                    {member.text}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-1.5 bg-gradient-to-r from-[#607838] via-[#F4A82D] to-[#607838] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 via-white to-neutral-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-10 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <div className="w-96 h-96 bg-[#607838] rounded-full blur-3xl"></div>
          </div>
          <h2 className="relative text-2xl sm:text-3xl lg:text-4xl font-black mb-6">
            <span className="bg-gradient-to-r from-[#607838] via-[#607838] to-[#F4A82D] bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            The brilliant minds behind our success
          </p>
        </div>

        {/* Founder Section */}
        <div className="mb-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#607838] to-[#607838]/80 rounded-full shadow-xl mb-8">
              <span className="text-2xl">👑</span>
              <h3 className="text-xl font-bold text-white">Our Founder</h3>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full text-center">
            {founder.map((member, index) => (
              <TeamCard
                key={index}
                member={member}
                index={`founder-${index}`}
                featured={true}
              />
            ))}
          </div>

          {/* <div
            className="flex flex-col lg:flex-row justify-center items-center"
            //grid gap-8 grid-cols-2
          >
            {founder.map((member, index) => (
              <TeamCard
                key={index}
                member={member}
                index={`founder-${index}`}
                featured={true}
              />
            ))}
          </div> */}
        </div>

        {/* Board Section */}
        <div className="mb-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#607838] to-[#607838]/80 rounded-full shadow-xl mb-8">
              <span className="text-2xl">🎯</span>
              <h3 className="text-xl font-bold text-white">Our Board</h3>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full">
            {board.map((member, index) => (
              <div
                key={index}
                className="w-full max-w-sm md:max-w-md lg:max-w-96"
              >
                <TeamCard member={member} index={`board-${index}`} />
              </div>
            ))}
          </div>

          {/* <div
            className="flex flex-col lg:flex-row  items-center justify-center gap-8 w-full"
            //grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            //flex flex-col lg:flex-row items-center justify-center gap-8 w-full
          >
            {board.map((member, index) => (
              <TeamCard key={index} member={member} index={`board-${index}`} />
            ))}
          </div> */}
        </div>

        {/* Staff Section */}
        <div className="mb-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#607838] to-[#607838]/80 rounded-full shadow-xl mb-8">
              <span className="text-2xl">⭐</span>
              <h3 className="text-xl font-bold text-white">Our Valued Staff</h3>
            </div>
          </div>
          <div
            //  className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full"
          >
            {staff.map((member, index) => (
              <div
                key={index}
                className="w-full max-w-sm md:max-w-md lg:max-w-96"
              >
                <TeamCard member={member} index={`staff-${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
