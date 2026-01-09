import React, { useState,  } from "react";
import img1 from "../../public/images/innova.jpg";
import img2 from "../../public/images/newcrysta.jpg";
import img3 from "../../public/images/newinnova.jpg";
import img4 from "../../public/images/newswift.jpg";
import img5 from "../../public/images/newtavera.jpg";
import img6 from "../../public/images/newtempo.jpg";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { BsPeople } from "react-icons/bs";
import { LuFuel } from "react-icons/lu";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { PiFan } from "react-icons/pi";
import { GoArrowRight } from "react-icons/go";


const Cars = React.forwardRef(({ featuredCarSection , handleRentNowClick }, ref) => {

    // for cards functionality -

    const [car, setCar] = useState({})
    // const [favouritecar, setFavouriteCar] = useState(null);
    const [favouriteCars, setFavouriteCars] = useState(() => {
        const stored = localStorage.getItem("favouriteCars");
        return stored ? JSON.parse(stored) : [];
    });


    const cars = [
        {
            image: img4,
            name: "Swift Dzire",
            model: "2020",
            seater: 4,
            rate: 11,
            fuel: "deisel",
            air: "ac",
        },
        {
            image: img1,
            name: "Innova",
            model: "2015",
            seater: 7,
            rate: 13,
            fuel: "deisel",
            air: "ac",
        },
        {
            image: img3,
            name: "Innova",
            model: "2015",
            seater: 7,
            rate: 13,
            fuel: "deisel",
            air: "ac",
        },
        {
            image: img2,
            name: "Innova Crysta",
            model: "2021",
            seater: 7,
            rate: 14,
            fuel: "deisel",
            air: "ac",
        },
        {
            image: img5,
            name: "Tavera",
            model: "2012",
            seater: 8,
            rate: 12,
            fuel: "deisel",
            air: "ac",
        },
        {
            image: img6,
            name: "Tempo Traveller",
            model: "2020",
            seater: 12,
            rate: 23,
            fuel: "deisel",
            air: "ac",
        },
    ]

    const handleRentNow = (car) => {
        console.log(`Renting car: ${car.name}`);
        handleRentNowClick(car.name);
        // Rent functionality can be added here
    };

    // const handleAddToFavourite = (index) => {
    //     setFavouriteCar(index);
    //     console.log(`Added to favourites: ${car[index].name}`);
    //     // Favourite functionality can be added here
    // };

    const handleAddToFavourite = (index) => {
        let updatedFavourites;

        if (favouriteCars.includes(index)) {
            updatedFavourites = favouriteCars.filter(i => i !== index);
        } else {
            updatedFavourites = [...favouriteCars, index];
        }

        setFavouriteCars(updatedFavourites);
        localStorage.setItem("favouriteCars", JSON.stringify(updatedFavourites));
    };


    return (
        <>
            <Container>
                {/* <section className="featured-car py-12 pt-20 bg-[#e9efff]" ref={featuredCarSection} id="featured-car" style={{ scrollMarginTop: '100px' }}> */}
                <section className="featured-car py-12 pt-20 pb-20 bg-[#e9efff]" id="featured-car" ref={featuredCarSection} style={{ scrollMarginTop: '100px' }}>
                    <div className="container mx-auto">

                        <div className="flex flex-wrap justify-between items-center mb-8 gap-y-2 gap-x-4 mx-4">
                            <h2 className="text-2xl font-semibold">Featured cars</h2>

                            {/* View more option should open again in new version of Omtravels */}

                            {/* <a href="#" className="flex items-center gap-1 text-gray-600 text-sm hover:text-gray-800">
                                <span className='flex justify-center items-center'>View more
                                    <GoArrowRight className='ml-1 mt-1 md:mt-0' />
                                </span>
                                <ion-icon name="arrow-forward-outline" className="mt-1 transition duration-200"></ion-icon>
                            </a> */}
                        </div>

                        <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:mx-3">
                            {
                                cars.map((car, index) => (
                                    <div key={index} className="border border-white rounded-[25px] p-4 shadow-md mx-4 md:mx-0 flex flex-col justify-between h-full">
                                        <img src={car.image} alt={car.name} className="car-image mb-4 w-full h-48 md:h-[55%] lg:h-52 object-cover rounded-[25px]" />
                                        <div className='flex flex-col justify-between flex-grow'>
                                            <div>
                                                <div className='flex justify-between items-center mx-2'>
                                                    <p className="text-2xl md:text-3xl text-slate-700">{car.name}</p>
                                                    <p className="text-gray-600 border border-blue-500 rounded-full px-4 py-1 border-dashed">{car.model}</p>
                                                </div>
                                                <div className='flex justify-between items-center mt-2 md:mt-5 mx-2'>
                                                    <div className="text-gray-600 flex items-center text-lg w-40">
                                                        <BsPeople className='text-blue-500 md:text-2xl mr-2' />
                                                        <p className='ml-1 text-[15px] text-gray-600'>{car.seater} Seats</p>
                                                    </div>
                                                    <div className="text-gray-600 flex items-center text-lg w-40">
                                                        <LuFuel className='text-blue-500 md:text-2xl mr-2' />
                                                        <p className="text-[15px] text-gray-600">{car.fuel}</p>
                                                    </div>
                                                </div>
                                                <div className='flex justify-between items-center mt-2 md:mt-5 mx-2'>
                                                    <div className="text-gray-600 flex items-center text-lg w-40">
                                                        <LiaRupeeSignSolid className='text-blue-500 md:text-2xl mr-2' />
                                                        <p className='text-[15px]'>{car.rate} per/Km</p>
                                                    </div>
                                                    <div className="text-gray-600 flex items-center text-lg w-40">
                                                        <PiFan className='text-blue-500 md:text-2xl mr-2' />
                                                        <p className="text-gray-600">{car.air}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className='mb-3 md:mb-5 mt-2 border border-slate-300' />
                                            <div className="customer-clicks flex justify-between mx-2">
                                                <Link
                                                    className='rent-now-btn bg-blue-500 text-white rounded-[18px] md:py-2 md:px-4 px-2 py-1 text-sm md:text-lg hover:bg-blue-600 transition duration-200'
                                                    onClick={() => handleRentNow(car)}
                                                >
                                                    Rent Now
                                                </Link>
                                                <button
                                                    onClick={() => handleAddToFavourite(index)}
                                                    className="favourite-btn text-red-500 hover:scale-110 transition duration-200"
                                                >
                                                    {
                                                        favouriteCars.includes(index)
                                                            ? <FaHeart className="text-xl md:text-2xl text-red-500" />
                                                            : <FaRegHeart className="text-xl md:text-2xl text-gray-400 hover:text-red-500" />
                                                    }
                                                </button>

                                                {/* <button
                                                    className={`favourite-btn bg-blue-200 text-white rounded-xl md:rounded-[16px] md:py-2 md:px-2 px-1 py-1 hover:bg-red-200 transition duration-200`}
                                                >
                                                    <CiHeart
                                                        className={`text-2xl md:text-3xl text-blue-500 hover:text-red-500 ${favouritecar === index ? 'text-red-500' : ''}`}
                                                        onClick={() => handleAddToFavourite(index)}
                                                    />
                                                </button> */}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </Container>

        </>
    )
})

export default Cars;
const Container = styled.div`


@media (min-width: 1500px) {

.car-image {
    height: 55%;
}

}


`;

// ₹