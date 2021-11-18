import styled from 'styled-components';
import myImage from '../../images/2833951.jpg';

export const BodyImage = styled.div`
    background-image: url(${myImage});
    height: 100vh;

    .container {
        position: relative;
        width: 100%;
        height: 18.75rem;
    }
    .astro img {
        position: absolute;
        width: 18.75rem;
        height: auto;
        animation-name: animationAtro;
        animation-iteration-count: infinite;
        animation-duration: 5s;
        animation-delay: 1.5s;
    }

    @keyframes animationAtro {
        0% {
            left: 0;
        }
        100% {
            left: 60rem;
        }
    }
`;

export const h1 = styled.h1 `
    text-align: center;
    color: white;
    animation-name:exemplo;
    animation: exemplo 10s infinite;
    font-family: 'Lato', sans-serif;

    @keyframes exemplo {
    0% {color:rgb(15, 15, 15);}
    10% {color: rgb(0, 251, 251);}
    20% {color: rgb(15, 116, 99);}
    30% {color: rgb(38, 58, 240);}
    40% {color: rgb(120, 236, 176);}
    50% {color: rgb(116, 202, 228);}
    60% {color: rgb(3, 10, 41);}
    70% {color: rgb(2, 81, 146);}
    80% {color: rgb(19, 133, 95);}
    90% {color: rgb(15, 14, 14);}
    100% {color: rgb(44, 42, 42);}
}
`;

export const p = styled.p `
    text-align: center;
    color: white;
    font-size: 1.1rem;
    margin-top: 0.898rem;
    font-family: 'Poppins', sans-serif;
`

export const ContainerArrow = styled.div `
    .enter-app {
    position: absolute;
    right: 1.25rem;
    bottom: 0.625rem;
    
    width: 4rem;
    height: 4rem;
    background: #268ed3;
    border-radius: 1.25rem;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.2s;
}

.enter-app:hover{
    background: #1de4e7;
}
`