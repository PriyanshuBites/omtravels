import React from 'react';
import Header from "../Layouts/Header";
import Header2 from "../Layouts/Header2";
import Footer from "../Layouts/Footer";
import styled from "styled-components"
import founder from "../../public/images/photo1.jpeg"
import manager from "../../public/images/vipin.jpg"
import { Link } from 'react-router-dom';
import img1 from "../../public/images/listcar.jpg"

const Aboutus = () => {

// will be open in phase-2

    // const team = [
    //     {
    //         name: "Vipin Lal",
    //         designation: "Ticketing and Office Manager",
    //         image: manager,
    //     },
    //     {
    //         name: "Vicky",
    //         designation: "Car Driver",
    //         image: manager,
    //     },
    //     {
    //         name: "Rohan Kumar",
    //         designation: "Operations Manager",
    //         image: manager,
    //     },
    //     {
    //         name: "Anil Singh",
    //         designation: "Field Officer",
    //         image: manager,
    //     },
    //     {
    //         name: "Rajesh Gupta",
    //         designation: "Marketing Executive",
    //         image: manager,
    //     },
    // ];

    return (
        <>
            <Container>

                <Header />

                <Header2
                    heading="Your Trusted Car Rental Partner"
                    para="Affordable, Reliable, and Convenient Car Rental Solutions Across India."
                    bgimage={img1} 
                    scrolltoid="our-story"/>

                <div>

                    {/* 2. Our Story Section */}
                    <section id="our-story" className="bg-[#e9efff] py-16 px-4 lg:px-24 flex flex-col lg:flex-row items-center" style={{ scrollMarginTop: '100px' }}>
                        <div className="lg:w-96 mb-8 lg:mb-0 mx-auto">
                            <img className="rounded-lg shadow-lg w-full" src={founder} alt="Our Story" />
                        </div>
                        <div className="lg:w-1/2 lg:pl-12">
                            <h2 className="text-3xl font-semibold mb-4">Our Journey</h2>
                            <p className="text-lg leading-relaxed">
                                Founded in 1998, <span className='font-semibold'>Om Travels</span> embarked on a journey with a simple mission: to make car rentals easy, affordable,
                                and accessible for everyone. What began as a small operation in Jabalpur has now grown into one of the most trusted
                                names in car rental services across India. Over the years, <span className='font-semibold'>Om Travels</span> has continually expanded its fleet, enhanced customer service,
                                and adapted to the evolving needs of travellers, ensuring a seamless and reliable experience for all.
                                <br />
                                <br />
                                Today, with a deep commitment to reliability and convenience, we proudly serve customers across the country,
                                ensuring that their journeys are smooth and hassle-free. Our success reflects the loyalty of our customers,
                                and we are committed to delivering exceptional service with every rental, ensuring your journey is always in safe hands.
                            </p>
                        </div>
                    </section>

                    {/* 3. Mission and Vision Section */}
                    <section className="bg-gray-100 py-16 px-4 lg:px-24">
                        <h2 className="text-3xl font-semibold mb-6 text-center">Our Mission & Vision</h2>
                        <div className="lg:flex lg:justify-around md:border-t-2 pt-8">
                            <div className="lg:w-1/2 lg:px-6 md:border-r-2">
                                <h3 className="text-2xl font-semibold mb-2 text-center">Mission</h3>
                                <p className="text-lg leading-relaxed ">
                                    "Our mission is to provide safe, reliable, and affordable car rental services to travellers across India.
                                    Whether you’re planning a short trip within the city, a long road trip across states, or simply need a
                                    reliable vehicle for your daily commute, we’ve got you covered. We believe that traveling should be
                                    convenient and enjoyable, which is why we focus on providing vehicles that are well-maintained, safe,
                                    and available at competitive prices. Our commitment to customer satisfaction drives us to ensure that every ride,
                                    regardless of the distance or destination, meets the highest standards of quality and reliability.
                                    We continuously strive to enhance our services by adopting the latest technology and listening to customer feedback,
                                    ensuring a seamless experience from booking to drop-off. Ultimately, we aim to build lasting relationships
                                    with our customers by consistently delivering excellence on every journey."
                                </p>
                            </div>
                            <div className="lg:w-1/2 lg:px-6 mt-8 lg:mt-0">
                                <h3 className="text-2xl font-semibold mb-2 text-center">Vision</h3>
                                <p className="text-lg leading-relaxed">
                                    "We envision a world where travel is easy, convenient, and enjoyable for all, with seamless access to vehicles that meet every need.
                                    Our vision is to ensure that everyone can embark on their journeys without worrying about transportation, offering reliable, flexible,
                                    and affordable car rental services.
                                    <br />
                                    <br />
                                    We strive to make car rental as simple as possible, providing a diverse fleet, from budget to luxury, and even eco-friendly options.
                                    By adapting to changing travel trends, we aim to offer modern solutions that ensure comfort, safety, and satisfaction, making every
                                    journey stress-free and enjoyable."
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 6. Our Team Section */}

                    {/* will be open in phase-2 */}

                    {/* <section className="py-16 px-4 lg:px-24 text-center bg-[#e9efff]">
                        <h2 className="text-4xl font-bold mb-12">Meet Our Team</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                            {
                                team.map((member, index) => (
                                    <div key={index} className="bg-[#e9efff] border border-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                                        <img
                                            className="rounded-full w-32 h-32 mx-auto mb-4 object-cover"
                                            src={member.image}
                                            alt={member.name}
                                        />
                                        <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                        <p className="text-gray-500">{member.designation}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </section> */}

                    {/* 7. Call to Action Section */}
                    <section className="bg-gradient-to-r from-[#e9efff] via-[#4299e1] to-[#e9efff] py-10 text-center text-white">
                        <h2 className="text-3xl font-semibold mb-10">Ready to Experience the Best Car Rental Service?</h2>
                        <Link to={"/"} className="mt-4 px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition">
                            Book a Ride
                        </Link>
                    </section>

                </div>

                <Footer />
            </Container>
        </>
    )
}

export default Aboutus;
const Container = styled.div`





`;