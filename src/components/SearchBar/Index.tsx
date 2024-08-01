import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import * as S from "./styles";

interface BarraPesquisaProps {
  onSearchClick?: () => void;
  onSearch: (query: string) => void;
}

export function BarraPesquisa({ onSearchClick, onSearch }: BarraPesquisaProps) {
  const [isInputVisible, setInputVisible] = useState(false);
  const [query, setQuery] = useState("");

  // Manipulador de mudança de entrada
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setQuery(newValue);
    onSearch(newValue); // Chama a função de pesquisa a cada mudança
  };

  // Alterna a visibilidade do campo de entrada
  const toggleInputVisibility = () => {
    setInputVisible((prevState) => !prevState);
    if (onSearchClick) {
      onSearchClick(); // Chama a função passada como propriedade, se fornecida
    }
  };

  const handleSearch = () => {
    onSearch(query);
    setInputVisible(false); // Oculta o input após a pesquisa
  };
  return (
    <S.SearchBox>
      <S.InputSearch
        show={isInputVisible}
        value={query}
        onChange={handleInputChange}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <S.ButtonSearch onClick={toggleInputVisibility}>
        <FaSearch size={20} className="icon" />
      </S.ButtonSearch>
    </S.SearchBox>
  );
}

export default BarraPesquisa;
