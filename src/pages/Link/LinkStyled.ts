import styled from "styled-components";

export const SectionLink = styled.section`
    position: relative;

    width: 100%;
    min-height: 100vh;
    background-color: var(--white);

    #button__home {
        z-index: 6;
        position: fixed;
        top: 15px;
        right: 15px;
    }

    .link__page {
        width: 100%;
        height: 100%;

        .page__header {
            position: relative;

            width: 100%;
            height: 31.25rem;
            background-color: var(--colorLight);

            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            .link__profile {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;

                .profile__avatar {
                    width: 7.5rem;
                    height: 7.5rem;
                    border-radius: 50%;
                    border: 0.188rem solid var(--color);
                    background-color: var(--white);

                    img, svg {
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                    }
                }

                .profile__description {
                    margin-top: 1.25rem;

                    .h1__ {
                        text-align: center;
                        font-size: 1.875rem;
                    }

                    .text__ {
                        text-align: center;
                    }
                }

                .profile__socials {
                    margin: 0.5rem 0;

                    .nav__socials {
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        .nav__item {
                            border-radius: 0.875rem;
                            background-color: var(--white);
                            box-shadow: 0 0.125rem 0.5rem 0 rgba(0, 0, 0, 0.11);

                            img {
                                width: 2rem;
                                height: 2rem;
                            }

                            &:hover {
                                background-color: var(--color);
                            }
                        }
                    }
                }
            }
        }

        .page__body {
            width: 100%;
            height: 100%;
            padding-bottom: 4rem;
            background-color: var(--white);

            .links__content {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;

                .link__item {
                    position: relative;

                    width: 53.125rem;
                    height: auto;
                    margin: 0.625rem;
                    padding: 0.625rem;
                    border-radius: 0.875rem;
                    background-color: var(--white);
                    box-shadow: 0 0.125rem 0.5rem 0 rgba(0, 0, 0, 0.11);

                    display: flex;
                    align-items: center;

                    .link__ {
                        position: absolute;

                        width: 100%;
                        height: 100%;
                    }

                    .link__figure {
                        width: 2.5rem;
                        height: 2.5rem;
                        margin-right: 1.25rem;
                        border-radius: 0.875rem;
                        background-color: var(--color);

                        display: flex;
                        align-items: center;
                        justify-content: center;

                        img, svg {
                            width: 1.2rem;
                            height: 1.2rem;
                        }
                    }

                    .link__infos {
                        width: 100%;

                        display: flex;
                        align-items: center;
                        justify-content: center;

                        .text__ {
                            margin-bottom: 0;

                            text-align: center;
                        }
                    }

                    &:hover {
                        background-color: var(--color);

                        .link__figure {
                            background-color: var(--color);
                        }

                        .link__infos .text__ {
                            color: var(--white);
                        }
                    }
                }
            }
        }
    }

    @media(max-width: 1024px) {
        .link__page .page__body .links__content .link__item {
            width: 100%;
        }
    }

    @media(min-width: 769px) {
        .link__page .page__body .links__content .link__item {
            height: 3.75rem;

            .link__infos .text__ {
                overflow: hidden;
                -o-text-overflow: ellipsis;
                text-overflow: ellipsis;
                max-width: 90%;
                white-space: nowrap;
            }
        }
    }

    @media(max-width: 425px) {
        .link__page .page__body .links__content .link__item {
            flex-direction: column;
        }
    }
`;
