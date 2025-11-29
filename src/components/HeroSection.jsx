import React from "react";
import video1 from "../assets/video1.mp4";
const HeroSection = () => {
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
  return (
    <div className="relative flex flex-col items-center mt-0 lg:mt-0 min-h-screen">
      <video
        autoPlay
        loop
        muted
        //className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={video1} type="video/mp4" />
        Your browser doesn't support the video tag
      </video>

      <div className=" relative flex flex-col items-center z-20 mt-30 ">
        <h1 //className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide bg-gradient-to-r from-yellow-300 to-red-800 text-transparent bg-clip-text"
          className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide bg-gradient-to-r from-white to-gray-200 text-transparent font-bold bg-clip-text"
        >
          Kingdom Believers Church
        </h1>
        <p //className="mt-10 text-lg text-center text-neutral-500 max-w-4xl"
          className="mt-10 text-lg text-center text-white max-w-4xl"
        >
          Our vision is to possess a delivered heart with a kingdom mindset{" "}
        </p>
        <div className="flex justify-center my-10">
          <a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, "#about")}
            className="bg-gradient-to-r from-yellow-300 to-red-600 px-4 py-3 mx-3 rounded-md text-white"
          >
            Watch on Youtube
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="bg-gradient-to-r from-yellow-300 to-red-600 px-4 py-3 mx-3 rounded-md text-white"
          >
            {" "}
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
