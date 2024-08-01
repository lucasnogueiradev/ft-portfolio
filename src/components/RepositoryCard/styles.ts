import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; /* Adiciona wrap para múltiplas linhas se necessário */
  gap: 1rem; /* Espaçamento entre os cards */
`;

export const Card = styled(motion.div)`
  display: flex;
  flex-direction: column; /* Organiza o conteúdo em coluna */
  flex: 1 1 calc(33.333% - 16px); /* Ajusta a largura dos cards */
  box-sizing: border-box;
  width: 400px;
  min-width: 400px;
  padding: 16px;
  cursor: pointer;
  border-radius: 14px;
  background: ${(props) => props.theme.colors.secondary};
  color: #fff; /* Cor do texto */
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  border: 1px solid ${(props) => props.theme.colors.info};
`;

export const Name = styled.h2`
  font-size: 1.5em;
  color: #0852ad;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  margin: 0 0 8px 0;
`;

export const Description = styled.p`
  color: #586069;
  margin: 0 0 16px 0;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between; /* Distribui espaço horizontalmente entre os itens */
  margin-top: auto; /* Empurra DetailSpace para a parte inferior do Card */
  padding: 0.5rem;
  padding-top: 1rem;
  flex-direction: column;
`;
export const Detail = styled.div`
  font-size: 0.875em;
  color: #586069;
  align-items: center;
  display: flex;
`;

export const Tags = styled.div`
  display: flex;
  justify-content: space-between; /* Distribui espaço horizontalmente entre os itens */
  margin-top: auto; /* Empurra DetailSpace para a parte inferior do Card */
  padding: 0.5rem;
  padding-top: 1rem;
`;

export const Tag = styled.span`
  display: inline-block;
  background-color: #121d2f;
  color: #0852ad;
  cursor: pointer;
  font-weight: 600;
  border-radius: 12px;
  padding: 4px 8px;
  margin-right: 8px;
  font-size: 0.875em;
  transition: transform 0.3s ease;

  :hover {
    animation: ease 0.3s;
    transform: scale(1.02);
  }
`;

export const DetailSpace = styled.div`
  display: flex;
  justify-content: space-between; /* Distribui espaço horizontalmente entre os itens */
  margin-top: auto; /* Empurra DetailSpace para a parte inferior do Card */
  padding: 0.5rem;
  padding-top: 1rem; /* Exemplo de padding, ajuste conforme necessário */
  /* Adiciona fundo para visualização */
`;
