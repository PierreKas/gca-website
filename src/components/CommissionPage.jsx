import React, { useState } from "react";
import video1 from "../assets/video1.mp4";
import comPicture from "../assets/program-pictures/s-serv1.jpg";
import {
  ArrowRight,
  List,
  Mail,
  MessageSquare,
  Send,
  User,
} from "lucide-react";
import { commissions } from "../constants";
const CommissionPage = (comission) => {
  comission = localStorage.getItem("comission");
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();

    if (href === "#hero") {
      // Scroll to top for home
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Scroll to specific section
      const element = document.querySelector(href);
      if (element) {
        const navbarHeight = 80; // Adjust based on your navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }

    // Close mobile drawer after clicking
    setMobileDrawerOpen(false);
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    selectedCommission: "",
  });
  // Form handlers
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };
  return (
    <div className="relative flex flex-col items-center mt-0 lg:mt-0 min-h-screen">
      {commissions
        .filter((com) => com.name === comission)
        .map((com, index) => (
          <img
            key={index}
            src={com.images[0]}
            className="absolute inset-0 w-full h-72 object-cover z-0"
            alt=""
          />
        ))}

      <div className="absolute inset-0 bg-black h-72 opacity-50 z-10"></div>
      <div className=" relative flex flex-col items-center z-20 mt-30 ">
        <h1 className="uppercase text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide bg-gradient-to-r from-white to-zinc-100 text-transparent font-bold bg-clip-text">
          welcome to {comission} commission
        </h1>
      </div>
      <section className="lg:py-36 px-4 bg-gradient-to-br from-amber-50 to-yellow-100 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Two Column Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Vision, Mission, Theme */}
            <div className="space-y-6 pt-20 ">
              {/* Vision Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-yellow-300">
                <div className="text-4xl font-bold text-gray-800 mb-4 flex items-center uppercase">
                  About this commission
                </div>
                <hr className="w-48 h-1 bg-gradient-to-r from-yellow-300 to-red-600 border-0 rounded my-4" />
                {commissions
                  .filter((com) => com.name === comission)
                  .map((com, index) => (
                    <p
                      key={index}
                      className="text-gray-700 leading-relaxed text-xl"
                    >
                      {com.description}
                    </p>
                  ))}
              </div>
            </div>

            {/* Right Column - Pastor's Photo and Church Description */}
            <div className="space-y-8">
              {commissions
                .filter((com) => com.name === comission)
                .map((com, index) => (
                  <img
                    key={index}
                    src={com.images[1]}
                    className="w-140 h-100  object-cover rounded-2xl shadow-lg mx-auto"
                    alt=""
                  />
                ))}
              {/* <img
                src={comPicture}
                alt="Assembly"
                className="w-140 h-100  object-cover rounded-2xl shadow-lg mx-auto"
              /> */}
            </div>
          </div>
        </div>
      </section>
      <div className="transition-all duration-1000 delay-500 lg:w-1/2 py-12 px-4 sm:p-8 ">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-300 to-red-600 dark:from-blue-400 dark:to-blue-600 rounded-full flex items-center justify-center mr-4">
              <Send className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-red-600 dark:from-blue-400 dark:to-blue-600 text-transparent bg-clip-text">
              Join {comission} Commission
            </h3>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <div className="block text-sm font-medium  dark:text-white text-gray-700 mb-2">
                Names
              </div>
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                name="name"
                className="w-full pl-10 pr-4 py-3 bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent dark:text-white text-gray-900 placeholder-gray-400 transition-all duration-200"
                placeholder="Your full names"
              />
            </div>

            <div>
              <div className="block text-sm font-medium dark:text-white text-gray-700 mb-2">
                Email Address
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  name="email"
                  className="w-full pl-10 pr-4 py-3 bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent dark:text-white text-gray-900 placeholder-gray-400 transition-all duration-200"
                  placeholder="myemailaddress@email.com"
                />
              </div>
            </div>

            <div>
              <div className="block text-sm font-medium dark:text-white text-gray-700 mb-2">
                Message
              </div>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <textarea
                  value={formData.message}
                  onChange={handleInputChange}
                  name="message"
                  rows={4}
                  className="w-full pl-10 pr-4 py-3 bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent dark:text-white text-gray-900 placeholder-gray-400 transition-all duration-200 resize-none"
                  placeholder="Any Message for us"
                />
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="group w-full cursor-pointer bg-gradient-to-r from-yellow-300 to-red-600 dark:from-blue-400 dark:to-blue-600 hover:from-yellow-700 hover:to-red-900 dark:hover:from-blue-500 dark:hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Send the message</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommissionPage;
