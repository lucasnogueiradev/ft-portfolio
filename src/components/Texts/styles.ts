import styled from "styled-components";
import { SubTitleProps, TextProps, TitleProps } from "./Texts";

export const Title = styled.h2<TitleProps>`
  color: ${(props) => props.theme.colors.white};

  font-size: ${({ size }) => {
    switch (size) {
      case "small":
        return "1rem";
      case "large":
        return "3rem";
      default:
        return "1.3rem";
    }
  }};
  font-weight: 600;
  margin-top: 20px;
  padding: 4px;
  display: flex;
  overflow: hidden; /* Evita que o conteúdo ultrapasse os limites do contêiner */
  word-wrap: break-word; /* Quebra de palavra para palavras longas */
  @media (max-width: 999px) {
    width: 100%;
    max-width: 100%;
    text-align: center;
    justify-content: center;
    font-size: ${({ size }) => {
      switch (size) {
        case "small":
          return "1rem";
        case "large":
          return "2rem";
        default:
          return "1.3rem";
      }
    }};
    color: aliceblue;
  }
`;

export const SubTitle = styled.h4<SubTitleProps>`
  color: ${(props) => props.theme.colors.info};
  font-size: 1.5rem;
  position: relative;
  margin-top: 2rem;
  display: inline-block; /* Ou block, dependendo do layout */
  padding-bottom: 8px; /* Adiciona espaço para a borda inferior */
  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 10px;
    width: 4rem; /* Dois terços da largura total */
    border-bottom: 4px solid ${(props) => props.theme.colors.info};
  }
  @media (max-width: 999px) {
    text-align: center;
    margin: auto;
  }
`;

export const Text = styled.p<TextProps>`
  color: ${(props) => props.theme.colors.white};
  font-size: ${({ size }) => {
    switch (size) {
      case "small":
        return "1.2rem";
      case "large":
        return "2rem";
      default:
        return "1.3rem";
    }
  }};
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  @media (max-width: 999px) {
    text-align: center;
    margin: auto;
  }
`;
