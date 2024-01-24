import { useState } from "react";
import NouxLogowhite from "../assets/images/nouxLogoWhite.svg?react";
import { navigationLinks } from "../constants";
const NavBarMenu = (nouxLogo, backGroundImage, navBarLinks) => {
  const currentYear = new Date().getFullYear();

  //Keep track of the link hovered
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleHover = (index) => {
    setCurrentIndex(index);
  };

  // Render links from looping navigationLinks
  const renderNavbarLinks = () => {
    return navigationLinks.map((navLink, index) => (
      <li key={index} onMouseEnter={() => handleHover(index)}>
        {navLink.name}
      </li>
    ));
  };

  const background = [
    "bg-noux-purple",
    "bg-[#D5DBFF]",
    "bg-[#F2F2F2]",
    "bg-[#E0CCFF]",
  ];

  return (
    <section className="w-full h-full py-4 px-[2.5rem] max-w-[88rem] flex flex-col justify-between text-white">
      <div className="h-[72px] flex justify-start items-center">
        <img src={NouxLogowhite} alt="" />
      </div>
      <div className="flex items-center justify-center gap-[100px]">
        <div
          className={`w-[328px] h-[538px] ${background[currentIndex]}  rounded-3xl`}
        ></div>
        <ul className="flex flex-col gap-14 text-[64px] font-medium">
          {renderNavbarLinks()}
        </ul>
      </div>
      <div className="flex justify-between items-center h-[72px] text-2xl">
        <div>
          <p className="font-bold">Contact us</p>
          <p className="underline">hello@nouxtalent.co.uk</p>
        </div>
        <div className="text-right font-normal">
          <p>Privacy Policy and Cookies</p>
          <p>© Noux Talent {currentYear}</p>
        </div>
      </div>
    </section>
  );
};

export default NavBarMenu;
