import React from "react";
import { GenericActionButton } from "../components";

const Footer = () => {
  return (
    <section className="bg-[#040118] text-white pt-40 pb-20 mx-auto max-w-[112.5rem] px-8">
      <div className="mx-auto max-w-[88rem]">
        <div className="flex flex-col gap-4 mb-16">
          <h2 className="text-4xl font-thin">Looking for something NOUX ?</h2>
          <h2 className="text-4xl font-semibold">Let's talk</h2>
        </div>
        <div className="grid grid-cols-4 grid-rows-1 gap-4">
          <div className="col-span-2 flex flex-col gap-20">
            <div>
              <p className="text-[1.5rem] font-medium">Follow us:</p>
              <div>icon icon icon</div>
            </div>

            <div>
              <p className="text-[1.5rem] font-medium">Contact us:</p>
              <p className="text-[20px] font-thin underline">
                Hello@nouxtalent.co.uk <br /> 07932485785
              </p>
            </div>
          </div>
          <div className="col-span-2 col-start-3">
            <div className="flex gap-4">
              <div className="flex flex-col gap-4 flex-grow">
                <label htmlFor="companyName">Enter name or company</label>
                <input
                  type="text"
                  id="companyName"
                  className="bg-white bg-opacity-10 rounded-lg border border-zinc-600 border-opacity-50 px-4 py-2"
                />
              </div>
              <div className="flex flex-col gap-4 flex-grow">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="bg-white bg-opacity-10 rounded-lg border border-zinc-600 border-opacity-50 px-4 py-2"
                />
              </div>
            </div>
            <div className="mt-[1rem] mb-[1rem]">
              <label htmlFor="interest" className="">
                I’m interested in
              </label>
              <div className="flex flex-wrap gap-4 mt-4">
                <input
                  type="button"
                  value="Growing my team"
                  className="border-2 border-white rounded-3xl px-4 py-2"
                />
                <input
                  type="button"
                  value="Finding a new role"
                  className="border-2 border-white rounded-3xl px-4 py-2"
                />
                <input
                  type="button"
                  value="Events"
                  className="border-2 border-white rounded-3xl px-4 py-2"
                />
                <input
                  type="button"
                  value="Community"
                  className="border-2 border-white rounded-3xl px-4 py-2"
                />
                <input
                  type="button"
                  value="Other"
                  className="border-2 border-white rounded-3xl px-4 py-2"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 flex-grow mb-4">
              <label htmlFor="text">Tell us more</label>
              <input
                type="text"
                id="email"
                className="bg-white bg-opacity-10 rounded-lg border border-zinc-600 border-opacity-50 px-4 py-2"
              />
            </div>
            <GenericActionButton
              backgroundColor="bg-[#6300FF]"
              textColor="text-[white]"
              textContent="Find your next role"
              border="none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
