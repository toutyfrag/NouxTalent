import React, { useState } from "react";
import { growYourTeamServices } from "../constants";
import { images } from "../assets";

const GrowYourTeamServices = () => {
  const [serviceIndex, setServiceIndex] = useState(0);

  const handleClick = (index) => {
    setServiceIndex(index);
  };

  const renderServices = () => {
    return growYourTeamServices.map((service, index) => {
      return (
        <div
          key={index}
          className={`flex flex-col rounded  ${
            serviceIndex === index && "border-l-4 border-noux-purple"
          }`}
        >
          <p
            className={`text-2xl font-semibold rounded px-4 py-2 ${
              serviceIndex === index && "text-noux-purple"
            }`}
            onClick={() => handleClick(index)}
          >
            {service.service}
          </p>
          <div className="text-[16px] leading-7 px-5">
            {serviceIndex === index && (
              <p className="">{growYourTeamServices[serviceIndex].detail}</p>
            )}
          </div>
        </div>
      );
    });
  };

  return (
    <section>
      <div className="flex flex-col justify-center items-center text-center mb-10">
        <h2 className="text-[64px]">What sets us apart</h2>
        <p className="text-[#626262] text-[24px] leading-9">
          Lorem ipsum dolor sit amet consectetur. Ac ut et in eget blandit{" "}
          <br />
          sollicitudin. Nunc odio enim at.
        </p>
      </div>
      <div className="border border-black border-opacity-30 rounded-[32px] mx-40 flex justify-between">
        <div className="flex flex-col gap-6 p-8">{renderServices()}</div>
        <img src={images.typing} alt="3D Logo Image" className="" />
      </div>
    </section>
  );
};

export default GrowYourTeamServices;
