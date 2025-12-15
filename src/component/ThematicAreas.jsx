import React from "react";
import { thematicAreas } from "../constants";
import { Activity } from "lucide-react";

const ThematicAreas = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-gray-50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#607838]/10 rounded-full mb-4">
            <span className="text-[#607838] font-semibold text-sm uppercase tracking-wide">
              Our Focus
            </span>
          </div>
          <h2 className="text-5xl font-bold text-[#607838] mb-4">
            Our Thematic Areas
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Targeted interventions across key sectors for community
            transformation
          </p>
        </div>

        <div className="space-y-16">
          {thematicAreas.map((area, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-[#F4A82D] to-[#607838] rounded-2xl text-white shadow-lg">
                  {area.icon}
                </div>
                <h3 className="text-3xl font-bold text-[#607838]">
                  {area.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {area.description}
                </p>
                <div className="bg-linear-to-br from-gray-50 to-white p-6 rounded-xl border-l-4 border-[#F4A82D]">
                  <h4 className="font-semibold text-[#607838] mb-4">
                    Key Initiatives:
                  </h4>
                  <ul className="space-y-3">
                    {area.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-600"
                      >
                        <div className="w-2 h-2 bg-[#F4A82D] rounded-full mt-2 shrink-0"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex-1">
                <div className="relative group">
                  <div className="absolute inset-0 bg-linear-to-br from-[#607838] to-[#F4A82D] rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                  <div className="relative bg-white p-4 rounded-3xl shadow-xl">
                    <div className="aspect-video bg-linear-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center text-gray-500">
                      <Activity size={64} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThematicAreas;
