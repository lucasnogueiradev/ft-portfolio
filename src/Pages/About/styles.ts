import styled from "styled-components";

export interface AboutProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
}
export const Container = styled.section.attrs<AboutProps>(({ id }) => ({
  id: id,
}))<AboutProps>`
  background: ${(props) => props.theme.colors.black};
  width: 100%;
  display: flex;
  transition: ease 0.5s;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 98%;
    height: auto;
    justify-content: center;
  }
`;

export const Content = styled.div`
  width: 90%;
  display: flex;
  margin: auto;
  transition: ease 0.5s;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 90%;
    justify-content: center;
  }
`;
export const ContentPhoto = styled.div`
  border-radius: 35%;
  margin-top: 7.5rem;
  margin-left: 6rem;
  padding: 2rem;
  height: 50%;
  transition: ease 0.5s;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    margin-left: 0;
    width: 100%;
    text-align: center;
    justify-content: center;
    display: flex;
    margin: 2rem auto 0;
    padding: 0.2rem;
    height: auto;
  }
`;
export const Aside = styled.aside`
  border-radius: 50%;
  width: 200px;
  height: 180px;
  background: #4891e0;
  justify-content: center;
  margin: auto;
  display: flex;
  transition: ease 0.5s;
  @media (max-width: 1200px) {
    text-align: center;
    justify-content: center;
    display: flex;
    margin: auto;
  }
`;
export const ProfilePhoto = styled.img.attrs({
  src: "lucasAbout.png",
  alt: "Meu Perfil",
  width: 200,
  height: 180,
})`
  width: 100%;
  border-radius: 50%;
`;
export const ContentText = styled.div`
  width: 65%;
  height: 50%;
  margin-top: 1.5rem;
  color: ${(props) => props.theme.colors.secondary};
  padding: 2rem;
  transition: ease 0.5s;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    justify-content: center;
    display: flex;
    height: auto;

    padding: 1.5rem;
  }
`;
export const Texts = styled.span`
  margin-left: 5rem;
  padding: 1rem 1rem 1rem 3rem;
  display: flex;
  flex-direction: column;
  transition: ease 0.5s;
  @media (max-width: 1200px) {
    margin-left: 0rem;
    padding: 1rem 0;
    text-align: center;
    justify-content: center;
    display: flex;
    margin: auto;
  }
`;
