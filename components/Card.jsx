"use client";

import React from "react";

const Card = (props) => {
  return (
    <div
      className=" bg-back-smoke flex lg:flex-row sm:flex-col justify-between px-[10%] py-[10%] rounded-lg lg:hover:scale-110 transition-all duration-150 w-[100%] sm:mb-2 lg:mb-0"
      style={{
        boxShadow: "0 5px 10px 0 rgb(10 10 10 / 5%)",
        borderColor: "transparent",
      }}
    >
      <div className="flex flex-col lg:justify-start sm:justify-between lg:items-start sm:items-center lg:text-left sm:text-center">
        <h1 className=" text-2xl pb-3">{props.title}</h1>
        <p className=" text-text-lighter text-lg">{props.content}</p>
      </div>

      <div className=" scale-150 flex items-center sm:justify-center lg:pl-16 sm:pl-0 sm:mt-4 lg:mt-0 opacity-50">
        {props.icon}
      </div>
    </div>
  );
};

export default Card;
