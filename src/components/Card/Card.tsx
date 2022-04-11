import { CardGroupProps, CardProps } from "./Card.types";
import { CardGroupWrapper, CardWrapper } from "./Card.styles";

export function Card({ sobtitle, title, description }: CardProps) {
    return (
        <CardWrapper>
            <span> {sobtitle} </span>
            <h6> {title} </h6>
            <p> {description} </p>
        </CardWrapper>
    );
}

export function CardGroup({ children }: CardGroupProps) {
    return (
        <CardGroupWrapper>
            {children}
        </CardGroupWrapper>
    );
}