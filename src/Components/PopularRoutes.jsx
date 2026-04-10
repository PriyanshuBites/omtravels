import React from "react";
import { FaCar } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { IoIosCall } from "react-icons/io";
import styled from "styled-components";
import { callNow, openWhatsApp } from "../../src/utils/communication.jsx";
import { MapPin } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Routes = () => {
  const routes = [
    "Jabalpur to Nagpur",
    "Jabalpur to Mandla",
    "Jabalpur to Raipur",
    "Jabalpur to Bhopal",
    "Jabalpur to Chhindwara",
    "Jabalpur to Maihar",
    "Jabalpur to Kanha",
    "Jabalpur to Sagar",
    "Jabalpur to Bilaspur",
    "Jabalpur to Gadarwara",
    "Jabalpur to Durg",
    "Jabalpur to Bhilai",
  ];

  // Second option of call and whatsapp integration -

  // const phoneNumber = "917440913040";
  // const whatsappMessage = "Hi Om Travels, ";

  // const handleWhatsAppClick = () => {
  //   const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  //   window.open(url, "_blank");
  // };

  // const handleCallClick = () => {
  //   window.location.href = `tel:${phoneNumber}`;
  // };

  return (
    <>
      <Container>
        {/* <section className="bg-slate-50 py-10"> */}
        {/* <section className="bg-gradient-to-r from-[#0b1c3a]/90 via-[#0b1c3a]/70 to-[#0b1c3a]/90  py-10"> */}
        <section className="bg-black py-10">
          <div className="container mx-auto">
            <h2 className="heading text-center text-2xl sm:text-3xl xl:text-4xl font-bold ">
              
            </h2>

            <div className="flex items-center justify-center mt-8 mb-12 lg:mb-24">
              <div className="flex-grow h-[1px] bg-white"></div>

              <h2 className="px-4 text-2xl sm:text-3xl xl:text-4xl font-bold text-white">
                Top <span className="text-yellow-400">Destinations</span>
              </h2>

              
            </div>
            <div className="md:max-w-8xl mx-auto flex flex-wrap md:gap-3 justify-center md:px-4">
              {routes.map((route, index) => (
                <Link
                  to="/contact-us"
                  key={index}
                  className="group flex items-center md:gap-1 gap-1 m-1 rounded-full border border-slate-300 bg-white md:mx-3 md:my-3 xl:mx-4 xl:my-4 xl:px-4 px-2 py-2 text-sm xl:text-lg font-medium text-slate-700 transition-all
                       hover:border-yellow-500 hover:bg-blue-50 hover:text-yellow-500"
                >
                  <FaLocationDot className="text-yellow-400 " />
                  <span className=" ">{route}</span>
                  <span className="translate-x-0 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100 text-black">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="buttons flex justify-center items-center mt-[80px] mb-[20px]">
            <button
              onClick={() => openWhatsApp("917440913040", "Hi Om Travels, ")}
              className="flex justify-around mx-2 items-center w-[150px] py-2 px-4 bg-green-500 text-white font-semibold rounded-md shadow-sm hover:bg-green-600 focus:outline-none"
            >
              <SiWhatsapp />
              Whatsapp
            </button>
            <button
              onClick={() => callNow("917440913040")}
              type="submit"
              className="flex justify-around mx-2 items-center w-[150px] py-2 px-4 bg-yellow-400 text-black font-semibold rounded-md shadow-sm hover:bg-yellow-500 focus:outline-none"
            >
              <IoIosCall className="text-xl" />
              Call Now
            </button>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Routes;
const Container = styled.div``;
