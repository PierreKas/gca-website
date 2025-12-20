import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import video from "../assets/hero-vid/hero-vid2.mp4";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
        {/* Simplified dark overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Transforming Lives Through
            <span className="block text-[#F9A825] mt-2">The Power of Play</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Building a healthy, socially, and economically empowered community
            in Eastern Busoga Region through sports, education, and healthcare.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              to="/get-involved"
              className="group flex items-center gap-2 bg-[#F9A825] hover:bg-[#F9A825]/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              Get Involved
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/about"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border-2 border-white/30 hover:border-white/50"
            >
              <Play size={20} />
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">1000+</div>
              <div className="text-gray-300 mt-1">Children Reached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">5+</div>
              <div className="text-gray-300 mt-1">Communities Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">11+</div>
              <div className="text-gray-300 mt-1">Partner Organizations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">5+</div>
              <div className="text-gray-300 mt-1">Years of Impact</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/80 text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div> */}

      {/* Subtle accent glow - single color */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[#F9A825]/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default HeroSection;
