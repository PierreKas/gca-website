import React, { useEffect, useRef, useState } from "react";
import { commissions } from "../constants";
import { useNavigate } from "react-router-dom";

const Commissions = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const scrollRef = useRef(null);
  const [currentCommisionIndex, setCurrentCommisionIndex] = useState(0);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
  const navigate = useNavigate();
  const navigateToCommission = (commissionName) => {
    localStorage.setItem("comission", commissionName);
    navigate(`/${commissionName}`);
  };
  useEffect(() => {
    const initialIndex = {};
    commissions.forEach((_, index) => {
      initialIndex[index] = 0;
    });
    setCurrentImageIndex(initialIndex);
  }, []);
  useEffect(() => {
    const initialIndex = {};
    commissions.forEach((_, index) => {
      initialIndex[index] = 0;
    });
    setCurrentCommisionIndex(initialIndex);
  }, []);
  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const handleScroll = () => {
      if (scrollContainer) {
        const scrollLeft = scrollContainer.scrollLeft;
        const cardWidth = 320 + 24;
        const index = Math.round(scrollLeft / cardWidth);
        setCurrentCommisionIndex(index);
      }
    };

    scrollContainer?.addEventListener("scroll", handleScroll);
    return () => scrollContainer?.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const scrollInterval = setInterval(() => {
      if (!isAutoScrollPaused && scrollContainer) {
        const maxScrollLeft =
          scrollContainer.scrollWidth - scrollContainer.clientWidth;

        // If we've reached the end, scroll back to the start
        if (scrollContainer.scrollLeft >= maxScrollLeft) {
          scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollContainer.scrollBy({ left: 320, behavior: "smooth" });
        }
        // scrollContainer.scrollBy({ left: 320, behavior: "smooth" });
      }
    }, 5000);

    return () => clearInterval(scrollInterval);
  }, [isAutoScrollPaused]);

  // Image auto-change
  useEffect(() => {
    const intervals = [];

    commissions.forEach((program, programIndex) => {
      if (program.images && program.images.length > 1) {
        const interval = setInterval(() => {
          setCurrentImageIndex((prev) => ({
            ...prev,
            [programIndex]: (prev[programIndex] + 1) % program.images.length,
          }));
        }, 10000);

        intervals.push(interval);
      }
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  const scrollLeft = () => {
    setIsAutoScrollPaused(true);
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };
  useEffect(() => {
    if (isAutoScrollPaused) {
      const timeout = setTimeout(() => {
        setIsAutoScrollPaused(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isAutoScrollPaused]);

  const scrollRight = () => {
    setIsAutoScrollPaused(true);
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-yellow-100 to-amber-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h6 className="text-xl sm:text-xl lg:text-2xl mb-10 mt-10 tracking-wide uppercase">
            Our
            <span className="bg-gradient-to-r from-yellow-300 to-red-600 text-transparent bg-clip-text uppercase">
              {" "}
              Commissions{" "}
            </span>
          </h6>
        </div>

        {/* Arrows */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-400 hover:bg-yellow-500 p-2 rounded-full shadow-md"
        >
          ◀
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-400 hover:bg-yellow-500 p-2 rounded-full shadow-md"
        >
          ▶
        </button>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 py-4 scroll-smooth no-scrollbar "
        >
          {commissions.map((commission, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 min-w-[300px] max-w-xs flex-shrink-0"
              onMouseEnter={() => setIsAutoScrollPaused(true)}
              onMouseLeave={() => setIsAutoScrollPaused(false)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={
                    commission.images && commission.images.length > 0
                      ? commission.images[currentImageIndex[index] || 0]
                      : commission.images?.[0] || ""
                  }
                  alt={commission.description}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                />

                {commission.images && commission.images.length > 1 && (
                  <div className="absolute bottom-4 right-4 flex gap-1">
                    {commission.images.map((_, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          imgIndex === (currentImageIndex[index] || 0)
                            ? "bg-yellow-400"
                            : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="p-6 group relative ">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {commission.name}
                </h3>
                <div className="">
                  {/* <a
                    href=""
                    // onClick={() => navigate("/intercession")}
                    onClick={() => navigateToCommission(commission.name)}
                    className=" bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 px-4 rounded-lg font-semibold 
                  hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 transform  shadow-md text-center
                  opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto absolute bottom-4 left-5 right-5"
                  >
                    Join {commission.name}
                  </a> */}
                  <a
                    href=""
                    onClick={() => navigateToCommission(commission.name)}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 px-4 rounded-lg font-semibold 
  hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 transform shadow-md text-center
  
  // Mobile: Always visible and positioned at bottom
  opacity-100 pointer-events-auto static mt-4 block
  
  // Desktop (md and up): Hidden by default, show on hover with absolut positioning
  md:opacity-0 md:group-hover:opacity-100 md:pointer-events-none md:group-hover:pointer-events-auto 
  md:absolute md:bottom-4 md:left-5 md:right-5 md:mt-0"
                  >
                    Join {commission.name}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          {commissions.length > 1 && (
            <div className="flex justify-center mt-6 gap-2">
              {(() => {
                const total = commissions.length;
                const maxDots = 5;
                let start = 0;

                if (total <= maxDots) {
                  start = 0;
                } else if (currentCommisionIndex <= 5) {
                  start = 0;
                }

                return commissions
                  .slice(start, start + maxDots)
                  .map((_, index) => {
                    const actualIndex = start + index;
                    return (
                      <div
                        key={actualIndex}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          actualIndex === currentCommisionIndex
                            ? "bg-red-600"
                            : "bg-yellow-400"
                        }`}
                      />
                    );
                  });
              })()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Commissions;
