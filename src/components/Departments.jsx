import React, { useState } from "react";

import { departments } from "../constants/index.jsx";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import hearderPicture from "../assets/program-pictures/f-serv1.jpg";
const Departments = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img
        src={hearderPicture}
        className="absolute inset-0 w-full h-72  object-cover z-10"
        alt=""
      />
      <div className="absolute inset-0 bg-black h-72 opacity-50 z-20"></div>
      <div className="absolute top-28 left-0 right-0 flex flex-col z-30">
        <h1 className="uppercase text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide bg-gradient-to-r from-white to-zinc-100 text-transparent font-bold bg-clip-text">
          departments
        </h1>
        <p className="mt-2.5 text-xl text-white text-center max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="relative py-60 bg-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-yellow-50/30"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-yellow-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((department, index) => {
              const [isExpanded, setIsExpanded] = useState(false);

              return (
                <div
                  key={index}
                  className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-yellow-100/50 overflow-hidden ${
                    index === 0 ? "lg:col-span-1" : "lg:col-span-1"
                  } ${isExpanded ? "row-span-2" : ""}`}
                >
                  {/* Card Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Content */}
                  <div className="relative p-8">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-2xl shadow-lg mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 text-2xl">
                      {department.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent group-hover:from-orange-600 group-hover:to-yellow-600 transition-all duration-300">
                      {department.text}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-base text-justify  group-hover:text-gray-700 transition-colors duration-300 mb-6">
                      {department.description}
                    </p>

                    {/* Details Section - Expandable */}
                    <div
                      className={`transition-all duration-500 overflow-hidden ${
                        isExpanded
                          ? "max-h-screen opacity-100 overflow-y-auto"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="border-t border-yellow-200 pt-6 mt-6">
                        <h4 className="text-lg font-semibold text-yellow-700 mb-4">
                          Department Focus Areas:
                        </h4>
                        <div className="space-y-3">
                          {department.details.map((detail, detailIndex) => (
                            <div
                              key={detailIndex}
                              className="flex items-start space-x-3"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-700 text-sm leading-relaxed">
                                {detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="mt-6 flex items-center text-orange-500 hover:text-orange-600 transition-colors duration-300 font-medium text-sm"
                    >
                      <span className="mr-2">
                        {isExpanded ? "Show Less" : "View Details"}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 transition-transform duration-300" />
                      ) : (
                        <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                      )}
                    </button>

                    {/* Navigate to Discipleship (Kingdom Discipleship only) */}
                    {department.text === "Kingdom Discipleship" && (
                      <div
                        onClick={() => navigate("/discipleship")}
                        className="mt-4 flex items-center text-yellow-600 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300 cursor-pointer hover:text-yellow-700"
                      >
                        <span className="text-sm font-medium mr-2">
                          Learn More
                        </span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-full blur-xl transform translate-x-6 -translate-y-6 group-hover:scale-150 transition-transform duration-500"></div>

                  {/* Bottom decorative gradient when expanded */}
                  {isExpanded && (
                    <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-yellow-50/30 to-transparent"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    // //
  );
};

export default Departments;
