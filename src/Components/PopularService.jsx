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


import React from 'react';
import { FaTaxi, FaCar, FaMapMarkerAlt, FaPlane } from 'react-icons/fa';
import img1 from "../../public/images/round trip.webp"
import img2 from "../../public/images/airport.webp"
import img3 from "../../public/images/local.webp"
import img4 from "../../public/images/local2.jpg"
import img5 from "../../public/images/local2.jpg"
import img6 from "../../public/images/tripo.jpg"
import img7 from "../../public/images/oneway.webp"

const PopularServices = () => {
    const services = [
        {
            icon: <FaTaxi className="text-4xl text-yellow-500" />,
            title: "Round Trip Cabs",
            description: "Enjoy a seamless round trip with our comfortable cabs.",
            bgImage: `url(${img1})`
        },
        {
            icon: <FaCar className="text-4xl text-yellow-500" />,
            title: "One Way Drops",
            description: <p className=''>Affordable one way trip to your destination.</p>,
            bgImage: `url(${img7})`
        },
        {
            icon: <FaMapMarkerAlt className="text-4xl text-yellow-500" />,
            title: "Local Rentals",
            description: "Explore the city with our flexible local rental options.",
            bgImage: `url(${img4})`
        },
        {
            icon: <FaPlane className="text-4xl text-yellow-500" />,
            // title: "Airport Transfers",
            title: "Airport Cabs",
            description: "Reliable airport transfers at competitive prices.",
            bgImage: `url(${img2})`
        },
    ];

    return (
        // <div className=' px-8 py-20 bg-gradient-to-r from-[#E2E8F0] via-[#94A3B8] to-[#E2E8F0]'>
        <div className=' px-8 py-20 bg-[#e9efff]'>
            <div>
                <h1 className='text-center text-5xl text-slate-900 font-bold pb-16'>POPULAR SERVICES</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="relative h-[700px] bg-cover bg-center overflow-hidden group cursor-pointer border-r-white border-5"
                        style={{ backgroundImage: service.bgImage }}
                    >
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity group-hover:bg-opacity-50"></div>

                        {/* Title always at the bottom */}
                        <div className="flex absolute bottom-4 left-4 right-4 text-white transition-transform transform group-hover:translate-y-[-160px] duration-500 ease-in-out">
                            <h3 className="text-3xl font-semibold">{service.title}</h3>
                            <div className="mb-4 ml-4 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">
                                {service.icon}
                            </div>
                        </div>

                        {/* Icon and description - hidden initially */}
                        <div className="ml-5 absolute bottom-0 flex flex-col justify-center items-center opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-[-130px]">
                            <p className="text-lg text-slate-300">{service.description}</p>
                        </div>

                        {/* Arrow icon */}

                        {/* should be open in phase - 2 */}
                        
                        {/* <div className="absolute bottom-4 right-4 text-yellow-400 transition-transform transform group-hover:scale-110">
                            →
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularServices;

