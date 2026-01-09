import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Client1 from "../../public/images/client1.png"
import Client2 from "../../public/images/client2.png"
import Client3 from "../../public/images/client3.png"

const testimonials = [
  {
    id: 1,
    Client: Client1,
    name: "Kavyansh Gupta",
    quote:
      "Amazing Nature of the Agent. Service also good",
    designation: "Client",
    stars: 5,
  },
  {
    id: 2,
    Client: Client2,
    name: "Vicky Lakhera",
    quote:
      "Best Service",
    designation: "Client",
    stars: 4,
  },
  {
    id: 3,
    Client: Client3,
    name: "Rinku Rajput",
    quote:
      "Great Work! Fare Prices and also Nice Driver",
    designation: "Client",
    stars: 5,
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const renderStars = (num) => {
    return Array(num)
      .fill(0)
      .map((_, i) => (
        <span key={i} className="text-yellow-500 text-2xl">
          &#9733;
        </span>
      ));
  };

  return (
    // <div className="relative bg-gradient-to-r from-[#e9efff] via-[#b2c4ff] to-[#e9efff] py-10 px-5">
    // <div className="relative bg-gradient-to-r from-[#E2E8F0] via-[#94A3B8] to-[#E2E8F0] py-10 px-5">
    <div className="relative bg-[#e9efff] py-10 px-5">
      <h2 className="text-center text-3xl lg:text-4xl font-bold text-gray-800 mb-10">
        - What Our Clients Say -
      </h2>

      <div className="relative overflow-hidden max-w-6xl mx-auto">
        {/* Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-600 p-3 rounded-full shadow-lg z-10 focus:outline-none"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Testimonial Slider */}
        <div className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`min-w-full flex-shrink-0 flex justify-center items-center`}
            >
              <div className="bg-gradient-to-r from-[#fef6e4] via-[#fcd5ce] to-[#fef6e4] rounded-xl p-8 shadow-lg flex flex-col items-center w-[80%] lg:w-[60%] relative">

                <FaQuoteLeft className="text-pink-500 text-5xl mb-5 absolute top-4 left-4" />
                <img src={testimonial.Client} alt="client photo" className="w-20 h-20 rounded-full object-cover mb-4" />

                <p className="text-gray-600 text-center mb-5">"{testimonial.quote}"</p>
                <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-500 mb-4">{testimonial.designation}</p>
                <div className="flex">{renderStars(testimonial.stars)}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-600 p-3 rounded-full shadow-lg z-10 focus:outline-none"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-5">
        {testimonials.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-400"
              } cursor-pointer`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;




// .................................................................



// import React, { useState, useEffect } from "react";
// import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const testimonials = [
//   {
//     id: 1,
//     name: "John Doe",
//     quote:
//       "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.",
//     designation: "Software Engineer",
//     stars: 5,
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     quote:
//       "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.",
//     designation: "Project Manager",
//     stars: 4,
//   },
//   {
//     id: 3,
//     name: "Alice Johnson",
//     quote:
//       "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.",
//     designation: "Designer",
//     stars: 5,
//   },
// ];

// const TestimonialSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(timer);
//   }, []);

//   const goToPrevious = () => {
//     setCurrentIndex(
//       currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
//     );
//   };

//   const goToNext = () => {
//     setCurrentIndex((currentIndex + 1) % testimonials.length);
//   };

//   const renderStars = (num) => {
//     return Array(num)
//       .fill(0)
//       .map((_, i) => (
//         <span key={i} className="text-pink-500">
//           &#9733;
//         </span>
//       ));
//   };

//   return (
//     <div className="relative bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 py-10 px-5">
//       <h2 className="text-center text-3xl lg:text-4xl font-bold text-white mb-10">
//         - What Our Clients Say -
//       </h2>

//       <div className="relative overflow-hidden max-w-6xl mx-auto">
//         {/* Arrows */}
//         <button
//           onClick={goToPrevious}
//           className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 bg-white text-gray-600 p-3 rounded-full shadow-lg z-10 focus:outline-none"
//         >
//           <FaChevronLeft size={20} />
//         </button>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-transform duration-1000 transform">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={testimonial.id}
//               className={`transition-opacity duration-1000 ${
//                 currentIndex === index ? "opacity-100" : "opacity-0"
//               } bg-white rounded-xl p-8 shadow-lg flex flex-col items-center`}
//             >
//               <FaQuoteLeft className="text-pink-500 text-5xl mb-5" />
//               <p className="text-gray-600 text-center mb-5">{testimonial.quote}</p>
//               <h4 className="text-lg font-semibold">{testimonial.name}</h4>
//               <p className="text-sm text-gray-500 mb-4">{testimonial.designation}</p>
//               <div className="flex">{renderStars(testimonial.stars)}</div>
//             </div>
//           ))}
//         </div>

//         {/* Right Arrow */}
//         <button
//           onClick={goToNext}
//           className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 bg-white text-gray-600 p-3 rounded-full shadow-lg z-10 focus:outline-none"
//         >
//           <FaChevronRight size={20} />
//         </button>
//       </div>

//       {/* Dots */}
//       <div className="flex justify-center mt-5">
//         {testimonials.map((_, index) => (
//           <div
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 mx-1 rounded-full ${
//               currentIndex === index ? "bg-white" : "bg-gray-400"
//             } cursor-pointer`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TestimonialSlider;
