import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const desktopSlides = [
  {
    image: "/images/crycar.png",
    title: "Reliable Car Rental Service",
    highlight: " in Jabalpur",
    desc: "Local, Outstation & Airport Pickup Available",
  },
  {
    image: "/images/fullbus.png",
    title: "Bus Rental for",
    highlight: " Weddings, Tours & Group Travel",
    desc: "Safe & Comfortable Travel for Large Groups",
  },
  {
    image: "/images/c3.png",
    title: (<>Railway, Flight & Hotel Booking Services <br className="hidden lg:block"/> <span className="text-yellow-400 font-semibold xl:text-6xl">Anytime Anywhere</span></>),
    // highlight: " ",
    desc: "Complete Travel Solutions at One Place",
  },
];

const mobileSlides = [
  {
    image: "/images/w crysta 2.png",
    title: "Reliable Car Rental Service",
    highlight: " in Jabalpur",
    desc: "Local, Outstation & Airport Pickup Available",
  },
  {
    image: "/images/busses.png",
    title: "Bus Rental for",
    highlight: " Weddings, Tours & Group Travel",
    desc: "Safe & Comfortable Travel for Large Groups",
  },
  {
    image: "/images/c333.png",
    title: (
      <>
        Railway, Flight <br /> & Hotel Booking Services
      </>
    ),
    highlight: " Anytime Anywhere",
    desc: "Complete Travel Solutions at One Place",
  },
];

const Hero1 = () => {
  const [current, setCurrent] = useState(0);
  const [slides, setSlides] = useState(desktopSlides);
  const [isMobile, setIsMobile] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSlides(mobileSlides);
        setIsMobile(true);
      } else {
        setSlides(desktopSlides);
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto slide
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [slides]);

  // Swipe support (mobile only)
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;

    if (touchStartX.current - touchEndX.current > 70) {
      nextSlide();
    }

    if (touchEndX.current - touchStartX.current > 70) {
      prevSlide();
    }
  };

  return (
    <div
      className="relative mt-20 md:mt-[120px] w-full h-[30vh] md:h-[40vh] lg:h-[65vh] overflow-hidden"
      onTouchStart={isMobile ? handleTouchStart : null}
      onTouchEnd={isMobile ? handleTouchEnd : null}
    >
      {/* SLIDES */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={slide.image}
              alt="OM Travels"
              className="w-full h-full object-contain bg-white object-left"
            />
          </div>
        ))}
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-6xl md:ml-8 lg:ml-20 px-6 text-white relative z-10">
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold">
            {slides[current].title}
          </h1>
          {/* <br className="md:hidden" /> */}
          <h1 className="text-2xl md:text-4xl xl:text-6xl text-yellow-400 font-semibold">
            {slides[current].highlight}
          </h1>

          <p className="md:text-xl mt-4 mb-6 md:mb-20 max-w-xl text-gray-200">
            {slides[current].desc}
          </p>
          <Link
            to="/contact-us#contact-section"
            className=" bg-yellow-500 hover:bg-yellow-600 text-sm text-black md:text-lg px-3 py-2 md:px-7 md:py-3 rounded-lg font-semibold transition"
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* LEFT ARROW (desktop only) */}
      {!isMobile && (
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-5 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white transition"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* RIGHT ARROW (desktop only) */}
      {!isMobile && (
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-5 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white transition"
        >
          <ChevronRight size={28} />
        </button>
      )}

      {/* SEGMENTED PROGRESS BAR */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <div
            key={index}
            className="w-8 md:w-14 h-1 bg-white/30 rounded-full overflow-hidden"
          >
            <div
              className={`h-full bg-white transition-all duration-[4000ms] ${
                current === index ? "w-full" : "w-0"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero1;
