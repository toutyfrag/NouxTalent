//Generic button it is used in most pages. BG, Text, and border style color is passed as a prop
import React from "react";
import { icons } from "../assets";

// The styling props need to be Tailwind selector( border-solid border-2 border-[#110326]
const GenericActionButton = ({
  backgroundColor,
  textContent,
  border,
  textColor,
}) => {
  return (
    <button
      className={`${backgroundColor} ${textColor} py-[0.5rem] px-[1rem] rounded-3xl font-light ${border} flex justify-center items-center gap-4`}
    >
      {textContent}
      <icons.arrow />
    </button>
  );
};

export default GenericActionButton;
