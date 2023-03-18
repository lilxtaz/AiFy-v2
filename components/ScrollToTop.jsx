"use client";

import React, { useState, useEffect } from "react";
import { BsChevronUp } from "react-icons/bs";

const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showScrollTopButton && (
        <BsChevronUp
          className=" fixed bottom-[6rem] right-[2.2rem] h-10 w-10 rounded-full bg-white text-black cursor-pointer z-50 p-2 border-true-gray border-[1px] hover:scale-105 hover:bg-true-gray-100"
          onClick={scrollTop}
        />
      )}
    </div>
  );
};

export default ScrollToTop;
