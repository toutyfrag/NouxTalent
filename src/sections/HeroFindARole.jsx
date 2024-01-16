import React from "react";
import { images } from "../assets";
import { GenericActionButton } from "../components";

function HeroFindARole() {
  return (
    <section>
      <div
        className="relative w-full h-[43rem] bg-cover object-cover bg-center rounded-3xl bg-no-repeat flex items-center justify-center overflow-hidden text-white"
        style={{
          backgroundImage: `url(${images.women})`,
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
            <h2 className="text-[80px] mb-[-16px]">Find your new role</h2>
            <p className="text-2xl">
              We make it our mission to really understand what you want <br />{" "}
              and to make the right match for you.
            </p>
            <div>
              {" "}
              <GenericActionButton
                backgroundColor="bg-[#6300FF]"
                textColor="text-[white]"
                textContent="Find your next role"
                border="none"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 text-black max-w-[320px] bg-[#E0CCFF] rounded-3xl p-6 gap-4">
            <h2 className="text-[32px]">10 tips to get you hired</h2>
            <p>
              Our free no BS guide pulled together with 25yrs experience
              refining what works into a hiring a free resource for you.{" "}
            </p>
            <div>
              <button className="h-12 px-4 py-2 rounded-3xl border-2 border-slate-900">
                Get the guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroFindARole;
