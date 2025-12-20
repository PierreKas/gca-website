// // import React, { useEffect, useState } from "react";
// // import { thematicAreas } from "../constants";
// // import { Activity } from "lucide-react";

// // const ThematicAreas = () => {
// //   const [currentImageIndex, setCurrentImageIndex] = useState({});
// //   useEffect(() => {
// //     const initialIndex = {};
// //     thematicAreas.forEach((_, index) => {
// //       initialIndex[index] = 0;
// //     });
// //     setCurrentImageIndex(initialIndex);
// //   }, []);
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentImageIndex((prev) => {
// //         const newIndex = { ...prev };
// //         thematicAreas.forEach((area, index) => {
// //           if (area.images && area.images.length > 0) {
// //             newIndex[index] = ((prev[index] || 0) + 1) % area.images.length;
// //           }
// //         });
// //         return newIndex;
// //       });
// //     }, 3000);

// //     return () => clearInterval(interval);
// //   }, []);
// //   return (
// //     <section className="py-24 bg-white relative overflow-hidden">
// //       <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-gray-50 to-transparent"></div>

// //       <div className="max-w-7xl mx-auto px-6 relative z-10">
// //         <div className="text-center mb-16">
// //           <div className="inline-block px-4 py-2 bg-[#607838]/10 rounded-full mb-4">
// //             <span className="text-[#607838] font-semibold text-sm uppercase tracking-wide">
// //               Our Focus
// //             </span>
// //           </div>
// //           <h2 className="text-5xl font-bold text-[#607838] mb-4">
// //             Our Thematic Areas
// //           </h2>
// //           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
// //             Targeted interventions across key sectors for community
// //             transformation
// //           </p>
// //         </div>

// //         <div className="space-y-16">
// //           {thematicAreas.map((area, index) => (
// //             <div
// //               key={index}
// //               className={`flex flex-col ${
// //                 index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
// //               } gap-12 items-center`}
// //             >
// //               <div className="flex-1 space-y-6">
// //                 <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-[#F4A82D] to-[#607838] rounded-2xl text-white shadow-lg">
// //                   {area.icon}
// //                 </div>
// //                 <h3 className="text-3xl font-bold text-[#607838]">
// //                   {area.title}
// //                 </h3>
// //                 <p className="text-gray-700 text-lg leading-relaxed">
// //                   {area.description}
// //                 </p>
// //                 <div className="bg-linear-to-br from-gray-50 to-white p-6 rounded-xl border-l-4 border-[#F4A82D]">
// //                   <h4 className="font-semibold text-[#607838] mb-4">
// //                     Key Initiatives:
// //                   </h4>
// //                   <ul className="space-y-3">
// //                     {area.details.map((detail, i) => (
// //                       <li
// //                         key={i}
// //                         className="flex items-start gap-3 text-gray-600"
// //                       >
// //                         <div className="w-2 h-2 bg-[#F4A82D] rounded-full mt-2 shrink-0"></div>
// //                         <span>{detail}</span>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               </div>

// //               <div className="flex-1">
// //                 <div className="relative group">
// //                   <div className="absolute inset-0 bg-linear-to-br from-[#607838] to-[#F4A82D] rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
// //                   <div className="relative bg-white p-4 rounded-3xl shadow-xl">
// //                     <div className="aspect-video bg-linear-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center text-gray-500">
// //                       {/* <Activity size={64} /> */}
// //                       <img
// //                         src={
// //                           area.images && area.images.length > 0
// //                             ? area.images[currentImageIndex[index] || 0]
// //                             : area.images?.[0] || ""
// //                         }
// //                         alt=""
// //                         // className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
// //                         className="w-full h-full object-contain group-hover:scale-110 transition-all duration-1000"
// //                       />
// //                       {area.images && area.images.length > 1 && (
// //                         <div className="absolute bottom-4 right-4 flex gap-1">
// //                           {area.images.map((_, imgIndex) => (
// //                             <div
// //                               key={imgIndex}
// //                               className={`w-2 h-2 rounded-full transition-all duration-300 ${
// //                                 imgIndex === (currentImageIndex[index] || 0)
// //                                   ? "bg-yellow-400"
// //                                   : "bg-white/50"
// //                               }`}
// //                             />
// //                           ))}
// //                         </div>
// //                       )}
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ThematicAreas;
// import React, { useEffect, useState } from "react";
// import { thematicAreas } from "../constants";
// import { Activity } from "lucide-react";
// import bgImage from "../assets/thematic-area/thematic8.JPG";

// const ThematicAreas = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState({});

//   const sportsMinistryContent = {
//     title: "Integration of Sports Ministry with the Church",
//     introduction:
//       "Sports ministry is intentionally valuing and utilizing the medium of sports to connect people with Christ Jesus and His Story. As such, it's initiated and empowered by a merciful God who wants to reconcile, through salvation and faith in Christ Jesus, all people to Himself. And it's carried out through God's people in the world of sport as they love others as Christ loves them (Ephesians 5:2), share God's Word (evangelism), and help one another become more like Christ Jesus (discipleship).",
//     mainContent:
//       "The integration of sports into church ministries is a powerful way to engage young people in their faith and community. By combining sports with spiritual growth, churches can create a supportive environment where youth can learn, grow, and connect with others.",
//     encouragement:
//       "We are encouraging the church to apply the realm of sport by fulfilling God's Great Commandment (Matthew 22:37-40) and Great Commission (Matthew 28:19-20). Because God wants us to display the grace and mercy of Christ Jesus through everything we say and do including sports. God wants us to be fair, be loyal in love, and take Him seriously in life generally. We should honor Him on the sports field, court, pitch, track, or course. Every sports venue, community Centre, gym, sports camp, arena, sports club or stadium are places where we can find opportunities to use our time and talents to bring glory to Christ Jesus through evangelism.",
//     howWeInvolve: {
//       title: "How GCA involves the church with sports ministry",
//       points: [
//         {
//           title: "Impacts Lives Through Sports",
//           description:
//             "Engaging individuals, especially youth and children through sports programs that teaches biblical values and foster spiritual growth in the communities.",
//         },
//         {
//           title: "Building Communities through Fellowships",
//           description:
//             "Using sports approach to create a sense of community ownership, support, and service, drawing both believers and non-believers into Christian fellowship.",
//         },
//         {
//           title: "Reaching Unreached Nations",
//           description:
//             "Engaging in international missions through sports, bridging cultural divides, and addressing social issues alongside evangelistic efforts.",
//         },
//       ],
//     },
//   };

//   useEffect(() => {
//     const initialIndex = {};
//     thematicAreas.forEach((_, index) => {
//       initialIndex[index] = 0;
//     });
//     setCurrentImageIndex(initialIndex);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prev) => {
//         const newIndex = { ...prev };
//         thematicAreas.forEach((area, index) => {
//           if (area.images && area.images.length > 0) {
//             newIndex[index] = ((prev[index] || 0) + 1) % area.images.length;
//           }
//         });
//         return newIndex;
//       });
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       // className="py-24 bg-white relative overflow-hidden"
//       className="relative w-full min-h-screen overflow-hidden bg-cover bg-center bg-fixed bg-no-repeat"
//       style={{
//         backgroundImage:
//           //  "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80')",
//           `url(${bgImage})`,
//       }}
//     >
//       {/* <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-gray-50 to-transparent"></div> */}

//       <div className="w-full py-24 mx-auto px-36 relative z-10 bg-white">
//         <div className="text-center mb-16">
//           <div className="inline-block px-4 py-2 bg-[#607838]/10 rounded-full mb-4">
//             <span className="text-[#607838] font-semibold text-sm uppercase tracking-wide">
//               Our Focus
//             </span>
//           </div>
//           <h2 className="text-5xl font-bold text-[#607838] mb-4">
//             Our Thematic Areas
//           </h2>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             Targeted interventions across key sectors for community
//             transformation
//           </p>
//         </div>

//         <div className="space-y-16">
//           {thematicAreas.map((area, index) => (
//             <div
//               key={index}
//               className={`flex flex-col ${
//                 index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
//               } gap-12 items-center`}
//             >
//               <div className="flex-1 space-y-6">
//                 <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-[#F4A82D] to-[#607838] rounded-2xl text-white shadow-lg">
//                   {area.icon}
//                 </div>
//                 <h3 className="text-3xl font-bold text-[#607838]">
//                   {area.title}
//                 </h3>
//                 <p className="text-gray-700 text-lg leading-relaxed">
//                   {area.description}
//                 </p>
//                 <div className="bg-linear-to-br from-gray-50 to-white p-6 rounded-xl border-l-4 border-[#F4A82D]">
//                   <h4 className="font-semibold text-[#607838] mb-4">
//                     Key Initiatives:
//                   </h4>
//                   <ul className="space-y-3">
//                     {area.details.map((detail, i) => (
//                       <li
//                         key={i}
//                         className="flex items-start gap-3 text-gray-600"
//                       >
//                         <div className="w-2 h-2 bg-[#F4A82D] rounded-full mt-2 shrink-0"></div>
//                         <span>{detail}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

//               <div className="flex-1">
//                 <div className="relative group">
//                   <div className="absolute inset-0 bg-linear-to-br from-[#607838] to-[#F4A82D] rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
//                   <div className="relative bg-white p-4 rounded-3xl shadow-xl">
//                     <div className="aspect-video bg-linear-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center text-gray-500">
//                       <img
//                         src={
//                           area.images && area.images.length > 0
//                             ? area.images[currentImageIndex[index] || 0]
//                             : area.images?.[0] || ""
//                         }
//                         alt=""
//                         className="w-full h-full object-contain group-hover:scale-110 transition-all duration-1000"
//                       />
//                       {area.images && area.images.length > 1 && (
//                         <div className="absolute bottom-4 right-4 flex gap-1">
//                           {area.images.map((_, imgIndex) => (
//                             <div
//                               key={imgIndex}
//                               className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                                 imgIndex === (currentImageIndex[index] || 0)
//                                   ? "bg-yellow-400"
//                                   : "bg-white/50"
//                               }`}
//                             />
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="h-[60vh]"></div>
//       {/* Sports Ministry Section */}
//       <div className="w-full mx-auto px-6 py-24 relative z-10 bg-white">
//         <div className="text-center mb-16">
//           {/* <div className="inline-block px-4 py-2 bg-[#607838]/10 rounded-full mb-4">
//             <span className="text-[#607838] font-semibold text-sm uppercase tracking-wide">
//               Our Mission
//             </span>
//           </div> */}
//           <h2 className="text-5xl font-bold text-[#607838] mb-4">
//             {sportsMinistryContent.title}
//           </h2>
//         </div>

//         <div className="space-y-8 max-w-5xl mx-auto">
//           <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#F4A82D]">
//             <p className="text-gray-700 text-lg leading-relaxed">
//               {sportsMinistryContent.introduction}
//             </p>
//           </div>

//           <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl">
//             <p className="text-gray-700 text-lg leading-relaxed">
//               {sportsMinistryContent.mainContent}
//             </p>
//           </div>

//           <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#607838]">
//             <p className="text-gray-700 text-lg leading-relaxed">
//               {sportsMinistryContent.encouragement}
//             </p>
//           </div>

//           <div className="mt-12">
//             <h3 className="text-3xl font-bold text-[#607838] mb-8 text-center">
//               {sportsMinistryContent.howWeInvolve.title}
//             </h3>
//             <div className="grid md:grid-cols-3 gap-6">
//               {sportsMinistryContent.howWeInvolve.points.map((point, index) => (
//                 <div
//                   key={index}
//                   className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#F4A82D]"
//                 >
//                   <h4 className="text-xl font-bold text-[#607838] mb-4">
//                     {point.title}
//                   </h4>
//                   <p className="text-gray-600 leading-relaxed">
//                     {point.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ThematicAreas;
import React, { useEffect, useState } from "react";
import { thematicAreas } from "../constants";
import { Activity } from "lucide-react";
import bgImage from "../assets/thematic-area/thematic8.JPG";

const ThematicAreas = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const sportsMinistryContent = {
    title: "Integration of Sports Ministry with the Church",
    introduction:
      "Sports ministry is intentionally valuing and utilizing the medium of sports to connect people with Christ Jesus and His Story. As such, it's initiated and empowered by a merciful God who wants to reconcile, through salvation and faith in Christ Jesus, all people to Himself. And it's carried out through God's people in the world of sport as they love others as Christ loves them (Ephesians 5:2), share God's Word (evangelism), and help one another become more like Christ Jesus (discipleship).",
    mainContent:
      "The integration of sports into church ministries is a powerful way to engage young people in their faith and community. By combining sports with spiritual growth, churches can create a supportive environment where youth can learn, grow, and connect with others.",
    encouragement:
      "We are encouraging the church to apply the realm of sport by fulfilling God's Great Commandment (Matthew 22:37-40) and Great Commission (Matthew 28:19-20). Because God wants us to display the grace and mercy of Christ Jesus through everything we say and do including sports. God wants us to be fair, be loyal in love, and take Him seriously in life generally. We should honor Him on the sports field, court, pitch, track, or course. Every sports venue, community Centre, gym, sports camp, arena, sports club or stadium are places where we can find opportunities to use our time and talents to bring glory to Christ Jesus through evangelism.",
    howWeInvolve: {
      title: "How GCA involves the church with sports ministry",
      points: [
        {
          title: "Impacts Lives Through Sports",
          description:
            "Engaging individuals, especially youth and children through sports programs that teaches biblical values and foster spiritual growth in the communities.",
        },
        {
          title: "Building Communities through Fellowships",
          description:
            "Using sports approach to create a sense of community ownership, support, and service, drawing both believers and non-believers into Christian fellowship.",
        },
        {
          title: "Reaching Unreached Nations",
          description:
            "Engaging in international missions through sports, bridging cultural divides, and addressing social issues alongside evangelistic efforts.",
        },
      ],
    },
  };

  useEffect(() => {
    const initialIndex = {};
    thematicAreas.forEach((_, index) => {
      initialIndex[index] = 0;
    });
    setCurrentImageIndex(initialIndex);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const newIndex = { ...prev };
        thematicAreas.forEach((area, index) => {
          if (area.images && area.images.length > 0) {
            newIndex[index] = ((prev[index] || 0) + 1) % area.images.length;
          }
        });
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden bg-cover bg-center bg-fixed bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* First Section - Thematic Areas */}
      <div className="w-full py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-36 relative z-10 bg-white">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#607838]/10 rounded-full mb-3 sm:mb-4">
            <span className="text-[#607838] font-semibold text-xs sm:text-sm uppercase tracking-wide">
              Our Focus
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#607838] mb-3 sm:mb-4 px-4">
            Our Thematic Areas
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Targeted interventions across key sectors for community
            transformation
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {thematicAreas.map((area, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-6 sm:gap-8 md:gap-12 items-center`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-4 sm:space-y-6 w-full">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-br from-[#F4A82D] to-[#607838] rounded-2xl text-white shadow-lg">
                  {area.icon}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#607838]">
                  {area.title}
                </h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  {area.description}
                </p>
                <div className="bg-linear-to-br from-gray-50 to-white p-4 sm:p-6 rounded-xl border-l-4 border-[#F4A82D]">
                  <h4 className="font-semibold text-[#607838] mb-3 sm:mb-4 text-base sm:text-lg">
                    Key Initiatives:
                  </h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {area.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 sm:gap-3 text-gray-600 text-sm sm:text-base"
                      >
                        <div className="w-2 h-2 bg-[#F4A82D] rounded-full mt-1.5 sm:mt-2 shrink-0"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Image Content */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="absolute inset-0 bg-linear-to-br from-[#607838] to-[#F4A82D] rounded-2xl sm:rounded-3xl transform rotate-2 sm:rotate-3 group-hover:rotate-4 sm:group-hover:rotate-6 transition-transform duration-300"></div>
                  <div className="relative bg-white p-3 sm:p-4 rounded-2xl sm:rounded-3xl shadow-xl">
                    <div className="aspect-video bg-linear-to-br from-gray-200 to-gray-300 rounded-xl sm:rounded-2xl flex items-center justify-center text-gray-500 overflow-hidden">
                      <img
                        src={
                          area.images && area.images.length > 0
                            ? area.images[currentImageIndex[index] || 0]
                            : area.images?.[0] || ""
                        }
                        alt=""
                        className="w-full h-full object-contain group-hover:scale-105 sm:group-hover:scale-110 transition-all duration-1000"
                      />
                      {area.images && area.images.length > 1 && (
                        <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 flex gap-1">
                          {area.images.map((_, imgIndex) => (
                            <div
                              key={imgIndex}
                              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                                imgIndex === (currentImageIndex[index] || 0)
                                  ? "bg-yellow-400"
                                  : "bg-white/50"
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spacer */}
      <div className="h-[30vh] sm:h-[40vh] md:h-[60vh]"></div>

      {/* Sports Ministry Section */}
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-24 relative z-10 bg-white">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#607838] mb-3 sm:mb-4 px-4">
            {sportsMinistryContent.title}
          </h2>
        </div>

        <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-l-4 border-[#F4A82D]">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              {sportsMinistryContent.introduction}
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-2xl">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              {sportsMinistryContent.mainContent}
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-l-4 border-[#607838]">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              {sportsMinistryContent.encouragement}
            </p>
          </div>

          <div className="mt-8 sm:mt-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#607838] mb-6 sm:mb-8 text-center px-4">
              {sportsMinistryContent.howWeInvolve.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {sportsMinistryContent.howWeInvolve.points.map((point, index) => (
                <div
                  key={index}
                  className="bg-white p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#F4A82D]"
                >
                  <h4 className="text-lg sm:text-xl font-bold text-[#607838] mb-3 sm:mb-4">
                    {point.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThematicAreas;
