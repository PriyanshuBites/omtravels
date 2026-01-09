import React from 'react';
import { FaCar, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { BsSendFill } from "react-icons/bs";


const FourStepRental = () => {
  const steps = [
    {
      title: "Enter Your Name",
      description: "Provide your full name.",
      icon: <IoPersonSharp />,
    },
    {
      title: "Mobile Number",
      description: "Provide your contact number.",
      icon: <FaPhoneAlt />
      ,
    },
    {
      title: "Choose Your Car Type",
      description: "Select the car you wish to rent.",
      icon: <FaCar />,
    },
    {
      title: "Pick Date",
      // description: "Select your rental start date.",
      description: "Select your rental date.",
      icon: <MdOutlineDateRange />
      ,
    },
    {
      title: "Submit",
      description: "Submit and receive a call in 10 minutes.",
      icon: <BsSendFill />
      ,
    },
  ];
    
  return (
    <div className="bg-gradient-to-r from-[#e9efff] via-[#b2c4ff] to-[#e9efff] py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-gray-800">Rent a Car in 5 Easy Steps</h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 justify-around items-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center relative group">
              {/* Circle Icon */}
              <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl mb-4 transition transform group-hover:scale-110 shadow-lg">
                {step.icon}
              </div>

              {/* Title and Description */}
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>

              {/* Line Connector */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute right-[-50px] top-1/2 transform translate-y-[-50%] w-20 border-t-2 border-dashed border-blue-600"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FourStepRental;

