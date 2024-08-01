import styled from "styled-components";
import { ButtonProps } from "./Button";

export const Container = styled.button`
  width: 100%;
  margin: 7px 0;
  padding: 10px;
  border-radius: 5px;

  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.warning};

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

export const StyledButton = styled.button<ButtonProps>`
  width: 8rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  /* font-size: ${({ size }) => {
    switch (size) {
      case "small":
        return "1rem";
      case "large":
        return "2rem";
      default:
        return "1.3rem";
    }
  }}; */
  font-family: "Poppins", sans-serif;
  color: ${({ color }) =>
    (color === "primary" && ((props) => props.theme.colors.white)) ||
    (color === "secondary" && ((props) => props.theme.colors.info))};
  border: 0;
  padding: 2rem auto;
  text-align: center;
  align-items: center;
  justify-content: center;
  /* margin: 1rem auto; */
  display: flex;
  border-radius: 2.1rem;
  background: ${({ backgroundColor }) =>
    (backgroundColor === "primary" &&
      ((props) => props.theme.colors.warning)) ||
    (backgroundColor === "secondary" &&
      ((props) => props.theme.colors.secondary)) ||
    (backgroundColor === "tertiary" &&
      ((props) => props.theme.colors.tertiary)) ||
    (backgroundColor === "onlytext" && "transparent")};

  &:disabled {
    opacity: 0.5;
  }
`;
