// Import necessary modules and components
import { WhatWeDoCard } from "../components";
import { useState, useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import servicesCards from "../constants";

const HomePageWhoWeAre = () => {
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
    <section className="pb-[5rem] relative mx-auto max-w-[112.5rem] pl-4 md:pl-8">
      <div className="w-[400px] h-[400px] absolute bottom-0 left-0 bg-gradient-to-r from-[#6300FF] to-[#5E00FF] rounded-full blur-[200px] z-[0] opacity-100" />

      {/* Apply motion to the list of cards */}
      <div className="flex items-end justify-between">
        <h2 className="section-header">So who are we?</h2>
        <div className="flex gap-2 pb-5 pr-4 md:pr-8">
          {slideArray.map((slide, index) => (
            <button
              key={index}
              className={`h-2 rounded ${
                index === currentIndex
                  ? "w-16 transition-all duration-200 bg-noux-dark-purple"
                  : "w-8 bg-noux-gray transition-all duration-200"
              } `}
              onClick={() => handlePaginationClick(index)}
            />
          ))}
        </div>
      </div>

      <Splide
        ref={splideRef}
        options={splideOptions}
        onMove={handleSlideMoved}
        aria-label="My Favorite Images"
      >
        {servicesCards.map((jobCard, index) => (
          <SplideSlide key={index}>
            <WhatWeDoCard
              cardIndex={`0${index + 1}`}
              cardHeading={servicesCards[index].heading}
              cardSubHeading={servicesCards[index].subheading}
              bgColor={`${colors[index % colors.length]}`}
              cardHeight={"h-[559px]"}
              cardHeadingSize={"text-[4rem]"}
            />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

// Export the WhoWeAre component as the default export
export default HomePageWhoWeAre;
