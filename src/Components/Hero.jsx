// import React, { useState } from "react";
import React, { useState, useRef, useEffect, forwardRef } from "react";
import axios from "axios";
import Heroimg from "../../public/images/heroimg.png";
import styled from "styled-components";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdArrowDropUp } from "react-icons/md";
import Hero from "../../public/images/contact.jpg"




const HeroSection = forwardRef(({ preselectedCar } , ref ) => {


    const carTypes = ["Swift-Dzire", "Innova", "Innova-Crysta", "Tavera", "Tempo-Traveller", "Other"];

    const [inpval, setInpVal] = useState({
        clientname: "",
        clientnumber: "",
        vehicletype: "",
        pickupdate: "",
        returndate: "",
    })

    const [selectedCar, setSelectedCar] = useState("");

    const [isDropdownopen, setIsDropdownopen] = useState(false)

    const [tripType, setTripType] = useState("one-way");

    const handleOptionClick = (Option) => {
        setSelectedCar(Option);
        setIsDropdownopen(false);
    };

    const toggleDropdown = (e) => {
        e.preventDefault();
        setIsDropdownopen(!isDropdownopen);
    }

    const handleTripTypeChange = (e) => {
        setTripType(e.target.value);
    };

    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownopen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Set selected car if preselectedCar is passed

    useEffect(() => {
        if (preselectedCar && !selectedCar) {
          setSelectedCar(preselectedCar);
        }
      }, [preselectedCar, selectedCar]);




    return (
        <Container>
            <section ref={ref} className="Hero-form pt-[120px] bg-[#e9efff] md:relative md:h-[110%]" id="Hero-form">
                <div className="second xl:container xl:mx-auto lg:mx-10 px-4 flex flex-col md:flex-row items-center justify-between">

                    {/* Left Content: Text */}
                    <div className="hero-content text-center md:text-left md:max-w-[50%]">
                        <h2 className="title text-3xl text-[#2e384d] mb-[15px] font-semibold leading-tight">
                            Hassle-free rentals for every journey
                        </h2>
                        <p className="paragrapho text-[#2e384d] leading-[1.8] md:mb-[40px]">
                            Unlock the freedom of the road with our flexible car rental options
                        </p>

                        <div className="medium-buttons md:flex hidden gap-4 ml-1 mb-[30px] md:mb-0 lg:mt-12 lg:mb-4">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    value="one-way"
                                    checked={tripType === "one-way"}
                                    onChange={handleTripTypeChange}
                                    className="mr-2"
                                />
                                One-Way Trip
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    value="round-trip"
                                    checked={tripType === "round-trip"}
                                    onChange={handleTripTypeChange}
                                    className="mr-2"
                                />
                                Round Trip
                            </label>
                        </div>

                        {/*---------------------------------- Hero Form for mobile device - ------------------------------*/}

                        <form className="low-form bg-[#e9efff] md:hidden xl:block md:absolute py-4 mb-4 md:py-0 border border-white shadow-md rounded-[18px] mt-6 font-nunito p-[0px_20px] w-full md:w-[95%] flex flex-col md:flex-row items-center gap-4 md:gap-0">

                            <div className="flex gap-4 md:hidden">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        value="one-way"
                                        checked={tripType === "one-way"}
                                        onChange={handleTripTypeChange}
                                        className="mr-2"
                                    />
                                    One-Way Trip
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        value="round-trip"
                                        checked={tripType === "round-trip"}
                                        onChange={handleTripTypeChange}
                                        className="mr-2"
                                    />
                                    Round Trip
                                </label>
                            </div>

                            {/* Car, model, or brand */}
                            <div className="input-wrapper w-full md:p-[15px_20px] md:md:border-r-2 border-white">
                                <label htmlFor="input-1" className="text-[#8d94a5] text-start text-sm mb-[10px] block">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="clientname"
                                    placeholder="Enter Your Name"
                                    className="text-[#2e384d] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[10px] p-2 w-full border-b-2"
                                // value={ }
                                // onChange={ }
                                />
                            </div>

                            {/* Max. monthly payment */}
                            <div className="input-wrapper w-full md:p-[15px_20px] md:border-r-2 border-white">
                                <label htmlFor="input-2" className="text-[#8d94a5] text-start text-sm mb-[10px] block ">
                                    Your Mobile Number
                                </label>
                                <input
                                    type="tel"
                                    id="mobile"
                                    name="clientnumber"
                                    placeholder="Mobile Number"
                                    className="text-[#2e384d] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[10px] p-2 w-full border"
                                // value={ }
                                // onChange={ }
                                />
                            </div>



                            {/* select car */}

                            <div ref={dropdownRef} className="relative input-wrapper w-full md:p-[15px_20px] md:border-r-2 border-white">
                                <label htmlFor="input-2" className="text-[#8d94a5] text-start text-sm mb-[10px] block">
                                    Select Car
                                </label>
                                <button
                                    name="vehicletype"
                                    id="carType"
                                    // value={ }
                                    onClick={toggleDropdown}
                                    className="bg-white flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[10px] p-2 w-full border"
                                >
                                    {selectedCar || "Select a Car type"}
                                    {
                                        isDropdownopen ? <MdArrowDropUp /> : <MdOutlineArrowDropDown />
                                    }
                                </button>

                                {/* Dropdown menu */}

                                {
                                    isDropdownopen && (
                                        <ul className="optionsdropdown absolute w-full bg-white border border-gray-300 mt-2 rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
                                            {
                                                carTypes.map((car, index) => {
                                                    return (
                                                        <li key={index}
                                                            onClick={() => handleOptionClick(car)}
                                                            className="px-4 py-2 cursor-pointer border-white hover:bg-[#339af0] rounded-lg hover:text-white transition-colors"
                                                        >
                                                            <div className="py-1">
                                                                {car}
                                                            </div>
                                                        </li>
                                                    );
                                                })
                                            }
                                        </ul>
                                    )
                                }

                            </div>


                            {/* Date  */}

                            <div className="input-wrapper w-full md:p-[15px_20px] md:border-r-2 border-white">
                                <label htmlFor="input-3" className="text-[#8d94a5] text-start text-sm mb-[10px] block">
                                    Date
                                </label>
                                <input
                                    type="date"
                                    id="date"
                                    name="pickupdate"
                                    placeholder="Date"
                                    className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[10px] p-2 w-full border"
                                // value={ }
                                // onChange={ }
                                />
                            </div>

                            {/* Show the return date if round trip is selected */}
                            {tripType === "round-trip" && (
                                <div className="input-wrapper w-full md:p-[15px_20px] md:border-r-2 border-white">
                                    <label htmlFor="input-4" className="text-[#8d94a5] text-start text-sm mb-[10px] block">
                                        Date of Return
                                    </label>
                                    <input
                                        type="date"
                                        id="return-date"
                                        name="returndate"
                                        placeholder="Return Date"
                                        className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[10px] p-2 w-full border"
                                    // value={ }
                                    // onChange={ }
                                    />
                                </div>
                            )}

                            {/* Search Button */}
                            <button type="submit" className="btn bg-[#339af0] font-semibold text-white w-full md:w-auto md:px-10 h-[50px] lg:mx-5 rounded-[14px] uppercase mt-4 md:mt-0">
                                Submit
                            </button>
                        </form>

                        {/* ------------------------------ Hero Form for tablet ( medium-screen ) device ------------------------------------- */}
                        <form className="medium-form hidden md:block xl:hidden bg-[#e9efff] lg:bottom-[-60px] md:absolute lg:ml-20 py-4 md:py-0 border md:mt-5 lg:mt-0 border-white shadow-md rounded-[18px] font-nunito p-[0px_20px] w-full md:w-[95%] flex-col gap-4">

                            <div className="box grid grid-cols-1 gap-4 md:gap-0">

                                {/* Column 1 */}
                                <div className="input-wrapper w-full md:p-[15px_20px] md:border-b-2 md:border-r-2 border-white">
                                    <input
                                        type="text"
                                        id="name"
                                        name="clientname"
                                        placeholder="Enter Your Name"
                                        className="text-[#2e384d] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[10px] p-2 w-full border-b-2"
                                    // value={ }
                                    // onChange={ }
                                    />
                                </div>

                                {/* Column 2 */}
                                <div className="input-wrapper w-full md:p-[15px_20px] md:border-b-2 md:border-r-2 border-white">
                                    <input
                                        type="tel"
                                        id="mobile"
                                        name="clientnumber"
                                        placeholder="Mobile Number"
                                        className="text-[#2e384d] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[10px] p-2 w-full border"
                                    // value={ }
                                    // onChange={ }
                                    />
                                </div>

                                {/* car select */}

                                <div ref={dropdownRef} className="relative input-wrapper w-full md:p-[15px_20px] md:border-r-2 md:border-b-2 border-white">
                                    <button
                                        name="carType"
                                        id="carType"
                                        onClick={toggleDropdown}
                                        // onChange={ }
                                        className="bg-white flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[10px] p-2 w-full border"
                                    >
                                        {selectedCar || "Select a Car type"}
                                        {
                                            isDropdownopen ? <MdArrowDropUp /> : <MdOutlineArrowDropDown />
                                        }
                                    </button>

                                    {/* Dropdown menu */}

                                    {
                                        isDropdownopen && (
                                            <ul className="absolute w-full md:w-[82%] bg-white border border-gray-300 mt-2 rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
                                                {
                                                    carTypes.map((car, index) => {
                                                        return (
                                                            <li key={index}
                                                                onClick={() => handleOptionClick(car)}
                                                                className="px-4 py-2 cursor-pointer border-white hover:bg-[#339af0] rounded-lg hover:text-white transition-colors"
                                                            >
                                                                <div className="py-1">
                                                                    {car}
                                                                </div>
                                                            </li>
                                                        );
                                                    })
                                                }
                                            </ul>
                                        )
                                    }

                                </div>


                                <div className="input-wrapper w-full md:p-[12px_24px] border-white md:border-r-2 lg:border-r-2 lg:border-b-2">
                                    <input
                                        type="date"
                                        id="date"
                                        name="client-date"
                                        placeholder="Date"
                                        className="text-[#8d94a5dc] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[10px] p-2 w-full border"
                                    // value={ }
                                    // onChange={ }
                                    />
                                </div>

                                {/* Show the return date if round trip is selected */}
                                {tripType === "round-trip" && (
                                    <div className="input-wrapper w-full md:p-[15px_20px] md:border-r-2 border-white">
                                        <input
                                            type="date"
                                            id="returndate"
                                            name="client-return-date"
                                            placeholder="Return Date"
                                            className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[10px] p-2 w-full border"
                                        // value={ }
                                        // onChange={ }
                                        />
                                    </div>
                                )}


                                {/* Submit Button */}
                                <div className="flex justify-center">
                                    <button type="submit" className="btn bg-[#339af0] font-semibold text-white md:p-[10px_64px] my-4 mx-4 lg:mx-5 rounded-[14px] uppercase">
                                        Submit
                                    </button>
                                </div>
                                {/* </div> */}
                            </div>



                        </form>

                    </div>

                    {/* Right Content: Image */}
                    <div className="hero-banner hidden md:block md:max-w-full xl:w-[50%] my-16 m-10 lg:mx-0 lg:mr-0">
                        <img
                            src={Heroimg}
                            alt="Hero Car"
                            className="rounded-[40px] h-[600px] md:h-[300px] lg:h-[350px] xl:h-[600px]  object-cover"
                        />
                    </div>
                </div>
            </section >
        </Container>
    );
});

export default HeroSection;

const Container = styled.div`

/* .radio-btn { bottom: 200px} */ 

@media (min-width: 768px) { .title { font-size: 35px} .box { display: grid; grid-template-columns: repeat(3, 1fr); } }

@media (min-width: 820px) { .title { font-size: 50px} .medium-form { width: 73%; } .radio-btn { bottom: 240px} }
/* @media (min-width: 820px) { .title { font-size: 50px}  .radio-btn { bottom: 240px} } */

@media (min-width: 853px) { .medium-buttons {margin-bottom: 0px } }

@media (min-width: 1024px) { .medium-form { width: 89%; margin-left: 0px; } .box { display: grid; grid-template-columns: repeat(4, 1fr); } .radio-btn { } }
/* @media (min-width: 1024px) {  .box { display: grid; grid-template-columns: repeat(4, 1fr); } .radio-btn { } } */

@media (min-width: 1280px) { .medium-buttons {margin-bottom: 0px } .low-form { width: 75%; display: flex; } .optionsdropdown { width: 140px; } }

@media (min-width: 1440px) { .optionsdropdown { width: 175px; } }

@media (min-width: 1800px) { .optionsdropdown { width: 243px; } }

@media (min-width: 2560px) { .low-form { width: 50%; display: flex; } .optionsdropdown { width: 225px; } }


`;


// agar ipad air ki width : 820px aur ipad pro ki width: 1024px over lapping kar rahe hai too kya karna chahiye 


// from medium form -


{/* Column 3 */ }
{/* <div className="input-wrapper w-full md:p-[15px_20px] md:border-b-2 lg:border-r-2 border-white">
                                    <input
                                        type="text"
                                        id="pickup-point"
                                        name="client-pickup"
                                        placeholder="Enter Pickup Point"
                                        className="text-[#2e384d] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[10px] p-2 w-full border"
                                    />
                                </div> */}

{/* Column 4 */ }
{/* <div className="dropoff-point input-wrapper w-full md:p-[15px_20px] md:border-b-2 md:border-r-2 lg:border-r-0 border-white">
                                    <input
                                        type="text"
                                        id="dropoff-point"
                                        name="client-dropoff"
                                        placeholder="Enter Dropoff Point"
                                        className="text-[#2e384d] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[10px] p-2 w-full border"
                                    />
                                </div> */}

{/* Second Row with Date and Button */ }
{/* <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 items-center"> */ }

{/* Date Input */ }
{/* <div className="input-wrapper w-full md:col-span-2 md:p-[12px_24px] border-white"> */ }


// from low-form -



{/* <div className="input-wrapper w-full md:p-[15px_20px] md:border-r-2 border-white">
                                <label htmlFor="input-3" className="text-[#8d94a5] text-start text-sm mb-[10px] block">
                                    Pick-up Point
                                </label>
                                <input
                                    type="text"
                                    id="pickup-point"
                                    name="client-pickup"
                                    placeholder="Enter Pickup Point"
                                    className="text-[#2e384d] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[10px] p-2 w-full border"
                                />
                            </div> */}

{/* <div className="input-wrapper w-full md:p-[15px_20px] md:border-r-2 border-white">
                                <label htmlFor="input-3" className="text-[#8d94a5] text-start text-sm mb-[10px] block">
                                    Drop-off Point
                                </label>
                                <input
                                    type="text"
                                    id="dropoff-point"
                                    name="client-dropoff"
                                    placeholder="Enter Dropoff Point"
                                    className="text-[#2e384d] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[10px] p-2 w-full border"
                                />
                            </div> */}
