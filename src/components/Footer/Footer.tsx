import { FooterWrapper } from './Footer.styles';

import { Button } from '../Button/Button';
import { SocialMedia, SocialMediaItem } from '../SocialMedia/SocialMedia';

import logoImg from '../../assets/svgs/logo.svg';
import triangleImg from '../../assets/svgs/triangle.svg';
import siteImg from '../../assets/svgs/site.svg';
import githubImg from '../../assets/svgs/github.svg';

export const Footer = () => {
    return (
        <FooterWrapper>
            <Button
                isCircle
                id="footer__backTop"
            >
                <img src={triangleImg} alt="." />
            </Button>

            <div className="footer__content container__">
                <div className="footer__inner">
                    <img src={logoImg} alt="Link Pointer" />
                    <p> Link Pointer </p>
                </div>

                <div className="footer__owner">
                    <address>
                        <p> &copy; 2022 Matheus Ramalho. Todos os direitos reservados. </p>
                    </address>

                    <div className="contacts__">
                        <SocialMedia>
                            <SocialMediaItem
                                link="https://matheusramalho.dev/"
                                name="Site Matheus Ramalho"
                                image={siteImg}
                            />

                            <SocialMediaItem
                                link="https://github.com/MatheusRamalho"
                                name="Github Matheus Ramalho"
                                image={githubImg}
                            />
                        </SocialMedia>
                    </div>
                </div>
            </div>
        </FooterWrapper>
    );
}
