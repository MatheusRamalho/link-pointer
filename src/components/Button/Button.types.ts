import { ButtonHTMLAttributes, ReactNode } from "react";

// Utilizando o & no final e adicionando chaves
// Indica que além de receber todas as propriedades padrão do html (ButtonHTMLAttributes<HTMLButtonElement>)
// Vai receber mais algumas propriedades informadas.
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean,
    isCircle?: boolean,
    children: ReactNode,
};
