import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import gifImage from '../assets/gif1.gif'
import gifImage4 from '../assets/gif4.gif'
import gifImage5 from '../assets/gif5.gif'
import gifImage6 from '../assets/gif6.gif'


const CardContainer = styled.div`
    ${'' /* background-color: #f5f5f5; */}
    overflow: scroll;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 0.5rem;
    height: 60vh;
    width: 80vh;
    margin-left: 1.3rem;
    overflow: scroll;
    border-radius: 5%;
    background-color: rgba(218, 225, 229, 0.5);
    border: 4px whitesmoke solid;

    ::-webkit-scrollbar {
        display: none; /* Hide the scrollbar for WebKit-based browsers */
    }

    &:hover{
        -webkit-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
        -moz-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
        box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
        transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1) box-shadow;
    }


    @media (max-width: 768px) {
        width: 100%;
        height: 70vh;
        margin-left: 2.5rem;
        margin-top: 7rem;
        margin-left: 0rem;
        background-color: #FBFAF9;
        border-color: transparent;
        -webkit-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
        -moz-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
        box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
        transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1) box-shadow;
    }
    ::-webkit-scrollbar {
        display: none; /* Hide the scrollbar for WebKit-based browsers */
    }
`

const CardImage = styled.img`
    max-width: 100%;
    width: 45vh;
    height: 20vh;
    margin-top: 2rem;
    margin-bottom: 3rem;
    @media (max-width: 768px) {
    }
`
const Video = styled.video`
    max-width: 100%;
    width: 60vh;
    height: 30vh;
    margin-top: 2rem;
    margin-bottom: 3rem;
    @media (max-width: 768px) {
    }
`
const CardTitle = styled.h2`
    font-size: 1.9rem;
    margin: 0.5rem 0;
    font-family: 'Arial', sans-serif;
    color: #333; /* Dark color */
    font-weight: 200;
    @media (max-width: 768px) {
        font-style: italic;
        font-size: 1.2rem;
    }
`

const CardDescription = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    margin-top: 10%;
    font-weight: 200;

`

const Card = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCardIndex((currentCardIndex + 1) % cardData.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [currentCardIndex])

    const cardData = [
        {
            image: gifImage4,
            video: 'https://res.cloudinary.com/elpawl-llc/video/upload/v1679873411/pexels-kelly-lacy-6606214_1_gcflle.mp4',
            title: 'Philadelphia, PA Personal Injury Law Firm',
            description:
                'Our team of dedicated personal injury lawyers specializes in holding public agencies accountable for the actions of their employees. We represent individuals who have suffered personal injuries due to various violations, including police misconduct, illegal search and seizure, racial profiling, and assault by prison guards. Through filing lawsuits on behalf of our clients, we strive to obtain compensation for their damages and play a crucial role in advocating for reform within law enforcement. Our extensive experience covers a wide range of personal injury cases, including motorcycle accidents, pedestrian accidents, bicycle accidents, slip and fall accidents, medical malpractice, product liability, workplace accidents, construction accidents, dog bites, assault or battery, wrongful death, public transportation accidents, aviation accidents, boating accidents, defamation, toxic exposure, nursing home abuse, and recreational accidents.',
        },
        {
            image: gifImage5,
            title: 'Experienced Personal Injury Lawyers: Advocates Fighting for Your Rights',
            description: ` Trust our skilled personal injury lawyers to passionately fight for your rights and pursue the rightful compensation you deserve. With extensive expertise and a deep understanding of personal injury laws, we leave no stone unturned in crafting a compelling case tailored to your unique circumstances. From thorough investigations to fearless negotiations, we are dedicated to achieving optimal results and alleviating the burdens you face. Contact us today and let our experienced team advocate for you `,
        },
        {
            image: gifImage6,
            title: 'No Win, No Fee',
            description: `When it comes to legal matters like these, our law firm operates on a contingent fee basis, ensuring your peace of mind. With this fee structure, you won't have to worry about attorney's fees until we successfully secure compensation for you. If, unfortunately, we are unable to obtain compensation, you won't be responsible for any attorney's fees.

Moreover, it's important to note that in certain cases, the court may award attorney's fees directly from the defendant, or we may negotiate a settlement where the defendant covers these fees. These awarded or received attorney's fees would be subtracted from any fees you owe us.

In essence, pursuing justice after facing instances of police misconduct or discrimination comes with minimal financial risk. Our contingent fee arrangement not only provides you with financial protection but also presents the opportunity to seek the justice you rightfully deserve and potentially receive substantial compensation for the damages you have endured. Contact our experienced legal team today to discuss your case and let us fight for your rights.`,
        },
    ]

    const { image, title, description, video } = cardData[currentCardIndex]

    return (
        <CardContainer>
            <CardTitle>{title}</CardTitle>

            {/* <Video autoPlay controls>
                <source src={video} type="video/mp4" />
            </Video> */}
        {/*   <CardImage src={image} alt={title} /> */}
            <CardDescription>{description}</CardDescription>
        </CardContainer>
    )
}

export default Card
