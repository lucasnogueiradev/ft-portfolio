import { Navbar as BootstrapNavbar } from "react-bootstrap";
import styled from "styled-components";

export const ContainerMenu = styled.div`
  /* background: ${(props) => props.theme.colors.primary}; */
  justify-content: center;
  width: 100%;
  margin: auto;
  align-items: center;
  display: flex;

  font-family: "Poppins", sans-serif;

  .container-menu {
    margin: 0rem;
    z-index: 2;
    float: right;
    width: 100%;
    transition: all 0.5s;
  }

  .navbar-nav {
    width: 100%;
    float: right;
    transition: all 0.5s;
    right: 0;

    /* position: relative; */
    gap: 1.1rem;
    justify-content: end;
    z-index: 4;
  }

  .container-logo {
    background: #ffffff;
    margin: auto;
    align-items: center;
    margin-top: 19px;
  }
  .navbar-collapse {
    float: right;
    text-align: end;
    width: 50%;
    right: 3rem;
    position: absolute;
    justify-content: end;
    align-items: flex-end;
  }
  .me-auto .submenu {
    color: ${(props) => props.theme.colors.font};
    transition: all 0.5s;
  }
  #basic-navbar-nav {
    color: ${(props) => props.theme.colors.font};
    justify-content: end;
    text-align: center;
    transition: all 0.5s;
    align-items: flex-end;
  }
  .contato,
  .sobre,
  .home,
  .tipo,
  .disparo {
    font-weight: 500;
    list-style: 1rem;
    font-family: "Poppins", sans-serif;
    font-size: 1.1rem;
    border: 0px;
    padding: 0px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: 0.3s;
    white-space: nowrap;
  }
  .tipo {
    padding: -1.2rem;
    line-height: 1.51;
  }

  .home:hover {
    color: ${(props) => props.theme.colors.info};
    font-weight: bold;
    border-radius: 1px;
  }
  /* .sobre:hover {
    color: ${(props) => props.theme.colors.warning};
    border-bottom: solid 3px ${(props) => props.theme.colors.warning};
    border-radius: 1px;
  }

  .contato:hover {
    color: ${(props) => props.theme.colors.warning};
    display: flex;
    border-bottom: solid 3px ${(props) => props.theme.colors.warning};
    border-radius: 1px;
  }
  .disparo:hover {
    color: ${(props) => props.theme.colors.warning};
    border-bottom: solid 3px ${(props) => props.theme.colors.warning};
    border-radius: 1px;
  } */

  @media (max-width: 999px) {
    .custom-shape-divider-bottom-1676252075 {
      display: none;
    }
    .sc-jrcTuL {
      background: #f3f4f5;
    }
    .sc-ftTHYK {
      z-index: 9;
      margin-top: 4rem;
    }
  }
  @media (min-width: 768px) {
    .shapedividers_com-2202::before {
      background-size: 100% 90px;
      background-position: 50% 0%;
    }
  }
  @media (max-width: 999px) {
    .navbar {
      padding: 0;

      margin: 0;
      /* overflow: hidden; */
    }
    .navbar-toggler {
      margin: 10px 0;

      float: right;
      color: #fff;
    }
    .navbar-toggler span {
      color: #fff;
    }
  }
  @media (max-width: 999px) {
    .sc-eDWCr {
      background: #f3f4f5;
    }
    .carousel {
      background-image: linear-gradient(90deg, #836fff, #4169e1, #1e90ff);
      height: 24rem;
    }
    .container-slider-geral {
      height: 10rem;
      background: #f3f4f5;
    }
  }
  @media (max-width: 999px) {
    .logo-bot {
      display: none;
    }
    .sc-eDWCr {
      background: #f3f4f5;
    }
    .custom-shape-divider-bottom-1676252075 {
      display: none;
    }

    .container-menu {
      width: 100%;
      padding-bottom: 10px;
      border-radius: none;
    }

    .button-modal {
      width: 16rem;
      display: block;
      border-radius: 1.6rem;
      background: #ff9900;
      color: #fff;

      z-index: 99999;
      margin: auto;
      top: 0rem;
      left: 40%;
      transform: translate(-35%);
      position: absolute;
      /* justify-content: center; */
      text-align: center;
      /* align-items: center; */
      cursor: pointer;
      transition: all 0.4s;
      font-family: "Poppins", sans-serif;
    }

    .button-mobile {
      display: none;
    }
    .dropdown-menu {
      margin-bottom: 0rem;
    }
  }
  @media (max-width: 999px) {
    .container-menu {
      display: none;
    }
    .navbar {
      .containter-logo {
      }
      margin-top: 1rem;
    }
  }
`;

export const StyledNavbar = styled(BootstrapNavbar)`
  position: sticky;
  top: 0rem;
  width: 95%;
  border-radius: 10px;
  z-index: 99999;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${(props) => props.theme.colors.primary};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 20px;
  margin-top: 2rem;
  .navbar-brand,
  .navbar-nav .nav-link {
    color: ${(props) => props.theme.colors.white};
    :hover {
      color: ${(props) => props.theme.colors.info};
    }
    :active {
      color: ${(props) => props.theme.colors.info};
    }
  }
`;

export const ContainerToogle = styled.section``;
