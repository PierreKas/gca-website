import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  User,
  MessageSquare,
  Youtube,
  Globe,
  Calendar,
  ArrowRight,
  Sparkles,
  Copy,
  CheckCircle2,
} from "lucide-react";

const ContactAndLocation = () => {
  // const [theme, setTheme] = useState("dark");
  const [theme, setTheme] = useState(
    localStorage.getItem("currentTheme") === "light" ? "" : "dark"
  );
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [copiedItem, setCopiedItem] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  useEffect(() => {
    const savedTheme = localStorage.getItem("currentTheme");

    if (savedTheme) {
      setTheme(savedTheme);
      console.log(`Theme fetched in hero section ${savedTheme}`);
    } else {
      console.log(`No theme saved ${savedTheme}`);
    }
  }, []);

  useEffect(() => {
    const handleThemeChange = (e) => {
      setTheme(e.detail);
      console.log(`Theme changed to: ${e.detail}`);
    };

    window.addEventListener("themeChanged", handleThemeChange);

    return () => {
      window.removeEventListener("themeChanged", handleThemeChange);
    };
  }, []);

  // Animation trigger
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Copy to clipboard function
  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  // Form handlers
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      id: "phone",
      icon: <Phone className="w-6 h-6" />,
      title: "Telephone",
      items: [
        {
          label: "+256 772 995 317 / +256 393 252 439 / +256 752 448 518",
          value: "+256772995317",
          type: "tel",
        },
      ],
      description: "You can reach out to us without hesitation",
    },
    {
      id: "email",
      icon: <Mail className="w-6 h-6" />,
      title: "Email Address",
      items: [
        {
          label: "gameconnectafica@gmail.com",
          value: "gameconnectafica@gmail.com",
          type: "email",
        },
      ],
      description: "Our feedbacks come as quick as possible",
    },
    {
      id: "address",
      icon: <MapPin className="w-6 h-6" />,
      title: "Our Address",
      items: [
        {
          label: "Wakitaka Zone, Jinja Northen Division, Jinja",
          value: "Wakitaka Zone, Jinja Northen Division, Jinja",
          type: "address",
        },
      ],
      description: "",
    },
  ];

  return (
    <div
      data-theme={`${theme === "light" ? "dark" : ""}`}
      className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-[#F4A82D] to-blue-50 dark:from-white dark:via-white dark:to-white transition-all duration-300"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#607838]/10 dark:bg-[#607838]/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#607838]/10 dark:bg-[#607838]/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-300/5 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center justify-center mb-6">
            <span className="bg-gradient-to-r from-[#607838] to-zinc-950 dark:from-[#607838] dark:to-zinc-950 text-[#F4A82D] rounded-full text-sm font-semibold px-4 py-2 uppercase tracking-wide shadow-lg border border-blue-500/20">
              <MessageSquare className="w-4 h-4 inline mr-2" />
              Our Contatcs
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-[#F4A82D] text-white mb-6 tracking-tight leading-tight">
            Do you want to know more or
            <span className="block sm:inline mt-2 bg-gradient-to-r from-[#607838] to-[#607838] dark:from-[#607838] dark:to-[#607838] text-transparent bg-clip-text">
              {" "}
              meeting our team?
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-[#607838] to-[#607838] dark:from-[#607838] dark:to-[#607838] mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-[#F4A82D]/90 dark:bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#F4A82D]/20 dark:border-white/20">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-[#607838] to-[#607838] dark:from-[#607838] dark:to-[#607838] rounded-full flex items-center justify-center mr-4">
                  <Sparkles className="w-6 h-6 text-[#F4A82D]" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#607838] to-[#607838] dark:from-[#607838] dark:to-[#607838] text-transparent bg-clip-text">
                  Let's keep in touch
                </h3>
              </div>

              <div className="space-y-8">
                {contactInfo.map((contact, index) => (
                  <div
                    key={contact.id}
                    className="group relative bg-[#F4A82D]/60 dark:bg-white/60 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100/50 dark:border-gray-600/50"
                    onMouseEnter={() => setHoveredCard(contact.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#607838] to-[#607838] dark:from-[#607838] dark:to-[#607838] rounded-full flex items-center justify-center text-[#F4A82D] transition-all duration-300 ${
                          hoveredCard === contact.id
                            ? "scale-110 shadow-lg"
                            : ""
                        }`}
                      >
                        {contact.icon}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-semibold dark:text-[#F4A82D] text-white mb-2">
                          {contact.title}
                        </h4>

                        <div className="space-y-2">
                          {contact.items.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="flex items-center group/item"
                            >
                              {contact.id === "phone" ? (
                                <a
                                  href={`tel:${item.value}`}
                                  className="text-[#607838] dark:text-[#607838] hover:text-[#607838] dark:hover:text-blue-300 transition-colors font-medium"
                                >
                                  {item.label}
                                </a>
                              ) : contact.id === "email" ? (
                                <a
                                  href={`mailto:${item.value}`}
                                  className="text-[#607838] dark:text-[#607838] hover:text-[#607838] dark:hover:text-blue-300 transition-colors font-medium"
                                >
                                  {item.label}
                                </a>
                              ) : (
                                <span className="text-[#607838] dark:text-[#607838] font-medium">
                                  {item.label}
                                </span>
                              )}

                              <button
                                onClick={() =>
                                  copyToClipboard(
                                    item.value,
                                    `${contact.id}-${itemIndex}`
                                  )
                                }
                                className="ml-2 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200 text-gray-400 hover:text-[#607838] dark:hover:text-[#607838]"
                              >
                                {copiedItem === `${contact.id}-${itemIndex}` ? (
                                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                                ) : (
                                  <Copy className="w-4 h-4" />
                                )}
                              </button>
                            </div>
                          ))}
                        </div>

                        <p className="text-sm text-gray-600 dark:text-gray-600 mt-2">
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAndLocation;
