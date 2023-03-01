import { ButtonProps } from "./Button.types";
import { ButtonWrapper } from "./Button.styles";

export const Button = ({ isOutlined = false, isCircle = false, ...props }: ButtonProps) => {
    return (
        <ButtonWrapper
            className={`${isOutlined ? 'button--outlined' : ''} ${isCircle ? 'button--circle' : ''}`}
            {...props}
        >
            {props.children}
        </ButtonWrapper>
    );
}
