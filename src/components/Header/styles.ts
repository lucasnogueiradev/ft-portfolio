import styled from "styled-components";

export const Container = styled.section`
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  position: sticky;
  width: 100%;
  color: ${(props) => props.theme.colors.white};
  z-index: 101;
  height: 67px;
  top: 0;
  margin: 0;
  grid-area: MH;

  .perfil {
    float: right;
    display: flex;
    align-items: center;
    position: absolute;
    right: 2rem;
  }

  .button-perfil {
    border: none;
    background: transparent;
    font-size: 1.8rem;
    padding-left: 1rem;
  }
`;
