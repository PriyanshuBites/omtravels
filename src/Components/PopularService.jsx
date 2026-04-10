// import React from 'react';
// import { FaTaxi, FaPlane, FaMapMarkerAlt, FaCar } from 'react-icons/fa';

// const PopularServices = () => {
//     const services = [
//         {
//             icon: <FaTaxi className="text-4xl text-blue-500" />,
//             title: "Round Trip Cabs",
//             description: "Enjoy a seamless round trip with our comfortable cabs.",
//         },
//         {
//             icon: <FaCar className="text-4xl text-blue-500" />,
//             title: "One Way Trip",
//             description: "Affordable one way trips to your destination.",
//         },
//         {
//             icon: <FaMapMarkerAlt className="text-4xl text-blue-500" />,
//             title: "Local Rentals",
//             description: "Explore the city with our flexible local rental options.",
//         },
//         {
//             icon: <FaPlane className="text-4xl text-blue-500" />,
//             title: "Airport Cabs",
//             description: "Reliable airport transfers at competitive prices.",
//         },
//     ];

//     return (
//         <div className="bg-gradient-to-r from-[#e9efff] via-[#b2c4ff] to-[#e9efff] py-16">
//             <div className="container mx-auto text-center">
//                 <h2 className="text-4xl font-bold mb-10 text-gray-800">Our Popular Services</h2>
//                 <div className="flex flex-col md:flex-row justify-around items-start space-y-8 md:space-y-0 md:space-x-8">
//                     {services.map((service, index) => (
//                         <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
//                             <div className="mb-4">
//                                 {service.icon}
//                             </div>
//                             <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
//                             <p className="text-gray-600">{service.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PopularServices;

// .............................................another code..................................................

// import React from 'react';
// import { FaTaxi, FaCar, FaMapMarkerAlt, FaPlane } from 'react-icons/fa';
// import img1 from "../../public/images/round trip.webp"
// import img2 from "../../public/images/airport.webp"
// import img3 from "../../public/images/local.webp"
// import img4 from "../../public/images/local2.jpg"
// import img5 from "../../public/images/local2.jpg"
// import img6 from "../../public/images/tripo.jpg"
// import img7 from "../../public/images/oneway.webp"

// const PopularServices = () => {
//     const services = [
//         {
//             icon: <FaTaxi className="text-4xl text-yellow-500" />,
//             title: "Round Trip Cabs",
//             description: "Enjoy a seamless round trip with our comfortable cabs.",
//             bgImage: `url(${img1})`
//         },
//         {
//             icon: <FaCar className="text-4xl text-yellow-500" />,
//             title: "One Way Drops",
//             description: <p className=''>Affordable one way trip to your destination.</p>,
//             bgImage: `url(${img7})`
//         },
//         {
//             icon: <FaMapMarkerAlt className="text-4xl text-yellow-500" />,
//             title: "Local Rentals",
//             description: "Explore the city with our flexible local rental options.",
//             bgImage: `url(${img4})`
//         },
//         {
//             icon: <FaPlane className="text-4xl text-yellow-500" />,
//             // title: "Airport Transfers",
//             title: "Airport Cabs",
//             description: "Reliable airport transfers at competitive prices.",
//             bgImage: `url(${img2})`
//         },
//     ];

//     return (
//         // <div className=' px-8 py-20 bg-gradient-to-r from-[#E2E8F0] via-[#94A3B8] to-[#E2E8F0]'>
//         <div className=' px-8 py-20 bg-[#e9efff]'>
//             <div>
//                 <h1 className='text-center text-5xl text-slate-900 font-bold pb-16'>POPULAR SERVICES</h1>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-4">
//                 {services.map((service, index) => (
//                     <div
//                         key={index}
//                         className="relative h-[700px] bg-cover bg-center overflow-hidden group cursor-pointer border-r-white border-5"
//                         style={{ backgroundImage: service.bgImage }}
//                     >
//                         {/* Dark overlay */}
//                         <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity group-hover:bg-opacity-50"></div>

//                         {/* Title always at the bottom */}
//                         <div className="flex absolute bottom-4 left-4 right-4 text-white transition-transform transform group-hover:translate-y-[-160px] duration-500 ease-in-out">
//                             <h3 className="text-3xl font-semibold">{service.title}</h3>
//                             <div className="mb-4 ml-4 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">
//                                 {service.icon}
//                             </div>
//                         </div>

//                         {/* Icon and description - hidden initially */}
//                         <div className="ml-5 absolute bottom-0 flex flex-col justify-center items-center opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-[-130px]">
//                             <p className="text-lg text-slate-300">{service.description}</p>
//                         </div>

//                         {/* Arrow icon */}

//                         {/* should be open in phase - 2 */}

//                         {/* <div className="absolute bottom-4 right-4 text-yellow-400 transition-transform transform group-hover:scale-110">
//                             →
//                         </div> */}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default PopularServices;

// .............................................another code..................................................

import React from "react";
import { FaTaxi, FaCar, FaMapMarkerAlt, FaPlane } from "react-icons/fa";
import img1 from "../../public/images/roundcars.png";
import img2 from "../../public/images/airportcars.png";
import img4 from "../../public/images/localcars.png";
import img7 from "../../public/images/roundcar.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const PopularServices = () => {
  const services = [
    {
      icon: <FaTaxi />,
      title: "Round Trip Cabs",
      description: "Enjoy a seamless round trip with our comfortable cabs.",
      bgImage: `url(${img1})`,
    },
    {
      icon: <FaCar />,
      title: "One Way Drops",
      description: "Affordable one way trip to your destination.",
      bgImage: `url(${img7})`,
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Local Rentals",
      description: "Explore the city with our flexible local rental options.",
      bgImage: `url(${img4})`,
    },
    {
      icon: <FaPlane />,
      title: "Airport Cabs",
      description: "Reliable airport transfers at competitive prices.",
      bgImage: `url(${img2})`,
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  return (
    // <section className="py-16 px-4 lg:px-10 bg-gradient-to-r from-[#0b1c3a]/90 via-blue-300 to-[#0b1c3a]/90 ">
    <section className="py-16 px-4 lg:px-10 bg-black ">
      <div className="container mx-auto">
        {/* bg-[#0b1220] */}

        <div className="flex items-center justify-center mb-12 lg:mb-24">
          <h2 className="px-4 text-2xl sm:text-3xl xl:text-4xl font-bold text-white">
            Popular <span className="text-yellow-400">Services</span>
          </h2>

          <div className="flex-grow h-[1px] bg-white"></div>
        </div>

        {/* MOBILE → Peek-a-Card Scroll */}
        <div className="flex gap-5 overflow-x-auto pb-6 sm:hidden snap-x snap-mandatory">
          {services.map((service, index) => (
            <div
              key={index}
              className="snap-start min-w-[85%] h-[320px] rounded-2xl relative overflow-hidden shadow-lg bg-cover bg-no-repeat bg-[50%_50%]"
              style={{ backgroundImage: service.bgImage }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 p-5 text-white">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-sm text-slate-200 mt-1">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* TABLET → 2-Column Staggered */}
        {/* TABLET → Split Carousel Layout */}
        <div className="hidden sm:block px-6">
          <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-2 min-h-[320px]">
              {/* LEFT → Title & Description */}
              <div className="flex flex-col justify-center px-8 lg:px-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {services[activeIndex].title}
                </h3>
                <p className="text-slate-600 text-base xl:text-lg leading-relaxed">
                  {services[activeIndex].description}
                </p>
              </div>

              {/* RIGHT → Image */}
              <div
                className="relative bg-cover bg-center shadow-[-12px_0_30px_rgba(0,0,0,0.15)]"
                style={{
                  backgroundImage: services[activeIndex].bgImage,
                  clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0 100%)",
                }}
              ></div>

              {/* ARROWS */}
              <div className="absolute bottom-4 right-6 flex gap-3">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-xl"
                >
                  <IoIosArrowBack />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-xl"
                >
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* LARGE SCREEN → Clean Hover Reveal (OLD STYLE) */}
        {/* <div className="hidden lg:grid grid-cols-4 gap-2"> */}
        <div className="hidden ">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-[450px] rounded-2xl overflow-hidden shadow-lg bg-cover bg-no-repeat cursor-pointer"
              style={{ backgroundImage: service.bgImage }}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/55 transition-all duration-500" />

              <div className="absolute bottom-6 left-6 right-6 text-white transition-all duration-500 group-hover:-translate-y-16">
                <div className="xl:mx-12">
                  <div className="flex items-center gap-3">
                    {/* <span className="text-3xl text-yellow-400 opacity-0 group-hover:opacity-100 transition">
                  {service.icon}
                </span> */}
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                  </div>
                </div>

                <p className="absolute bottom-6 left-6 right-6 text-slate-200 text-sm opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
