import { ReactNode } from "react";

export type CardProps = {
    sobtitle: string;
    title: string;
    description: string;
}

export type CardGroupProps = {
    children: ReactNode;
}