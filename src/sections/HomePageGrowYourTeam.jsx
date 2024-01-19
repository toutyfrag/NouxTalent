import React from "react";
import { images } from "../assets";
import { GenericActionButton } from "../components";

function HomePageGrowYourTeam() {
  return (
    <section className="pb-[5rem] mx-auto max-w-[112.5rem] px-8">
      <div
        className="w-full h-[688px] bg-cover object-cover bg-center rounded-2xl text-[#FFFFFF] flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${images.nouxLogo3D})` }}
        alt="3D Logo Image"
      >
        <div className="flex flex-col max-w-[700px] items-center gap-6">
          <h2 className="text-[4rem]">Grow your team</h2>
          <p className="text-[1.5rem] text-center">
            Aiding clients in cultivating teams with diverse perspectives. We
            believe in innovation fueled by diversity, keeping your
          </p>
          <GenericActionButton
            backgroundColor="bg-[#FFFFFF]"
            textColor="text-[black]"
            textContent="Grow Your Team"
            border="border-solid border-[#110326]"
          />
        </div>
      </div>
    </section>
  );
}

export default HomePageGrowYourTeam;
