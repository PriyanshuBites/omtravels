import React, { useState } from "react";
import logo from "../../public/images/otlogo.png";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { IoCarSport } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Explore car logic function -

  const location = useLocation();
  const navigate = useNavigate();

  // const handleClick1 = () => {
  //     if (location.pathname === '/') {
  //       // Same page: Scroll to top
  //       window.scrollTo({ top: 750, behavior: 'smooth' });
  //     } else {
  //       // Navigate to home with scroll target
  //       navigate('/', { state: { scrollTo: 'featured-car' } });
  //     }
  //   };

  const handleClick1 = () => {
    let scrollPosition = 750;

    if (window.innerWidth <= 768) {
      scrollPosition = 280;
    }

    if (location.pathname === "/") {
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: 'featured-car' } });
    }
  };

  return (
    <header className=" bg-black text-white fixed top-0 left-0 w-full transition-all z-40">
      <div className="xl:container xl:mx-auto h-[80px] md:h-[120px] flex justify-between items-center px-4 pl-14 md:px-4  ">
        {/* Logo */}
        <Link
          to="/"
          className="logo flex justify-center items-center md:w-40 lg:w-60 w-12 "
        >
          <img src={logo} alt="company logo" className="mr-2 md:w-16" />
          <h1 className="lg:text-4xl font-bold">OmTravels</h1>
        </Link>

        {/* Navbar for large screens */}
        <nav className="hidden lg:flex ">
          <ul className="flex space-x-8">
            <li>
              <Link
                to={"/"}
                className="text-white font-nunito text-sm transition-colors lg:text-lg"
              >
                Home
              </Link>
            </li>
            {/* <li>
                            <a href="#featured-car" className="text-[#2e384d] font-nunito text-sm hover:text-[#339af0] transition-colors lg:text-lg">Explore cars</a>
                        </li> */}
            <li>
              <Link
                to={"/reservation"}
                className="text-white font-nunito text-sm transition-colors lg:text-lg"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to={"/about-us"}
                className="text-white font-nunito text-sm transition-colors lg:text-lg"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to={"/contact-us"}
                className="text-white font-nunito text-sm transition-colors lg:text-lg"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-5 ">
          {/* Contact Info */}
          <div className="hidden lg:flex flex-col items-end">
            <a
              href="tel:88002345678"
              className="text-white font-nunito md:text-xl"
            >
              9826327078
            </a>
            <span className="text-white text-xs md:text-[15px]">
              24 x 7 Service
            </span>
          </div>

          {/* Buttons */}
          <button
            // href="#featured-car"
            role="link"
            onClick={handleClick1}
            // className="relative bg-[#339af0] text-white p-[5px] rounded-[14px] flex justify-center items-center min-w-[40px] min-h-[40px] shadow-md transition-shadow hover:shadow-lg"
            className="relative bg-yellow-400 text-black p-[5px] rounded-[14px] flex justify-center items-center min-w-[40px] min-h-[40px] shadow-md transition-shadow hover:shadow-lg"
          >
            {/* <ion-icon name="car-outline" className="text-xl"></ion-icon> */}
            <span id="aria-label-txt" className="hidden xl:block px-2">
              Explore cars
            </span>
            <span id="aria-label-txt" className="text-2xl lg:block xl:hidden">
              <IoCarSport />
            </span>
          </button>

          {/* User Account Should be open again in new version of Omtravels  */}

          {/* <a
                        href="#"
                        className="relative bg-white text-[#2e384d] p-[5px] rounded-[14px] flex justify-center items-center min-w-[40px] min-h-[40px] shadow-md transition-shadow hover:shadow-lg"
                        aria-label="Profile"
                    >
                        <BsPerson name="person-outline" className="text-xl" />

                    </a> */}

          {/* Navbar Toggle Button for Mobile */}
          <button
            className="flex flex-col justify-center items-center gap-2 w-[22px] h-[22px] cursor-pointer lg:hidden transition-all"
            onClick={toggleNavbar}
            aria-label="Toggle Menu"
          >
            <span
              className={`block w-full h-[2px] bg-white rounded transition-transform ${
                navbarOpen
                  ? "rotate-45 scale-[1.2] bg-slate-900 translate-y-[6px] z-10"
                  : ""
              }`}
            ></span>
            <span
              className={`block w-[70%] h-[2px] bg-white rounded transition-transform ${
                navbarOpen
                  ? "-rotate-45 scale-[1.2] bg-slate-900 -translate-y-[4px] w-full z-10"
                  : ""
              }`}
            ></span>
            <span
              className={`block w-[40%] h-[2px] bg-white rounded transition-transform ${
                navbarOpen ? "opacity-0 scale-[0.8] " : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navbar */}
        <nav
          // className={`fixed top-[70px] z-20 bottom-0 right-0 max-w-[260px] w-full bg-[#e9efff] p-[20px_25px] border-white shadow-lg transition-transform duration-500 lg:hidden ${
          className={`fixed top-[70px] z-20 bottom-0 right-0 max-w-[260px] w-full bg-black p-[20px_25px] border-white shadow-lg transition-transform duration-500 lg:hidden ${
            navbarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                to={"/"}
                href="#home"
                className="text-white font-nunito text-[15px] font-bold hover:text-[#339af0] transition-colors"
              >
                Home
              </Link>
            </li>
            {/* <li>
                            <a href="#featured-car" className="text-[#2e384d] font-nunito text-sm hover:text-[#339af0] transition-colors">Explore cars</a>
                        </li> */}
            <li>
              <Link
                to={"/about-us"}
                href="#"
                className="text-white font-nunito text-[15px] font-bold hover:text-[#339af0] transition-colors"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to={"/contact-us"}
                href="#"
                className="text-white font-nunito text-[15px] font-bold hover:text-[#339af0] transition-colors"
              >
                Contact us
              </Link>
            </li>
            <li>
              <Link
                to={"/reservation"}
                href="#"
                className="text-white font-nunito text-[15px] font-bold hover:text-[#339af0] transition-colors"
              >
                Railway Reservation
              </Link>
            </li>
            <li>
              <Link
                to={"/terms&condition"}
                href="#"
                className="text-white font-nunito text-[15px] font-bold hover:text-[#339af0] transition-colors"
              >
                Terms & Condition
              </Link>
            </li>
            <li>
              <Link
                to={"/privacypolicy"}
                href="#"
                // className="text-[#2e384d] font-nunito text-[15px] font-bold hover:text-[#339af0] transition-colors"
                className="text-white font-nunito text-[15px] font-bold hover:text-[#339af0] transition-colors"
              >
                Our Policy
              </Link>
            </li>
            {/* <li>
                            <a href="#blog" className="text-[#2e384d] font-nunito text-sm hover:text-[#339af0] transition-colors">Blog</a>
                        </li> */}
          </ul>
        </nav>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-500 lg:hidden ${
          navbarOpen
            ? "opacity-70 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleNavbar}
      ></div>
    </header>
  );
};

export default Header;
