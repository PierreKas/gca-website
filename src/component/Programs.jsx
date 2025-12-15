// import React from "react";

// const Programs = () => {
//   return <div>Programs</div>;
// };

// export default Programs;
import React from "react";
import { objectives } from "../constants";

const Programs = () => {
  return (
    <section className="py-24 bg-linear-to-br from-[#607838]/5 via-white to-[#F4A82D]/5 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#607838]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#F4A82D]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#F4A82D]/10 rounded-full mb-4">
            <span className="text-[#607838] font-semibold text-sm uppercase tracking-wide">
              What We Do
            </span>
          </div>
          <h2 className="text-5xl font-bold text-[#607838] mb-4">
            Our Programs & Objectives
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive initiatives designed to create lasting impact in
            communities
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((obj, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-[#F4A82D]"
            >
              <div className="flex items-start justify-between mb-4">
                {/* <span className="text-6xl font-bold text-[#F4A82D]/20 group-hover:text-[#F4A82D]/30 transition-colors">
                  {obj.number}
                </span> */}
                <div className="w-12 h-12 bg-linear-to-br from-[#607838] to-[#F4A82D] rounded-full flex items-center justify-center text-white font-bold">
                  {obj.number}
                </div>
              </div>
              <h3 className="font-bold text-xl mb-3 text-[#607838] group-hover:text-[#F4A82D] transition-colors">
                {obj.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{obj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
