import styled from "styled-components";

export const Container = styled.div`
  grid-area: CT;
  background: ${(props) => props.theme.colors.secondary};
  overflow: scroll;
`;
