import { FooterWrapper } from './Footer.styles';

import { Button } from '../Button/Button';
import { SocialMedia } from '../SocialMedia';

import brandIcon from '../../assets/svgs/logo.svg';
import triangleIcon from '../../assets/svgs/triangle.svg';
import siteIcon from '../../assets/svgs/site.svg';
import githubIcon from '../../assets/svgs/github.svg';

export const Footer = () => {
    return (
        <FooterWrapper>
            <Button
                isCircle
                id="footer__backTop"
            >
                <img
                    src={triangleIcon}
                    alt="."
                />
            </Button>

            <div className="footer__content container__">
                <div className="footer__inner">
                    <img
                        src={brandIcon}
                        alt="Link Pointer"
                    />
                    <p> Link Pointer </p>
                </div>

                <div className="footer__owner">
                    <address>
                        <p> &copy; 2022 Matheus Ramalho. Todos os direitos reservados. </p>
                    </address>

                    <div className="contacts__">
                        <SocialMedia.Root>
                            <SocialMedia.Item
                                link="https://matheusramalho.dev/"
                                name="Site Matheus Ramalho"
                                image={siteIcon}
                            />

                            <SocialMedia.Item
                                link="https://github.com/MatheusRamalho"
                                name="Github Matheus Ramalho"
                                image={githubIcon}
                            />
                        </SocialMedia.Root>
                    </div>
                </div>
            </div>
        </FooterWrapper>
    );
}
