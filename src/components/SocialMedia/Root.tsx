import { SocialMediaRootWrapper } from "./SocialMedia.styles";
import { SocialMediaRootProps } from "./SocialMedia.types";

export const SocialMediaRoot = ({ children }: SocialMediaRootProps) => {
    return (
        <SocialMediaRootWrapper>
            {children}
        </SocialMediaRootWrapper>
    );
}
