// import React from "react";
// import { coreValues } from "../constants";

// const CoreValues = () => {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-4xl font-bold text-center text-[#607838] mb-12">
//           Our Core Values
//         </h2>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {coreValues.map((value, index) => (
//             <div
//               key={index}
//               className="p-6 rounded-xl border hover:shadow-lg transition"
//             >
//               <div className="text-[#F4A82D] mb-4">{value.icon}</div>
//               <h3 className="font-semibold text-xl mb-2 text-[#607838]">
//                 {value.title}
//               </h3>
//               <p className="text-gray-600">{value.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoreValues;
import React from "react";
import { coreValues } from "../constants";
import { motion } from "framer-motion";

// const CoreValues = () => {
//   return (
//     <section className="py-24 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-5xl font-bold text-center text-[#607838] mb-16"
//         >
//           Our Core Values
//         </motion.h2>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {coreValues.map((value, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
//             >
//               <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#607838]/5 to-[#F4A82D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//               <div className="relative z-10">
//                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F4A82D]/10 text-[#F4A82D] mb-6 group-hover:scale-110 transition-transform duration-300">
//                   {value.icon}
//                 </div>
//                 <h3 className="font-bold text-2xl mb-4 text-[#607838]">
//                   {value.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   {value.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
const CoreValues = () => {
  return (
    <section className="py-24 bg-linear-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4A82D]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#607838]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#607838]/10 rounded-full mb-4">
            <span className="text-[#607838] font-semibold text-sm uppercase tracking-wide">
              Our Foundation
            </span>
          </div>
          <h2 className="text-5xl font-bold text-[#607838] mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            The principles that guide our mission and shape our impact in
            communities
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-[#F4A82D] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-linear-to-br from-[#F4A82D] to-[#607838] rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="font-bold text-xl mb-3 text-[#607838] group-hover:text-[#F4A82D] transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
