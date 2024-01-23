import React, { useEffect, useState } from "react";
import { GenericActionButton } from "../components";
import { icons } from "../assets";
import { images } from "../assets";

const FormContactUs = () => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  useEffect(() => {
    setIsMenuExpanded(true);
  }, []);
  return (
    <section className="px-6">
      <div className="flex items-end justify-between h-[100vh] gap-12 pt-24 pb-6">
        <div className="flex flex-col gap-[120px] justify-end flex-grow h-full ">
          <div>
            <h2 className="text-5xl font-bold mb-10 text-noux-purple">
              Contact us
            </h2>
            <div className="">
              <div className="flex gap-2 pb-4">
                <div className="flex flex-col gap-4 flex-grow">
                  <label htmlFor="companyName">Enter name or company</label>
                  <input
                    placeholder="Lara from Noux"
                    type="text"
                    id="companyName"
                    className="rounded-lg border border-black border-opacity-30 px-4 py-2 text-black bg-[inherit]"
                  />
                </div>
                <div className="flex flex-col gap-2 flex-grow">
                  <label htmlFor="email">Email</label>
                  <input
                    placeholder="Lara@noux.com"
                    type="email"
                    id="email"
                    className="bg-opacity-10 rounded-lg border-[1px] border-black border-opacity-30 px-4 py-2 text-black bg-[inherit]"
                  />
                </div>
              </div>
              <div className="mt-[1rem] mb-[1rem] pb-4">
                <label htmlFor="interest" className="">
                  I’m interested in
                </label>
                <div className="flex flex-wrap gap-4 mt-2">
                  <input
                    type="button"
                    value="Growing my team"
                    className="border-2  rounded-3xl px-4 py-2"
                  />
                  <input
                    type="button"
                    value="Finding a new role"
                    className="border-2  rounded-3xl px-4 py-2"
                  />
                  <input
                    type="button"
                    value="Events"
                    className="border-2  rounded-3xl px-4 py-2"
                  />
                  <input
                    type="button"
                    value="Community"
                    className="border-2  rounded-3xl px-4 py-2"
                  />
                  <input
                    type="button"
                    value="Other"
                    className="border-2  rounded-3xl px-4 py-2"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 flex-grow mb-4 pb-4">
                <label htmlFor="text">Tell us more</label>

                <textarea
                  className="rounded-xl bg-[inherit] border-[1px] border-black border-opacity-30 px-4 py-2 text-black"
                  name=""
                  id=""
                  cols="30"
                  rows="3"
                ></textarea>
              </div>
              <GenericActionButton
                backgroundColor="bg-[#6300FF]"
                textColor="text-[white]"
                textContent="Submit the request"
                border="none"
              />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col justify-end">
              <div className="underline">07789 123 456</div>
              <div className="underline">hello@nouxtalent.co.uk</div>
            </div>
            <div className="text text-end">
              <h3 className="text-right font-bold text-noux-purple">Legal</h3>
              <p>Privacy Policy and Cookies</p>
              <p>© Noux Talent 2024</p>
            </div>
          </div>
        </div>
        <div
          className="w-[658px] h-full bg-cover object-cover bg-center rounded-3xl bg-no-repeat flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: `url(${images.nouxLogo3D})`,
          }}
          alt="3D Logo Image"
        ></div>
      </div>
    </section>
  );
};

export default FormContactUs;
