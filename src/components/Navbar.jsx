//Navbar components
import { useEffect, useState } from "react";
import NouxLogo from "../assets/images/NouxLogo.svg?react";
import { navigationLinks } from "../constants";
import { NavBarMenu } from "../components";

const Navbar = () => {
  //Keep track of the menu state
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  //Keep track of the link hovered
  const [currentIndex, setCurrentIndex] = useState(0);

  // set the menu state to the opposite of what it is
  const handleHamburgerToggle = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };

  // check if menu is expanded and remove the scrolling ability
  useEffect(() => {
    if (isMenuExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuExpanded]);

  // Render links from looping navigationLinks
  const renderNavbarLinks = () => {
    return navigationLinks.map((navLink, index) => (
      <li key={index} onMouseEnter={() => handleHover(index)}>
        {navLink.name}
      </li>
    ));
  };

  return (
    <nav className="flex justify-between items-center rounded-[3rem] h-[72px] bg-noux-gray px-4 text-2xl font-normal">
      <div
        className={`${
          isMenuExpanded
            ? "[clip-path:circle(5000px_at_100%_-15%)]"
            : "[clip-path:circle(50px_at_100%_-15%)]"
        } z-10 absolute top-0 left-0 right-0 bottom-0 bg-[#110326] transition-all transform duration-1000 flex justify-center items-center`}
      >
        <NavBarMenu />
      </div>
      <img src={NouxLogo} alt="" />
      <ul className={"flex gap-8"}>{renderNavbarLinks()}</ul>
      <div>
        <button
          className={`px-4 py-2 flex items-center justify-center gap-3 relative z-50 transition-all transform duration-1000 group ${
            isMenuExpanded ? "text-white" : ""
          }`}
          onClick={handleHamburgerToggle}
        >
          <div className="flex flex-col">
            <div
              className={`bg-black h-[4px] w-[32px] group-duration-4000 my-[0.188rem] transition-all transform duration-1000 rounded-3xl ${
                isMenuExpanded ? "bg-white rotate-45 translate-y-[0.3rem]" : ""
              }`}
            />
            <div
              className={`bg-black h-[4px] w-[32px] my-[0.188rem] transition-all transform duration-1000 rounded-3xl ${
                isMenuExpanded
                  ? "bg-white -rotate-45 -translate-y-[0.3rem]"
                  : ""
              }`}
            />
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
