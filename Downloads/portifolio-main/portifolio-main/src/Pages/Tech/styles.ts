import { motion } from "framer-motion";
import styled from "styled-components";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  key: number;
  variants: {
    hidden: { opacity: number; y: number };
    visible: { opacity: number; y: number };
  };
  initial: string;
  animate: string;
  transition: { duration: number; delay: number };
}
interface TechProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
}

export const Container = styled.div<TechProps>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  text-align: center;
  padding: 16px;
  flex-direction: column;
  display: flex;
  background: ${(props) => props.theme.colors.black};
  padding: 5rem 0 11rem 0;
  overflow: hidden;
  text-align: center;
  justify-content: center;
  transition: ease 0.5s;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-size: 2rem;
  margin-top: 20px;
  text-align: center;
  font-family: "Poppins", sans-serif;
`;

export const SubTitle = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-size: 1rem;
  text-align: center;
`;
export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: auto;
  gap: 16px;
  padding: 16px;
  font-family: "Poppins", sans-serif;
  overflow: hidden;
  transition: ease 0.5s;
`;

// Estilo para cada Card
export const Card = styled(motion.div)<CardProps>`
  display: flex;
  width: 200px;
  min-width: 200px;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  text-align: center;
  background: ${(props) => props.theme.colors.secondary};
  transition: transform 0.4s, background-color 0.3s, border 0.3s,
    box-shadow 0.3s;
  font-family: "Poppins", sans-serif;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.colors.info};

  &:hover {
    background: ${(props) => props.theme.colors.primary};
    transform: scale(1.1);
    border: 1px solid #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    .icon {
      color: ${(props) => props.theme.colors.white};
      transform: scale(1.1);
    }
    .title {
      color: ${(props) => props.theme.colors.white};
      transform: scale(1.1);
    }
  }

  .icon {
    font-size: 24px;
    color: ${(props) => props.theme.colors.info};
    margin-bottom: 8px;
    transition: transform 0.3s, background-color 0.3s, border 0.3s,
      box-shadow 0.3s;
    overflow: hidden;
  }

  .title {
    font-size: 16px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.info};
    transition: transform 0.4s, background-color 0.3s, border 0.3s,
      box-shadow 0.3s;
    overflow: hidden;
  }
`;
