import React from 'react'
import logo from "../../public/images/location.png"
import styled from "styled-components"
import { Link } from 'react-router-dom';
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { useLocation, useNavigate } from 'react-router-dom';




const Footer = () => {


    const location = useLocation();
    const navigate = useNavigate();


    const handleClick1 = () => {
        if (location.pathname === '/') {
          // Same page: Scroll to top
          window.scrollTo({ top: 750, behavior: 'smooth' });
        } else {
          // Navigate to home with scroll target
          navigate('/', { state: { scrollTo: 'featured-car' } });
        }
      };

    const handleClick2 = () => {
        if (location.pathname === '/reservation') {
          // Same page: Scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          // Navigate to home with scroll target
          navigate('/reservation', { state: { scrollTo: 'service-section' } });
        }
      };

    return (
        <>
            <Container>
                <footer className='bg-[#dce6ff]'>
                    <div className='lg:container mx-auto'>
                        <div className=''>
                            <div className='flex flex-col xl:flex-row justify-between lg:items-center py-10 p-3 lg:px-0'>
                                <div className='logo-section flex flex-col justify-center items-center md:w-[100%] xl:w-[50%] md:px-4'>
                                    <Link to="/" className="logo flex justify-center items-center xl:mr-0 lg:ml-6 md:w-40 lg:w-56 w-16 mb-5 lg:mb-16">
                                        <img src={logo} alt="company logo" className='mr-2 w-6 lg:w-10' />
                                        <h1 className='md:text-2xl lg:text-4xl font-bold'>OmTravels</h1>
                                    </Link>
                                    <p className='company-blog lg:mx-7 lg:text-[18px] text-[#4F5D78] lg:leading-8 md:text-center xl:text-start'>
                                        OM Travels, Jabalpur's most trusted travel agency, offers reliable taxi services focused on comfort,
                                        safety, and customer satisfaction. Whether you're a local or a visitor, OM Travels ensures a smooth, seamless travel experience.
                                    </p>
                                </div>
                                {/* <div className='flex justify-around md:mt-8 lg:w-[65%]'> */}
                                <div className='flex flex-col md:flex-row justify-around lg:pb-16 md:mt-10 lg:mt-10 md:mb-4 w-full'>
                                    <div className='explore leading-7 lg:leading-10 mt-5 md:mt-0'>
                                        <h1 className='font-semibold lg:text-lg mb-4'>EXPLORE</h1>
                                        <ul className='text-[#4F5D78] flex flex-col lg:text-[18px]'>
                                            <Link to={"/about-us"} className='hover:text-blue-400 flex items-center'>
                                                <MdKeyboardDoubleArrowRight className='mr-1' />
                                                About Us
                                            </Link>
                                            {/* <Link className='hover:text-blue-400 flex items-center'>
                                                <MdKeyboardDoubleArrowRight className='mr-1' />
                                                Our Blogs
                                            </Link> */}
                                            <Link to="/contact-us" className='hover:text-blue-400 flex items-center'>
                                                <MdKeyboardDoubleArrowRight className='mr-1' />
                                                Contact Us
                                            </Link>
                                            <Link to={"/terms&condition"} target='_blank' className='hover:text-blue-400 flex items-center'>
                                                <MdKeyboardDoubleArrowRight className='mr-1' />
                                                Terms & Condition
                                            </Link>
                                            <Link to={"/privacypolicy"} target='_blank' className='hover:text-blue-400 flex items-center'>
                                                <MdKeyboardDoubleArrowRight className='mr-1' />
                                                Our Policy
                                            </Link>
                                        </ul>
                                    </div>
                                    <div className='service leading-7 lg:leading-10 mt-5 md:mt-0'>
                                        <h1 className='font-semibold lg:text-lg mb-4'>OUR SERVICES</h1>
                                        <ul className='text-[#4F5D78] flex flex-col lg:text-[18px]'>
                                            {/* <Link to="/#featured-car" className='hover:text-blue-400 flex items-center'> */}
                                            {/* <Link to={{ pathname: '/', state: { scrollTo: 'featured-car' } }} className='hover:text-blue-400 flex items-center'>
                                                <MdKeyboardDoubleArrowRight className='mr-1' />Car Rental / Taxi Booking
                                            </Link> */}
                                            <button role='link' onClick={handleClick1} className='hover:text-blue-400 flex items-center'>
                                                <MdKeyboardDoubleArrowRight className='mr-1' />Car Rental / Taxi Booking
                                            </button>
                                            <button role='link' onClick={handleClick1} className='hover:text-blue-400 flex items-center'>
                                                <MdKeyboardDoubleArrowRight className='mr-1' />Bus Booking
                                            </button>
                                            <button role='link' onClick={handleClick2} className='hover:text-blue-400 flex items-center'>
                                                <MdKeyboardDoubleArrowRight className='mr-1' />Railway Reservation Consultant
                                            </button>
                                            <button role='link' onClick={handleClick2} className='hover:text-blue-400 flex items-center'>
                                                <MdKeyboardDoubleArrowRight className='mr-1' />Flight Booking
                                            </button>
                                            <button role='link' onClick={handleClick2} className='hover:text-blue-400 flex items-center'>
                                                <MdKeyboardDoubleArrowRight className='mr-1' />Hotel Booking
                                            </button>
                                        </ul>
                                    </div>
                                    <div className='mb-auto md:w-[200px] lg:w-auto'>
                                        <h1 className='font-semibold lg:text-lg mb-4 mt-5 md:mt-0'>ADDRESS</h1>
                                        <p className='flex lg:justify-center items-start text-[#4F5D78] lg:text-[18px]'> <FaLocationDot className='mt-2 md:mt-0 mr-1 lg:mr-3 md:text-5xl lg:text-lg lg:mt-2' />in front of SBI ATM, Yadav Colony,<br className='lg:block hidden' /> New Adaresh Colony, Jabalpur,<br className='lg:block hidden' /> Madhya Pradesh, 482002</p>
                                        <br />
                                        <p className='flex lg:justify-start items-start text-[#4F5D78] lg:text-[18px]'> <MdEmail className='mt-2 md:mt-0 mr-1 lg:mr-3 md:text-5xl lg:text-lg lg:mt-2' />omtravels8085@gmail.com</p>
                                        <br />
                                        <p className='flex lg:justify-start items-start text-[#4F5D78] lg:text-[18px]'> <BsTelephoneFill className='mt-2 md:mt-0 mr-1 lg:mr-3 md:text-5xl lg:text-lg lg:mt-2' />+91 9826327078</p>

                                        {/* <div className='flex lg:justify-center items-start m-2 mt-6 lg:text-[18px]'>
                                            <MdEmail className='icon3 md:mt-2 text-lg text-[#4F5D78] lg:text-2xl' />
                                            <p className='ml-3 text-gray-700 text-sm md:text-base flex justify-center items-center'>
                                                <span className='font-bold lg:font-semibold lg:text-2xl'></span><p className='md:text-lg lg:text-xl ml-2'>omtravels8085@gmail.com</p>
                                            </p>
                                        </div> */}
                                    </div>




                                </div>
                            </div>
                            <div className='flex flex-col-reverse md:px-9 md:flex-row justify-between items-center border bg-white border-white rounded-t-[30px] shadow-xl lg:py-10 px-5'>
                                <div className="copyright text-[#4F5D78] text-sm lg:text-[18px] leading-6 mb-4">
                                    {/* Copyright &copy;  2024 Om Travels. All Rights Reserved. */}
                                    Copyright &copy;  2025 Om Travels. All Rights Reserved.
                                    {/* <p>Powered by Priyanshu Team</p> */}
                                    <p>Powered by Samwayne Technology</p>
                                </div>
                                <div className="social-icons flex justify-between w-24 lg:w-32 mt-5 mb-10 ">
                                    <a href="https://www.instagram.com/omtravels6/" target="_blank" rel="noopener noreferrer">
                                        <IoLogoInstagram className='lg:text-3xl text-xl text-pink-400 hover:text-pink-600' />
                                    </a>
                                    <a href="https://www.facebook.com/profile.php?id=100057577626007" target="_blank" rel="noopener noreferrer">
                                        <FaFacebook className='lg:text-3xl text-xl text-blue-500 hover:text-blue-700' />
                                    </a>
                                    <a href="" target="_blank" rel="noopener noreferrer">
                                        <FaWhatsapp className='lg:text-3xl text-xl text-green-400 hover:text-green-600' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </footer>
            </Container>

        </>
    )
}

export default Footer;
const Container = styled.div`

@media (min-width: 820px) {

    /* .logo{
        text-align: center;
    } */

}

@media (min-width: 912px) {

    .company-blog {
        margin: 0px 30px;
    }

}

@media (min-width: 1280px) {

    .logo {
        margin-right: 150px;
    }
 
}

@media (min-width: 1280px) {

    .logo {
        margin-right: 220px;
    }

}

`;