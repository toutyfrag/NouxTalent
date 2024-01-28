import React from "react";
import { GenericActionButton } from "../components";
import { images } from "../assets";
function WhoweAreHero() {
  return (
    <section className="mx-auto max-w-[112.5rem] px-8">
      <div
        className="relative w-full h-[43rem] bg-cover object-cover bg-center rounded-3xl bg-no-repeat flex items-center justify-center overflow-hidden text-white"
        style={{
          backgroundImage: `url(${images.nouxLightRightSide})`,
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
            <h2 className="text-[80px] mb-[-16px]">We are Noux</h2>
            <p className="text-2xl">
              A Tech Recruitment partner on a mission to help diversity the tech
              sector
            </p>
            <div>
              <GenericActionButton
                backgroundColor="bg-[#6300FF]"
                textColor="text-[white]"
                textContent="Contact us"
                border="none us"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoweAreHero;
