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
    <section className="p-10 px-40">
      <div className="flex flex-col justify-center items-center text-center mb-10">
        <h2 className="text-[64px]">What sets us apart</h2>
        <p className="text-[#626262] text-[24px] leading-9">
          We offer a range of services and can tailor these to support your
          unique needs
        </p>
      </div>
      <div className="border border-black border-opacity-30 rounded-3xl flex justify-between relative">
        <div className="flex flex-col gap-6 p-8 w-[60%]">
          {renderServices()}
        </div>
        <div
          className="bg-noux-purple rounded-r-3xl top-0 right-0 w-[40%] absolute bg-cover bg-center"
          style={{
            backgroundImage: `url(${images.typing})`,
            height: "100%",
          }}
          alt="3D Logo Image"
        />
      </div>
    </section>
  );
};

export default GrowYourTeamServices;
