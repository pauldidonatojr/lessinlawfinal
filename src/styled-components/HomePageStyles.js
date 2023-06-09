import styled from 'styled-components'

export const HomePageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
   width: 100%;

    /* @media (max-width: 768px) {
        background-color: red;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        display: flex;
        background-color: orange;
    }

    @media (min-width: 1025px) and (max-width: 1280px) {
        background-color: beige;
    }

    @media (min-width: 1281px) {
        background-color: hotpink;

    } */
`

export const VideoBackground = styled.video`
    position: fixed;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 85vh;
    z-index: -1;
    object-fit: cover;
    opacity: 0.5;
`
export const ContactCard = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;

    .formContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: transparent;
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
    max-width: 400px;
    padding: 40px;
    }

    form{
        width: 500px;
        padding: 40px;
        background: #fff;
        border-radius: 4px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .formGroup{
        margin-bottom: 20px;
    }


    label{
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }


    input,
    textarea {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    }

    button {
    display: block;
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    background: #4caf50;
    color: #fff;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;

    &:hover {
        background: #45a049;
    }
    }
`



// const Button = styled.button`
//   display: block;
//   width: 100%;
//   padding: 10px;
//   margin-top: 20px;
//   background: #4caf50;
//   color: #fff;
//   font-size: 16px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background: #45a049;
//   }
// `;




export const Container1 = styled.div`
    background-color: #dae1e5;
    border: 4px whitesmoke solid;

    border-radius: 5%;

    margin-top: 25rem;
    margin-bottom: 8rem;
    font-size: 0.7rem;
    width: 55vh;

    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 3.2rem;
    height: 55vh;
    overflow: scroll;
    ::-webkit-scrollbar {
        display: none; /* Hide the scrollbar for WebKit-based browsers */
    }
    img {
        max-width: 100%;
        width: 45vh;
        height: 25vh;
        margin-top: 2rem;
        margin-bottom: 3rem;
        margin-left: 3rem;
        border-radius: 4%;
        @media (max-width: 768px) {
        }
    }
    @media (max-width: 768px) {
       background-color: transparent;
       border-color: transparent;
        margin-top: 40rem;

        margin-bottom: 3rem;
        width: 80%;
        margin-left: 2.5rem;
        height: 70vh;
        img {
            width: 25vh;

        }
    }

    /* Tablets and Small Screens */
    @media (min-width: 769px) and (max-width: 1024px) {
    }

    /* Medium-sized Screens */
    @media (min-width: 1025px) and (max-width: 1280px) {
        /* Styles for medium-sized screens */
        img {
            max-width: 100%;
            width: 35vh;
            height: 25vh;
            margin-top: 2rem;
            margin-bottom: 3rem;
            margin-left: 3rem;
            @media (max-width: 768px) {
            }
        }
    }

    /* Large Screens */
    @media (min-width: 1281px) {
        /* Styles for large screens */
    }
`
export const Container2 = styled.div`
    background-color: #dae1e5;
    border: 4px whitesmoke solid;

    border-radius: 5%;
    margin-top: 2.6rem;
    margin-bottom: 5rem;
    font-size: 0.7rem;
    width: 55vh;

    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 0.8rem;
    height: 55vh;
    overflow: scroll;
    ::-webkit-scrollbar {
        display: none; /* Hide the scrollbar for WebKit-based browsers */
    }
    img {
        max-width: 100%;
        width: 45vh;
        height: 25vh;
        margin-top: 2rem;
        margin-bottom: 3rem;
        margin-left: 3rem;
        border-radius: 4%;
        @media (max-width: 768px) {
        }
    }
    @media (max-width: 768px) {
        background-color: transparent;
        border-color: transparent;
        margin-top: 40rem;

        margin-bottom: 3rem;
        width: 80%;
        margin-left: 2.5rem;
        height: 70vh;
        img {
            width: 25vh;
        }
    }
    @media (min-width: 481px) and (max-width: 768px) {
        .Container1 {
        }
    }
`
export const Title = styled.div`
    width: 100%;
    background-color: lightblue;
    border-radius: 15%;
    height: 20vh;
    p {
        margin-top: 2rem;
    }
    .titleh1 {
        margin-top: 4rem;
        font-size: 50px;
        margin-right: 10px; /* Adjust the margin as needed */
    }
    .container2 {
        height: 25rem;
        width: 100%;
    }
    img {
        width: 100%;
        max-height: 80%;
        margin-bottom: 5rem; /* Ensure the image doesn't exceed the container height */
    }

    @media (max-width: 768px) {
        height: 60vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 2rem;
        margin-bottom: 5rem;
        border-radius: 14%;
        p {
        }
        .titleh1 {
            font-size: 50px;
        }
        img {
        }
    }
`

export const Main = styled.div`
    flex: 1;
    padding: 8px;
    height: 55rem;
    ${'' /* border: 5px black solid; */}
    h1 {
        font-size: 32px;
        margin-bottom: 20px;
    }

    p {
        font-size: 18px;
        line-height: 1.5;
        margin-bottom: 20px;
    }

    ul {
        list-style: disc;
        margin-left: 20px;
        margin-bottom: 20px;

        li {
            font-size: 18px;
            line-height: 1.5;
        }
    }

    @media (max-width: 768px) {
    }

    @media (min-width: 1025px) and (max-width: 1280px) {
    }
`
export const Main1 = styled.div`
    border: 4px whitesmoke solid;

    display: grid;
    justify-content: center;
    padding: 8px;
    margin-top: 4rem;
    height: 115vh;
    width: 18rem;
    margin-left: 4rem;
    background-color: #dae1e5;
    @media (min-width: 1025px) and (max-width: 1280px) {
             display: grid;
        justify-content: center;
        align-items: center;
        width: 70%;
        height: 10vh;
        margin-top: 0.5rem;

        background-color: transparent;
        border-color: transparent;
        .mainbox1 {
            width: 20rem;
            display: grid;
            justify-content: center;
            align-items: center;
            height: 40vh;
            background-color: transparent;
        }
        .button-group {
            display: grid;
        }
        h1 {
            font-size: 60px;
        }
        p {
            ${
                '' /* font-size: 14px;
            line-height: 1.5;
            margin-bottom: 20px;
            text-align: center;
            margin-top: 1rem;
            border-radius: 5%;
            line-height: 1.5rem; */
            }
            display: none;
        }
    }

    .mainbox1 {
        width: 15rem;
        display: grid;
        flex-direction: column;
        align-items: center;
        height: 110vh;
        justify-content: center;
        overflow: auto;
        ::-webkit-scrollbar {
            display: none; /* Hide the scrollbar for WebKit-based browsers */
        }

        .textContent {
            font-size: 1.2rem;
        }
    }
    h1 {
        font-size: 50px;
        margin-bottom: 20px;
    }
    h3 {
        text-decoration: underline;
    }

    .lessintitle {
        font-size: 3.2rem;
    }

    p {
        font-size: 17px;
        line-height: 1.5;
        margin-bottom: 20px;
    }

    ul {
        list-style: disc;
        margin-left: 20px;
        margin-bottom: 20px;

        li {
            font-size: 18px;
            line-height: 1.5;
        }
    }
    @media (max-width: 768px) {
        display: grid;
        justify-content: center;
        align-items: center;
        width: 70%;
        height: 40vh;
        margin-top: 0.5rem;

        background-color: transparent;
        border-color: transparent;
        .mainbox1 {
            width: 20rem;
            display: grid;
            justify-content: center;
            align-items: center;
            height: 50vh;

        }
        .button-group {
            display: grid;
        }
        h1 {
            font-size: 60px;
        }
        p {
            ${
                '' /* font-size: 14px;
            line-height: 1.5;
            margin-bottom: 20px;
            text-align: center;
            margin-top: 1rem;
            border-radius: 5%;
            line-height: 1.5rem; */
            }
            display: none;
        }
    }
`
export const Sidebar = styled.div`
    flex: 0 0 300px;
    padding: 20px;
    margin-right: 3rem;

    p {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            font-size: 18px;
            line-height: 1.5;
            margin-bottom: 10px;
        }
    }
`

export const Ad = styled.div`
    flex: 0 0 300px;
    background-color: #f5f5f5;
    padding: 20px;
    text-align: center;
    p {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
    }


`
export const InternalTag1 = styled.span`
    font-size: 1.2rem;
    font-weight: 600;
`
export const InternalTag2 = styled.span`
    font-size: 1.05rem;
    font-weight: 600;
`
export const Testimonials = styled.div`
    border: 4px whitesmoke solid;

    flex: 0 0 300px;
    margin-top: 10px;
    padding: 5px;
    background-color: #dae1e5;
    overflow: auto;
    max-height: 400px; /* Adjust the value to your desired maximum height */
    margin-top: 2rem;
    p {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px;
        margin-left: 1rem;
    }
    .client {
        text-decoration: underline;
        font-size: 1.4rem;
        margin-left: 1.5rem;
    }
    h3 {
        font-size: 1.5rem;
        margin-left: 1.2rem;
        text-decoration: underline;
        font-weight: 500;
    }
    .stars {
        margin-left: 1.2rem;
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            font-size: 18px;
            line-height: 1.5;
            margin-bottom: 10px;
        }
    }

    @media (max-width: 768px) {
        margin-top: 60rem;

    }
`

// Holy Grail Flexbox Layout
export const LayoutContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    ${Main} {
        flex: 2;
    }

    ${Sidebar}, ${Ad}, ${Testimonials} {
        flex: 1;
    }

    @media only screen and (max-width: 767px) {
        ${Main}, ${Sidebar}, ${Ad}, ${Testimonials} {
            flex: 1 0 100%;
        }
    }

    @media only screen and (min-width: 768px) {
        ${Main} {
            order: 2;
            margin-right: 20px;
        }

        ${Sidebar} {
            order: 1;
            margin-right: 20px;
        }

        ${Ad} {
            order: 3;
            margin-left: 20px;
        }
    }

    @media only screen and (min-width: 992px) {
        ${Main} {
            margin-left: 20px;
        }

        ${Sidebar} {
            margin-left: auto;
        }
    }
`
export const Button = styled.button`
    background-color: blue; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;

    &:hover {
        background-color: lightblue;
    }

    &:active {
        background-color: #4caf50;
        box-shadow: 0 5px #666;
        transform: translateY(4px);
    }
`
export const Button2 = styled.button`
    background-color: blue; /* Green */
    border: none;
    padding: 15px 32px;

    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 26px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;
    color: white;
    font-weight: 500px;
    &:hover {
        background-color: lightblue;
    }

    &:active {
        background-color: #4caf50;
        box-shadow: 0 5px #666;
        transform: translateY(4px);
    }
`
