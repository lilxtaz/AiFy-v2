import React from "react";
import styles from "../styles/styles";
import Newsletter from "../components/Newsletter";

const AboutHero = () => {
  return (
    <div
      className={`flex justify-between px-[10vw] md:py-[12vh] md:pb-[30vh] sm:pb-[30vh] sm:py-[0vh]`}
    >
      <div className={`flex flex-col z-10`}>
        <h1
          className={`lg:${styles.heroHeading} about-head sm:pb-[0vh] lg:w-full`}
        >
          AiFy Blogs
        </h1>
        <div className=" mt-16 -ml-5 bg ">
          <Newsletter
            text="Sign Up to our Newsletter"
            textMain={"white"}
            bgMain={"black"}
            bgHover={"gray-600"}
            textHover={"white"}
          />
        </div>
      </div>

      <div className=" w-1/4">
        <h1 className={` text-black sm:pb-[0vh] lg:w-full about-subhead`}>
          New Product Features, the latest in technology, solutions, and updates{" "}
        </h1>
      </div>
    </div>
  );
};

export default AboutHero;
