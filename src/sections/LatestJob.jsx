import React, { useState, useRef, useEffect } from "react";
import { GenericActionButton, JobCard } from "../components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const JobBoard = () => {
  const [numberOfSlides, setNumberOfSlides] = useState(0);
  const [slideArray, setSlideArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const splideRef = useRef(null);
  const colors = ["bg-[#E0CCFF]", "bg-[#D5DBFF]", "bg-[#F2F2F2]"];
  const jobCards = [
    "JobCard",
    "JobCard",
    "JobCard",
    "JobCard",
    "JobCard",
    "JobCard",
  ];

  const splideOptions = {
    type: "loop",
    gap: "2rem",
    autoWidth: true,
    pagination: false, // Disable default pagination
    arrows: false,
    drag: true,
  };

  useEffect(() => {
    setNumberOfSlides(splideRef.current.props.children.length);
    setSlideArray(splideRef.current.props.children);
  }, []);

  const handleButtonClick = (index) => {
    if (splideRef.current) {
      splideRef.current.go(index);
      console.log("Splide Properties:", numberOfSlides);
    }
  };

  const handleSlideMoved = (splide, newIndex) => {
    setCurrentIndex(newIndex);
    console.log("Splide Properties:", newIndex);
    console.log("Slide moved to index:", newIndex);
  };

  return (
    <section className="flex flex-col justify-center relative mx-auto max-w-[112.5rem] pl-8">
      <div className="w-[400px] h-[400px] absolute bottom-[-200px] left-0 bg-gradient-to-r from-[#6300FF] to-[#5E00FF] rounded-full blur-[200px] opacity-100" />
      <div className="">
        <div className="flex flex-col justify-center items-center mx-auto max-w-[112.5rem]">
          <div className="flex flex-col justify-center items-center max-w-[784px] gap-6">
            <h2 className="text-[4rem]">Find your next role</h2>
            <p className="text-[1.5rem] text-[#626262] leading-10 text-center">
              Supporting you through every step of the process. Explore our
              roles and join a community dedicated to fostering innovation
              through diversity
            </p>
            <div className="flex gap-6 mb-14">
              <GenericActionButton
                backgroundColor="bg-[#6300FF]"
                textColor="text-[white]"
                textContent="Find your next role"
                border="none"
              />
              <GenericActionButton
                backgroundColor="bg-inherit"
                textContent="Send your cv"
                border="border-solid border-2 border-[#110326]"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[112.5rem]">
          <div className="text-[#626262]  text-2xl font-bold">
            FEATURED JOBS
          </div>
          <Splide
            ref={splideRef}
            options={splideOptions}
            onMove={handleSlideMoved}
            aria-label="My Favorite Images"
          >
            {jobCards.map((jobCard, index) => (
              <SplideSlide key={index}>
                <JobCard bgColor={`${colors[index % colors.length]}`} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div className="flex flex-col items-end mt-8 pr-8">
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

export default JobBoard;
