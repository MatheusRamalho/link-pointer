import { PageProps } from './Page.types';
import { BrandWrapper, MainWrapper, PageWrapper } from './Page.styles';

// COMPONENTS...
import { Footer } from '../Footer/Footer';

// IMAGES...
import logoImg from '../../assets/images/logo.svg';

export function Page({ children }: PageProps) {
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