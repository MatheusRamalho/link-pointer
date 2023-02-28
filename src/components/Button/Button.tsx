import { ButtonProps } from "./Button.types";
import { ButtonWrapper } from "./Button.styles";

export const Button = ({ isOutlined = false, isCircle = false, ...props }: ButtonProps) => {
    return (
        <ButtonWrapper
            className={`button__ ${isOutlined ? 'outlined__' : ''} ${isCircle ? 'circle__' : ''}`}
            {...props}
        >
            {props.children}
        </ButtonWrapper>
    );
}
