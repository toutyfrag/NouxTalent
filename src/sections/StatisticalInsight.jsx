import React from "react";
import { GenericActionButton } from "../components";

const StatisticalInsight = () => {
  return (
    <section className="mx-auto max-w-[112.5rem] px-14 flex items-center justify-center gap-[10rem] mt-20 mb-20">
      <div className="flex flex-col gap-6 flex-1">
        <h2 className="text-[64px]">
          We don't just find <br /> jobs we're <br />
          matchmakers too!
        </h2>
        <p className="max-w-[500px]">
          Finding a role that matches your skills and experience is the easy
          part, but matching the right culture, working environment, ethos, your
          aspirations and personal needs can be more difficult. We work with
          full transparency and make it our mission to really understand what
          you want and to make the right match for you, supporting you through
          every step of the process.
        </p>
        <div>
          {" "}
          <GenericActionButton
            backgroundColor="bg-[#6300FF]"
            textColor="text-[white]"
            textContent="Search for your next role"
            border="none"
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 max-w-[512px] gap-4">
        <div className="flex items-center justify-between gap-[24px] px-[32px] py-[18px] rounded-3xl border-[1px] border-[#D4CDDD] relative">
          <div className="flex flex-col gap-5">
            <p className="text-2xl font-extrabold text-black text-opacity-40 mb-[-25px]">
              EXPERIENCE
            </p>
            <p className="text-[88px] font-extrabold leading-14 h-[100px] flex items-center">
              25y
            </p>
          </div>
          <div>icon</div>
        </div>
        <div className="flex flex-row-reverse items-center justify-between gap-[24px] px-[32px] py-[18px] rounded-3xl border-[1px] border-[#D4CDDD] relative">
          <div className="flex flex-col gap-5">
            <p className="text-2xl font-extrabold text-black text-opacity-40 mb-[-25px]">
              PLACEMENT
            </p>
            <p className="text-[88px] font-extrabold leading-14 h-[100px] flex items-center">
              1000s
            </p>
          </div>
          <div>icon</div>
        </div>
        <div className="flex items-center justify-between gap-[24px] px-[32px] py-[18px] rounded-3xl border-[1px] border-[#D4CDDD] relative">
          <div className="flex flex-col gap-5">
            <p className="text-2xl font-extrabold text-black text-opacity-40 mb-[-25px]">
              EXPERIENCE
            </p>
            <p className="text-[88px] font-extrabold leading-14 h-[100px] flex items-center">
              25y
            </p>
          </div>
          <div>icon</div>
        </div>
      </div>
    </section>
  );
};

export default StatisticalInsight;
