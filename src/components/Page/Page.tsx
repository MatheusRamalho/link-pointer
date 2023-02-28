import { PageProps } from './Page.types';
import { BrandWrapper, MainWrapper, PageWrapper } from './Page.styles';

import { Footer } from '../Footer/Footer';
import logoImg from '../../assets/svgs/logo.svg';

export const Page = ({ children }: PageProps) => {
    return (
        <PageWrapper>
            <BrandWrapper>
                <img
                    src={logoImg}
                    alt=""
                />
            </BrandWrapper>

            <MainWrapper>
                {children}
            </MainWrapper>

            <Footer />
        </PageWrapper>
    );
}
