import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top: 3rem;

    img {
        width: 500px;
        height: 500px;
        border-radius: 0.5rem;
    }

    .description {
        margin-top: 3rem;
    }

    h1 {
        color: white;
        display: flex;
        justify-content: center;
        font-family: 'Poppins', sans-serif;
    }

    p {
        color: #e4e3e3;
        margin-left: 1rem;
        margin-right: 1rem;
        text-align: center;
        margin-top: 2rem;
        font-family: 'Mukta', sans-serif;
    }

    @media(max-width: 1000px) {
        flex-direction: column;
        position: relative;

        img {
            width: 20rem;
            height: 20rem;
            display: flex;
            margin: auto;
        }
  }
`