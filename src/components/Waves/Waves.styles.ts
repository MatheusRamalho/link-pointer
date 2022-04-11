import styled from "styled-components";

import imageWaves from '../../assets/images/waves.png';

export const WavesWrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 6.25rem;
    background-image: url({imageWaves});
    background-size: 62.5rem 6.25rem;

    &.wave__one,
    &.wave__two,
    &.wave__three {
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-direction: normal;
        animation-fill-mode: none;
        animation-play-state: running;
    }

    &.wave__one {
        z-index: 3;
        bottom: 0;

        opacity: 1;

        animation-name: one__movement;
        animation-duration: 30s;
        animation-delay: 0s;
    }

    &.wave__two {
        z-index: 2;
        bottom: 10px;

        opacity: 0.8;

        animation-name: two__movement;
        animation-duration: 15s;
        animation-delay: -6s;
    }

    &.wave__three {
        z-index: 1;
        bottom: 15px;

        opacity: 0.5;

        animation-name: three__movement;
        animation-duration: 20s;
        animation-delay: -2s;
    }

    @keyframes one__movement {
        0% {
            background-position-x: 0;
        }

        100% {
            background-position-x: 62.5rem;
        }
    }

    @keyframes two__movement {
        0% {
            background-position-x: 0;
        }

        100% {
            background-position-x: 62.5rem;
        }
    }

    @keyframes three__movement {
        0% {
            background-position-x: 0;
        }

        100% {
            background-position-x: 62.5rem;
        }
    }
`;

export const WavesBlocoWrapper = styled.div`
    position: relative;
    top: 0;
    right: 0;
    left: 0;

    width: 100%;
    height: 31.25rem;
    overflow: hidden;
    background-color: var(--color);
    background-size: cover;
`;

