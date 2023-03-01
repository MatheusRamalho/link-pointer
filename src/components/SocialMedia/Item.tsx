import { SocialMediaItemWrapper } from "./SocialMedia.styles";
import { SocialMediaItemProps } from "./SocialMedia.types";

export const SocialMediaItem = ({ link, image, name }: SocialMediaItemProps) => {
    return (
        <SocialMediaItemWrapper
            href={link}
            target="_blank"
            rel="noreferrer"
            aria-label={name}
        >
            <img
                src={image}
                alt={name}
            />
        </SocialMediaItemWrapper>
    );
}
