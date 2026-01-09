import React, { useEffect, useState } from "react";
import img1 from "../../public/images/Innova.jpg";
import img2 from "../../public/images/newswift.jpg";
import img3 from "../../public/images/newtavera.jpg";

const slides = [
  {
    id: 1,
    image: img1,
    title: "Affordable Car Rentals",
    subtitle: "Safe • Reliable • Comfortable",
  },
  {
    id: 2,
    image: img2,
    title: "Outstation & Local Trips",
    subtitle: "24/7 Service Available",
  },
  {
    id: 3,
    image: img3,
    title: "Travel With Comfort",
    subtitle: "Experienced Drivers",
  },
];

const SLIDE_DURATION = 2000; // 5 sec

const Hero1 = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : prev));
    }, SLIDE_DURATION / 100);

    return () => clearInterval(timer);
  }, [current]);

  return (
    <>
      <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
        {/* Slides */}
        <div className="w-full h-full lg:max-w-7xl lg:mx-auto">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              //   className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              className={`absolute inset-0 transition-transform duration-700 ease-in-out
  ${
    index === current
      ? "translate-x-0"
      : index > current
      ? "translate-x-full"
      : "-translate-x-full"
  }
`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                <div className="text-white max-w-3xl">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl opacity-90">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
        </div>

        {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 
                       bg-black/40 hover:bg-black/60 text-white 
                       w-10 h-10 rounded-full flex items-center justify-center z-20"
          >
            ❮
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 
                       bg-black/40 hover:bg-black/60 text-white 
                       w-10 h-10 rounded-full flex items-center justify-center z-20"
          >
            ❯
          </button>

        {/* Progress Bars */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <div
              key={index}
              className="w-10 md:w-14 h-1 bg-white/30 rounded overflow-hidden"
            >
              {index === current && (
                <div
                  className="h-full bg-white transition-all"
                  style={{ width: `${progress}%` }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero1;
