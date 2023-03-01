import styled from "styled-components";

export const CardRootWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export const CardContentWrapper = styled.article`
    min-width: 18.75rem;
    height: auto;
    margin: 0.625rem;
    padding: 2rem 1.25rem;
    border: 0.063rem solid var(--grayLight);
    border-radius: 0.44rem;
    background-color: var(--white);

    span {
        padding: 0.5rem;
        border-radius: 50%;
        background-color: var(--grayLight);

        color: var(--color);
    }

    h6 {
        margin: 1rem 0;

        font-size: 1.8rem;
    }
`;
