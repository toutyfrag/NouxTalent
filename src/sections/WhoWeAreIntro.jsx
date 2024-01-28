import React from "react";
import { images } from "../assets";

const WhoWeAreIntro = () => {
  return (
    <section className="py-[80px] px-[36px]">
      <div className="grid grid-cols-2 grid-rows-1 gap-6 px-4">
        <div>
          <h2 className="text-[64px] leading-[80px] font-medium pb-6">
            What you need to <br /> know
            <span className="text-noux-purple font-semibold"> about us</span>
          </h2>
          <div className="text-2xl leading-9 font-light flex flex-col gap-8">
            <p>
              With almost two decades experience in the tech recruitment
              industry, we really know our stuff. We’ve helped hundreds of
              companies to build great teams, grown incredible communities and
              built unrivalled networks. Our passion is to recruit with purpose,
              working in partnership with innovative companies to help drive
              change.
            </p>
          </div>
        </div>
        <div
          className="bg-noux-purple bg-cover bg-center rounded-3xl"
          style={{
            backgroundImage: `url(${images.typing})`,
            height: "100%",
          }}
          alt="3D Logo Image"
        />
      </div>

      <div className="grid grid-cols-2  grid-rows-1 gap-6 px-4 pt-[80px]">
        <div
          className="bg-noux-purple bg-cover bg-center rounded-3xl"
          style={{
            backgroundImage: `url(${images.typing})`,
            height: "100%",
          }}
          alt="3D Logo Image"
        />
        <div className="pl-16">
          <h2 className="text-[64px] leading-[80px] font-medium pb-6">
            Our <span className="text-noux-purple font-semibold">mission </span>
            is clear
          </h2>
          <div className="text-2xl leading-9 font-light flex flex-col gap-8">
            <p>
              To help diversify the tech space by supporting our clients in
              building diverse teams that drive innovation, shaping the future
              of the tech talent.
            </p>
            <p>
              Our commitment to DE&I runs through every conversation, decision,
              and opportunity that we create.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreIntro;
