import { ThemeProvider } from "styled-components";
// import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { useTheme } from "./components/hooks/theme";

import { useState } from "react";
import Modal from "react-modal";
import { About } from "./Pages/About";
import { Banner } from "./Pages/Banner";
import { Footer } from "./Pages/Footer";
import { Projects } from "./Pages/Projects";
import { Technologies } from "./Pages/Tech/Index";
import { UserProps } from "./Types/user";

Modal.setAppElement("#root");

function App() {
  const { theme } = useTheme();
  const [ismodalopen, SetIsModalOpen] = useState(true);
  const [user, setUser] = useState<UserProps | null>(null);

  function handleOpenModal() {
    SetIsModalOpen(true);
  }

  function handleCloseModal() {
    SetIsModalOpen(false);
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Banner />

        <About />
        <Projects />
        <Technologies />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
