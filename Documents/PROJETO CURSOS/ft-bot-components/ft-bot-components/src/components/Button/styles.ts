import styled, { css } from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 2rem;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  color: #007bff;
  font-size: 1.7rem;
  color: #fff;
  height: 4.5rem;
  border: 0;
  padding: 1rem;
  margin: 2rem;
  border-radius: 8px;
  font-weight: 500;
  background-color: ${(props) => props.theme.colors.primary};
  &:disabled {
    opacity: 0.5;
  }
`;
