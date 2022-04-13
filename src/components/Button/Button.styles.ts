import styled from "styled-components";

export const ButtonWrapper = styled.button`
    cursor: pointer;

    width: fit-content;
    height: 3rem;
    padding: 0 1.2rem;
    margin: 0.5rem;
    border: none;
    border-radius: 0.5rem;
    background-color: var(--colorDark);
    transition: background-color .2s;

    font-size: 0.9rem;
    font-weight: 500;
    color: var(--white);

    display: flex;
    align-items: center;
    justify-content: center;

    img, svg {
        margin-right: 0.5rem;
    }

    &:not(:disabled):hover {
        background-color: var(--color);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    &.outlined__ {
        border: 0.125rem solid currentColor;
        background-color: transparent;

        color: var(--colorDark);

        &:not(:disabled):hover {
            color: var(--white);
        }
    }

    &.circle__ {
        width: 3.125rem;
        height: 3.125rem;
        padding: 0;
        border-radius: 50%;
        background-color: var(--color);

        img, svg {
            width: 1rem;
            height: auto;
            margin: 0;
        }
    }
`;