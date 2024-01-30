import React from "react";
import { images } from "../assets";
import { GenericActionButton } from "../components";
import { Link } from "react-router-dom"; // For the rounting of the links

function HomePageGrowYourTeam() {
  return (
    <section className="pb-[5rem] mx-auto max-w-[112.5rem] px-4 md:px-8">
      <div
        className="w-full h-[688px] bg-cover object-cover bg-center rounded-2xl text-[#FFFFFF] flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${images.nouxLogo3D})` }}
        alt="3D Logo Image"
      >
        <div className="flex flex-col max-w-[700px] items-center gap-6">
          <h2 className="text-[4rem] text-center">Grow your team</h2>
          <p className="text-[1.5rem] text-center">
            We firmly believe that diverse teams lead to great outcomes, keeping
            your business at the forefront of innovation. Whether you're seeking
            a single hire or to scale a whole team, we are here to support you
          </p>
          <Link to="/growyourteam">
            <GenericActionButton
              backgroundColor="bg-[#FFFFFF]"
              textColor="text-[black]"
              textContent="Grow your team"
              border="border-solid border-[#110326]"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomePageGrowYourTeam;
