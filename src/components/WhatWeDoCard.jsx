import React from "react";

const WhatWeDoCard = ({
  bgColor,
  cardHeading,
  cardSubHeading,
  cardIndex,
  cardHeight,
  cardHeadingSize,
}) => {
  return (
    <div
      className={`w-[33rem] md:w-[40rem] lg:w-[54rem] ${cardHeight} px-[1rem] py-[2rem] ${bgColor} rounded-3xl flex flex-col-reverse leading-tight`}
    >
      <div className="flex flex-col gap-[8px]">
        <h2 className={`${cardHeadingSize}`}>{cardHeading}</h2>
        <div className="flex justify-between relative">
          <p className="text-[1.5rem] text-[#626262] leading-[2rem] tracking-[0.010rem] pr-[130px]">
            {cardSubHeading}
          </p>
          <p className="text-[6.5rem] text-[#626262]/[0.48] font-bold absolute right-0 bottom-[-10px]">
            {cardIndex}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoCard;
