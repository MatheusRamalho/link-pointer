import styled from "styled-components";

export const SocialMediaWrapper = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SocialMediaItemWrapper = styled.a`
    width: 2.5rem;
    height: 2.5rem;
    margin: 0.313rem;
    padding: 0;
    border-radius: 50%;
    background-color: var(--color);

    display: flex;
    align-items: center;
    justify-content: center;

    img, svg {
        width: 1rem;
        height: auto;
    }

    &:hover {
        background-color: var(--white);
    }
`;