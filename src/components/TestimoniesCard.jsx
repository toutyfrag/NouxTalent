import React from "react";

const TestimoniesCard = () => {
  return (
    <div className="w-[343px] h-[344px] p-6 bg-white bg-opacity-10 rounded-[32px] border-2 border-white flex-col justify-end items-start gap-6 inline-flex">
      <div className="h-8 p-2 bg-zinc-600 rounded-[59px] justify-center items-center gap-2 inline-flex">
        <div className="text-white text-xs font-medium ">Comapany name</div>
      </div>
      <div className="self-stretch text-white text-base font-medium leading-normal">
        Lorem ipsum dolor sit amet consectetur. Ac ut et in eget blandit
        sollicitudin. Nunc odio enim at at. Vivamus sed molestie urna viverra id
        magnis risus purus.
      </div>
      <div className="self-stretch justify-start items-center gap-2 inline-flex">
        <img
          className="w-10 h-10 relative rounded-[50px]"
          src="https://via.placeholder.com/40x40"
        />
        <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
          <div className="w-[295px] text-white text-sm font-bold leading-normal">
            FirstName LastName
          </div>
          <div className="self-stretch text-zinc-600 text-xs font-medium leading-normal">
            FirstName LastName
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimoniesCard;
