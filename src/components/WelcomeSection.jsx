import React from "react";
import { missions } from "../constants/index.jsx";
import parentsPicture from "../assets/program-pictures/s-serv1.jpg";
import church from "../assets/WEB/church.jpg";
const WelcomeSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-amber-50 to-yellow-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Two Column Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Vision, Mission, Theme */}
          <div className="space-y-6 pt-20 ">
            {/* Vision Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-yellow-300">
              <div className="text-4xl font-bold text-gray-800 mb-4 flex items-center uppercase">
                Welcome to our Church
              </div>
              <hr className="w-48 h-1 bg-gradient-to-r from-yellow-300 to-red-600 border-0 rounded my-4" />

              <p className="text-gray-700 leading-relaxed text-xl">
                Our vision is to possess a delivered heart with a kingdom
                mindset
              </p>
              <div className="pt-7">
                <a
                  href="/about"
                  className="bg-gradient-to-r from-yellow-300 to-red-600 px-4  py-3 mx-3 rounded-md text-white"
                >
                  {" "}
                  Know more
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Pastor's Photo and Church Description */}
          <div className="space-y-8">
            <img
              src={church}
              alt="Assembly"
              className="w-140 h-100  object-cover rounded-2xl shadow-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
