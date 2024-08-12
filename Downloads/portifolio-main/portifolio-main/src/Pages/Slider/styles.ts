import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  height: 100vh;
  @media (max-width: 999px) {
    display: flex;
    flex-direction: column;
    height: auto;
    margin: 2rem auto;
    padding: 0.2em;
    width: 90%;
  }
`;

export const ContentPhoto = styled.div`
  width: 45%;

  @media (max-width: 999px) {
    display: none;
  }
`;

export const ProfilePhoto = styled.img.attrs({
  src: "9720029.webp",
  alt: "Meu Perfil",
  width: 300,
})`
  border-radius: 50%;
  margin: auto;
  justify-content: center;
  align-items: center;
  display: flex;
  @media (max-width: 999px) {
    .img-mob {
      display: none;
    }
  }
`;

export const ContentText = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  transition: ease 0.5s;
  @media (max-width: 999px) {
    width: 100%;
    text-align: center;
    margin: auto;
  }
`;

export const Texts = styled.span`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 400;
  text-align: start;
  transition: ease 0.5s;
  @media (max-width: 999px) {
    text-align: center;
    margin: auto;
  }
`;

export const Icons = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-left: 2rem;
  gap: 2rem;
  align-items: center;
  display: flex;
  justify-content: start;
  margin-right: 5rem;
  .icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.info};
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
      background: ${(props) => props.theme.colors.warning};
    }
    a {
      padding: 1.5rem;
      border-radius: 50%;
    }
    svg {
      color: ${(props) => props.theme.colors.white};
      font-size: 2rem;
    }
    .icon-link {
      display: flex;
      margin: 1rem;
    }
  }
  transition: ease 0.5s;
  @media (max-width: 999px) {
    width: 90%;
    background: ${(props) => props.theme.colors.secondary};
    border-radius: 1rem;
    text-align: center;
    justify-content: center;
    margin: 2rem auto;
  }
`;

export const Content = styled.div`
  width: 90%;
  flex-direction: row;
  display: flex;
  height: auto;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 100vh;
  transition: ease 0.5s;
  @media (max-width: 999px) {
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 6rem;
    width: 98%;
    height: auto;
    justify-content: center;
  }
`;
