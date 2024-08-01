import styled from "styled-components";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
}

export interface InputSearchProps
  extends React.HTMLAttributes<HTMLInputElement> {
  show: boolean;
  value: string;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  .icon {
    color: ${(props) => props.theme.colors.info};
  }
`;

// Estilo do botão de pesquisa
export const ButtonSearch = styled.button.attrs({
  type: "button", // Define o tipo do botão
  "aria-label": "Pesquisar", // Adiciona um rótulo acessível
})<ButtonProps>`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #121d2f;
  }
`;

// Estilo do campo de entrada de pesquisa
export const InputSearch = styled.input.attrs({
  type: "text",
  placeholder: "Buscar...",
})<InputSearchProps>`
  border: none;
  background: #121d2f;
  outline: none;
  color: ${(props) => props.theme.colors.white};
  padding: 8px;
  flex: 1;
  font-size: 16px;
  border-radius: 4px;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  opacity: ${(props) => (props.show ? 1 : 0)};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};

  &::placeholder {
    color: #888;
  }
`;
