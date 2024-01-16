import React from "react";

const SpecialitiesCard = ({ speciality, bgColor }) => {
  return (
    <div
      className={`padding-8 h-[420px] w-[336px] rounded-3xl bg-[#D5DBFF] flex flex-col justify-between pt-4 pb-8 px-4`}
    >
      <div className="flex flex-col items-end justify-end font-bold">
        <p className="text-noux-purple">NOUX</p>
        <p>SPECIALISMS</p>
      </div>
      <div className="text-5xl">{speciality}</div>
    </div>
  );
};

export default SpecialitiesCard;
