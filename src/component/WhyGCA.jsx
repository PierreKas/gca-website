import React from "react";
import { organizationInfo } from "../constants";
import { ArrowRight } from "lucide-react";

// const WhyGCA = () => {
//   return (
//     <section className="py-20 bg-[#607838] text-white">
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         <h2 className="text-4xl font-bold mb-6">Why Game Connect Africa?</h2>
//         <p className="max-w-4xl mx-auto text-lg leading-relaxed">
//           {organizationInfo.approach}
//         </p>
//       </div>
//     </section>
//   );
// };
const WhyGCA = () => {
  return (
    <section className="py-24 bg-linear-to-br from-[#607838] via-[#607838] to-[#4a5e2d] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#F4A82D] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
          <span className="text-[#F4A82D] font-semibold text-sm uppercase tracking-wide">
            Our Approach
          </span>
        </div>
        <h2 className="text-5xl font-bold mb-8">
          Why <span className="text-[#F4A82D]">Game Connect Africa</span>?
        </h2>
        <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl border-2 border-white/20">
          <p className="text-xl leading-relaxed text-gray-100">
            {organizationInfo.approach}
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <button className="bg-[#F4A82D] hover:bg-[#F4A82D]/90 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center gap-2">
            Join Our Mission
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyGCA;
