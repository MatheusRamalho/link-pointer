import { ReactNode } from "react"

export type SocialMediaRootProps = {
    children: ReactNode;
}

export type SocialMediaItemProps = {
    link: string;
    image: string;
    name: string;
}
