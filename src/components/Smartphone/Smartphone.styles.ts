import styled from "styled-components";

export const SmartphoneWrapper = styled.div`
    z-index: 4;
    position: absolute;
    top: -150px;
    left: 400px;

    width: 15.313rem;
    height: 31.25rem;
    border-radius: 2.6875rem;
    border: 0.7rem solid var(--blackLight);
    background-color: var(--blackLight);

    .smartphone__screen__efect {
        z-index: 2;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);

        width: 55%;
        height: 1.25rem;
        border-bottom-left-radius: 0.8rem;
        border-bottom-right-radius: 0.8rem;
        background-color: var(--blackLight);

        &::before,
        &::after {
            content: '';
            position: absolute;
            top: 50%;
            transform: translate(-50%, -70%);

            height: 0.5rem;
            border: 0.125rem solid var(--white);
            background-color: var(--blackLight);
        }

        &::before {
            left: 50%;

            width: 2.188rem;
            border-radius: 0.44rem;
        }

        &::after {
            right: 22%;

            width: 0.5rem;
            border-radius: 50%;
        }
    }

    .smartphone__screen {
        z-index: 1;
        position: absolute;

        width: 100%;
        height: 100%;
        border-radius: 1.9rem;
        background-color: var(--white);

        &::after {
            content: '';
            position: absolute;
            bottom: 1.5%;
            left: 50%;
            transform: translateX(-50%);

            width: 1.875rem;
            height: 0.188rem;
            border-radius: 1rem;
            background-color: var(--blackLight);
        }
    }

    @media(min-width: 769px) and (max-width: 1400px) {
            top: -15%;
            left: 50%;
            transform: translateX(-50%);

    }

    @media(max-width: 768px) {
            display: none;
            opacity: 0;

    }
`;
