// // import React from "react";
// // import logo from "../assets/kbc_logo.jpeg";
// // import {
// //   Phone,
// //   Mail,
// //   MapPin,
// //   Church,
// //   Facebook,
// //   Instagram,
// //   Youtube,
// //   Twitter,
// //   X,
// // } from "lucide-react";
// // const Footer = () => {
// //   return (
// //     <footer className=" border-t  py-10 border-e-neutral-700 bg-gradient-to-r from-yellow-300 to-red-600 ">
// //       <div className="pl-0 lg:pl-40">
// //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
// //           <div className="space-y-6">
// //             <div className="flex items-center flex-shrink-0 ">
// //               <span className=" text-xl tracking-tight">Services</span>
// //             </div>
// //             <div>
// //               <h4 className="text-lg font-semibold text-black mb-3 flex items-center">
// //                 <Church className="w-5 h-5 mr-2 text-white" />
// //                 Thursday
// //               </h4>
// //               <div className="space-y-2 ml-7">
// //                 <p className="block text-black hover:text-white transition-colors">
// //                   6pm-8pm
// //                 </p>
// //               </div>
// //             </div>
// //             <div>
// //               <h4 className="text-lg font-semibold text-black mb-3 flex items-center">
// //                 <Church className="w-5 h-5 mr-2 text-white" />
// //                 Saturday
// //               </h4>
// //               <div className="space-y-2 ml-7">
// //                 <p className="block text-black hover:text-white transition-colors">
// //                   10am-1pm(Kids Service)
// //                 </p>
// //               </div>
// //             </div>
// //             <div>
// //               <h4 className="text-lg font-semibold text-black mb-3 flex items-center">
// //                 <Church className="w-5 h-5 mr-2 text-white" />
// //                 Sunday
// //               </h4>
// //               <div className="space-y-2 ml-7">
// //                 <p className="block text-black hover:text-white transition-colors">
// //                   First Service: 8am-10am
// //                 </p>
// //                 <p className="block text-black hover:text-white transition-colors">
// //                   Second Service: 10:30am-12:30pm
// //                 </p>
// //                 <p className="block text-black hover:text-white transition-colors">
// //                   Teenagers Service: 1pm-3pm
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //           <div>
// //             <div className="flex items-center flex-shrink-0">
// //               <span className=" text-xl tracking-tight">
// //                 Our contacts and address
// //               </span>
// //             </div>
// //             <div className="space-y-6">
// //               {/* Phone Numbers */}
// //               <div>
// //                 <h4 className="text-lg font-semibold text-black mb-3 flex items-center">
// //                   <Phone className="w-5 h-5 mr-2 text-white" />
// //                   Phone Numbers
// //                 </h4>
// //                 <div className="space-y-2 ml-7">
// //                   <a
// //                     href="tel:+25070000000"
// //                     className="block text-black hover:text-white transition-colors"
// //                   >
// //                     +250 700 000 000
// //                   </a>
// //                   <a
// //                     href="tel:+25070000000"
// //                     className="block text-black hover:text-white transition-colors"
// //                   >
// //                     +250 700 000 000
// //                   </a>
// //                 </div>
// //               </div>

// //               {/* Email Addresses */}
// //               <div>
// //                 <h4 className="text-lg font-semibold text-black mb-3 flex items-center">
// //                   <Mail className="w-5 h-5 mr-2 text-white" />
// //                   Email Addresses
// //                 </h4>
// //                 <div className="space-y-2 ml-7">
// //                   <a
// //                     href="mailto:pierrekasanani@gmail.com"
// //                     className="block text-black hover:text-white transition-colors"
// //                   >
// //                     kbc@gmail.com
// //                   </a>
// //                   <a
// //                     href="mailto:pastor@kingdombelievers.rw"
// //                     className="block text-black hover:text-white transition-colors"
// //                   >
// //                     info@kingdombelievers.com
// //                   </a>
// //                 </div>
// //               </div>
// //               <div>
// //                 <h4 className="text-lg font-semibold text-black mb-3 flex items-center">
// //                   <MapPin className="w-5 h-5 mr-2 text-white" />
// //                   Kingdom Believers Church
// //                 </h4>
// //                 <div className="space-y-2 ml-7">
// //                   <p className="block text-black hover:text-white transition-colors">
// //                     6 KK 515 St
// //                   </p>
// //                   <p className="block text-black hover:text-white transition-colors">
// //                     Kigali, Rwanda
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="space-y-6">
// //             <div className="flex items-center flex-shrink-0">
// //               <span className="text-xl tracking-tight">Follow Us</span>
// //             </div>
// //             <div className="space-y-4">
// //               <div className="flex flex-col space-y-3">
// //                 <a
// //                   href="https://facebook.com"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="flex items-center text-black hover:text-white transition-colors group"
// //                 >
// //                   <Facebook className="w-5 h-5 mr-3 text-white group-hover:text-blue-600" />
// //                   Facebook
// //                 </a>
// //                 <a
// //                   href="https://instagram.com"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="flex items-center text-black hover:text-white transition-colors group"
// //                 >
// //                   <Instagram className="w-5 h-5 mr-3 text-white group-hover:text-pink-500" />
// //                   Instagram
// //                 </a>
// //                 <a
// //                   href="https://youtube.com/@kingdombelieverschurch"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="flex items-center text-black hover:text-white transition-colors group"
// //                 >
// //                   <Youtube className="w-5 h-5 mr-3 text-white group-hover:text-red-500" />
// //                   YouTube
// //                 </a>
// //                 {/* <a
// //                   href="https://x.com"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="flex items-center text-black hover:text-white transition-colors group"
// //                 >
// //                   <X className="w-5 h-5 mr-3 text-white group-hover:text-blue-400" />
// //                   X
// //                 </a> */}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //         <p className="text-center mt-10 font-bold">
// //           © 2025 Kingdom Believers Church. All rights reserved.
// //         </p>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;
// import React from "react";
// import logo from "../assets/kbc_logo.jpeg";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Church,
//   Facebook,
//   Instagram,
//   Youtube,
//   Twitter,
//   X,
//   Clock,
// } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200/50">
//       {/* Main Footer Content */}
//       <div className="container mx-auto px-4 lg:px-16 py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
//           {/* Services Section */}
//           <div className="space-y-8">
//             <div className="flex items-center">
//               <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full mr-4"></div>
//               <h3 className="text-2xl font-bold text-gray-800">Services</h3>
//             </div>

//             <div className="space-y-6">
//               {/* Thursday Service */}
//               <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
//                 <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
//                   <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
//                     <Church className="w-5 h-5 text-blue-600" />
//                   </div>
//                   Thursday
//                 </h4>
//                 <div className="ml-13 flex items-center text-gray-600">
//                   <Clock className="w-4 h-4 mr-2 text-blue-500" />
//                   <span className="font-medium">6:00 PM - 8:00 PM</span>
//                 </div>
//               </div>

//               {/* Saturday Service */}
//               <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
//                 <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
//                   <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
//                     <Church className="w-5 h-5 text-green-600" />
//                   </div>
//                   Saturday
//                 </h4>
//                 <div className="ml-13 flex items-center text-gray-600">
//                   <Clock className="w-4 h-4 mr-2 text-green-500" />
//                   <span className="font-medium">10:00 AM - 1:00 PM</span>
//                   <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
//                     Kids Service
//                   </span>
//                 </div>
//               </div>

//               {/* Sunday Services */}
//               <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
//                 <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//                   <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
//                     <Church className="w-5 h-5 text-purple-600" />
//                   </div>
//                   Sunday
//                 </h4>
//                 <div className="ml-13 space-y-3">
//                   <div className="flex items-center text-gray-600">
//                     <Clock className="w-4 h-4 mr-2 text-purple-500" />
//                     <span className="font-medium">
//                       First Service: 8:00 AM - 10:00 AM
//                     </span>
//                   </div>
//                   <div className="flex items-center text-gray-600">
//                     <Clock className="w-4 h-4 mr-2 text-purple-500" />
//                     <span className="font-medium">
//                       Second Service: 10:30 AM - 12:30 PM
//                     </span>
//                   </div>
//                   <div className="flex items-center text-gray-600">
//                     <Clock className="w-4 h-4 mr-2 text-purple-500" />
//                     <span className="font-medium">
//                       Teenagers Service: 1:00 PM - 3:00 PM
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div className="flex items-center">
//               <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full mr-4"></div>
//               <h3 className="text-2xl font-bold text-gray-800">
//                 Contact & Location
//               </h3>
//             </div>

//             <div className="space-y-6">
//               {/* Phone Numbers */}
//               <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
//                 <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//                   <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
//                     <Phone className="w-5 h-5 text-blue-600" />
//                   </div>
//                   Phone Numbers
//                 </h4>
//                 <div className="ml-13 space-y-2">
//                   <a
//                     href="tel:+25070000000"
//                     className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium hover:underline"
//                   >
//                     +250 700 000 000
//                   </a>
//                   <a
//                     href="tel:+25070000000"
//                     className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium hover:underline"
//                   >
//                     +250 700 000 000
//                   </a>
//                 </div>
//               </div>

//               {/* Email Addresses */}
//               <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
//                 <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//                   <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
//                     <Mail className="w-5 h-5 text-green-600" />
//                   </div>
//                   Email Addresses
//                 </h4>
//                 <div className="ml-13 space-y-2">
//                   <a
//                     href="mailto:kbc@gmail.com"
//                     className="block text-gray-600 hover:text-green-600 transition-colors duration-200 font-medium hover:underline"
//                   >
//                     kbc@gmail.com
//                   </a>
//                   <a
//                     href="mailto:info@kingdombelievers.com"
//                     className="block text-gray-600 hover:text-green-600 transition-colors duration-200 font-medium hover:underline"
//                   >
//                     info@kingdombelievers.com
//                   </a>
//                 </div>
//               </div>

//               {/* Address */}
//               <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
//                 <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//                   <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
//                     <MapPin className="w-5 h-5 text-purple-600" />
//                   </div>
//                   Our Location
//                 </h4>
//                 <div className="ml-13 space-y-1">
//                   <p className="text-gray-600 font-medium">
//                     Kingdom Believers Church
//                   </p>
//                   <p className="text-gray-600">6 KK 515 St</p>
//                   <p className="text-gray-600">Kigali, Rwanda</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Social Media */}
//           <div className="space-y-8">
//             <div className="flex items-center">
//               <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full mr-4"></div>
//               <h3 className="text-2xl font-bold text-gray-800">
//                 Connect With Us
//               </h3>
//             </div>

//             <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
//               <p className="text-gray-600 mb-6 font-medium">
//                 Follow us on social media for updates, sermons, and community
//                 events.
//               </p>

//               <div className="space-y-4">
//                 <a
//                   href="https://facebook.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-all duration-200 group"
//                 >
//                   <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-500 transition-colors duration-200">
//                     <Facebook className="w-5 h-5 text-blue-600 group-hover:text-white" />
//                   </div>
//                   <span className="text-gray-700 font-medium group-hover:text-blue-600">
//                     Facebook
//                   </span>
//                 </a>

//                 <a
//                   href="https://instagram.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center p-3 rounded-lg hover:bg-pink-50 transition-all duration-200 group"
//                 >
//                   <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-200">
//                     <Instagram className="w-5 h-5 text-pink-600 group-hover:text-white" />
//                   </div>
//                   <span className="text-gray-700 font-medium group-hover:text-pink-600">
//                     Instagram
//                   </span>
//                 </a>

//                 <a
//                   href="https://youtube.com/@kingdombelieverschurch"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center p-3 rounded-lg hover:bg-red-50 transition-all duration-200 group"
//                 >
//                   <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-red-500 transition-colors duration-200">
//                     <Youtube className="w-5 h-5 text-red-600 group-hover:text-white" />
//                   </div>
//                   <span className="text-gray-700 font-medium group-hover:text-red-600">
//                     YouTube
//                   </span>
//                 </a>
//               </div>
//             </div>

//             {/* Church Logo */}
//             <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
//               <img
//                 src={logo}
//                 alt="Kingdom Believers Church Logo"
//                 className="w-24 h-24 mx-auto rounded-full object-cover shadow-md"
//               />
//               <h4 className="mt-4 text-lg font-semibold text-gray-800">
//                 Kingdom Believers Church
//               </h4>
//               <p className="text-gray-600 text-sm mt-1">
//                 Building Faith, Transforming Lives
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Copyright Section */}
//       <div className="border-t border-gray-200/50 bg-white/50">
//         <div className="container mx-auto px-4 lg:px-16 py-6">
//           <div className="flex flex-col md:flex-row items-center justify-between">
//             <p className="text-gray-600 font-medium text-sm">
//               © 2025 Kingdom Believers Church. All rights reserved.
//             </p>
//             <div className="flex items-center mt-4 md:mt-0">
//               <div className="flex space-x-4">
//                 <span className="text-gray-500 text-sm">
//                   Made with ❤️ for the Kingdom
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import logo from "../assets/kbc_logo.jpeg";
import {
  Phone,
  Mail,
  MapPin,
  Church,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  X,
  Clock,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-t border-gray-200/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Services Section */}
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full mr-4"></div>
              <h3 className="text-2xl font-bold text-gray-800">Services</h3>
            </div>

            <div className="space-y-6">
              {/* Thursday Service */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                    <Church className="w-5 h-5 text-yellow-600" />
                  </div>
                  Thursday
                </h4>
                <div className="ml-13 flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2 text-yellow-500" />
                  <span className="font-medium">6:00 PM - 8:00 PM</span>
                </div>
              </div>

              {/* Saturday Service */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <Church className="w-5 h-5 text-green-600" />
                  </div>
                  Saturday
                </h4>
                <div className="ml-13 flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2 text-green-500" />
                  <span className="font-medium">10:00 AM - 1:00 PM</span>
                  <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                    Kids Service
                  </span>
                </div>
              </div>

              {/* Sunday Services */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <Church className="w-5 h-5 text-purple-600" />
                  </div>
                  Sunday
                </h4>
                <div className="ml-13 space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-purple-500" />
                    <span className="font-medium">
                      First Service: 8:00 AM - 10:00 AM
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-purple-500" />
                    <span className="font-medium">
                      Second Service: 10:30 AM - 12:30 PM
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-purple-500" />
                    <span className="font-medium">
                      Teenagers Service: 1:00 PM - 3:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full mr-4"></div>
              <h3 className="text-2xl font-bold text-gray-800">
                Contact & Location
              </h3>
            </div>

            <div className="space-y-6">
              {/* Phone Numbers */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                    <Phone className="w-5 h-5 text-yellow-600" />
                  </div>
                  Phone Numbers
                </h4>
                <div className="ml-13 space-y-2">
                  <a
                    href="tel:+25070000000"
                    className="block text-gray-600 hover:text-yellow-600 transition-colors duration-200 font-medium hover:underline"
                  >
                    +250 700 000 000
                  </a>
                  <a
                    href="tel:+25070000000"
                    className="block text-gray-600 hover:text-yellow-600 transition-colors duration-200 font-medium hover:underline"
                  >
                    +250 700 000 000
                  </a>
                </div>
              </div>

              {/* Email Addresses */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <Mail className="w-5 h-5 text-green-600" />
                  </div>
                  Email Addresses
                </h4>
                <div className="ml-13 space-y-2">
                  <a
                    href="mailto:kbc@gmail.com"
                    className="block text-gray-600 hover:text-green-600 transition-colors duration-200 font-medium hover:underline"
                  >
                    kbc@gmail.com
                  </a>
                  <a
                    href="mailto:info@kingdombelievers.com"
                    className="block text-gray-600 hover:text-green-600 transition-colors duration-200 font-medium hover:underline"
                  >
                    info@kingdombelievers.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  Our Location
                </h4>
                <div className="ml-13 space-y-1">
                  <p className="text-gray-600 font-medium">
                    Kingdom Believers Church
                  </p>
                  <p className="text-gray-600">6 KK 515 St</p>
                  <p className="text-gray-600">Kigali, Rwanda</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full mr-4"></div>
              <h3 className="text-2xl font-bold text-gray-800">
                Connect With Us
              </h3>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <p className="text-gray-600 mb-6 font-medium">
                Follow us on social media for updates, sermons, and community
                events.
              </p>

              <div className="space-y-4">
                <a
                  href="https://www.tiktok.com/@kingdom.believers.church?_t=ZM-8zQBdT5duQX&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-lg hover:bg-yellow-50 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-yellow-500 transition-colors duration-200">
                    <FaTiktok className="w-5 h-5 text-yellow-600 group-hover:text-white" />
                  </div>
                  <span className="text-gray-700 font-medium group-hover:text-yellow-600">
                    TikTok
                  </span>
                </a>

                <a
                  href="https://www.instagram.com/kingdom_believers_church?igsh=eXR6dmpsMXcwNWhi&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-lg hover:bg-pink-50 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-200">
                    <Instagram className="w-5 h-5 text-pink-600 group-hover:text-white" />
                  </div>
                  <span className="text-gray-700 font-medium group-hover:text-pink-600">
                    Instagram
                  </span>
                </a>

                <a
                  href="https://youtube.com/@kingdombelieverschurch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-lg hover:bg-red-50 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-red-500 transition-colors duration-200">
                    <Youtube className="w-5 h-5 text-red-600 group-hover:text-white" />
                  </div>
                  <span className="text-gray-700 font-medium group-hover:text-red-600">
                    YouTube
                  </span>
                </a>
              </div>
            </div>

            {/* Church Logo */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <img
                src={logo}
                alt="Kingdom Believers Church Logo"
                className="w-24 h-24 mx-auto rounded-full object-cover shadow-md"
              />
              <h4 className="mt-4 text-lg font-semibold text-gray-800">
                Kingdom Believers Church
              </h4>
              <p className="text-gray-600 text-sm mt-1">Matthew 5:17</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-200/50 bg-white/50">
        <div className="container mx-auto px-4 lg:px-16 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-600 font-medium text-sm">
              © 2025 Kingdom Believers Church. All rights reserved.
            </p>
            {/* <div className="flex items-center mt-4 md:mt-0">
              <div className="flex space-x-4">
                <span className="text-gray-500 text-sm">
                  Made with ❤️ for the Kingdom
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
