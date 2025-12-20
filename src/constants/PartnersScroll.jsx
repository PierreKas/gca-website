import React from "react";

const PartnersScroll = () => {
  return (
    <div>
      {" "}
      {/* Partner Organizations Scrolling Section */}
      <div className="relative mb-16 overflow-hidden">
        {/* <div className="absolute inset-0 bg-linear-to-r from-[#F4A82D]/20 via-transparent to-[#F4A82D]/20 pointer-events-none"></div> */}
        <div className="flex justify-center mb-10">
          <button className=" bg-[#F4A82D]   text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300  ">
            Our Partner Organizations
          </button>
        </div>

        <div className="flex items-center space-x-8 animate-scroll">
          {[...Array(2)].map((_, groupIndex) => (
            <div
              key={groupIndex}
              className="flex items-center space-x-8 shrink-0"
            >
              {[
                "Uganda child right NGO Net (UCRNN)",
                "Life in Abundance International",
                "Arise women of valor Ministries",
                "Lisel International",
                "Local government",
                "Sports for social change network",
                "Christian Ministry Alliance USA",
                "Girls not brides Uganda alliance",
                "Sole HOPE Uganda",
                "Cricket Uganda",
                "Iganga Senior Secondary School",
              ].map((partner, index) => (
                <div
                  key={index}
                  className="px-8 py-4  bg-[#607838] backdrop-blur-sm rounded-lg border border-[#607838]/20 whitespace-nowrap"
                >
                  <span className=" text-white font-medium text-sm">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 45s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default PartnersScroll;
