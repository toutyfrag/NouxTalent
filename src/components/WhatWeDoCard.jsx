import React from "react";

const WhatWeDoCard = ({
  bgColor,
  cardHeading,
  cardSubHeading,
  cardIndex,
  cardHeight,
  cardHeadingSize,
  cardXPadding,
}) => {
  return (
    <div
      className={`w-[26rem] md:w-[40rem] lg:w-[54rem] ${cardHeight} px-[1rem] py-[2rem] ${bgColor} rounded-3xl flex flex-col-reverse leading-tight`}
    >
      <div className="flex flex-col gap-[8px]">
        <h2 className={`section-header`}>{cardHeading}</h2>
        <div className="flex justify-between relative">
          <p className="text-[20px] md:text-[22px] lg:text-[1.5rem] text-noux-dark-purple md:text-[#626262 leading-[2rem] tracking-[0.010rem] md:pr-[140px]">
            {cardSubHeading}
          </p>
          <p className="text-[5.2rem] md:text-[6rem] lg:text-[6.5rem] text-[#626262]/[0.48] font-bold absolute right-0 bottom-[-10px]">
            {cardIndex}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoCard;
