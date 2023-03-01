import { Link } from 'react-router-dom';

import { Waves } from '../../components/Waves';
import { Button } from '../../components/Button';
import { SocialMedia } from '../../components/SocialMedia';
import { SectionLink } from './Link.styles';

import homeIcon from '../../assets/svgs/home.svg';
import avatarIcon from '../../assets/svgs/avatar.svg';
import siteIcon from '../../assets/svgs/site.svg';
import instagramIcon from '../../assets/svgs/instagram.svg';
import facebookIcon from '../../assets/svgs/facebook.svg';
import twitterIcon from '../../assets/svgs/twitter.svg';

export const LinkPage = () => {
    return (
        <SectionLink>
            <h6 hidden> Section Link </h6>

            <Link to="/">
                <Button isCircle id="button__home">
                    <img src={homeIcon} alt="." />
                </Button>
            </Link>

            <div className="link__page">
                <div className="page__header">
                    <div className="link__profile container__">
                        <div className="profile__avatar">
                            <img className="" src={avatarIcon} alt="Usuário" />
                        </div>

                        <div className="profile__description">
                            <h1 className="h1__"> Nome do usuário </h1>
                            <p className="text__"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facilis illo eum sit, aliquid maiores. </p>
                        </div>

                        <div className="profile__socials">
                            <SocialMedia.Root>
                                <SocialMedia.Item
                                    link="https://matheusramalho.dev/"
                                    name="Site Matheus Ramalho"
                                    image={siteIcon}
                                />

                                <SocialMedia.Item
                                    link="https://www.instagram.com/"
                                    name="Site Matheus Ramalho"
                                    image={instagramIcon}
                                />

                                <SocialMedia.Item
                                    link="https://twitter.com/"
                                    name="Site Matheus Ramalho"
                                    image={twitterIcon}
                                />

                                <SocialMedia.Item
                                    link="https://www.facebook.com/"
                                    name="Site Matheus Ramalho"
                                    image={facebookIcon}
                                />
                            </SocialMedia.Root>
                        </div>
                    </div>

                    <Waves />
                </div>

                <div className="page__body">
                    <div className="container__">
                        <div className="links__content">
                            <article className="link__item">
                                <a className="link__" href="/" target="_blank" rel="noreferrer" aria-label="Apontador para o link">
                                    <span hidden> Apontador para o link </span>
                                </a>

                                <div className="link__figure">
                                    <img src={avatarIcon} alt="Ícone do link" />
                                </div>

                                <div className="link__infos">
                                    <p className="text__"> Alguma informação sobre o link. </p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </SectionLink>
    );
}
