import { useEffect, useState } from "react";
import Client1 from "../../public/images/client1.png";
import Client2 from "../../public/images/client2.png";
import Client3 from "../../public/images/client3.png";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Kavyansh Gupta",
    review: "Amazing Nature of the Agent. Service also good",
    rating: 5,
    image: Client1,
  },
  {
    name: "Vicky Lakhera",
    review: "Best Service, booking was easy and pricing fair.",
    rating: 5,
    image: Client2,
  },
  {
    name: "Rinku Rajput",
    review: "Nice driver, on-time pickup and clean car.",
    rating: 4,
    image: Client3,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [startX, setStartX] = useState(0); // 👈 added

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  // 👇 added swipe handlers
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (diff > 50) {
      setActive((prev) => (prev + 1) % testimonials.length);
    } else if (diff < -50) {
      setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }
  };

  const getStyle = (index) => {
    const diff = index - active;

    if (diff === 0) return "translate-x-0 scale-100 opacity-100 blur-0 z-20";

    if (diff === -1 || diff === testimonials.length - 1)
      return "-translate-x-[260px] scale-90 opacity-40 blur-sm z-10";

    if (diff === 1 || diff === -(testimonials.length - 1))
      return "translate-x-[260px] scale-90 opacity-40 blur-sm z-10";

    return "opacity-0";
  };

  return (
    // <section className="relative py-14 bg-gradient-to-r from-[#e9efff] via-[#b2c4ff] to-[#e9efff] overflow-hidden">
    // <section className="relative py-14 bg-gradient-to-r from-[#0b1c3a]/90 via-[#0b1c3a]/70 to-[#0b1c3a]/90 overflow-hidden">
    <section className="relative py-14 bg-black overflow-hidden">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-12">
          <div className="flex-grow h-[1px] bg-white"></div>

          <h2 className="px-4 text-2xl sm:text-3xl xl:text-4xl font-bold text-white">
            What Our <span className="text-yellow-400">Customer Says</span> 
          </h2>

          <div className="flex-grow h-[1px] bg-white"></div>
        </div>
        {/* 👇 swipe enabled here */}
        <div
          className="relative h-[260px] md:h-[360px] flex justify-center items-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-700 ease-in-out
              bg-[#e9efff] md:rounded-2xl shadow-xl px-6 w-[90%] sm:w-[560px] h-[220px]
              ${getStyle(index)}
            `}
            >
              <FaQuoteLeft className="absolute -top-8 -left-4 text-6xl md:text-[80px] leading-none text-gray-700 opacity-50" />

              <p className="text-gray-600 md:text-xl font-semibold my-10 text-center">
                “{item.review}”
              </p>

              <div className="flex items-center justify-center gap-5">
                <img src={item.image} className="w-14 h-14 rounded-full" />
                <div>
                  <h4 className="font-semibold text-gray-800">{item.name}</h4>
                  <div className="flex justify-center my-1 md:my-2">
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-2xl">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`h-[3px]  rounded-full transition-all duration-500
              ${active === i ? "w-10 md:w-20 bg-white" : "w-4 bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// const testimonials = [
//   {
//     name: "Kavyansh Gupta",
//     city: "Delhi",
//     review: "Amazing Nature of the Agent. Service also good",
//     rating: 5,
//     image: Client1,
//   },
//   {
//     name: "Vicky Lakhera",
//     city: "Jaipur",
//     review:
//       "Best Service, Booking was easy and pricing was fair. Highly recommended.",
//     rating: 5,
//     image: Client3,
//   },
//   {
//     name: "Rinku Rajput",
//     city: "Agra",
//     review:
//       "Great Work! Fare Prices and also Nice Driver, On-time pickup and well-maintained vehicle. Loved it!",
//     rating: 4,
//     image: Client2,
//   },
// ];

// export default function Testimonials() {
//   const [active, setActive] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActive((prev) => (prev + 1) % testimonials.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="w-full py-16 bg-gradient-to-r from-gray-50 to-gray-100">
//       <div className="max-w-6xl mx-auto px-4 text-center">
//         <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-gray-800 mb-12">
//           What Our Customer Says
//         </h2>

//         {/* Cards */}
//         <div className="relative flex justify-center items-center bg-green-300 h-[280px] xl:h-[450px]">
//           <div></div>
//           <div>
//             {testimonials.map((item, index) => {
//               const isActive = index === active;

//               return (
//                 <div
//                   key={index}
//                   className={`absolute transition-all duration-500 ease-in-out
//                 ${
//                   isActive
//                     ? "scale-100 opacity-100 z-20"
//                     : "scale-90 opacity-40 z-10"
//                 }
//                 bg-white rounded-2xl shadow-lg lg:p-12 p-6 w-[100%] sm:w-[380px] lg:w-[450px] bg-red-500 xl:w-[700px]`}
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-16 h-16 rounded-full mx-auto mb-4"
//                   />

//                   <p className="text-gray-600 text-sm mb-4">“{item.review}”</p>

//                   <div className="flex justify-center mb-2">
//                     {[...Array(item.rating)].map((_, i) => (
//                       <span key={i} className="text-yellow-400 text-lg">
//                         ★
//                       </span>
//                     ))}
//                   </div>

//                   <h4 className="font-semibold text-gray-800">{item.name}</h4>
//                   <p className="text-xs text-gray-500">{item.city}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Dots */}
//         <div className="flex justify-center gap-3 mt-8">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setActive(index)}
//               className={`w-3 h-3 rounded-full transition-all
//                 ${active === index ? "bg-blue-600 scale-125" : "bg-gray-400"}
//               `}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
