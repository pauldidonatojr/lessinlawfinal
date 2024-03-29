import styled from 'styled-components'

export const Wrapper = styled.main`
    display: grid;
    align-items: center;
    justify-content: center;
    height: 25vh;
    width: 100%;
    @media (max-width: 768px) {
        
    }

    /* Tablets and Small Screens */
    @media (min-width: 769px) and (max-width: 1024px) {
        display: flex;
    }

    /* Medium-sized Screens */
    @media (min-width: 1025px) and (max-width: 1280px) {
    }

    /* Large Screens */
    @media (min-width: 1281px) {
        /* Styles for large screens */
    }
    .navbar {
        background-color: blue;
        width: 100%;
        height: 50px;
        margin-bottom: 2rem;
    }
    .info-overlay {
        display: none;
    }
    .chat-overlay {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 999999;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.5);
    }

    #rainbow-chat {
        margin: 0;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        width: 450px;
        height: 45%;
    }

    .popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* background-color: rgba(0, 0, 0, 0.5); */
        z-index: 999;
    }

    .popup {
        position: fixed;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 400px;
        background-color: #fff;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        padding: 20px;
        text-align: center;
        z-index: 1000;
        pointer-events: auto;
    }

    .popup h2 {
        margin-top: 0;
        margin-bottom: 10px;
        font-size: 24px;
    }

    .popup p {
        margin-top: 0;
        margin-bottom: 20px;
        font-size: 18px;
    }

    .popup button {
        display: block;
        margin: 0 auto;
        padding: 10px 20px;
        border: none;
        background-color: #007bff;
        color: #fff;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;
    }

    .popup button:hover {
        background-color: #0062cc;
    }

    .container {
    }
    nav {
        width: var(--fluid-width);
        max-width: var(--max-width);
        margin: 0 auto;
        height: var(--nav-height);
        display: flex;
        align-items: center;
    }

    .page {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .page1 {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .info {
        text-align: center;
        border-radius: 10%;
    }
    .info1 {
        text-align: center;
        background-color: whitesmoke;
        border-radius: 10%;
    }
    .bio {
        transition: var(--transition);
    }

    h1 {
        font-weight: 700;
        span {
            color: var(--primary-500);
        }
    }
    p {
        color: var(--grey-600);
    }
    .btn-groups {
        width: 100%;
        display: grid;
        justify-content: center;
        align-items: center;
    }

    article {
        margin-top: 2rem;
        position: absolute;
        top: 0;
        left: 0;

        opacity: 0;
        transition: var(--transition);
    }
    article.activeSlide {
        opacity: 1;
        transform: translateX(0);
    }
    article.lastSlide {
        transform: translateX(-100%);
    }
    article.nextSlide {
        transform: translateX(100%);
    }
    .video-background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    .video-background video {
        position: absolute;
        top: 50%;
        left: 50%;
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        transform: translateX(-50%) translateY(-50%);
    }

    @media only screen and (max-width: 600px) {
        .page {
            min-height: calc(70vh - var(--nav-height));
            border-radius: 4%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        article {
            border-radius: 2%;
        }
        .info {
            border-radius: 2%;
            transition: var(--transition);

            height: 100%;
            width: 100%;

            h1 {
                margin-top: 0.75rem;
            }
        }

        .btn-groups {
            display: grid;
            grid-gap: 1rem;
            text-align: center;
            height: 10px;
        }
        .btn-hero {
            font-size: 1.25rem;
        }
    }
    @media only screen and (min-width: 600px) {
        .page {
            /* min-height: calc(100vh - var(--nav-height)); */
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .page1 {
            /* min-height: calc(100vh - var(--nav-height)); */
            /* display: flex;
   justify-content: center;
   align-items: center;
   margin-top: -3rem; */
            display: none;
        }
        .info {
            transition: var(--transition);
            box-shadow: var(--shadow-3);
            border-radius: 10%;

            transition: var(--transition);
            box-shadow: var(--shadow-3);
            height: 550px;
            width: 300px;
            margin-left: 2rem;
            margin-right: 0.5rem;
            h1 {
                margin-top: 0.75rem;
            }
        }
        .info1 {
            transition: var(--transition);
            box-shadow: var(--shadow-3);
            border-radius: 10%;

            transition: var(--transition);
            box-shadow: var(--shadow-3);
            height: 550px;
            width: 300px;
            margin-left: 2rem;
            margin-right: 0.5rem;
            h1 {
                margin-top: 0.75rem;
            }
        }
        .bio {
            transition: var(--transition);
            font-size: 0.75rem;

            height: 475px;
            width: 250px;

            max-width: 800px;
            font-weight: 500px;
            margin: 0 auto;
            text-align: center;
            position: relative;
            display: grid;
            overflow: hidden;
            justify-content: center;
        }
        .btn-groups {
            display: grid;
            grid-gap: 1rem;
            text-align: center;
            height: 10px;
        }
        .btn-hero {
            font-size: 1rem;
        }
    }

    @media only screen and (min-width: 768px) {
        .container {
        }
        .page {
            /* min-height: calc(100vh - var(--nav-height)); */
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: -3rem;
        }
        .page1 {
            /* min-height: calc(100vh - var(--nav-height)); */
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: -3rem;
        }
        .info {
            transition: var(--transition);
            box-shadow: var(--shadow-3);
            border-radius: 10%;

            transition: var(--transition);
            box-shadow: var(--shadow-3);
            height: 550px;
            width: 300px;
            margin-left: 2rem;
            margin-right: 0.5rem;
            h1 {
                margin-top: 0.75rem;
            }
        }
        .info1 {
            transition: var(--transition);
            box-shadow: var(--shadow-3);
            border-radius: 10%;

            transition: var(--transition);
            box-shadow: var(--shadow-3);
            height: 550px;
            width: 300px;
            margin-left: 2rem;
            margin-right: 0.5rem;
            h1 {
                margin-top: 0.75rem;
            }
        }
        .bio {
            transition: var(--transition);
            font-size: 0.75rem;

            height: 475px;
            width: 250px;
            max-width: 800px;
            font-weight: 500px;
            margin: 0 auto;
            text-align: center;
            position: relative;
            display: grid;
            overflow: hidden;
            justify-content: center;
        }
        .btn-groups {
            display: grid;
            grid-gap: 1rem;
            text-align: center;
            height: 10px;
        }
        .btn-hero {
            font-size: 1rem;
        }
    }

    @media (min-width: 992px) {
        .container {
        }
        .page {
            /* min-height: calc(100vh - var(--nav-height)); */
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .info {
            transition: var(--transition);
            box-shadow: var(--shadow-3);
            border-radius: 10%;

            transition: var(--transition);
            box-shadow: var(--shadow-3);
            height: 550px;
            width: 300px;
            margin-left: 2rem;
            margin-right: 0.5rem;
            h1 {
                margin-top: 0.75rem;
            }
        }

        .bio {
            transition: var(--transition);
            font-size: 0.75rem;

            height: 475px;
            width: 250px;
            max-width: 800px;
            font-weight: 500px;
            margin: 0 auto;
            text-align: center;
            position: relative;
            display: grid;
            overflow: hidden;
            justify-content: center;
        }
        .btn-groups {
            display: grid;
            grid-gap: 1rem;
            text-align: center;
            height: 10px;
        }
        .btn-hero {
            font-size: 1rem;
        }
    }
    @media (min-width: 1280px) {
        display: grid;
        place-items: center;
        grid-template-columns: 1fr 1fr;

        .page {
            min-height: calc(70vh - var(--nav-height));
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 10rem;
        }

        .info {
            transition: var(--transition);
            box-shadow: var(--shadow-3);
            border-radius: 10%;

            transition: var(--transition);
            box-shadow: var(--shadow-3);
            height: 200px;
            width: 400px;
            margin-left: 1rem;
            margin-right: 5.5rem;
            h1 {
                margin-top: 3.75rem;
            }
        }

        .bio {
            transition: var(--transition);
            font-size: 1.34rem;

            height: 300px;
            width: 365px;
            max-width: 800px;
            font-weight: 500px;
            margin: 0 auto;
            text-align: center;
            position: relative;
            display: grid;
            overflow: hidden;
            justify-content: center;
        }
        .btn-groups {
            display: grid;
            grid-gap: 1rem;
            text-align: center;
            height: 10px;
        }
        .btn-hero {
            font-size: 1.5rem;
            width: 15rem;
        }
    }
`
const ContactCard = styled.div`
    height: 100%;
    width: 100%;
    .background {
        display: flex;
        min-height: 100vh;
    }

    .container {
        flex: 0 1 700px;
        margin: auto;
        padding: 10px;
    }

    .screen {
        position: relative;
        background: #3e3e3e;
        border-radius: 15px;
    }

    .screen:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 20px;
        right: 20px;
        bottom: 0;
        border-radius: 15px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        z-index: -1;
    }

    .screen-header {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        background: #4d4d4f;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }

    .screen-header-left {
        margin-right: auto;
    }

    .screen-header-button {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-right: 3px;
        border-radius: 8px;
        background: white;
    }

    .screen-header-buttonClose {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-right: 3px;
        border-radius: 8px;
    }

    .screen-header-button.close {
    }

    .screen-header-button.maximize {
        background: #e8e925;
    }

    .screen-header-button.minimize {
        background: #74c54f;
    }

    .screen-header-right {
        display: flex;
    }

    .screen-header-ellipsis {
        width: 3px;
        height: 3px;
        margin-left: 2px;
        border-radius: 8px;
        background: #999;
    }

    .screen-body {
        display: flex;
    }

    .screen-body-item {
        flex: 1;
        padding: 50px;
    }

    .screen-body-item.left {
        display: flex;
        flex-direction: column;
    }

    .app-title {
        display: flex;
        flex-direction: column;
        position: relative;
        color: #ea1d6f;
        font-size: 26px;
    }

    .app-title:after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        bottom: -10px;
        width: 25px;
        height: 4px;
        background: #ea1d6f;
    }

    .app-contact {
        margin-top: auto;
        font-size: 8px;
        color: #888;
    }

    .app-form-group {
        margin-bottom: 15px;
    }

    .app-form-group.message {
        margin-top: 40px;
    }

    .app-form-group.buttons {
        margin-bottom: 0;
        text-align: right;
    }

    .app-form-control {
        width: 100%;
        padding: 10px 0;
        background: none;
        border: none;
        border-bottom: 1px solid #666;
        color: #ddd;
        font-size: 14px;
        text-transform: uppercase;
        outline: none;
        transition: border-color 0.2s;
    }

    .app-form-control::placeholder {
        color: #666;
    }

    .app-form-control:focus {
        border-bottom-color: #ddd;
    }

    .app-form-button {
        background: none;
        border: none;
        color: white;
        font-size: 14px;
        cursor: pointer;
        outline: none;
    }

    .app-form-button:hover {
        color: brown;
        font-weight: bold;
    }

    .credits {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        color: #ffa4bd;
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 16px;
        font-weight: normal;
    }

    .credits-link {
        display: flex;
        align-items: center;
        color: #fff;
        font-weight: bold;
        text-decoration: none;
    }

    .dribbble {
        width: 20px;
        height: 20px;
        margin: 0 5px;
    }

    @media screen and (max-width: 520px) {
        .screen-body {
            flex-direction: column;
        }

        .screen-body-item.left {
            margin-bottom: 30px;
        }

        .app-title {
            flex-direction: row;
        }

        .app-title span {
            margin-right: 12px;
        }

        .app-title:after {
            display: none;
        }
    }

    @media only screen and (max-width: 600px) {
        .app-contact {
            display: none;
        }

        .screen-body {
            padding: 40px;
        }

        .screen-body-item {
            padding: 0;
        }
    }
`
