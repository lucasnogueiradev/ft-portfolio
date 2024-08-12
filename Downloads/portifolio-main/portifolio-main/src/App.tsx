import { ThemeProvider } from "styled-components";
// import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { useTheme } from "./components/hooks/theme";

import { useEffect } from "react";
import Modal from "react-modal";
import { About } from "./Pages/About";
import { Banner } from "./Pages/Banner";
import MainLayout from "./Pages/Contribucion/Contribucion";
import { Footer } from "./Pages/Footer";
import { MainProjects } from "./Pages/MainProjects";
import { Projects } from "./Pages/Projects";
import { Technologies } from "./Pages/Tech/Index";

Modal.setAppElement("#root");

function App() {
  const { theme } = useTheme();
  useEffect(() => {
    console.log("API_KEY:", process.env.REACT_APP_API_KEY);
    console.log("PLAYLIST_ID:", process.env.REACT_APP_PLAYLIST_ID);
  }, []);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Banner />

        <About />
        <MainProjects />
        <MainLayout />
        <Projects />
        <Technologies />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
