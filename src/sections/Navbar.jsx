import { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import nouxLogo from "../assets/images/NouxLogo.svg?react";
import { navigationLinks } from "../constants";
import { NavBarMenu } from "../components";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [removeComponents, setRemoveComponents] = useState(false);

  // Define spring animation for removal of the navbar container when scrolling
  const removalSpring = useSpring({
    opacity: removeComponents ? 0 : 1,
    transform: removeComponents ? "translateY(-50px)" : "translateY(0)",
    config: { duration: 300 }, // Adjust duration
  });
  // Define spring animation for removal of the navbar container when scrolling
  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > 30) {
        const currentScrollY = window.scrollY;

        if (currentScrollY > prevScrollY) {
          // Scrolling down
          setRemoveComponents(true);
        } else {
          // Scrolling up
          setRemoveComponents(false);
        }

        // Update the previous scroll position
        prevScrollY = currentScrollY;
      } else {
        setRemoveComponents(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <li key={index}>
        <Link to={navLink.href}>{navLink.name}</Link>
      </li>
    ));
  };

  return (
    <section>
      <animated.div
        style={removalSpring}
        className={`fixed left-0 top-0 right-0 z-10`}
      >
        <section className="px-4">
          <nav className="flex justify-between items-center rounded-[3rem] h-[72px] bg-[#F6F1FD] pl-4 pr-2 text-2xl font-normal max-w-[112.5rem] mx-auto">
            <div
              className={`${
                isMenuExpanded
                  ? "[clip-path:circle(5000px_at_100%_-15%)]"
                  : "[clip-path:circle(0px_at_100%_-15%)]"
              } z-20 absolute top-0 left-0 right-0 bg-[#110326] transition-all transform duration-1000 flex justify-center items-center`}
              //   Inline css to remove transition on resizing window to affect only the height
              style={{
                height: "100vh",
                transition: "height none",
              }}
            >
              <NavBarMenu />
            </div>
            <Link to="/">
              <img src={nouxLogo} alt="" />
            </Link>
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
                      isMenuExpanded
                        ? "bg-white rotate-45 translate-y-[0.3rem]"
                        : ""
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
        </section>
      </animated.div>
    </section>
  );
};

export default Navbar;
