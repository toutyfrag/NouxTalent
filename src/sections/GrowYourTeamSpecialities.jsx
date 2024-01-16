import React, { useState, useRef, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { JobCard, SpecialitiesCard } from "../components";

const GrowYourTeamSpecialities = () => {
  const [numberOfSlides, setNumberOfSlides] = useState(0);
  const [slideArray, setSlideArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const splideRef = useRef(null);
  const colors = ["bg-[#E0CCFF]", "bg-[#D5DBFF]", "bg-[#F2F2F2]"];

  const splideOptions = {
    type: "loop",
    gap: "2rem",
    autoWidth: true,
    pagination: false, // Disable default pagination
    arrows: false,
    drag: true,
  };

  const handleSlideMoved = (splide, newIndex) => {
    setCurrentIndex(newIndex);
    console.log("Splide Properties:", newIndex);
    console.log("Slide moved to index:", newIndex);
  };

  const jobCards = [
    "SpecialitiesCard",
    "SpecialitiesCard",
    "SpecialitiesCard",
    "SpecialitiesCard",
    "SpecialitiesCard",
    "SpecialitiesCard",
  ];

  const specialities = [
    "Software Engineering",
    "Data and AI",
    "DevOps",
    "Product",
  ];

  const handleButtonClick = (index) => {
    if (splideRef.current) {
      splideRef.current.go(index);
      console.log("Splide Properties:", numberOfSlides);
    }
  };

  useEffect(() => {
    setNumberOfSlides(splideRef.current.props.children.length);
    setSlideArray(splideRef.current.props.children);
  }, []);

  return (
    <section className="mt-20 mx-auto max-w-[112.5rem] px-8">
      <div>
        <div className="flex justify-center flex-col items-center text-center">
          <h2 className="text-[64px]">
            Our <span className="font-bold text-noux-purple">specialities</span>
          </h2>
          <p className="text-2xl font-light text-[#626262] leading-10">
            Noux has a long-standing partnership with a trusted client based in
            <br />
            Leeds. Currently going through rapid growth and looking for a lead
            <br />
            engineer to spearhead change.
          </p>
        </div>
        <div className="mt-10">
          <Splide
            ref={splideRef}
            options={splideOptions}
            onMove={handleSlideMoved}
            aria-label="My Favorite Images"
          >
            {specialities.map((speciality, index) => (
              <SplideSlide key={index}>
                <SpecialitiesCard
                  bgColor={`${colors[index % colors.length]}`}
                  speciality={specialities[index]}
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div className="flex flex-col items-end mt-8">
          <div className="flex gap-2">
            {slideArray.map((slide, index) => (
              <button
                key={index}
                className={`h-2 rounded ${
                  index === currentIndex
                    ? "bg-black w-16 transition-all duration-200"
                    : "w-8 bg-noux-gray transition-all duration-200"
                } `}
                onClick={() => handleButtonClick(index)}
              />
            ))}
          </div>

          <div className="w-[351px] text-right text-zinc-600 text-2xl font-extrabold">
            {`0${currentIndex + 1} / 0${numberOfSlides}`}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowYourTeamSpecialities;
