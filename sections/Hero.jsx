"use client";

import Link from "next/link";
import React from "react";
import styles from "../styles/styles";

const Hero = () => {
  return (
    <div
      className={`flex px-[10vw] md:py-[12vh] md:pb-[30vh] sm:pb-[30vh] sm:py-[0vh]`}
    >
      <div className={`flex flex-col z-10`}>
        <h1 className={`lg:${styles.heroHeading} head sm:pb-[0vh] lg:w-3/6`}>
          AiFy <br /> ultimate AI writing assistant.
        </h1>
        <div className=" absolute 2xl:bottom-[14%] md:bottom-[4%] md:left-[10%] sm:bottom-[10%]">
          <Link
            href="https://play.google.com/store/apps/details?id=com.textaify&hl=en&gl=US"
            target="_blank"
          >
            <img src="/play.png" alt="" width={300} height={300} />
          </Link>
        </div>
      </div>
      <img
        src="/phone_1.png"
        className=" image lg:opacity-100 sm:opacity-50 lg:filter-none sm:filter blur-sm brightness-50"
      />
    </div>
  );
};

export default Hero;
