// // import React from "react";

// // const VisionMission = () => {
// //   return <div>VisionMission</div>;
// // };

// // export default VisionMission;
// import React from "react";
// import { organizationInfo } from "../constants";

// const VisionMission = () => {
//   return (
//     <section className="py-20 bg-[#607838]/5">
//       <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
//         <div className="bg-white p-8 rounded-xl shadow">
//           <h3 className="text-2xl font-bold text-[#607838] mb-4">Our Vision</h3>
//           <p className="text-gray-700">{organizationInfo.vision}</p>
//         </div>

//         <div className="bg-white p-8 rounded-xl shadow">
//           <h3 className="text-2xl font-bold text-[#607838] mb-4">
//             Our Mission
//           </h3>
//           <p className="text-gray-700">{organizationInfo.mission}</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VisionMission;
import React from "react";
import { organizationInfo } from "../constants";
import { motion } from "framer-motion";
import { Activity, Heart } from "lucide-react";

// const VisionMission = () => {
//   return (
//     <section className="py-24 bg-[#607838]/5">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid lg:grid-cols-2 gap-16">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="bg-gradient-to-br from-white to-[#607838]/5 p-12 rounded-3xl shadow-xl border border-[#607838]/10"
//           >
//             <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#F4A82D]/10 text-[#F4A82D] mb-8">
//               <span className="text-3xl">🌟</span>
//             </div>
//             <h3 className="text-4xl font-bold text-[#607838] mb-6">
//               Our Vision
//             </h3>
//             <p className="text-xl text-gray-700 leading-relaxed">
//               {organizationInfo.vision}
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="bg-gradient-to-bl from-white to-[#F4A82D]/5 p-12 rounded-3xl shadow-xl border border-[#F4A82D]/20"
//           >
//             <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#607838]/10 text-[#607838] mb-8">
//               <span className="text-3xl">🎯</span>
//             </div>
//             <h3 className="text-4xl font-bold text-[#607838] mb-6">
//               Our Mission
//             </h3>
//             <p className="text-xl text-gray-700 leading-relaxed">
//               {organizationInfo.mission}
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };
const VisionMission = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#607838]/5 via-white to-[#607838]/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4A82D]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#607838]/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#607838] to-[#F4A82D] rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
            <div className="relative bg-white p-10 rounded-3xl shadow-xl m-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#607838] to-[#F4A82D] rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg">
                <Activity size={32} />
              </div>
              <h3 className="text-3xl font-bold text-[#607838] mb-6">
                Our Vision
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {organizationInfo.vision}
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F4A82D] to-[#607838] rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
            <div className="relative bg-white p-10 rounded-3xl shadow-xl m-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F4A82D] to-[#607838] rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg">
                <Heart size={32} />
              </div>
              <h3 className="text-3xl font-bold text-[#607838] mb-6">
                Our Mission
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {organizationInfo.mission}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
