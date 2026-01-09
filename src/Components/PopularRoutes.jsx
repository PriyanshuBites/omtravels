import React from "react";
import { FaCar } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { IoIosCall } from "react-icons/io";
import styled from "styled-components";
import { callNow, openWhatsApp } from '../../src/utils/communication.jsx'

const Routes = () => {
  const col1 = ["Nagpur", "Mandla", "Raipur", "Bhopal"];
  const col2 = ["Chhindwara", "Maihar", "Kanha", "Sagar"];
  const col3 = ["Bilaspur", "Gadarwara", "Durg", "Bhilai"];

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
        <div className="bg-gradient-to-r from-[#E2E8F0] via-[#94A3B8] to-[#E2E8F0] py-20">
          <h1 className="heading text-center text-4xl font-bold pt-5">
            Top Destinations
          </h1>
          <div className="flex justify-center pt-5">
            <div className="pt-5 w-[53rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              <div>
                {col1.map((City, Index) => (
                  <div key={Index} className="flex items-center space-x-2 py-2">
                    <FaCar className="text-xl text-dark" />
                    <p className="text-lg ">Jabalpur to {City}</p>
                  </div>
                ))}
              </div>
              <div>
                {col2.map((City, Index) => (
                  <div key={Index} className="flex items-center space-x-2 py-2">
                    <FaCar className="text-xl text-dark" />
                    <p className="text-lg">Jabalpur to {City}</p>
                  </div>
                ))}
              </div>
              <div>
                {col3.map((City, Index) => (
                  <div key={Index} className="flex items-center space-x-2 py-2">
                    <FaCar className="text-xl text-dark" />
                    <p className="text-lg">Jabalpur to {City}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="buttons flex justify-center items-center mt-[50px]">
            <button onClick={() => openWhatsApp('917440913040', 'Hi Om Travels, ')} className="flex justify-around mx-5 items-center w-[150px] py-2 px-4 bg-green-500 text-white font-semibold rounded-md shadow-sm hover:bg-green-600 focus:outline-none">
              <SiWhatsapp />
              Whatsapp
            </button>
            <button
              onClick={() => callNow('917440913040')}
              type="submit"
              className="flex justify-around items-center w-[150px] py-2 px-4 bg-[#339af0] text-white font-semibold rounded-md shadow-sm hover:bg-blue-500 focus:outline-none"
            >
              <IoIosCall className="text-xl" />
              Call Now
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Routes;
const Container = styled.div`

@media (min-width: 1024px) {


}


/* iPad Pro typically has a height greater than 1300px in portrait mode */
@media (min-width: 1024px) and (min-height: 1366px) {
  
  .heading {
    font-size: 20px;
  }
 
}

/* Nest Hub has a shorter height, usually less than 800px */
@media (min-width: 1024px) and (max-height: 800px) {
 
  .heading {
    font-size: 100px;
  }
 
}


`;
