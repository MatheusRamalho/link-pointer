import { PageProps } from './Page.types';
import { BrandWrapper, MainWrapper, PageWrapper } from './Page.styles';

import { Footer } from '../Footer/Footer';
import brandIcon from '../../assets/svgs/logo.svg';

export const Page = ({ children }: PageProps) => {
    return (
        <PageWrapper>
            <BrandWrapper>
                <img
                    src={brandIcon}
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
