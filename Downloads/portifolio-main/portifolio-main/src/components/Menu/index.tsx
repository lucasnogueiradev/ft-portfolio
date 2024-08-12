import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Toggle } from "../../Toggle";
import { useTheme } from "../hooks/theme";
import { ContainerMenu, StyledNavbar } from "./styles";

export function Sliderbar() {
  const { toggleTheme, theme } = useTheme();
  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === "dark" ? true : false
  );

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };
  return (
    <ContainerMenu>
      <StyledNavbar expand="lg">
        <div className="containter-logo" style={{ marginTop: "10px" }}>
          <Toggle checked={darkTheme} onChange={handleChangeTheme} />
        </div>
        <Container className="container-menu">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="navbar-collapse collapse"
          >
            <Nav className="me-auto">
              <Nav.Link href="#home" className="home">
                início
              </Nav.Link>
              <Nav.Link href="#link" className="sobre">
                Sobre mim
              </Nav.Link>

              <Nav.Link href="#projects" className="sobre">
                Projetos
              </Nav.Link>
              <Nav.Link href="#technologies" className="sobre">
                Tecnologias
              </Nav.Link>

              <Nav.Link
                href="https://api.whatsapp.com/send?phone=62994719784&text=Ol%C3%A1%2C+Lucas%21+Vim+do+seu+portif%C3%B3lio."
                className="contato"
              >
                Contato
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </StyledNavbar>
    </ContainerMenu>
  );
}
