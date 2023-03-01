import styled from "styled-components";

export const SectionHeader = styled.section`
    position: relative;

    width: 100%;
    height: 35rem;
    padding: 2rem;
    background-color: var(--colorLight);
    background-size: cover;

    .header__ {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .header__content {
            .header__inner {
                h1 {
                    font-size: 3.75rem;
                }

                h1, p {
                    text-align: center;
                }
            }

            .header__actions {
                margin: 1rem 0;

                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
`;

export const SectionInfos = styled.section`
    position: relative;

    width: 100%;
    min-height: 100vh;
    padding: 4rem 0;
    background-color: var(--white);

    .infos__content {
        .infos__inner,
        .infos__footer {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
        }

        .infos__inner {
            div {
                max-width: 60%;
                height: auto;
                margin-bottom: 5rem;


                .h2__ {
                    margin-top: 0.625rem;
                    margin-bottom: 1.25rem;

                    font-size: 3.125rem;

                    span {
                        color: var(--color);
                    }
                }
            }
        }

        .card__infos {
            flex: 1 1 9.375rem;
        }
    }

    @media(min-width: 1600px) {
        .infos__content .infos__inner div {
            max-width: 70%;
        }
    }

    @media(max-width: 1400px) {
        .infos__content {
            .infos__inner div {
                max-width: 100%;
            }
        }
    }

    @media(max-width: 769px) {
        .infos__content {
            margin-top: 0;
        }
    }
`;
