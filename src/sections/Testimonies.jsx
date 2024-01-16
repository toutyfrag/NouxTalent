import React from "react";
import { images } from "../assets";
import { TestimoniesCard } from "../components";

const Testimonies = () => {
  return (
    <section>
      <div
        className="w-full h-[616px] bg-cover object-cover bg-center rounded-2xl flex items-center justify-start p-[48px]"
        style={{ backgroundImage: `url(${images.nouxLogo3D})` }}
        alt="3D Logo Image"
      >
        <div className="flex gap-10 items-start">
          <TestimoniesCard />
          <TestimoniesCard />
          <TestimoniesCard />
          <TestimoniesCard />
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
