import { ReactNode } from "react"

export type SocialMediaProps = {
    children: ReactNode;
}

export type SocialMediaItemProps = {
    link: string;
    image: string;
    name: string;
}