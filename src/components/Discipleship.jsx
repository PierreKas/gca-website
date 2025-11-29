// import React from "react";
// // import hearderPicture from "../assets/program-pictures/f-serv1.jpg";
// import parentsPicture from "../assets/bcc.jpg";
// import hearderPicture from "../assets/bcc3.jpg";
// const Discipleship = () => {
//   return (
//     <div className="mt-20">
//    <img
//         src={hearderPicture}
//         className="absolute inset-0 w-full h-72 object-cover z-0"
//         alt=""
//       />
//       <div className="absolute inset-0 bg-black h-72 opacity-50 z-10"></div>
//       <div className=" relative flex flex-col items-center z-20 mt-30 ">
//         <h1 className="uppercase text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide bg-gradient-to-r from-white to-zinc-100 text-transparent font-bold bg-clip-text">
//          Discipleship
//         </h1>
//       </div>
//       <section
//               className=" py-16 px-4 bg-gradient-to-br from-amber-50 to-yellow-100 min-h-screen"
//             >
//               <div className="max-w-7xl mx-auto">
//                 <div className="mt-5 grid lg:grid-cols-2 gap-12 items-start">
                
//                   <div className="space-y-10">
//                     {/* Vision Section */}
//                     <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-700">
//                       <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
//                         <svg
//                           className="w-8 h-8 text-blue-700 mr-3"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                           />
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//                           />
//                         </svg>
//                         BCC Vision
//                       </h3>
//                       <p className="text-gray-700 text-lg leading-relaxed">
//                         The vision of BCC is to raise a great army of true life-giving disciples Jesus Christ, fully consecrated to the Lord Jesus Christ, coming from different backgrounds and with different history interconnected by the spirit of family; restored, trained and sent, determined to make Jesus Christ known as the King of this generation.
//                       </p>
//                     </div>
      
//                     {/* Mission Section */}
//                     <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-700">
//                       <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//                         <svg
//                           className="w-8 h-8 text-blue-700 mr-3"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
//                           />
//                         </svg>
//                         BCC Mission
//                       </h3>
//                       <div className="space-y-4">
//                        <div
                          
//                             className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
//                           >
                            
//                             <p className="text-gray-700 leading-relaxed flex-1">
//                              The mission of BCC is to help a person as a whole, meaning both in the physical and the moral aspect, each according to its demands, to fulfill the Supreme Order of Jesus Christ in harmony with the other members of the body of Christ: go and make disciples of all nations, baptizing them in the name of the Father and the Son and the Holy Spirit. Teach them to obey all the commands I (Jesus Christ) have given you…Matthew 28:19-20.
//                             </p>
//                           </div>
                       
//                       </div>
//                     </div>
      
                
//                   </div>
      
//                  <div className="space-y-8">
//                     {/* Visio bearer's Photo */}
//                     <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
//                       <div className="relative inline-block mb-6">
//                         <img
//                           src={parentsPicture}
//                           alt="Senior Pastor"
//                           className="w-64 h-80 object-cover rounded-2xl shadow-lg mx-auto"
//                         />
                       
//                       </div>
//                       <h4 className="text-xl font-bold text-gray-800 mb-2">
//                         Apostle Yoshua Masasu & Senior Pastor Lydia M
//                         Masasu
//                       </h4>
//                       <p className="text-gray-600">Vision Bearer of BCC</p>
//                     </div>
      
//                     <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-700">
//                       <h6 className="font-bold text-gray-800 mb-6 flex items-center">
//                         <svg
//                           className="w-8 h-8 text-blue-700 mr-3"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
//                           />
//                         </svg>
//                        In 1985, Apostle Yoshua NDAGIJIMANA MASASU had the following diagnosis, which is unfortunately still true today in the church of Jesus Christ:
//                      </h6>
                      
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>
//     </div>
//   );
// };

// export default Discipleship;
import React from "react";
import { Flame, BookOpenText, Network } from "lucide-react";

import parentsPicture from "../assets/bcc.jpg";
import hearderPicture from "../assets/bcc3.jpg";

const Discipleship = () => {
  const bccBurdens = [
    {
      icon: <Flame className="w-6 h-6" />,
      text: "The absence of effective consecration on behalf of those who call themselves Christians with the consequent transmission of knowledge and not a spiritual reproduction of life for life. The number of born-again people was increasing but these people were not trained to become disciples.",
    },
    {
      icon: <BookOpenText className="w-6 h-6" />,
      text: "The release or sometimes the lack, of a consistent prayer life and a systematic teaching of the word of God for the benefit of others are deemed more useful activities.",
    },
    {
      icon: <Network className="w-6 h-6" />,
      text: "Lack of information exchange, gifts, and framework facilitating interconnection, resulting in the inefficiency of the church as the body of Christ to influence the community where she is due to the scattered efforts in all directions and sometimes unnecessary duplication of actions that could be coordinated for greater efficiency.",
    },
  ];

  return (
    <div className="mt-20">
      {/* Header Section - Keep original Discipleship header */}
      <img
        src={hearderPicture}
        className="absolute inset-0 w-full h-80 object-cover z-0"
        alt=""
      />
      <div className="absolute inset-0 bg-black h-80 opacity-50 z-10"></div>
      <div className="relative flex flex-col items-center z-20 mt-20">
        <h1 className="uppercase text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide bg-gradient-to-r from-white to-zinc-100 text-transparent font-bold bg-clip-text">
          Discipleship
        </h1>
        <p className="mt-2.5 text-xl text-white text-center max-w-3xl mx-auto">
          Building a family of consecrated disciples who live for Christ and
          make Him known to this generation.
        </p>
      </div>

      {/* Content Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-amber-50 to-yellow-100 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="mt-5 grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div className="space-y-10">
              {/* Vision Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-700">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <svg
                    className="w-8 h-8 text-blue-700 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  BCC Vision
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  The vision of BCC is to raise a great army of life-giving
                  disciples, fully consecrated to the Lord Jesus Christ, coming
                  from different backgrounds and with different history
                  interconnected by the spirit of family; restored, trained and
                  sent, determined to make Jesus Christ known as the King of
                  this generation.
                </p>
              </div>

              {/* Mission Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-700">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <svg
                    className="w-8 h-8 text-blue-700 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  BCC Mission
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700 leading-relaxed">
                      The mission of BCC is to help a person as a whole, meaning
                      both in the physical and the moral aspect, each according
                      to its demands, to fulfill the Supreme Order of Jesus
                      Christ in harmony with the other members of the body of
                      Christ:
                    </p>
                    <blockquote className="italic text-gray-600 border-l-4 border-gray-300 pl-4 mt-4">
                      Go and make disciples of all nations, baptizing them in
                      the name of the Father and the Son and the Holy Spirit.
                      Teach them to obey all the commands I (Jesus Christ) have
                      given you…{" "}
                      <span className="font-semibold">Matthew 28:19-20</span>.
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* Burden Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-700">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <svg
                    className="w-8 h-8 text-blue-700 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  BCC Burden
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-700">
                  In 1985, Apostle Yoshua NDAGIJIMANA MASASU had the following
                  diagnosis, which is unfortunately still true today in the
                  church of Jesus Christ:
                </p>
                <div className="space-y-4">
                  {bccBurdens.map((burden, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="text-blue-700 mt-1 flex-shrink-0">
                        {burden.icon}
                      </div>
                      <p className="text-gray-700 leading-relaxed flex-1">
                        {burden.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Vision Bearer's Photo */}
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <div className="relative inline-block mb-6">
                  <img
                    src={parentsPicture}
                    alt="Senior Pastor"
                    className="w-64 h-80 object-cover rounded-2xl shadow-lg mx-auto"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Apostle Yoshua Masasu & Senior Pastor Lydia M Masasu
                </h4>
                <p className="text-gray-600">Vision Bearer of BCC</p>
              </div>

              

              {/* Video Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-red-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Watch More
                </h3>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    className="w-full h-64 rounded-lg shadow-lg"
                    src="https://www.youtube.com/embed/bj_1S68m4l8"
                    title="BCC Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Discipleship;