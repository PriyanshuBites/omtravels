import React from 'react';
import { FaCar, FaHandsHelping, FaUserTie, FaClock } from 'react-icons/fa';
import { FaIndianRupeeSign } from "react-icons/fa6";

const WhyChooseUs = () => {

    const features = [
        {
            icon: <FaCar className="text-4xl text-blue-500 transition-transform duration-300" />,
            title: "Safe and Clean Vehicles",
            description: "All our vehicles are thoroughly cleaned and maintained for your safety.",
        },
        {
            icon: <FaUserTie className="text-4xl text-blue-500 transition-transform duration-300" />,
            title: "Experienced Drivers",
            description: "Our drivers are highly trained, licensed, and experienced professionals.",
        },
        {
            icon: <FaHandsHelping className="text-4xl text-blue-500 transition-transform duration-300" />,
            title: "24/7 Customer Support",
            description: "We are always here to assist you, no matter the time or place.",
        },
        {
            icon: <FaIndianRupeeSign className="text-4xl text-blue-500 transition-transform duration-300" />,
            title: "Affordable Pricing",
            description: "Whether for hours or days, we offer flexible rental prices to suit your needs.",
        },
        {
            icon: <FaClock className="text-4xl text-blue-500 transition-transform duration-300" />,
            title: "Flexible Rental Options",
            description: "Choose from a variety of rental plans that suit your needs.",
        },
    ];

    return (
        <div className="bg-gradient-to-r from-[#e9efff] via-[#b2c4ff] to-[#e9efff] py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl pb-4 font-bold mb-10 text-gray-800">Why Choose Us</h2>

                <div className="flex flex-col md:flex-row justify-around items-start space-y-8 md:space-y-0 md:space-x-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                            {/* Icon with hover effect */}
                            <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            {/* Text */}
                            <div className="text-center">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
