import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #cacaca;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.main`
    background-color: #ffffff;
    width: 100%;
    margin: 0 0.5rem;

    @media only screen and (min-width: 640px) {
        width: 60%;
    }

    @media only screen and (min-width: 768px) {
        width: 50%;
    }

    @media only screen and (min-width: 1024px) {
        width: 25%;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
