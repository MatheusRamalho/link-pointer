import styled from "styled-components";

export const FooterWrapper = styled.footer`
    position: relative;

    width: 100%;
    height: auto;
    padding: 3rem 1rem 1.5rem 1rem;
    background-color: var(--grayLight);

    #footer__backTop {
        position: absolute;
        top: 0;
        right: 50px;
        transform: translateY(-50%);
    }

    .footer__content {
        .footer__inner {
            margin-bottom: 1rem;

            > img {
                width: 5rem;
                height: 5rem;
            }
        }

        .footer__owner {
            padding-top: 0.625rem;
            border-top: 0.063rem solid #D8D5DB;

            display: flex;
            justify-content: space-between;

            address,
            .contacts__ {
                display: flex;
                align-items: center;
            }

            address {
                justify-content: flex-start;
            }

            .contacts__ {
                justify-content: flex-end;
            }
        }
    }

    @media(max-width: 768px) {
        .footer__content {
            address,
            .contacts__ {
                justify-content: center;
            }

            .contacts__ {
                border-top: none;
            }
        }
    }

    @media(max-width: 425px) {
        .footer__content .footer__inner {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
    }
`;