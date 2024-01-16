import React from "react";
import { GenericActionButton } from "../components";

const JobCard = ({ bgColor }) => {
  return (
    <div
      className={`h-[311px] w-[592px] ${bgColor} rounded-3xl flex flex-col justify-end p-[1rem]`}
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-[2.5rem]">Lead DevOps Engineer</h3>
        <p className="text-[1.5rem] font-extrabold">Salary $65,000</p>
        <p className="text-[1rem] text-[#626262] leading-6 font-medium">
          Noux has a long-standing partnership with a trusted client based in
          Leeds. Currently going through rapid growth and looking for a lead
          engineer to spearhead change.{" "}
        </p>
        <div className="flex gap-[0.5rem]">
          <span className="border-2 rounded-3xl px-[1rem] py-[0.5rem] border-[#110326] text-[1rem] font-medium">
            DevOps
          </span>
          <span className="border-2 rounded-3xl px-[1rem] py-[0.5rem] border-[#110326] text-[1rem] font-medium">
            Full time
          </span>
          <span className="border-2 rounded-3xl px-[1rem] py-[0.5rem] border-[#110326] text-[1rem] font-medium">
            Hybrid
          </span>
          <span className="border-2 rounded-3xl px-[1rem] py-[0.5rem] border-[#110326] text-[1rem] font-medium">
            Leeds
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
