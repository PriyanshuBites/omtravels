import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom';
import Header from "../Layouts/Header";
import Header2 from "../Layouts/Header2";
import Footer from "../Layouts/Footer";
// import Copy from "../Layout/Copy";
import { BsSendFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import styled from "styled-components"
import img1 from "../../public/images/contact2.jpg"
import emailjs from "@emailjs/browser"
import { SiWhatsapp } from "react-icons/si";
import { IoIosCall } from "react-icons/io";
import { callNow, openWhatsApp } from '../../src/utils/communication.jsx'


const Contactus = () => {

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_c5eqq2b",   // replace this
                "template_50s4h2t",  // replace this
                form.current,
                "BGeLld16Td5ICKBYo"    // replace this
            )
            .then(() => {
                alert("Message sent successfully");
                form.current.reset();
            })
            .catch((error) => {
                alert("Failed to send");
                console.log(error);
            });
    };

    return (
        <>
            <Container>

                <Header />

                <Header2
                    heading="Contact Us"
                    para="Here for You 24/7 — Your Trusted Partner in Travel — Day or Night."
                    bgimage={img1}
                    scrolltoid='contact-section' />

                {/* <Header /> */}

                <div id='contact-section' style={{ scrollMarginTop: '150px' }} className="bg-white my-20">
                    {/* <Header2 heading="Contact US" /> */}
                    <div className='container mx-auto'>
                        <div className='contactform flex flex-col-reverse md:flex-row justify-between p-4 mt-4 mx-3 lg:mx-5'>
                            <div className='contact-side md:w-1/2 lg:w-[50%]'>
                                <h1 className='text-center lg:font-semibold text-2xl lg:text-4xl'>Contact Us</h1>
                                <div className='info mt-12'>
                                    <div className='flex items-start m-2 mt-4'>
                                        <BsSendFill className='icon1 mt-[-10px] lg:mt-[-15px] xl:mt-[0px] text-4xl md:text-5xl lg:text-6xl xl:text-4xl text-[#339af0]' />
                                        <p className='ml-3 text-start text-sm text-gray-700 md:text-base flex justify-center'>
                                            <span className='address lg:font-semibold font-bold lg:text-2xl w-[160px] md:w-[220px] flex'><p className='mr-1 md:mr-2'>Address</p> <p>:</p> </span> <p className='ml-2 md:text-lg lg:text-xl'> in front of SBI ATM, Nove Adaresh Colony, Yadav Colony, <br className='hidden' /> Jabalpur, Madhya Pradesh, 482002 </p>
                                        </p>
                                    </div>
                                    <div className='flex items-start m-2 mt-6'>
                                        <BsTelephoneFill className='icon2 md:mt-2 text-lg lg:text-2xl xl:text-1xl text-[#339af0]' />
                                        <p className='ml-3 text-gray-700 text-sm md:text-base flex justify-center'>
                                            <span className='font-bold lg:font-semibold lg:text-2xl'>Mobile No : </span> <span className='flex flex-col ml-2 md:text-lg lg:text-xl'><p>+91 9826327078,</p> <p>+91 9329577131,</p> <p>+91 7746027078</p></span>
                                        </p>
                                    </div>
                                    <div className='flex items-start m-2 mt-6'>
                                        <MdEmail className='icon3 md:mt-2 text-lg text-[#339af0] lg:text-2xl' />
                                        <p className='ml-3 text-gray-700 text-sm md:text-base flex justify-center items-center'>
                                            <span className='font-bold lg:font-semibold lg:text-2xl'>Email : </span><p className='md:text-lg lg:text-xl ml-2'>omtravels8085@gmail.com</p>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='message-side md:w-1/2 lg:w-[45%] mb-10'>
                                <h1 className='text-center lg:font-semibold text-2xl lg:text-4xl'>Inquire About Your Rental / Service</h1>
                                <p className='text-sm text-gray-700 my-4 mt-12 md:text-lg lg:text-xl'>We’d love to hear your thoughts and feedback!</p>

                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="">
                                            <label htmlFor="inputtext4" className="sr-only">First Name</label>
                                            <input
                                                type="text"
                                                name="first_name"
                                                className="text-[#2e384d] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[10px] p-2 w-full border border-slate-300 text-sm"
                                                id="inputtext4"
                                                placeholder="First Name"
                                                required
                                            />
                                        </div>
                                        <div className="">
                                            <label htmlFor="inputtext4" className="sr-only">Last Name</label>
                                            <input
                                                type="text"
                                                name="last_name"
                                                className="form-input text-[#2e384d] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[10px] p-2 w-full border border-slate-300 text-sm"
                                                id="inputtext4"
                                                placeholder="Last Name"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <label htmlFor="inputEmail4" className="sr-only">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-input text-[#2e384d] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[10px] p-2 w-full border border-slate-300 text-sm"
                                            id="inputEmail4"
                                            placeholder="Enter Your Email Address"
                                            required
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <label htmlFor="inputmobile2" className="sr-only">Mobile Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            className="form-input text-[#2e384d] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[10px] p-2 w-full border border-slate-300 text-sm"
                                            id="inputMobile2"
                                            placeholder="Enter Mobile Number"
                                            required
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <label htmlFor="inputMessage2" className="sr-only">Message</label>
                                        <textarea
                                            name="message"
                                            className="form-input text-[#2e384d] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[10px] p-2 w-full border border-slate-300 text-sm"
                                            id="inputMessage2"
                                            placeholder="Enter Your Message"
                                            rows="3"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn bg-[#339af0] font-semibold text-white w-full md:w-auto md:px-10 md:h-[40px] h-[40px] rounded-[10px] uppercase mt-4"
                                    >
                                        Submit
                                    </button>
                                </form>

                            </div>
                        </div>

                        <div className="flex items-center my-6">
                            <div className="flex-grow h-px bg-gray-300"></div>
                            <span className="px-4 text-gray-500 font-semibold text-lg">Prefer direct contact ?</span>
                            <div className="flex-grow h-px bg-gray-300"></div>
                        </div>

                        <div className="buttons flex justify-center items-center my-[50px]">
                            <button onClick={() => openWhatsApp('917440913040', 'Hi Om Travels, ')} className="flex justify-around mx-5 items-center w-[150px] py-2 px-4 bg-green-500 text-white font-semibold rounded-md shadow-sm hover:bg-green-600 focus:outline-none">
                                <SiWhatsapp />
                                Whatsapp
                            </button>
                            <button
                                type="submit"
                                onClick={() => callNow('917440913040')}
                                className="flex justify-around items-center w-[150px] py-2 px-4 bg-[#339af0] text-white font-semibold rounded-md shadow-sm hover:bg-blue-500 focus:outline-none"
                            >
                                <IoIosCall className="text-xl" />
                                Call Now
                            </button>
                        </div>

                        <div className='map mt-8 mx-10'>
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3084.5580777830146!2d79.92090970367538!3d23.16368759366784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b116195eee4f%3A0x62196cfaef1c23c7!2sDOAGuru%20InfoSystems%20-%20Best%20Digital%20Marketing%20Company%20in%20Jabalpur%20%7C%20Best%20Software%20company%20in%20Jabalpur%20%7C%20IT%20Company%20in%20Jabalpur!5e0!3m2!1sen!2sin!4v1723293462450!5m2!1sen!2sin" */}
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.036472348986!2d79.9143660747745!3d23.16886891085394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b1e251c4deff%3A0x2061769a68d0e241!2sOm%20Travels%20Jabalpur!5e0!3m2!1sen!2sin!4v1752953692994!5m2!1sen!2sin"
                                className="w-full h-96 border" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                    </div>
                    {/* <Footer /> */}
                </div>
                {/* <Copy /> */}
                <Footer />
            </Container>
        </>
    )
}

export default Contactus;
const Container = styled.div`


@media (min-width: 1024px) { .icon2, .icon3 {font-size: 24px};  }




`;
