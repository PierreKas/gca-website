import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo-01.png";
import { navItems } from "../constants/index.jsx";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
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
      // Let animation play, then update state
      setTimeout(() => {
        setMobileDrawerOpen(false);
      }, 300); // Match the animation duration
    } else {
      setMobileDrawerOpen(true);
    }
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileDrawerOpen(false);

    if (href.startsWith("/")) {
      // Navigate to route
      navigate(href);
    } else if (href.startsWith("#")) {
      // Smooth scroll
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

    if (href === "#hero" || href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
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
              onClick={(e) => handleSmoothScroll(e, "#home")}
              className="flex items-center flex-shrink-0 cursor-pointer group"
            >
              <img className="h-12 w-auto" src={logo} alt="logo" />
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) =>
                item.children ? (
                  <li key={index} className="relative group">
                    <span className="relative text-gray-700 hover:text-yellow-300 transition-colors duration-300 font-medium py-2 px-1 cursor-pointer">
                      {item.label}
                      <span className="ml-1">▼</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-600 group-hover:w-full transition-all duration-300"></span>
                    </span>
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 border border-gray-200">
                      {item.children.map((child, childIndex) => (
                        <div
                          key={childIndex}
                          onClick={(e) => handleNavClick(e, child.href)}
                          className="px-4 py-3 hover:bg-yellow-50 hover:text-yellow-300 cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md"
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
                      className="relative text-gray-700 hover:text-yellow-300 transition-colors duration-300 font-medium py-2 px-1 group cursor-pointer"
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-600 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                )
              )}
            </ul>

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
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[50]"
                  />
                  <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                      type: "tween",
                    }}
                    className="fixed right-0 bottom-0 h-full w-80 bg-white shadow-2xl z-50"
                  >
                    <div className="p-6 h-full flex flex-col">
                      {/* Mobile Header */}
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center">
                          <img className="h-10 w-auto" src={logo} alt="logo" />
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
                              <div className="text-gray-700 font-medium py-3 px-4">
                                {item.label}
                              </div>
                              {item.children.map((child, childIndex) => (
                                <a
                                  key={childIndex}
                                  href={child.href}
                                  onClick={(e) => handleNavClick(e, child.href)}
                                  className="block py-2 px-8 rounded-lg text-gray-600 hover:bg-yellow-50 hover:text-yellow-300 transition-colors duration-200 text-sm"
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
                                className="block py-3 px-4 rounded-lg text-gray-700 hover:bg-yellow-50 hover:text-yellow-300 transition-colors duration-200 font-medium"
                              >
                                {item.label}
                              </a>
                            </li>
                          )
                        )}
                      </ul>

                      <div className="flex-1"></div>
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

export default Navbar;
