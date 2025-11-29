import React from "react";
import { missions } from "../constants/index.jsx";
import parentsPicture from "../assets/program-pictures/s-serv1.jpg";
import { Youtube } from "lucide-react";

const PastSermons = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-amber-50 to-yellow-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* <div className="space-y-8">
            <img
              src={parentsPicture}
              alt="Assembly"
              className="w-140 h-100  object-cover rounded-2xl shadow-lg mx-auto"
            />
          </div> */}
          <div>
            <div className="h-[350px]  rounded-2xl overflow-hidden  shadow-lg mx-auto w-full max-w-4xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/J5w74l1R8yc"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="space-y-6 pt-20 ">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-yellow-300">
              <div className="text-4xl font-bold text-gray-800 mb-4 flex items-center uppercase">
                Watch our sermons
              </div>
              <hr className="w-48 h-1 bg-gradient-to-r from-yellow-300 to-red-600 border-0 rounded my-4" />

              <div className="pt-5">
                <a
                  href="https://www.youtube.com/@kingdombelieverschurch/streams"
                  target="_blank"
                  // className="bg-gradient-to-r from-yellow-300 to-red-600 px-4  py-3 mx-3 rounded-md text-white"
                >
                  {/* {" "}
                  <div className="flex items-center gap-3">
                    <Youtube />
                    Youtube Live
                  </div>
                  Watch more */}
                  <button className=" bg-red-600 cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 shadow-md">
                    <div className="flex items-center gap-3">
                      <Youtube />
                      Youtube Live
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastSermons;
