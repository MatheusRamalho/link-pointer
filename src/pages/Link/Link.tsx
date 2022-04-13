import { Link } from 'react-router-dom';

// COMPONENTS...
import { Waves } from '../../components/Waves/Waves';
import { Button } from '../../components/Button/Button';
import { SocialMedia, SocialMediaItem } from '../../components/SocialMedia/SocialMedia';

// STYLES...
import { SectionLink } from './Link.styles';

import homeImg from '../../assets/images/home.svg';
import avatarImg from '../../assets/images/avatar.svg';
import siteImg from '../../assets/images/site.svg';
import instagramImg from '../../assets/images/instagram.svg';
import facebookImg from '../../assets/images/facebook.svg';
import twitterImg from '../../assets/images/twitter.svg';

export function LinkPage() {
    return (
        <SectionLink>
            <h6 hidden> Section Link </h6>

            <Link to="/">
                <Button isCircle id="button__home">
                    <img src={homeImg} alt="." />
                </Button>
            </Link>

            <div className="link__page">
                <div className="page__header">
                    <div className="link__profile container__">
                        <div className="profile__avatar">
                            <img className="" src={avatarImg} alt="Usuário" />
                        </div>

                        <div className="profile__description">
                            <h1 className="h1__"> Nome do usuário </h1>
                            <p className="text__"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facilis illo eum sit, aliquid maiores. </p>
                        </div>

                        <div className="profile__socials">
                            <SocialMedia>
                                <SocialMediaItem
                                    link="https://matheusramalho.dev/"
                                    name="Site Matheus Ramalho"
                                    image={siteImg}
                                />

                                <SocialMediaItem
                                    link="https://www.instagram.com/"
                                    name="Site Matheus Ramalho"
                                    image={instagramImg}
                                />

                                <SocialMediaItem
                                    link="https://twitter.com/"
                                    name="Site Matheus Ramalho"
                                    image={twitterImg}
                                />

                                <SocialMediaItem
                                    link="https://www.facebook.com/"
                                    name="Site Matheus Ramalho"
                                    image={facebookImg}
                                />
                            </SocialMedia>
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
                                    <img src={avatarImg} alt="Ícone do link" />
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