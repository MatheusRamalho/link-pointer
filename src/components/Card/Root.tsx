import { CardRootWrapper } from "./Card.styles";
import { CardRootProps } from "./Card.types";

export const CardRoot = ({ children }: CardRootProps) => {
    return (
        <CardRootWrapper>
            {children}
        </CardRootWrapper>
    );
}
