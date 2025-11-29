// import React from "react";

// const Leadership = () => {
//   return (
//     <div className="p-10 text-center">
//       <h2 className="text-2xl font-bold mb-4">Our Leadership</h2>
//       <p>Details about the church leadership will go here.</p>
//     </div>
//   );
// };

// export default Leadership;
import React from "react";
import hearderPicture from "../assets/program-pictures/f-serv1.jpg";
import { leadership } from "../constants/index.jsx";
const Leadership = () => {
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
          leadership
        </h1>
        <p className="mt-2.5 text-xl text-white text-center max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="relative py-20 bg-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/20 to-yellow-50/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-200/10 to-orange-200/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-200/10 to-yellow-200/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            {/* <div className="text-center ">
            <span className="bg-neutral-900 text-yellow-300 rounded-full h06 text-sm font-medium px-2 py-1 uppercase">
              Leadership
            </span>
          </div> */}
            <h2 className="mt-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-600 bg-clip-text text-transparent leading-tight">
              KBC Leadership
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Brief comment here
            </p>
          </div>

          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl shadow-xl border border-yellow-100/50 overflow-hidden">
                <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                  <div className="relative flex justify-center w-full md:w-auto">
                    <div className="w-48 h-48 md:w-72 md:h-72 rounded-full md:rounded-2xl overflow-hidden shadow-2xl ring-4 ring-yellow-200/50">
                      <img
                        src={leadership.overseer.image}
                        alt={leadership.overseer.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-2">
                      {leadership.overseer.name}
                    </h3>
                    <p className="text-xl font-semibold text-orange-600 mb-4">
                      {leadership.overseer.title}
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {leadership.overseer.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl shadow-xl border border-orange-100/50 overflow-hidden">
                <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                  {/* Image wrapper */}
                  <div className="relative flex justify-center w-full md:w-auto">
                    <div className="w-48 h-48 md:w-72 md:h-72 rounded-full md:rounded-2xl overflow-hidden shadow-2xl ring-4 ring-orange-200/50">
                      <img
                        src={leadership.seniorPastor.image}
                        alt={leadership.seniorPastor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Text section */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-2">
                      {leadership.seniorPastor.name}
                    </h3>
                    <p className="text-xl font-semibold text-yellow-600 mb-4">
                      {leadership.seniorPastor.title}
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {leadership.seniorPastor.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pastors Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-4">
                Our Pastoral Team
              </h3>
              <p className="text-gray-600 text-lg">Brief comment</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadership.pastors.map((pastor, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-yellow-100/50 overflow-hidden"
                >
                  <div className="relative p-8 text-center">
                    {/* <div className="relative inline-block mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg ring-4 ring-yellow-200/30 group-hover:ring-orange-200/50 transition-all duration-300">
                      <img
                        src={pastor.image}
                        alt={pastor.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div> */}
                    <div className="relative inline-block mb-6">
                      <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg ring-4 ring-yellow-200/30 group-hover:ring-orange-200/50 transition-all duration-300 bg-white flex items-center justify-center">
                        <img
                          src={pastor.image}
                          alt={pastor.name}
                          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    <h4 className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-2">
                      {pastor.name}
                    </h4>
                    <p className="text-orange-500 font-semibold mb-3">
                      {pastor.title}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {pastor.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deacons Section */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-4">
                Our Deacons
              </h3>
              <p className="text-gray-600 text-lg">Brief comment</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {leadership.deacons.map((deacon, index) => (
                <div key={index} className="group text-center">
                  <div className="relative inline-block mb-4">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden shadow-lg ring-4 ring-orange-200/30 group-hover:ring-yellow-200/50 transition-all duration-300 mx-auto">
                      <img
                        src={deacon.image}
                        alt={deacon.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <h4 className="text-sm md:text-base font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-1">
                    {deacon.name}
                  </h4>
                  <p className="text-yellow-600 text-xs md:text-sm font-medium">
                    {deacon.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
