import { BiComment, BiCommentAdd } from "react-icons/bi";
import {
  FiChevronDown,
  FiMessageSquare,
  FiImage,
  FiFolder,
  FiChevronUp,
} from "react-icons/fi";

import { RiArrowLeftSLine } from "react-icons/ri";
import { TiFlowChildren } from "react-icons/ti";
import { BsWhatsapp } from "react-icons/bs";
import { TbUsers, TbDoorExit } from "react-icons/tb";
import { MdOutlinePermMedia } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Conainter, Submenu, Icon, Name, DropdownLink } from "./styles";
import { Header } from "../Header";

export const Sliderbar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  const menuItem = [
    {
      path: "/fluxograma",
      name: "fluxograma",
      icon: <BsWhatsapp />,
    },
    {
      path: "#",
      name: "Cadastrar ",
      icon: <BiCommentAdd />,
      iconClosed: (
        <FiChevronDown
          style={{ marginBottom: "-0.2rem", marginLeft: "5.5rem" }}
        />
      ),
      iconOpened: (
        <FiChevronUp
          style={{
            color: "#6a6d7a",
            marginBottom: "-0.2rem",
            marginLeft: "5.5rem",
            fontSize: "1rem",
          }}
        />
      ),

      subNav: [
        {
          name: "Cadastrar Saudacao",
          path: "/saudacao",
          // icon: <FiMessageSquare />,
        },
        {
          name: "Cadastrar botões",
          path: "/buttons",
          // icon: <FiMessageSquare />,
        },
        {
          name: "Cadastrar Categoria",
          path: "/category",
          // icon: <FiMessageSquare />,
        },
        {
          name: "Cadastrar Produtos",
          path: "/Products",
          // icon: <FiImage />,
        },
        {
          name: "Produtos",
          path: "/arquivo",
          // icon: <FiFolder />,
        },
      ],
    },
    {
      path: "/diagrama",
      name: "Acessar fluxograma",
      icon: <TiFlowChildren />,
    },
    {
      path: "/home",
      name: "Upload mídia",
      icon: <MdOutlinePermMedia />,
    },
    {
      path: "/entrar",
      name: "sair",
      icon: <TbDoorExit />,
    },
  ];

  return (
    <Conainter style={{ zIndex: "5" }}>
      <div style={{ width: isOpen ? "15rem" : "3rem" }} className="slider">
        <div className="top_section">
          <img
            src="logoAtendProBar.png"
            style={{
              display: isOpen ? "block" : "none",
              paddingLeft: "1rem",
            }}
            width={180}
            alt=""
          />

          <div
            style={{
              marginLeft: isOpen ? "1.6rem" : "-0.3rem",
              marginTop: "-1.7rem",
            }}
            className="bars"
          >
            {isOpen ? (
              <RiArrowLeftSLine
                style={{
                  marginLeft: isOpen ? "-1rem" : "1.6rem",
                  fontSize: "2rem",
                }}
                onClick={toggle}
              />
            ) : (
              <FaBars
                style={{
                  marginLeft: isOpen ? "-4.6rem" : "0.3rem",
                  padding: "0.24rem",
                }}
                onClick={toggle}
              />
            )}
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClasseName="active"
          >
            <Icon
              className="icon"
              style={{
                fontWeigt: "900",
                fontSize: isOpen ? "1.2rem" : "1.5rem",
                marginTop: isOpen ? "" : "1rem",
                marginLeft: isOpen ? "" : "5px",
                fontWeight: "bold",
                lineHeight: "5.45",
              }}
            >
              {item.icon}
            </Icon>
            <Name
              style={{
                opacity: "1",
                display: isOpen ? "block" : "none",
              }}
              onClick={item.subNav && showSubnav}
            >
              {item.name}
              {item.subNav && subnav
                ? item.iconOpened
                : item.subNav
                ? item.iconClosed
                : null}
              <Submenu className="submenu">
                {subnav &&
                  item.subNav?.map((item, subindex) => (
                    <DropdownLink to={item.path} key={subindex}>
                      <div className="icon-submenu">{item.icon}</div>
                      <div className="title-submenu"> {item.name}</div>
                    </DropdownLink>
                  ))}
              </Submenu>
            </Name>
          </NavLink>
        ))}
      </div>
      <main>
        <Header />
        {children}
      </main>
    </Conainter>
  );
};
