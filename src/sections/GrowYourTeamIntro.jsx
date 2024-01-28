import React from "react";
import { images } from "../assets";
import { GenericActionButton } from "../components";

function GrowYourTeamIntro() {
  return (
    <div className="mx-auto max-w-[112.5rem] px-8">
      <div
        className="w-full h-[600px] bg-cover object-cover bg-center rounded-3xl bg-no-repeat flex items-center justify-center overflow-hidden mt-[80px]"
        style={{
          backgroundImage: `url(${images.nouxLogo3D})`,
        }}
        alt="3D Logo Image"
      >
        <div className="text-white flex flex-col justify-center items-center max-w-[784px] text-center gap-6">
          <h2 className="text-[64px] leading-[80px]">
            Recruit
            <span className="font-bold text-noux-purple">exceptional</span>
            <br />
            talent
          </h2>
          <div className="text-[24px] leading-10 font-light">
            <p>
              Whether you're seeking a single hire or to scale a whole team, we
              are here to support you. We don’t have a one size fits all
              solution and appreciate that every business has unique needs.
            </p>
            <br />
            <p>
              Our partnership approach enables us to immerse ourselves in your
              business and truly understand what you are looking to achieve.
            </p>
          </div>
          <GenericActionButton
            backgroundColor="bg-[#6300FF]"
            textColor="text-[white]"
            textContent="Get in touch"
            border="none"
          />
        </div>
      </div>
    </div>
  );
}

export default GrowYourTeamIntro;
