import { Button as BootstrapButton } from "react-bootstrap";
import styled from "styled-components";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
}
export interface BVideoProps extends React.HTMLAttributes<HTMLButtonElement> {
  showAll?: boolean;
}

export const Layout = styled.div`
  background: ${(props) => props.theme.colors.black};
  width: 100%;
  display: flex;
  padding: 9rem 0 0 0;
  font-family: "Poppins", sans-serif;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 1rem;
  display: flex;
  width: 90%;
  height: auto;
  margin: 0 auto;
  flex-direction: column;
`;
export const Title = styled.div`
  color: ${(props) => props.theme.colors.info};
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  font-family: "Poppins", sans-serif;
  margin: 0px 20px 20px 0;
`;
export const VideoGrid = styled.div<BVideoProps>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  grid-auto-rows: minmax(200px, auto);
  max-height: ${({ showAll }) => (showAll ? "100%" : "calc(200px * 1 + 5rem)")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  padding: 1rem;
`;

export const Loading = styled.p`
  text-align: center;
  font-size: 1.2rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  flex-direction: column;
  margin: auto;
  text-align: center;
`;
export const Error = styled.p`
  color: red;
  text-align: center;
  font-size: 1.2rem;
`;

export const LoadMoreButton = styled.button<ButtonProps>`
  display: block;
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
`;

export const StyledButton = styled(BootstrapButton)`
  background-color: #007bff;
  border: none;

  &:hover {
    background-color: #0056b3;
  }
`;
