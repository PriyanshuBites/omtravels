import React from "react";
import { FaCar, FaHandsHelping, FaUserTie, FaClock } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaCar size={28} />,
      title: "Safe and Clean Vehicles",
      description: (
        <>
          All our vehicles are{" "}
          <span className="hidden sm:inline"> thoroughly </span>cleaned and
          maintained for your safety.,
        </>
      ),
    },
    {
      icon: <FaUserTie size={28} />,
      title: "Experienced Drivers",
      description: (
        <>
          Our drivers are <span className="hidden sm:inline">highly </span>
          trained, licensed, and experienced professionals.,
        </>
      ),
    },
    {
      icon: <FaHandsHelping size={28} />,
      title: "24/7 Customer Support",
      description:
        "We are always here to assist you, no matter the time or place.",
    },
    {
      icon: <FaIndianRupeeSign size={28} />,
      title: "Affordable Pricing",
      description: (
        <>
          Whether for hours or days, we offer flexible rental prices
          <span className="hidden sm:inline"> to suit your needs</span>.
        </>
      ),
    },
    {
      icon: <FaClock size={28} />,
      title: "Flexible Rental Options",
      description:
        "Choose from a variety of rental plans that suit your needs.",
    },
  ];

  return (
    // <div className="bg-gradient-to-r from-[#e9efff] via-[#b2c4ff] to-[#e9efff] py-20 px-8">
    //     <div className="container mx-auto text-center">
    //         <h2 className="text-4xl pb-4 font-bold mb-10 text-gray-800">Why Choose Us</h2>

    //         <div className="flex flex-col md:flex-row justify-around items-start space-y-8 md:space-y-0 md:space-x-8">
    //             {features.map((feature, index) => (
    //                 <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group">
    //                     {/* Icon with hover effect */}
    //                     <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
    //                         {feature.icon}
    //                     </div>
    //                     {/* Text */}
    //                     <div className="text-center">
    //                         <h3 className="text-2xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
    //                         <p className="text-gray-600">{feature.description}</p>
    //                     </div>
    //                 </div>
    //             ))}
    //         </div>
    //     </div>
    // </div>

    // <div className="bg-gradient-to-r from-[#e9efff] via-[#b2c4ff] to-[#e9efff] py-20 md:px-8">
    // <div className="bg-gradient-to-r from-[#0b1c3a]/90 via-[#0b1c3a]/70 to-[#0b1c3a]/90  py-20 md:px-8">
    <div className="bg-black py-20 md:px-8">
      {/* bg-gradient-to-b from-blue-50 */}
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-16 lg:mb-24">
          <div className="flex-grow h-[1px] bg-white"></div>

          <h2 className="px-4 text-2xl sm:text-3xl xl:text-4xl font-bold text-white">
            Why <span className="text-yellow-400">Choose Us</span>
          </h2>

          <div className="flex-grow h-[1px] bg-white"></div>
        </div>

        {/* Large Screen - */}
        <div className="large-view hidden lg:block max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-5 lg:gap-10 md:gap-5 items-start">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group backdrop-blur-xl bg-white/90 border border-white/50 rounded-3xl p-8 md:p-2 lg:p-4 xl:p-8 text-center shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)]"
                // "bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 relative"
              >
                {/* Floating Icon */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                  {/* <div className="w-16 h-16 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition"> */}
                  <div className="w-16 h-16 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-2xl bg-yellow-400 text-black flex items-center justify-center shadow-xl group-hover:scale-110 transition">
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="mt-10 mb-3 text-lg xl:text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-800 text-sm xl:text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Screen - */}

        <div className="mobile-view block lg:hidden max-w-7xl mx-auto px-6">
          <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-6 md:max-w-4xl md:mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start backdrop-blur-xl bg-white/90 border border-white/50 rounded-3xl gap-4 p-4 shadow-sm bg-white"
              >
                <div className="block lg:hidden lg:block flex-shrink-0 text-blue-600 bg-blue-50 p-3 my-auto rounded-full ">
                  {feature.icon}
                </div>

                <div>
                  <h3 className="text-base font-semibold">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
