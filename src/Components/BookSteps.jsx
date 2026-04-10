// import React from "react";
// import { Car, ClipboardList, CheckCircle, MapPin, Smile } from "lucide-react";
// import { FaCar, FaPhoneAlt } from "react-icons/fa";
// import { MdOutlineDateRange } from "react-icons/md";
// import { IoPersonSharp } from "react-icons/io5";
// import { BsSendFill } from "react-icons/bs";
// import { SiGoogleforms } from "react-icons/si";
// import { FaCheckCircle } from "react-icons/fa";
// import { FaRegSmileBeam } from "react-icons/fa";
// import { FaRegSmile } from "react-icons/fa";

// const FourStepRental = () => {
// const steps = [
//   {
//     title: "Enter Your Name",
//     description: "Provide your full name.",
//     icon: <IoPersonSharp />,
//   },
//   {
//     title: "Mobile Number",
//     description: "Provide your contact number.",
//     icon: <FaPhoneAlt />
//     ,
//   },
//   {
//     title: "Choose Your Car Type",
//     description: "Select the car you wish to rent.",
//     icon: <FaCar />,
//   },
//   {
//     title: "Pick Date",
//     // description: "Select your rental start date.",
//     description: "Select your rental date.",
//     icon: <MdOutlineDateRange />
//     ,
//   },
//   {
//     title: "Submit",
//     description: "Submit and receive a call in 10 minutes.",
//     icon: <BsSendFill />
//     ,
//   },
// ];

// const steps = [
//   {
//     title: "Choose Your Vehicle",
//     description: "Select the car or bus that suits your trip.",
//     icon: <FaCar size={28} />,
//   },
//   {
//     title: "Share Your Travel Details",
//     description: "Contact us via form, call, or WhatsApp.",
//     icon: <SiGoogleforms size={28} />,
//   },
//   {
//     title: "Get Confirmation",
//     description: "We confirm availability and pricing quickly.",
//     icon: <FaCheckCircle size={28} />,
//   },
//   {
//     title: "Schedule Pickup",
//     // description: "Select your rental start date.",
//     description: "Finalize date, time, and pickup location.",
//     icon: <MdOutlineDateRange size={28} />,
//   },
//   {
//     title: "Enjoy Your Ride",
//     description: "Travel safely and comfortably with OM Travels.",
//     icon: <FaRegSmile size={28} />,
//   },
// ];

//   return (
//     <div className="bg-gradient-to-r from-[#e9efff] via-[#b2c4ff] to-[#e9efff] py-20 md:px-8">
//       <div className="container mx-auto">
//         <div className="large-view hidden lg:block max-w-7xl mx-auto px-6">
//           <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold mb-16 text-center text-gray-800">
//             Rent a Car in 5 Easy Steps
//           </h2>

//           <div className="grid grid-cols-5 gap-10 items-start">
//             {steps.map((step, index) => (
//               <div
//                 key={index}
//                 className="relative group backdrop-blur-xl bg-white/40 border border-white/50 rounded-3xl p-8 text-center shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)]"
//               >
//                 {/* Floating Icon */}
//                 <div className="absolute -top-8 left-1/2 -translate-x-1/2">
//                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-2xl shadow-xl group-hover:scale-110 transition">
//                     {step.icon}
//                   </div>
//                 </div>

//                 {/* Step Number */}
//                 <div className="mt-10 mb-3 text-sm font-semibold text-blue-600 tracking-widest">
//                   STEP {index + 1}
//                 </div>

//                 {/* Content */}
//                 <h3 className="text-lg font-bold text-gray-900 mb-2">
//                   {step.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   {step.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="block md:grid lg:hidden md:grid-cols-2 md:gap-6 md:px-8">
//           <section className="px-4 py-10 md:col-span-2">
//             <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
//               Rent a Car in <br className="md:hidden" />5 Easy Steps
//             </h2>

//             <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-6 md:max-w-4xl md:mx-auto">
//               {steps.map((step, index) => (
//                 <div
//                   key={index}
//                   className="flex items-start gap-4 p-4 border rounded-xl shadow-sm bg-white"
//                 >
//                   <div className="block md:hidden lg:block flex-shrink-0 text-blue-600 bg-blue-50 p-3 rounded-full">
//                     {step.icon}
//                   </div>

//                   <div className="hidden md:flex lg:hidden w-10 h-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold my-auto">
//                     {index + 1}
//                   </div>

//                   <div>
//                     <h3 className="text-base font-semibold">{step.title}</h3>
//                     <p className="text-sm text-gray-600">{step.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FourStepRental;

import { useEffect, useRef, useState } from "react";
import Bgimg from "../../public/images/fiswif.png";
import { SiGoogleforms } from "react-icons/si";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";

const FourStepRental = () => {
  const [show, setShow] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const Steps = [
    {
      title: "Choose Your Vehicle",
      description: "Select the car or bus that suits your trip.",
      icon: <FaCar size={28} />,
    },
    {
      title: "Share Your Travel Details",
      description: "Contact us via form, call, or WhatsApp.",
      icon: <SiGoogleforms size={28} />,
    },
    {
      title: "Get Confirmation",
      description: "We confirm availability and pricing quickly.",
      icon: <FaCheckCircle size={28} />,
    },
    {
      title: "Schedule Pickup",
      // description: "Select your rental start date.",
      description: "Finalize date, time, and pickup location.",
      icon: <MdOutlineDateRange size={28} />,
    },
    {
      title: "Enjoy Your Ride",
      // description: "Travel safely and comfortably with OM Travels.",
      description: "Smooth, safe rides with OM Travels.",
      icon: <FaRegSmile size={28} />,
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-20 px-4 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: `url(${Bgimg})`,
        }}
      />

      {/* Main dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1c3a]/90 via-[#0b1c3a]/40 to-[#0b1c3a]/90" />

      {/* Premium vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.6))]" />

      {/* Soft luxury highlight */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30" />
      <div className="container mx-auto">
        <h2 className="relative text-center text-2xl sm:text-3xl xl:text-4xl font-bold text-white mb-14">
          Rent a Car in <br className="md:hidden" />
          <span className="text-yellow-400">5 Easy Steps</span>
        </h2>

        {/* Content */}
        <div className="relative md:max-w-md xl:max-w-xl md:ml-auto lg:mr-6">
          {/* TIMELINE START */}
          <div className="relative space-y-4 md:space-y-10 pl-4 lg:pl-6">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 h-full w-[2px] bg-white/30" />

            {Steps.map((step, i) => (
              <div
                key={i}
                style={{ transitionDelay: `${i * 200}ms` }}
                className={`
                 relative flex items-start gap-3 md:gap-6 transition-all duration-700 ease-out
                 ${show ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}
               `}
              >
                {/* Step number */}
                <div className="relative my-auto z-10 flex items-center justify-center w-8 md:w-12 h-8 md:h-12 rounded-full bg-yellow-400 text-black font-bold shadow-xl">
                  {i + 1}
                </div>

                <div
                  className="absolute left-5 top-1/2 -translate-y-1/2 
                    w-20 h-[2px] bg-white/30"
                />

                {/* Step card */}
                <div className="bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-2xl w-full">
                  <h4 className="font-semibold text-gray-800 text-base">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* TIMELINE END */}
        </div>
      </div>
    </section>
  );
};

export default FourStepRental;
