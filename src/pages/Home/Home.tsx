import { Link } from 'react-router-dom';

import { Card } from '../../components/Card';
import { Waves } from '../../components/Waves';
import { Button } from '../../components/Button';

import { SectionHeader, SectionInfos } from './Home.styles';

export const HomePage = () => {
    return (
        <>
            <SectionHeader>
                <h6 hidden> Section Home </h6>

                <header className="header__">
                    <div className="header__content">
                        <div className="header__inner">
                            <h1 className="h1__"> Bem vindo ao <br /> Link Mat. </h1>
                            <p className="text__"> Uma alternativa eficiênte e bonita ao sistema Link tree </p>
                        </div>

                        <div className="header__actions">
                            <Link to="/link">
                                <Button> Acessar exemplo </Button>
                            </Link>

                            <Button isOutlined disabled> +infos </Button>
                        </div>
                    </div>
                </header>

                <Waves />
            </SectionHeader>

            <SectionInfos id="informacoes">
                <h6 hidden> Section Informações </h6>

                <div className="infos__content container__">
                    <div className="infos__inner">
                        <div>
                            <span className="above__title"> Ideal para você </span>
                            <h2 className="h2__"> <span> Link Mat. </span> A melhor forma para todos os seus links. </h2>
                            <p className="text__"> Uma plataforma com uma interface simples e objetiva, centrada nas pessoas. Amada por todos aqueles que buscam divulgar diversos links e conteúdos em suas biografias a todo momento e em todos os lugares. </p>
                        </div>
                    </div>

                    <Card.Root>
                        <Card.Content
                            sobtitle="01"
                            title="tem"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maiores maxime architecto molestiae, quam mollitia ab commodi recusandae et quod molestias dicta? Autem minus labore alias minima saepe at debitis"
                        />

                        <Card.Content
                            sobtitle="02"
                            title="tem"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maiores maxime architecto molestiae, quam mollitia ab commodi recusandae et quod molestias dicta? Autem minus labore alias minima saepe at debitis"
                        />

                        <Card.Content
                            sobtitle="03"
                            title="tem"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maiores maxime architecto molestiae, quam mollitia ab commodi recusandae et quod molestias dicta? Autem minus labore alias minima saepe at debitis"
                        />
                    </Card.Root>
                </div>
            </SectionInfos>
        </>
    );
}
