import { CardContentProps } from "./Card.types";
import { CardContentWrapper } from "./Card.styles";

export const CardContent = ({ sobtitle, title, description }: CardContentProps) => {
    return (
        <CardContentWrapper>
            <span> {sobtitle} </span>
            <h6> {title} </h6>
            <p> {description} </p>
        </CardContentWrapper>
    );
}

// export const CardGroup = ({ children }: CardGroupProps) => {
//     return (
//         <CardGroupWrapper>
//             {children}
//         </CardGroupWrapper>
//     );
// }
