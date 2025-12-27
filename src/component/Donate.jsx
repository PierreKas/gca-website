import React from "react";
import { Heart, Shield, Award, ExternalLink } from "lucide-react";

const DonationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#607838] to-[#6B8E4E] text-white py-20 px-4">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 animate-pulse" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Make a Difference Today
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Your generosity transforms lives in vulnerable communities
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Thank You Message */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#607838] to-[#F4A82D] flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Thank You for Choosing to Make a Difference
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Game Connect Africa honors your generosity. Thank you for
                choosing to make a difference in the lives of vulnerable people
                and communities affected by ultra-poverty.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              We rely on donations like yours to implement sports-based and
              wholistic ministry programs including:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Church Capacity Building",
                "Child Education Sponsorship",
                "Community Health",
                "Food Security",
                "WASH Programs",
                "Financial Literacy & Livelihoods",
              ].map((program, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gradient-to-r from-[#6B8E4E]/5 to-[#F4A82D]/5 p-4 rounded-lg"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#607838] to-[#F4A82D]"></div>
                  <span className="text-gray-700 font-medium">{program}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fiscal Sponsorship Info */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#607838] to-[#F4A82D] flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Tax-Deductible Donations
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are now a fiscally sponsored project, and all our donations
                will be receipted by the Christian Ministry Alliance.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Alliance is a U.S. registered 501(c)(3) tax-deductible
                charity with the Internal Revenue Service and has a Candid
                Platinum Seal (formerly GuideStar), the highest rating available
                for nonprofit transparency and accountability.
              </p>
              <div className="flex items-center gap-2 bg-gradient-to-r from-[#6B8E4E]/10 to-[#F4A82D]/10 p-4 rounded-lg">
                <Award className="w-5 h-5 text-[#607838]" />
                <span className="font-semibold text-gray-800">
                  Tax ID: 46-3408177
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Donation Button */}
        <div className="bg-gradient-to-r from-[#607838] to-[#6B8E4E] rounded-2xl shadow-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Make an Impact?
          </h3>
          <p className="text-lg mb-8 text-white/90">
            Your donation directly supports vulnerable communities in the
            Eastern Busoga Region
          </p>
          <a
            href="https://apps.christianministryalliance.org/fs3099-gca"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[#607838] px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Donate Now
            <ExternalLink className="w-5 h-5" />
          </a>
          <p className="mt-6 text-sm text-white/80">
            You will be redirected to our secure donation portal
          </p>
        </div>

        {/* Impact Statement */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 italic text-lg">
            "Together, we can transform lives and build stronger, healthier
            communities through the power of sport and wholistic ministry."
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#F4A82D] text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white">
            For questions about donations, please contact us at{" "}
            <a
              href="mailto:gameconnectafica@gmail.com"
              className="text-[#607838] hover:underline"
            >
              gameconnectafica@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
