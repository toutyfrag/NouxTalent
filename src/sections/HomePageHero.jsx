//Hero section/Landing page hero section

import React from "react";
import { images } from "../assets";
import { GenericActionButton } from "../components";
import Marquee from "react-fast-marquee";

//Word for the Marquee animations needs to be a multiple of 2 due to logic in the Marquee component for the words styling
const carouselWords = [
  "SOFTWARE",
  "DATA",
  "DEVOPS",
  "PRODUCT",
  "PROJECT",
  "TESTING",
];

function HomePageHero() {
  return (
    <section className="relative mb-20 mt-[8rem] mx-auto max-w-[112.5REM] px-4 md:px-8">
      {/* Background gradient */}
      <div className="w-[400px] h-[400px] absolute top-[150px] right-[-200px] bg-gradient-to-r from-[#6300FF] to-[#5E00FF] rounded-full blur-[200px] z-[0] opacity-100" />

      {/* Top div headings and buttons */}
      <div className="flex flex-col gap-[1.5rem] mb-10">
        {/* Top div headings */}

        <h1
          className="text-[3rem] text-black leading-[4rem] tracking-[0.010rem]"
          aria-label="Home page secondary heading"
        >
          Diversifying Tech Recruitment
        </h1>

        <h2
          className="text-[2rem] leading-[1.25] text-[#626262] max-w-[40rem]"
          aria-label="Home page heading"
        >
          Supporting you to build{" "}
          <span className="text-noux-purple font-semibold">diverse</span> and
          innovative
          <span className="text-noux-purple font-semibold"> teams</span>,
          shaping the future of tech talent
        </h2>

        {/* Hero buttons */}
        <div className="flex gap-[1.5rem]">
          <GenericActionButton
            backgroundColor="bg-[#6300FF]"
            textColor="text-[white]"
            textContent="Grow your team"
            border="none"
          />
          <GenericActionButton
            backgroundColor="bg-inherit"
            textContent="Find your next role"
            border="border-solid border-2 border-[#110326]"
          />
        </div>
      </div>

      {/* 3D Image */}
      <div
        className="w-full h-[35rem] bg-cover object-cover bg-center rounded-3xl bg-no-repeat flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${images.nouxLogo3D})`,
        }}
        alt="3D Logo Image"
      >
        <Marquee
          className="text-[100px] md:text-[120px] font-extrabold"
          loop={0}
          speed={70}
        >
          {carouselWords.map((word, index) => (
            <div
              key={index}
              className={`px-[2rem] font-[sans-serif] ${
                //Only work with if the array is a multiple of 2
                index % 2 === 0 ? "text-white" : "outlined-text"
              }`}
            >
              {word}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default HomePageHero;
