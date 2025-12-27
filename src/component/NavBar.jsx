import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo2.jpeg";
import { navItems } from "../constants/index.jsx";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => {
    if (mobileDrawerOpen) {
      setTimeout(() => {
        setMobileDrawerOpen(false);
      }, 300);
    } else {
      setMobileDrawerOpen(true);
    }
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileDrawerOpen(false);

    if (href.startsWith("/")) {
      navigate(href);
    } else if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        const navbarHeight = 80;
        const offset =
          target.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight;
        window.scrollTo({ top: offset, behavior: "smooth" });
      } else if (href === "#hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();

    if (href === "#hero" || href === "#home" || href === "/") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }

    setMobileDrawerOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav
        className={`
          ${
            scrolled
              ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/20"
              : "bg-white/80 backdrop-blur-md border-b border-transparent"
          } 
          transition-all duration-300 py-4
        `}
      >
        <div className="container mx-auto px-4 lg:px-16 relative">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              onClick={(e) => handleSmoothScroll(e, "/")}
              className="flex items-center shrink-0 cursor-pointer group"
            >
              {/* <img
                className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
                src={logo}
                alt="Game Connect Africa Logo"
              /> */}
              <img
                className="h-16 w-16 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                src={logo}
                alt="Game Connect Africa Logo"
              />
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) =>
                item.children ? (
                  <li key={index} className="relative group">
                    <span className="relative text-gray-700 hover:text-[#6B8E4E] transition-colors duration-300 font-medium py-2 px-1 cursor-pointer">
                      {item.label}
                      <span className="ml-1 text-xs">▼</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-[#607838] to-[#F4A82D]] group-hover:w-full transition-all duration-300"></span>
                    </span>
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-200">
                      {item.children.map((child, childIndex) => (
                        <div
                          key={childIndex}
                          onClick={(e) => handleNavClick(e, child.href)}
                          className="px-4 py-3 hover:bg-[#6B8E4E]/10 hover:text-[#6B8E4E] cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md"
                        >
                          {child.label}
                        </div>
                      ))}
                    </div>
                  </li>
                ) : (
                  <li key={index}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="relative text-gray-700 hover:text-[#6B8E4E] transition-colors duration-300 font-medium py-2 px-1 group cursor-pointer"
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-[#607838] to-[#F4A82D] group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                )
              )}
            </ul>

            {/* Donate Button - Desktop */}
            <div className="hidden lg:block">
              <button
                onClick={(e) => handleNavClick(e, "/donation")}
                className="bg-linear-to-r from-[#607838] to-[#F4A82D] text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Donate Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleDrawer}
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              >
                {mobileDrawerOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileDrawerOpen &&
            createPortal(
              <AnimatePresence>
                <div className="lg:hidden">
                  {/* Backdrop */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-998"
                    onClick={toggleDrawer}
                  />

                  {/* Drawer */}
                  <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                      type: "tween",
                    }}
                    className="fixed right-0 top-0 bottom-0 h-full w-80 bg-white shadow-2xl z-999 overflow-y-auto"
                  >
                    <div className="p-6 h-full flex flex-col">
                      {/* Mobile Header */}
                      <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                        <div className="flex items-center">
                          {/* <img
                            className="h-12 w-auto"
                            src={logo}
                            alt="Game Connect Africa Logo"
                          /> */}
                          <img
                            className="h-16 w-16 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                            src={logo}
                            alt="Game Connect Africa Logo"
                          />
                        </div>
                        <button
                          onClick={toggleDrawer}
                          className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Mobile Navigation Links */}
                      <ul className="space-y-1 mb-8">
                        {navItems.map((item, index) =>
                          item.children ? (
                            <li
                              key={index}
                              className="border-b border-gray-100 pb-2 mb-2"
                            >
                              <div className="text-gray-700 font-semibold py-3 px-4 flex items-center gap-2">
                                {item.label}
                                <span className="text-xs text-gray-400">▼</span>
                              </div>
                              {item.children.map((child, childIndex) => (
                                <a
                                  key={childIndex}
                                  href={child.href}
                                  onClick={(e) => handleNavClick(e, child.href)}
                                  className="block py-2 px-8 rounded-lg text-gray-600 hover:bg-[#6B8E4E]/10 hover:text-[#6B8E4E] transition-colors duration-200 text-sm"
                                >
                                  {child.label}
                                </a>
                              ))}
                            </li>
                          ) : (
                            <li key={index}>
                              <a
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className="block py-3 px-4 rounded-lg text-gray-700 hover:bg-[#6B8E4E]/10 hover:text-[#6B8E4E] transition-colors duration-200 font-medium"
                              >
                                {item.label}
                              </a>
                            </li>
                          )
                        )}
                      </ul>

                      {/* Mobile Donate Button */}
                      <div className="mt-auto pt-6 border-t border-gray-100">
                        <button
                          onClick={(e) => handleNavClick(e, "/donation")}
                          className="w-full bg-linear-to-r from-[#607838] to-[#F4A82D] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                        >
                          Donate Now
                        </button>

                        {/* Contact Info */}
                        <div className="mt-6 space-y-2 text-center text-sm text-gray-600">
                          <div>📍 Eastern Busoga Region, Uganda</div>
                          <div>📞 +256 123 456 789</div>
                          <div>✉️ info@gameconnectafrica.org</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </AnimatePresence>,
              document.body
            )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
