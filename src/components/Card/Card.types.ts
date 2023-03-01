import { ReactNode } from "react";

export type CardRootProps = {
    children: ReactNode;
}

export type CardContentProps = {
    sobtitle: string;
    title: string;
    description: string;
}
