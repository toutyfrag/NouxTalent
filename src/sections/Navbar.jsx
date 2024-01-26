import { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring"; // For the removal of the navbar container when scrolling
import { navigationLinks } from "../constants"; // Links for the navbar and the side menu
import { NavBarMenu } from "../components"; // Side menu
import { Link } from "react-router-dom"; // For the rounting of the links
import { ReactSVG } from "react-svg"; // Import SVG

const Navbar = () => {
  // --------------------------------------------------------------------------------------------------------------------------------
  // NAVBAR ANIMATION WHEN SCROLLING

  // Keep track of the removal of the navbar container when scrolling
  const [removeComponents, setRemoveComponents] = useState(false);

  // Define spring animation for removal of the navbar container when scrolling
  const removalSpring = useSpring({
    opacity: removeComponents ? 0 : 1,
    transform: removeComponents ? "translateY(-3.125)" : "translateY(0)",
    config: { duration: 300 },
  });

  // Define spring animation for removal of the navbar container when scrolling
  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      // When the user scrolls down 30px from the top effect start taking place
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

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // --------------------------------------------------------------------------------------------------------------------------------
  // SIDE MENU ANIMATION AND LOGIC WHEN HAMBURGER IS PRESSED

  //Keep track of the menu state
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  //Keep track of the link hovered in the side menu

  // set the Hamburger state to the opposite of what it is
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

  // --------------------------------------------------------------------------------------------------------------------------------
  // Render links from looping navigationLinks
  const renderNavbarLinks = () => {
    return navigationLinks.map((navLink, index) => (
      <li key={index} className="hover:bg-noux-violet rounded-3xl px-4 py-2">
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
        <section className="mt-4 mx-8">
          <nav className="flex justify-between items-center rounded-[3rem] h-[4.5rem] bg-[#F6F1FD] pl-6 pr-2 text-2xl font-normal max-w-[112.5rem] mx-auto">
            <div
              className={`${
                isMenuExpanded
                  ? "[clip-path:circle(250rem_at_100%_-15%)]"
                  : "[clip-path:circle(0rem_at_100%_-15%)]"
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
              <ReactSVG src="src/assets/images/nouxlogo.svg" />
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
                    className={`bg-black h-[0.25rem] w-[2rem] group-duration-4000 my-[0.188rem] transition-all transform duration-1000 rounded-3xl ${
                      isMenuExpanded
                        ? "bg-white rotate-45 translate-y-[0.3rem]"
                        : ""
                    }`}
                  />
                  <div
                    className={`bg-black h-[0.25rem] w-[2rem] my-[0.188rem] transition-all transform duration-1000 rounded-3xl ${
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

  function newFunction() {
    return useState(0);
  }
};

export default Navbar;
