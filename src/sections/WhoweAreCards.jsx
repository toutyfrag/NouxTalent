// Import necessary modules and components
import { WhatWeDoCard } from "../components";
import { useState, useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { whoWeAreValueCards } from "../constants";
import servicesCards from "../constants";

const WhoWeAreCards = () => {
  console.log(whoWeAreValueCards);
  const [slideArray, setSlideArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const splideRef = useRef(null);
  const colors = ["bg-[#E0CCFF]", "bg-[#D5DBFF]", "bg-[#F2F2F2]"];

  const splideOptions = {
    gap: "2rem",
    autoWidth: true,
    pagination: false,
    arrows: false,
    drag: true,
  };

  // get the number of slides and the slide array
  useEffect(() => {
    setSlideArray(splideRef.current.props.children);
  }, []);

  // Pagination buttons logic for the Splide carousel
  const handlePaginationClick = (index) => {
    if (splideRef.current) {
      splideRef.current.go(index);
    }
  };

  // Update the current index when the slide is moved
  const handleSlideMoved = (splide, newIndex) => {
    setCurrentIndex(newIndex);
  };

  return (
    <section className="pb-[5rem] relative mx-auto max-w-[112.5rem] pl-8">
      <div className="w-[400px] h-[400px] absolute bottom-0 left-0 bg-gradient-to-r from-[#6300FF] to-[#5E00FF] rounded-full blur-[200px] z-[0] opacity-100" />

      {/* Apply motion to the list of cards */}
      <div className="">
        <div className="flex flex-col justify-center items-center gap-6 mb-14">
          <h2 className="text-[4rem] text-black">What we stand for</h2>
          <p className="text-[#626262] text-2xl">
            Our values are embedded into everything that we do at Noux
          </p>
        </div>
      </div>

      <Splide
        ref={splideRef}
        options={splideOptions}
        onMove={handleSlideMoved}
        aria-label="My Favorite Images"
      >
        {whoWeAreValueCards.map((jobCard, index) => (
          <SplideSlide key={index}>
            <WhatWeDoCard
              cardIndex={`0${index + 1}`}
              cardHeading={whoWeAreValueCards[index].heading}
              cardSubHeading={whoWeAreValueCards[index].subheading}
              bgColor={`${colors[index % colors.length]}`}
              cardHeight={"h-[559px]"}
              cardHeadingSize={"section-header"}
            />
          </SplideSlide>
        ))}
      </Splide>
      <div className="flex justify-end gap-2 pb-5 pr-8 mt-8">
        {slideArray.map((slide, index) => (
          <button
            key={index}
            className={`h-2 rounded ${
              index === currentIndex
                ? "bg-black w-16 transition-all duration-200"
                : "w-8 bg-noux-gray transition-all duration-200"
            } `}
            onClick={() => handlePaginationClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

// Export the WhoWeAre component as the default export
export default WhoWeAreCards;
