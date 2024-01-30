import React from "react";
import { GenericActionButton } from "../components";
import { images } from "../assets";

const HomePageBento = () => {
  return (
    <section className="relative mx-auto max-w-[112.5rem] px-4 md:px-8">
      <div className="grid grid-cols-1 grid-rows-3 md:grid-rows-2 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-1 gap-4 mt-[104px] z-10">
        <div className="bg-[#D4DBFF] rounded-3xl p-6 flex flex-col max-h-[500px]">
          <div className="flex flex-col flex-grow gap-4">
            <div className="text-[32px] font-medium">
              Our 10 point checklist to help you get hired!
            </div>
            <div className="text-base font-medium">
              This isn’t just any list, it's a free, downloadable guide crafted
              with 20 years of experience, refining what truly works and how to
              secure the job offer you desire
            </div>
          </div>
          <div>
            <button className="h-12 px-4 py-2 rounded-3xl border-2">
              Get the guide
            </button>
          </div>
        </div>

        <div
          className="rounded-3xl flex flex-col justify-end gap-4 p-6 bg-cover text-white"
          style={{
            backgroundImage: `url(${images.event})`,
          }}
        >
          <div className="w-[295px] text-[32px] font-medium">Tech events</div>
          <div className="text-base font-medium leading-normal">
            We host a variety of events throughout the year. Join a community of
            like-minded individuals, listen to insights from industry-leading
            experts, hear inspiring stories and network with great people.
          </div>
        </div>

        <div className="md:col-span-2 bg-[#D4DBFF] rounded-3xl p-6 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div className="w-[438px] text-[32px] font-medium">
              Elevate your brand to attract diverse talent
            </div>
            <GenericActionButton
              backgroundColor="bg-inherit"
              textContent="Read"
              border="border-solid border-2 border-[#110326]"
            />
          </div>
          <div
            className="w-full min-h-[300px] bg-cover object-cover bg-center rounded-2xl bg-no-repeat"
            style={{
              backgroundImage: `url(${images.nouxLogo3D})`,
              transition: "background-size 0.3s ease-in-out",
            }}
            alt="3D Logo Image"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default HomePageBento;
