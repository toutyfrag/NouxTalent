import React from "react";
import { GenericActionButton } from "../components";
import { images } from "../assets";
function GrowYourTeamHero() {
  return (
    <section className="mx-auto max-w-[112.5rem] px-8">
      <div
        className="relative w-full h-[43rem] bg-cover object-cover bg-center rounded-3xl bg-no-repeat flex items-center justify-center overflow-hidden text-white"
        style={{
          backgroundImage: `url(${images.flower})`,
        }}
        alt="3D Logo Image"
      >
        <div
          className="absolute w-full h-full p-6 flex items-center"
          style={{
            background: `linear-gradient(0deg, #000000, rgba(0, 0, 0, 0.12) 40%)`,
          }}
        >
          <div className="flex flex-col flex-grow justify-end h-full gap-4">
            <h2 className="text-[80px] mb-[-16px]">Grow your team</h2>
            <p className="text-2xl">
              We firmly believe that diverse teams lead to great outcomes,
              <br />
              keeping your business at the forefront of innovation.
            </p>
            <div>
              <GenericActionButton
                backgroundColor="bg-[#6300FF]"
                textColor="text-[white]"
                textContent="Contact us"
                border="none"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 pt-[24px]">
        <div className="flex justify-between items-center gap-4 rounded-3xl bg-[#D4DBFF] p-4">
          <p className="text-[64px] font-extrabold">
            76<span className="text-[32px]">%</span>
          </p>
          <p>
            of job seekers believe a diverse workforce is a non-negotiable
            factor when considering job offers.
          </p>
        </div>
        <div className="flex justify-between items-center gap-4 rounded-3xl bg-[#E0CCFF] p-4">
          <p className="text-[64px] font-extrabold">
            70<span className="text-[32px]">%</span>
          </p>
          <p>Diverse teams are 70% more likely to capture new markets</p>
        </div>
        <div className="flex justify-between items-center gap-4 rounded-3xl bg-[#D9D9D9] p-4">
          <p className="text-[64px] font-extrabold">
            35<span className="text-[32px]">%</span>
          </p>
          <p>
            Diverse companies are 35% more likely to experience greater
            financial returns than their non-diverse counterparts
          </p>
        </div>
      </div>
    </section>
  );
}

export default GrowYourTeamHero;
