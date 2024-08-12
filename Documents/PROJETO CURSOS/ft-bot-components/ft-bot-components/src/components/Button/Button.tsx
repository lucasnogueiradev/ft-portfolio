import React from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  size?: "small" | "medium" | "large";
  type?: "button" | "submit";
  color?: "primary" | "secondary";
  disabled?: boolean;
}

import * as S from "./styles";

const Button = ({
  children,
  size = "medium",
  color = "primary",
  type = "button",
  disabled,
  onClick,
  loading = false,
  ...rest
}: ButtonProps) => {
  return (
    <S.Button type="button" disabled={loading} {...rest}>
      {loading ? "Carregando..." : children}
    </S.Button>
  );
};
export default Button;
