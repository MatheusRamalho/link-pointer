import styled from "styled-components";

import wavesImage from '../../assets/images/waves.png';

export const WavesWrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 6.25rem;
    background-image: url(${wavesImage});
    background-size: 62.5rem 6.25rem;

    &.wave-one,
    &.wave-two,
    &.wave-three {
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-direction: normal;
        animation-fill-mode: none;
        animation-play-state: running;
    }

    &.wave-one {
        z-index: 3;
        bottom: 0;

        opacity: 1;

        animation-name: one-movement;
        animation-duration: 30s;
        animation-delay: 0s;
    }

    &.wave-two {
        z-index: 2;
        bottom: 10px;

        opacity: 0.8;

        animation-name: two-movement;
        animation-duration: 15s;
        animation-delay: -6s;
    }

    &.wave-three {
        z-index: 1;
        bottom: 15px;

        opacity: 0.5;

        animation-name: three-movement;
        animation-duration: 20s;
        animation-delay: -2s;
    }

    @keyframes one-movement {
        0% {
            background-position-x: 0;
        }

        100% {
            background-position-x: 62.5rem;
        }
    }

    @keyframes two-movement {
        0% {
            background-position-x: 0;
        }

        100% {
            background-position-x: 62.5rem;
        }
    }

    @keyframes three-movement {
        0% {
            background-position-x: 0;
        }

        100% {
            background-position-x: 62.5rem;
        }
    }
`;
