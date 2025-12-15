// // const Foooter = () => {
// //   return (
// //     <footer className="bg-[#607838] text-white py-8 text-center">
// //       <p>
// //         © {new Date().getFullYear()} Game Connect Africa. All rights reserved.
// //       </p>
// //     </footer>
// //   );
// // };

// // export default Foooter;
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
              communities in Eastern Busoga Region through sports, education,
              and healthcare.
            </p>
            <div className="flex space-x-4">
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
            </div>
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
                <a
                  href="/get-involved"
                  className="hover:text-[#F4A82D] transition"
                >
                  Get Involved
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
                <p>
                  Eastern Busoga Region,
                  <br />
                  Uganda
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} />
                <p>+256 123 456 789</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} />
                <p>info@gameconnectafrica.org</p>
              </div>
            </div>
            <button className="mt-8 w-full bg-[#F4A82D] hover:bg-[#F4A82D]/90 text-[#607838] font-bold py-3 rounded-full transition">
              Donate Now
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
// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-br from-[#607838] via-[#607838] to-[#4a5e2d] text-white">
//       <div className="max-w-7xl mx-auto px-6 py-16">
//         <div className="grid md:grid-cols-4 gap-12 mb-12">
//           {/* About Section */}
//           <div className="md:col-span-2">
//             <h3 className="text-2xl font-bold mb-4 text-[#F4A82D]">
//               Game Connect Africa
//             </h3>
//             <p className="text-gray-200 mb-6 leading-relaxed">
//               Transforming lives through the power of play. Empowering
//               communities in Eastern Busoga Region through sports, education,
//               and healthcare.
//             </p>
//             <div className="flex gap-4">
//               <a
//                 href="#"
//                 className="w-10 h-10 bg-white/10 hover:bg-[#F4A82D] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
//               >
//                 <Facebook size={20} />
//               </a>
//               <a
//                 href="#"
//                 className="w-10 h-10 bg-white/10 hover:bg-[#F4A82D] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
//               >
//                 <Twitter size={20} />
//               </a>
//               <a
//                 href="#"
//                 className="w-10 h-10 bg-white/10 hover:bg-[#F4A82D] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
//               >
//                 <Instagram size={20} />
//               </a>
//               <a
//                 href="#"
//                 className="w-10 h-10 bg-white/10 hover:bg-[#F4A82D] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
//               >
//                 <Linkedin size={20} />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4 text-[#F4A82D]">
//               Quick Links
//             </h4>
//             <ul className="space-y-3">
//               {[
//                 "About Us",
//                 "Programs",
//                 "Thematic Areas",
//                 "Get Involved",
//                 "Contact",
//               ].map((link) => (
//                 <li key={link}>
//                   <a
//                     href="#"
//                     className="text-gray-200 hover:text-[#F4A82D] transition-colors duration-200 flex items-center gap-2 group"
//                   >
//                     <ArrowRight
//                       size={16}
//                       className="group-hover:translate-x-1 transition-transform"
//                     />
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4 text-[#F4A82D]">
//               Contact Us
//             </h4>
//             <ul className="space-y-4">
//               <li className="flex items-start gap-3">
//                 <MapPin
//                   size={20}
//                   className="text-[#F4A82D] flex-shrink-0 mt-1"
//                 />
//                 <span className="text-gray-200">
//                   Eastern Busoga Region, Uganda
//                 </span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Phone size={20} className="text-[#F4A82D] flex-shrink-0" />
//                 <span className="text-gray-200">+256 123 456 789</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Mail size={20} className="text-[#F4A82D] flex-shrink-0" />
//                 <span className="text-gray-200">
//                   info@gameconnectafrica.org
//                 </span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-white/20 pt-8 mt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-gray-200 text-center md:text-left">
//               © {new Date().getFullYear()} Game Connect Africa. All rights
//               reserved.
//             </p>
//             <div className="flex gap-6 text-sm">
//               <a
//                 href="#"
//                 className="text-gray-200 hover:text-[#F4A82D] transition-colors"
//               >
//                 Privacy Policy
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-200 hover:text-[#F4A82D] transition-colors"
//               >
//                 Terms of Service
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };
// export default Footer;
