import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --colorLight: #BDEDFF;
        --color: #8BDBFE;
        --colorDark: #03363D;

        --white: #FFFFFF;
        --grayLight: #E7E7E9;
        --gray: #AFB2B1;
        --grayDark: #3D5154;

        --blackLight: #26252A;
        --blackDark: #201F24;

        --blue: #1766FF;
        --green: #7FBA7A;
        --yellow: #FFCE73;
        --red: #E87176;

        --font: Rubik, sans-serif;
    }

    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        text-decoration: none;
        outline: none;
    }

    html {
        scroll-behavior: smooth;
    }

    &::-webkit-scrollbar {
        width: 0.938rem;
        padding-right: 0.25rem;
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 0.5rem;
        background: var(--gray);
    }

    html, body {
        height: 100%;
    }

    body {
        background-color: var(--white);

        font-family: var(--font);
        font-weight: 300;
        color: var(--grayDark);
        line-height: calc(1em + 0.8rem);
        letter-spacing: 0.10rem;
        text-transform: none;
    }

    input, button, textarea, select {
        margin: 0;

        font: inherit; 
        letter-spacing: normal;
        text-transform: none;
        text-align: start;
    }

    img, picture, video, canvas, svg {
        max-width: 100%;

        display: block;
    }

    a {
        color: var(--grayDark);
        text-decoration: none;
        outline: none;
    }

    h1, h2, h3, h4, h5, h6, p, span, small, address {
        overflow-wrap: break-word; // Para que o texto quebre...
        hyphens: auto; // Adiciona hífen...
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0 0 0.5rem 0;

        font-family: var(--font);
        font-weight: 700;
        color: var(--grayDark);
        line-height: calc(1em + 1rem);
    }

    h1 {
        font-size: calc(1.375rem + 1.5vw);
    }

    h2 {
        font-size: calc(1.325rem + 0.9vw);
    }

    h3 {
        font-size: calc(1.3rem + 0.6vw);
    }

    h4 {
        font-size: calc(1.275rem + 0.3vw);
    }

    h5 {
        font-size: 1.25rem;
    }

    h6 {
        font-size: 1rem;
    }

    h4, h5, h6 {
        font-weight: 500;
    }

    @media (min-width: 1200px) {
        h1 {
            font-size: 2.5rem;
        }

        h2 {
            font-size: 2rem;
        }

        h3 {
            font-size: 1.75rem;
        }

        h4 {
            font-size: 1.5rem;
        }
    }

    @media (max-width: 1080px) {
        html {
            font-size: 93,75%;
        }
    }

    @media (max-width: 720px) {
        html {
            font-size: 87,5%;
        }
    }

    // Usados para manter um padrão de largura...
    .container__, .container__fluid,
    .container__xxl, .container__xl,
    .container__lg, .container__md, .container__sm {
        width: 100%;
        margin-right: auto;
        margin-left: auto;
        padding-right: 0.938rem;
        padding-left: 0.938rem;
    }

    @media (min-width: 576px) {
        .container__sm,
        .container__ {
            max-width: 33.75rem; //540px
        }
    }

    @media (min-width: 768px) {
        .container__md, .container__sm,
        .container__ {
            max-width: 45rem; //720px
        }
    }

    @media (min-width: 992px) {
        .container__lg, .container__md, .container__sm,
        .container__ {
            max-width: 60rem; //960px
        }
    }

    @media (min-width: 1200px) {
        .container__xl, .container__lg,
        .container__md, .container__sm,
        .container__ {
            max-width: 71.25rem; //1140px
        }
    }

    @media (min-width: 1400px) {
        .container__xxl, .container__xl,
        .container__lg, .container__md, .container__sm,
        .container__ {
            max-width: 82.5rem; //1320px
        }
    }
`;
