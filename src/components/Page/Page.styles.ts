import styled from "styled-components";

export const PageWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--white);
`;

export const BrandWrapper = styled.div`
    z-index: 6;
    position: fixed;
    top: 20px;
    left: 30px;

    img {
        width: 6.25rem;
        height: auto;
    }

    @media(max-width: 768px) {
        top: 10px;
        left: 10px;
    }
`;

export const MainWrapper = styled.main`
    width: 100%;
    height: 100%;
    background-color: var(--white);
`;