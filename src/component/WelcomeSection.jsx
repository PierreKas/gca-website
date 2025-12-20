import React from "react";
import { organizationInfo } from "../constants";

// const WelcomeSection = () => {
//   return (
//     <section className="py-20 bg-white" id="about">
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         <h2 className="text-4xl font-bold text-[#607838] mb-6">
//           Welcome to Game Connect Africa
//         </h2>
//         <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
//           {organizationInfo.description}
//         </p>
//       </div>
//     </section>
//   );
// };
const WelcomeSection = () => {
  return (
    <section
      className="py-24 bg-linear-to-b from-white to-gray-50 relative overflow-hidden"
      id="about"
      //from-[#607838] via-[#607838] to-[#4a5e2d] text-white //from-white to-gray-50
    >
      <div className="absolute top-10 left-10 w-64 h-64 bg-[#607838]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#F4A82D]/5 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="inline-block px-4 py-2 bg-[#F4A82D]/10 rounded-full mb-6">
          <span className="text-[#607838] font-semibold text-sm uppercase tracking-wide">
            About Us
          </span>
        </div>
        <h2 className="text-5xl font-bold text-[#607838] mb-8 leading-tight">
          Welcome to <span className="text-[#F4A82D]">Game Connect Africa</span>
        </h2>
        <div className="bg-white p-10 rounded-3xl shadow-xl border-t-4 border-[#F4A82D]">
          <p className="text-gray-700 text-xl leading-relaxed">
            {organizationInfo.description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16">
          {[
            { number: "1000+", label: "Children Reached" },
            { number: "5", label: "Communities" },
            { number: "15+", label: "Partners Churches" },
            { number: "7+", label: "Partners Organizations" },
            { number: "600+", label: "Women Empowered" },
            { number: "20+", label: "Self Help Groups" },
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-[#607838] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
