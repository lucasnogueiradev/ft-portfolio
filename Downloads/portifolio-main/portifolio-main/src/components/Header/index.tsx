import * as React from "react";
import "styled-components";
import { Toggle } from "../../Toggle";
import { Container } from "./styles";

import { useState } from "react";

import { useTheme } from "../hooks/theme";

export const Header: React.FC = () => {
  const { toggleTheme, theme } = useTheme();
  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === "dark" ? true : false
  );

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };
  return (
    <Container>
      <h1></h1>

      <div className="perfil">
        <Toggle checked={darkTheme} onChange={handleChangeTheme} />
        {/* <p>{user?.email}</p> */}
      </div>
    </Container>
  );
};
