import React from 'react'
import { HashLink } from 'react-router-hash-link'
import styled from "styled-components"
import img1 from "../../public/images/servicetour.jpg"

// const Header2 = (props) => {
const Header2 = ({heading , para , bgimage,  scrolltoid}) => {

    return (
        <Container>

            <div className="relative bg-cover bg-center h-[600px]"
                // style={{ backgroundImage: `url(${props.bgimage})` }}>
                style={{ backgroundImage: `url(${bgimage})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
                    {/* <h1 className="text-4xl lg:text-6xl font-bold">{props.heading}</h1> */}
                    <h1 className="text-4xl lg:text-6xl font-bold">{heading}</h1>
                    {/* <p className="mt-4 text-lg lg:text-2xl">{props.para}</p> */}
                    <p className="mt-4 text-lg lg:text-2xl">{para}</p>

                    {/* when 1 page in use - */}

                    {/* <a href='#our-story' className="mt-8 px-6 py-3 bg-[#339af0] text-white font-semibold rounded-[15px] hover:bg-blue-500 transition"> */}

                    {/* when 2 or more page in use - */}

                    <HashLink to={`#${scrolltoid}`} className="mt-8 px-6 py-3 bg-[#339af0] text-white font-semibold rounded-[15px] hover:bg-blue-500 transition">
                        Learn More
                    </HashLink>
                </div>
            </div>
        </Container>
    )
}

export default Header2;

const Container = styled.div`




{/* <div className="box relative border-none h-[500px] mt-28">
<div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <img
        className="carimage w-full h-full object-cover"
        src={img1}
        alt="Card image"
    />
    <div className="propy absolute inset-0 flex flex-col justify-end px-0">
    
        <div className="flex justify-center items-center py-3 lg:py-5 bg-gradient-to-r from-transparent via-[#94A3B8] to-transparent">
            <h1 className="text-white text-center text-2xl sm:text-3xl lg:text-4xl">
                {props.heading}
            </h1>
        </div>
    </div>
</div> */}

{/* second option */}
`;