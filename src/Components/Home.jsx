import React, { useEffect, useRef, useState } from "react";
import { useLocation } from 'react-router-dom';
import Header from "../Layouts/Header"
import Hero from "./Hero"
import Cars from "./Cars"
import Footer from "../Layouts/Footer"
import Testi from "./Testimonial"
import Steps from "./BookSteps"
import Routes from "./PopularRoutes"
import ChooseUs from "./WhyChooseUs"
import Service from "./PopularService"


const Home = () => {

  const heroFormRef = useRef(null);
  const [preselectedCar, setPreselectedCar] = useState("");

  const handleScrollToForm = (carName) => {
    setPreselectedCar(carName);
    setTimeout(() => {
      heroFormRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100); // Delay ensures state update before scroll
  };


  // to scroll at the exect point -

  const featuredCarSection = useRef(null);

  const location = useLocation();

  useEffect(() => {


    // if (location.hash === '#featured-car') {

    //   const section = document.getElementById('featured-car');

    //   if (section) {
    //     section.scrollIntoView({ behavior: 'smooth'})
    //   }
    // }

    // another option without .hash - 


    if (location.state?.scrollTo === 'featured-car') {

      const scrollOptions = { behavior: 'smooth' };

      const offset = location.state?.scrollOffset || 0;

      if (featuredCarSection.current) {

        const scrollPosition = featuredCarSection.current.offsetTop + offset;

        window.scrollTo({ top: scrollPosition, ...scrollOptions })
      }
    }

  }, [location]);

  return (
    <>

      <Header />
      {/* <Hero ref={heroFormRef} preselectedCar={preselectedCar} /> */}
      <Cars featuredCarSection={featuredCarSection} handleRentNowClick={handleScrollToForm} />
      <Steps />
      <Service />
      <ChooseUs />
      <Testi />
      <Routes />
      <Footer />

    </>
  )
}

export default Home