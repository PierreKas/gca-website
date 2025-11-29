import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  User,
  MessageSquare,
  Youtube,
} from "lucide-react";

const ContactAndLocation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="py-16  bg-gradient-to-br from-amber-50 to-yellow-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Contact{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-600 text-transparent bg-clip-text">
              Us
            </span>
          </h2> */}
          <span className="bg-neutral-900  text-yellow-300 rounded-full h06 text-sm font-medium px-2 py-1 uppercase">
            Contact Us
          </span>
          <p className="text-xl text-gray-600 max-w-3xl mt-10 mx-auto">
            We'd love to hear from you. Get in touch with Kingdom Believers
            Church.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Enter your message..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-yellow-300 to-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h3>

              <div className="space-y-6">
                {/* Phone Numbers */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-orange-500" />
                    Phone Numbers
                  </h4>
                  <div className="space-y-2 ml-7">
                    <a
                      href="tel:+25070000000"
                      className="block text-gray-600 hover:text-orange-500 transition-colors"
                    >
                      +250 700 000 000
                    </a>
                    <a
                      href="tel:+25070000000"
                      className="block text-gray-600 hover:text-orange-500 transition-colors"
                    >
                      +250 700 000 000
                    </a>
                  </div>
                </div>

                {/* Email Addresses */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-orange-500" />
                    Email Addresses
                  </h4>
                  <div className="space-y-2 ml-7">
                    <a
                      href="mailto:pierrekasanani@gmail.com"
                      className="block text-gray-600 hover:text-orange-500 transition-colors"
                    >
                      kbc@gmail.com
                    </a>
                    <a
                      href="mailto:pastor@kingdombelievers.rw"
                      className="block text-gray-600 hover:text-orange-500 transition-colors"
                    >
                      info@kingdombelievers.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-orange-500" />
                    Our Location
                  </h4>
                  <div className="ml-7">
                    <p className="text-gray-600">
                      Kingdom Believers Church
                      <br />
                      6 KK 515 St
                      <br />
                      Kigali, Rwanda
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900">
                  Find Us Here
                </h3>
              </div>
              <div className="h-64 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5064094439845!2d30.0618851!3d-1.9365671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411d0bc8!2sKK%20515%20St%2C%20Kigali!5e0!3m2!1sen!2srw!4v1635789123456!5m2!1sen!2srw"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kingdom Believers Church Location"
                />

                {/* Fallback content if map doesn't load */}
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-500 pointer-events-none">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-2 text-orange-500" />
                    <p className="text-sm">Loading map...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional CTA */}
        {/* <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Visit Us This Sunday
            </h3>
            <p className="text-gray-600 mb-6">
              Join us for worship and fellowship. Everyone is welcome at Kingdom
              Believers Church.
            </p>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 shadow-md">
              Online
            </button>
          </div>
        </div> */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Us in Live
            </h3>
            <p className="text-gray-600 mb-6">
              Join us for worship and fellowship. Everyone is welcome at Kingdom
              Believers Church.
            </p>
            <a
              href="https://www.youtube.com/@kingdombelieverschurch/streams"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className=" bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 shadow-md">
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
  );
};

export default ContactAndLocation;
