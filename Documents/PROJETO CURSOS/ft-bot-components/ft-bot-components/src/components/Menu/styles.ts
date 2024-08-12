import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const moveToRight = keyframes`
0% {
 
  opacity: 0;
}
50%{
  opacity: 0;

}
100%{
  transition: opacity 3s linear 3s;
  opacity: 1;
}
  `;

export const Conainter = styled.div`
  text-decoration: none;
  overflow: hidden;
  display: flex;
  background: ${(props) => props.theme.colors.secondary};
  z-index: 9;
  height: 100vh;
  transition: all 0.5s;
  main {
    overflow-y: scroll;
    width: 100%;
    grid-area: AS;
    transition: all 0.5s;
    overflow-x: hidden;
  }
  .sc-kgTSHT {
    overflow: hidden;
    max-height: 100vh;
  }
  .slider {
    color: ${(props) => props.theme.colors.white};
    height: 100vh;
    background: ${(props) => props.theme.colors.primary};
    width: 15rem;
    transition: all 0.5s;
    z-index: 9;
  }

  .top_section {
    display: flex;
    margin-bottom: 1.9rem;
    align-items: center;
    justify-content: center;
    align-items: center;
    padding: 1.1rem 1rem;

    h1 {
      font-size: 1rem;
      font-family: "Roboto";
    }
  }

  .bars {
    cursor: pointer;
    display: flex;
    font-size: 1.5rem;

    padding-top: 1.7rem;
    padding-bottom: -1rem;
    align-items: center;
  }
  .link {
    display: flex;
    color: ${(props) => props.theme.colors.white};
    line-height: 1.15rem;
    font-weight: 500;
    padding: 0.4rem 0.4rem;
    gap: 0.6rem;
    text-decoration: none;
  }

  .active {
    color: ${(props) => props.theme.colors.white};
    font-weight: bold;
  }
  .icon,
  .link_text {
    font-size: 0.4rem;
    text-overflow: ellipsis;
    margin-left: 0.6rem;
  }
  .icon {
    color: #737786;
    font-size: 1rem;
    font-weight: 700;
  }
  .link:hover {
    color: green;
    transform: translate(2%);
    transition: all 0.4s;

    .submenu {
      width: 220px;
    }
  }

  .icon-submenu:hover {
    transform: translate(2%);
    transition: all 0.4s;
  }
  .title-submenu:hover {
    transform: translate(3%);
    transition: all 0.4s;
  }
  .title-submenu {
    margin-left: -4px;
  }
  .icon {
    &:hover {
      color: #d7d7d7;
      cursor: pointer;
      color: #fff;
      border-radius: 0.2rem;
    }
  }
`;
export const Submenu = styled.div`
  margin-top: 0.6rem;
  background: ${(props) => props.theme.colors.primary};
  padding-left: 1rem;
  width: 223px;
  margin-left: -3rem;
  left: 0;
  align-items: center;
  text-align: center;
  justify-content: center;
  text-decoration: none;
  .icon-submenu {
    margin-top: 2px;
  }
  &:hover {
    width: 220px;
  }
`;

export const Icon = styled.div`
  display: flex;
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.5;
  justify-content: first baseline;
  align-items: flex-start;
  margin-top: 1px;
  margin-left: 0.5rem;
  &:hover {
    color: #d7d7d7;
    cursor: pointer;
    color: green;
    border-radius: 0.2rem;
  }
`;
export const Name = styled.div`
  font-size: 1rem;
  animation: ${moveToRight} 0.6s;
  line-height: 1.45;
  font-family: "Roboto";
  font-weight: 500;
  margin-left: 0.2rem;
  color: ${(props) => props.theme.colors.font};
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: #fff;

    border-radius: 0.2rem;
  }
`;
export const DropdownLink = styled(Link)`
  font-size: 1rem;

  animation: ${moveToRight} 0.6s;
  font-size: 0.9rem;
  font-family: "Roboto";
  font-weight: 500;
  margin-left: 1.5rem;
  text-decoration: none;

  display: flex;

  color: ${(props) => props.theme.colors.font};
  line-height: 1.45;
  font-weight: 500;
  padding: 0.6rem 0.9rem;
  gap: 1rem;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.white};
    border-radius: 0.2rem;
  }
`;
