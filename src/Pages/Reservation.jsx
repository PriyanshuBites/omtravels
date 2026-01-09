import React from 'react';
import Header from "../Layouts/Header";
import Header2 from "../Layouts/Header2";
import Footer from "../Layouts/Footer";
import office from '../../public/images/office.png';
import img1 from "../../public/images/servicetour.jpg";
import img2 from "../../public/images/hotel.jpg";
import img3 from "../../public/images/tour.jpg";
import img4 from "../../public/images/train.jpg";
import img5 from "../../public/images/flight.webp";
import { Link } from 'react-router-dom';

const services = [
    {
        id: 1,
        title: "Railway Reservation",
        description: "Book your train tickets effortlessly with our easy-to-use platform.",
        buttonText: "Enquire Now",
        image: img4 // Correctly reference the image without curly braces
    },
    {
        id: 2,
        title: "Hotel Booking",
        description: "Find the perfect accommodation for your stay.",
        buttonText: "Enquire Hotels",
        image: img2 // Correctly reference the image without curly braces
    },
    {
        id: 3,
        title: "Flight Booking",
        description: "Plan your next adventure with ease. Compare flights and book your tickets seamlessly.",
        buttonText: "Enquire Flights",
        image: img5 // Correctly reference the image without curly braces
    },
    {
        id: 4,
        title: "Tour Package",
        description: "Explore exciting destinations with our tailored tour packages.",
        buttonText: "Enquire Packages",
        image: img3 // Correctly reference the image without curly braces
    }
];

const ServicesPage = () => {
    return (
        <div>
            <Header />
            <Header2
                heading="Our Services"
                para="Explore Our Range of Services Designed to Enhance Your Journey!"
                bgimage={img1}
                scrolltoid='service-section'
            />
            <div>
                {/* Service Cards Section */}
                <section style={{ scrollMarginTop: '90px' }} id='service-section' className="py-16 px-4 lg:px-24">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map(service => (
                            <div key={service.id} className="relative border rounded-lg overflow-hidden h-64 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }}>
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                                    <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
                                    <p className="mt-2 text-white">{service.description}</p>
                                    <Link to={"/contact-us?scrollto=enquiry"} className="mt-4 px-4 w-40 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 hover:text-white transition">
                                        {service.buttonText}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Office Information Section */}
                <section className="office py-16 px-4 lg:px-24 flex flex-col items-center lg:flex-row">

                    <img src={office} alt="Our Office" className="rounded-lg w-full lg:w-1/2 mb-4 " />
                    <div className='text-center mx-20'>
                        <h2 className="text-3xl font-semibold mb-10 ">Visit Our Office</h2>
                        <p className="text-xl text-center mb-8">
                            Visit Our Office for personalized assistance. Our team is dedicated to making your travel experience memorable.
                        </p>
                        <div className='text-start  pl-6'>
                            <p className="text-lg"><span className='font-semibold leading-[50px]'>Address</span> : in front of SBI ATM, Yadav Colony, Jabalpur, (M.P) India</p>
                            <p className="text-lg"><span className='font-semibold leading-[50px]'>Phone</span> : +91 7999300744</p>
                            <p className="text-lg"><span className='font-semibold leading-[50px]'>Email</span> : omtravels8085@gmail.com</p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default ServicesPage;
