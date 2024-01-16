import React from "react";
import { images } from "../assets";
import { GenericActionButton } from "../components";

const BottomCTA = () => {
  return (
    <div
      className="w-full h-[863px] bg-cover object-cover bg-center text-white flex justify-center items-center mt-8 rounded-t-3xl mx-auto max-w-[112.5rem] px-8"
      style={{ backgroundImage: `url(${images.nouxLogo3D})` }}
      alt="3D Logo Image"
    >
      <div className="text-center max-w-[830px] flex flex-col gap-6 mx-auto">
        <h2 className="font-medium text-[64px]">Your journey starts with us</h2>
        <div className="text-2xl font-light px-10 leading-10">
          <p>
            Whether you are on the search for a new role or looking to expand
            your team, we are here to support you
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <GenericActionButton
            backgroundColor="bg-inherit"
            textContent="Grow your team"
            border="border-solid border-2 border-[#110326] border-white"
          />
          <GenericActionButton
            backgroundColor="bg-inherit"
            textContent="Find your next role"
            border="border-solid border-2 border-[#110326] border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default BottomCTA;
