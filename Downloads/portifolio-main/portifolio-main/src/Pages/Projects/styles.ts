import styled from "styled-components";

interface ArrowButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  direction: string;
}
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  ref: React.RefObject<HTMLDivElement>;
}

export interface ProjectsProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
}
export const Container = styled.section<ProjectsProps>`
  background: ${(props) => props.theme.colors.black};
  width: 100%;
  display: flex;
  padding: 9rem 0 0 0;
  font-family: "Poppins", sans-serif;
`;

export const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  background: transparent;
  padding: 1rem 0.5rem;
  gap: 16px; /* Espaçamento entre os cards */
  ::-webkit-scrollbar {
    height: 14px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #0d1120;
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: #0d1117;
    border-radius: 10px;
  }
`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Arrow = styled.button<ArrowButtonProps>`
  top: 50%;
  color: white;
  border: none;
  background: transparent;

  padding: 10px;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }
`;

export const Content = styled.div`
  width: 90%;
  display: flex;
  margin: auto;
  flex-direction: column;
  text-align: center;
`;

export const Title = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-size: 2rem;
  margin-top: 20px;
  text-align: center;
`;
export const Cards = styled.div`
  display: flex;
  margin-top: 2.5rem;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 93%;
  margin: auto;
`;
