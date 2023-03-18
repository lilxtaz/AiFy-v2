import React from "react";
import Blog from "../components/Blog";
import styles from "../styles/styles";

const BlogSection = () => {
  return (
    <div className="px-24 flex flex-col">
      <h1
        className={`lg:${styles.heroHeading} about-head sm:pb-[0vh] lg:w-full text-center`}
      >
        Coming Soon!
      </h1>
      <hr className=" text-grayish border-[1.3px] mb-24 w-full" />

      <div className="grid grid-cols-2 gap-x-32 gap-y-6">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  );
};

export default BlogSection;
