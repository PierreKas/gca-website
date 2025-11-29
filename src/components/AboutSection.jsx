import React from "react";
import { missions } from "../constants/index.jsx";
import parentsPicture from "../assets/parents-pictures/picture1.jpg";
import hearderPicture from "../assets/program-pictures/f-serv1.jpg";
const AboutSection = () => {
  return (
    <div>
      <img
        src={hearderPicture}
        className="absolute inset-0 w-full h-72 object-cover z-0"
        alt=""
      />
      <div className="absolute inset-0 bg-black h-72 opacity-50 z-10"></div>
      <div className=" relative flex flex-col items-center z-20 mt-30 ">
        <h1 className="uppercase text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide bg-gradient-to-r from-white to-zinc-100 text-transparent font-bold bg-clip-text">
          About us
        </h1>
      </div>
      <section
        className="py-16 px-4 bg-gradient-to-br from-amber-50 to-yellow-100 min-h-screen"
        // className="relative flex flex-col items-center mt-0 lg:mt-0 min-h-screen"
      >
        <div className="max-w-7xl mx-auto">
          {/* Two Column Grid */}
          <div className="mt-5 grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Vision, Mission, Theme */}
            <div className="space-y-10">
              {/* Vision Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-yellow-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <svg
                    className="w-8 h-8 text-yellow-300 mr-3"
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
                  Our Vision
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our vision is to possess a delivered heart with a kingdom
                  mindset
                </p>
              </div>

              {/* Mission Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-yellow-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <svg
                    className="w-8 h-8 text-yellow-300 mr-3"
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
                  Our Mission
                </h3>
                <div className="space-y-4">
                  {missions.map((mission, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center text-yellow-300">
                        {mission.icon}
                      </div>
                      <p className="text-gray-700 leading-relaxed flex-1">
                        {mission.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Theme Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-yellow-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <svg
                    className="w-8 h-8 text-yellow-300 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  Theme of 2025
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed font-medium">
                  Receiving GOD's wisdom and discernment by the Holy Spirit
                </p>
              </div>
            </div>

            {/* Right Column - Pastor's Photo and Church Description */}
            <div className="space-y-8">
              {/* Pastor's Photo */}
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <div className="relative inline-block mb-6">
                  <img
                    src={parentsPicture}
                    alt="Senior Pastor"
                    className="w-64 h-80 object-cover rounded-2xl shadow-lg mx-auto"
                  />
                  {/* <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold">
                  Senior Pastor
                </div> */}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Bishop John Kwizera Masasu & Senior Pastor Toni Kayitesi
                  Masasu
                </h4>
                <p className="text-gray-600">Vision Bearer & Overseer of KBC</p>
              </div>

              {/* Church Description */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-yellow-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <svg
                    className="w-8 h-8 text-yellow-300 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  Brief History
                </h3>
                <div className="prose prose-lg text-gray-700 leading-relaxed">
                  <p className="mb-4">Short description of papa and maman</p>
                  <p className="mb-4">Short story of how the works started</p>
                  <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-200 mt-6">
                    <p className="text-gray-600-300 font-medium italic">
                      A Bible verse
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
