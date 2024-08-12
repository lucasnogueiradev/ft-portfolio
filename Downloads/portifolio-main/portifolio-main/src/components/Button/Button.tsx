import React from "react";
import { StyledButton } from "./styles";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  size?: "small" | "medium" | "large";
  direction?: "left" | "right";
  backgroundColor?: "primary" | "secondary" | "onlytext" | "tertiary";
  color?: "primary" | "secondary";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  backgroundColor,
  size = "medium",
  loading = false,
  color,
  ...rest
}) => {
  return (
    <StyledButton
      {...rest}
      backgroundColor={backgroundColor}
      size={size}
      color={color}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
