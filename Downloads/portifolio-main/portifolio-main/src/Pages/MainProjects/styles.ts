import {
  Button as BootstrapButton,
  Modal as BootstrapModal,
} from "react-bootstrap";
import styled, { keyframes } from "styled-components";

interface ArrowButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  direction: string;
}
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  ref: React.RefObject<HTMLDivElement>;
}

export interface ProjectsProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
}

export interface ImgProps extends React.HTMLAttributes<HTMLElement> {
  src: string;
  alt: string;
}
export const Container = styled.section<ProjectsProps>`
  background: ${(props) => props.theme.colors.black};
  width: 100%;
  display: flex;
  padding: 9rem 0 0 0;
  font-family: "Poppins", sans-serif;
`;

export const Card = styled.div<CardProps>`
  position: relative;
  height: 30rem;
  overflow: hidden;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: url("image.jpg") no-repeat center center; /* Imagem de fundo */
  background-size: cover; /* Ajusta o tamanho da imagem de fundo */

  /* Adiciona a sobreposição de cor semitransparente */
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7); /* Cor semitransparente */
    z-index: 2; /* Garante que o fundo esteja acima da imagem, mas abaixo do conteúdo */
  }
  yarn 

  /* Ajusta o conteúdo para ficar acima da sobreposição */
  .card-content {
    position: relative;
    z-index: 2; /* Garante que o conteúdo esteja acima da sobreposição */
    color: #fff;
    text-align: center;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  /* Estiliza o título fixo no meio */
  .card-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
    z-index: 2;
    @media (max-width: 990px) {
      font-size: 1.5rem;
    }
  }
`;

export const ContentCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px; /* Espaçamento entre os cards */
  .img {
    z-index: 1;
  }
  .button {
    position: absolute;
    z-index: 2;
    top: 70%;
  }
  @media (max-width: 998px) {
    grid-template-columns: 1fr; /* Muda para uma coluna em telas menores */
  }
  @media (max-width: 480px) {
    .button {
      top: 80%; /* Ajusta a posição do botão em telas muito pequenas */
    }
  }
`;

const slideInFromRight = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;
// Modal estilizado
export const CustomModal = styled(BootstrapModal)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
  padding: 0;

  background: rgba(0, 0, 0, 0.5); /* Fundo escuro com opacidade */
  animation: ${slideInFromRight} 0.5s ease-out; /* Animação de deslizar */

  .modal-dialog {
    width: 80%;
    max-width: 80%; /* Largura máxima do modal */
    display: flex;
    height: 80vh;
    max-height: 80vh;
    align-items: center; /* Centraliza verticalmente */
    justify-content: center; /* Centraliza horizontalmente */
    min-height: 100vh; /* Garante que o modal use toda a altura da viewport */
    margin: 0; /* Remove a margem padrão */
    padding: 0; /* Remove o padding padrão */
    margin: auto;

    flex-direction: row;
    animation: ${slideInFromRight} 0.5s ease-out; /* Aplica a animação */
  }

  .modal-content {
    width: 100%;
    height: 90vh;
    border-radius: 8px; /* Arredonda os cantos do modal */
    border: none; /* Remove a borda padrão */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Adiciona sombra ao modal */
    background: ${(props) => props.theme.colors.primary};
  }

  .modal-header {
    border-bottom: 1px solid #000; /* Adiciona uma linha inferior ao cabeçalho */
    background-color: #000; /* Ajuste a cor de fundo do cabeçalho */
    padding: 1rem; /* Ajuste o padding conforme necessário */
    background: ${(props) => props.theme.colors.primary};
  }

  .modal-title {
    color: ${(props) => props.theme.colors.info};
    font-size: 1.5rem;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
  }

  .modal-body {
    display: flex;
    width: 100%;
  }

  .modal-footer {
    border-top: 1px solid #000; /* Adiciona uma linha superior ao rodapé */
    padding: 1rem; /* Ajuste o padding do rodapé */
  }
`;

// Botão estilizado
export const ModalButton = styled(BootstrapButton)`
  background-color: #007bff;
  border: none;

  &:hover {
    background-color: #0056b3;
  }
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
  color: ${(props) => props.theme.colors.info};
  font-size: 1.5rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  margin: 0px 20px 20px 0;
`;
export const Cards = styled.div`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 93%;
  margin: auto;
`;

export const StyledButton = styled(BootstrapButton)`
  position: absolute; /* Posiciona o botão sobre a imagem */
  top: 50%; /* Centraliza verticalmente */
  left: 50%; /* Centraliza horizontalmente */
  transform: translate(
    -50%,
    -50%
  ); /* Ajusta a posição para centralizar exatamente */
  z-index: 10; /* Garante que o botão fique acima da imagem */
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;

  &:hover {
    background-color: #0056b3;
  }
`;

// Imagem dentro do card
// export const CardImage = styled.img`

export const CardImage = styled.img<ImgProps>`
  width: 100%; /* Ocupa toda a largura do card */
  max-width: 100%; /* Não ultrapassa a largura do card */
  height: 30rem; /* Mantém a proporção da imagem */
  object-fit: cover;
  border-radius: 8px;
  position: relative; /* Para garantir que a imagem não se sobreponha ao botão */
  z-index: 1; /* Coloca a imagem atrás do botão */

  object-fit: cover;
`;

export const VideoBlock = styled.div`
  flex: 1; /* Faz com que o bloco de vídeo ocupe o espaço disponível */
  max-width: 50%;
  width: 50%; /* Garante que o vídeo não ultrapasse o limite */
  height: auto; /* Ajusta a altura automaticamente */

  padding: 1rem;
  display: flex;
  video {
    margin: auto;
    width: 90%; /* Ajusta a largura do vídeo ao bloco */
    border-radius: 8px; /* Adiciona bordas arredondadas ao vídeo */
  }
`;

// Bloco de descrição estilizado
export const DescriptionBlock = styled.div`
  padding: 0;
  margin: 0;
  height: 100%;
  /* Faz com que o bloco de descrição ocupe o espaço disponível */
  max-width: 50%; /* Garante que o bloco não ultrapasse o limite */
  width: 50%;
  max-height: 80vh; /* Limita a altura máxima para não ultrapassar a altura da tela */
  overflow-y: auto; /* Adiciona rolagem vertical se o conteúdo exceder a altura */
  padding: 1rem;
  box-sizing: border-box; /* Inclui o padding na largura e altura total */
  h5 {
    color: #fff; /* Cor do título da descrição */
    margin-bottom: 1rem;
  }

  p {
    color: #ccc; /* Cor do texto da descrição */
    line-height: 1.6; /* Melhora a legibilidade */
  }
  .buttons {
    display: flex;
    gap: 1rem;
    margin-top: 30px;
  }
`;

// Estilo para subtítulos
export const SubTitle = styled.h2`
  margin-top: 20px;
  color: #007bff;
`;

// Estilo para listas
export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: #ccc;
`;

// Estilo para itens da lista
export const ListItem = styled.li`
  margin-bottom: 10px;
  strong {
    color: ${(props) => props.theme.colors.info};
  }
`;

// Estilo para texto destacado
export const Highlight = styled.span`
  color: #007bff;
  font-weight: bold;
`;
