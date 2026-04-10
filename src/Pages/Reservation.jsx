import React from "react";
import Header from "../Layouts/Header";
import Header2 from "../Layouts/Header2";
import Footer from "../Layouts/Footer";
import office from "../../public/images/office.png";
import img1 from "../../public/images/servicetour.jpg";
import img2 from "../../public/images/hotel.jpg";
import img3 from "../../public/images/tour.jpg";
import img4 from "../../public/images/train.jpg";
import img5 from "../../public/images/flight.webp";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Railway Reservation",
    description: (
      <>
        Book your train tickets{" "}
        <span className="hidden md:hidden ">
          effortlessly with our easy-to-use platform
        </span>
        .
      </>
    ),
    buttonText: "Enquire Trains",
    image: img4, // Correctly reference the image without curly braces
  },
  {
    id: 2,
    title: "Hotel Booking",
    description: (
      <>
        Find the perfect accommodation{" "}
        <span className="hidden md:hidden">for your stay</span>.
      </>
    ),
    buttonText: "Enquire Hotels",
    image: img2, // Correctly reference the image without curly braces
  },
  {
    id: 3,
    title: "Flight Booking",
    description: (
      <>
        Plan your next adventure with ease.{" "}
        <span className="hidden md:hidden ">
          Compare flights and book your tickets seamlessly.
        </span>
      </>
    ),
    buttonText: "Enquire Flights",
    image: img5, // Correctly reference the image without curly braces
  },
  {
    id: 4,
    title: "Tour Package",
    description: (
      <>
        Explore exciting destinations{" "}
        <span className="hidden md:hidden">with our tailored tour packages</span>.
      </>
    ),
    buttonText: "Enquire Packages",
    image: img3, // Correctly reference the image without curly braces
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-black">
      <Header />
      <Header2
        heading="Our Services"
        para="Explore Our Range of Services Designed to Enhance Your Journey!"
        bgimage={img1}
        scrolltoid="service-section"
      />
      <div>
        {/* Service Cards Section */}
        <section
          style={{ scrollMarginTop: "90px" }}
          id="service-section"
          className="py-16 px-4 lg:px-8"
        >
          <div className="xl:container xl:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 ">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative border border-white rounded-[25px] shadow-xl overflow-hidden h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                  <h2 className="text-2xl font-semibold text-white lg:text-center xl:text-start">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-white lg:text-center xl:text-start">{service.description}</p>
                  <Link
                    // to={"/contact-us?scrollto=inquiry"}
                    to={"/contact-us#inquiry"}
                    className="mt-4 px-3 w-40 py-2 text-center bg-yellow-500 text-black lg:mx-auto xl:mx-0 font-semibold rounded-xl hover:bg-yellow-600 hover:text-white transition"
                  >
                    {service.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Office Information Section */}
        <section className="office md:container md:mx-auto py-16 px-4 md:pt-8 lg:px-24 flex flex-col items-center lg:flex-row">
          <div className="flex justify-center w-full md:w-[400px] md:h-[500px] overflow-hidden lg:w-1/2">
            <img
              src={office}
              alt="Our Office"
              className="mx-auto rounded-2xl w-full h-full object-cover mb-4"
            />
          </div>

          <div className="text-start lg:text-left lg:w-1/2 md:mx-20 text-white">
            <h2 className="text-2xl text-center font-semibold mb-10 mt-6">Visit Our Office</h2>
            <p className="sm:text-lg text-center mb-8 ">
              Visit Our Office for personalized assistance. Our team is
              dedicated to making your travel experience memorable.
            </p>
            <div className="text-start md:pl-6">
              <p className="text-lg">
                <span className="font-semibold leading-[50px]">Address</span> :
                in front of SBI ATM, Yadav Colony, Jabalpur, (M.P) India
              </p>
              <p className="text-lg">
                <span className="font-semibold leading-[50px]">Phone</span> :
                +91 9098835115
              </p>
              <p className="text-lg">
                <span className="font-semibold leading-[50px]">Email</span> :
                omtravels8085@gmail.com
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
