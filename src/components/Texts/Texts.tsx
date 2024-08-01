import React from "react";
import * as S from "./styles";

export interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: React.ReactNode;
  size?: "small" | "medium" | "large";
}

export interface SubTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: React.ReactNode;
}

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text?: React.ReactNode;
  size?: "small" | "medium" | "large";
}

export const Title: React.FC<TitleProps> = ({ text, size }) => {
  return <S.Title size={size}>{text}</S.Title>;
};
export const SubTitle: React.FC<SubTitleProps> = ({ text }) => {
  return <S.SubTitle>{text}</S.SubTitle>;
};

export const Text: React.FC<TextProps> = ({ text, size }) => {
  return <S.Text size={size}>{text}</S.Text>;
};
