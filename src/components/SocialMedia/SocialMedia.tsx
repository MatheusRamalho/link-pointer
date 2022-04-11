import { SocialMediaItemWrapper, SocialMediaWrapper } from "./SocialMedia.styles";
import { SocialMediaItemProps, SocialMediaProps } from "./SocialMedia.types";

export function SocialMedia({ children }: SocialMediaProps) {
    return (
        <SocialMediaWrapper>
            {children}
        </SocialMediaWrapper>
    );
}

export function SocialMediaItem({ link, image, name }: SocialMediaItemProps) {
    return (
        <SocialMediaItemWrapper
            href={link}
            target="_blank"
            rel="noreferrer"
            aria-label={name}
        >
            <img src={image} alt={name} />
        </SocialMediaItemWrapper>
    );
}