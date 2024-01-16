import React from "react";
import { GenericActionButton } from "../components";
import { images } from "../assets";

const HomeBento = () => {
  return (
    <section className="relative mx-auto max-w-[112.5rem] px-8">
      <div className="grid grid-cols-4 grid-rows-5 gap-4 h-[552px] mt-[104px] z-10">
        <div className="row-span-4 bg-[#D4DBFF] rounded-3xl p-6 flex flex-col">
          <div className="flex flex-col flex-grow gap-4">
            <div className="text-slate-900 text-[32px] font-medium">
              Our 10 point checklist to help you get hired!
            </div>
            <div className="text-slate-900 text-base font-medium">
              This isn’t any old list to help you take your next steps. Our free
              no BS guide pulled together with 25yrs experience refining what
              works into a hiring a free resource for you.
            </div>
          </div>
          <div>
            <button className="h-12 px-4 py-2 rounded-3xl border-2 border-slate-900">
              Get the guide
            </button>
          </div>
        </div>
        <div
          className="row-span-4 rounded-3xl flex flex-col justify-end gap-4 p-6 bg-cover text-white"
          style={{
            backgroundImage: `url(${images.event})`,
          }}
        >
          <div className="w-[295px] text-slate-900 text-[32px] font-medium font-['Plus Jakarta Sans']">
            Tech events
          </div>
          <div className="text-slate-900 text-base font-medium leading-normal">
            We host a number of events throughout the year with keynote
            speakers. Join likeminded people, hear from industry leading experts
            in the tech world.
          </div>
        </div>
        <div className="col-span-2 row-span-5 bg-[#D4DBFF] rounded-3xl p-6 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div className="w-[438px] text-slate-900 text-[32px] font-medium font-['Plus Jakarta Sans']">
              Your first thought leadership article title will go here in this
              space with concise copy.
            </div>
            <GenericActionButton
              backgroundColor="bg-inherit"
              textContent="Read this"
              border="border-solid border-2 border-[#110326]"
            />
          </div>
          <div
            className="w-full h-[357.17px] bg-cover object-cover bg-center rounded-2xl bg-no-repeat"
            style={{
              backgroundImage: `url(${images.nouxLogo3D})`,
              transition: "background-size 0.3s ease-in-out",
            }}
            alt="3D Logo Image"
          ></div>
        </div>
        <div className="col-span-2 row-start-5 bg-[#D4DBFF] rounded-3xl flex justify-between items-center p-6">
          <div className="w-[227px] text-slate-900 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
            Join our community and stay up to date with us.
          </div>
          <div>
            <GenericActionButton
              backgroundColor="bg-inherit"
              textContent="Join our community"
              border="border-solid border-2 border-[#110326]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBento;
