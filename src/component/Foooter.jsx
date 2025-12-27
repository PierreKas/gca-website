import React from "react";
import { organizationInfo, partners } from "../constants";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#607838] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* About Column */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-6 text-[#F4A82D]">
              Game Connect Africa
            </h3>
            <p className="text-gray-200 leading-relaxed mb-6">
              {/* {organizationInfo.description} */}
              Transforming lives through the power of play. Empowering
              communities for a better Africa through sports, education, and
              healthcare.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://web.facebook.com/people/Game-Connect-Africa/100082174097004/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F4A82D] flex items-center justify-center transition"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://x.com/GCAfricaUganda"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F4A82D] flex items-center justify-center transition"
              >
                <Twitter size={18} />
              </a>

              <a
                href="https://www.instagram.com/gameconnectafrica?igsh=dzdud3Zoc2JucHVl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F4A82D] flex items-center justify-center transition"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.linkedin.com/company/game-connect-africa/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F4A82D] flex items-center justify-center transition"
              >
                <Linkedin size={18} />
              </a>
            </div>

            {/* <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F4A82D] flex items-center justify-center transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F4A82D] flex items-center justify-center transition"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F4A82D] flex items-center justify-center transition"
              >
                <Instagram size={18} />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="hover:text-[#F4A82D] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#F4A82D] transition">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/thematic-areas"
                  className="hover:text-[#F4A82D] transition"
                >
                  Thematic Areas
                </a>
              </li>
              <li>
                <a href="/programs" className="hover:text-[#F4A82D] transition">
                  Programs
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#F4A82D] transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Partners & Stakeholders */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Our Partners</h4>
            {partners.map((category, i) => (
              <div key={i} className="mb-6">
                <p className="font-medium text-[#F4A82D] mb-2">
                  {category.category}
                </p>
                <ul className="text-sm space-y-1 text-gray-200">
                  {category.list.map((item, j) => (
                    <li key={j}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 shrink-0" />
                <p>Wakitaka Zone, Jinja Northen Division, Jinja</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="mt-1 shrink-0" />
                <p>+256 772 995 317 / +256 393 252 439 / +256 752 448 518</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="mt-1 shrink-0" />
                <p>gameconnectafica@gmail.com</p>
              </div>
            </div>

            <button className="mt-8 w-full bg-[#F4A82D] hover:bg-[#F4A82D]/90 text-[#607838] font-bold py-3 rounded-full transition">
              <a href="/donation">Donate Now</a>
            </button>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Game Connect Africa. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
