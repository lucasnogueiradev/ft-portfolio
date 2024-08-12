import { Container } from "./styles";
import React from "react";
import { Header } from "../Header";
import { Sliderbar } from "../Menu/index";
import { Content } from "../Content";

interface BaseLayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      <Sliderbar />
      <Content />
    </Container>
  );
};

export default Layout;
