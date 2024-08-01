import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 70px auto;
  width: 100%;

  grid-template-areas:
    "AS MH"
    "AS CT";
  height: 80vh;
`;
