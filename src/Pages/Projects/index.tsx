import { formatDistanceToNow, parseISO } from "date-fns";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import RepositoryCard from "../../components/RepositoryCard/index";
import BarraPesquisa from "../../components/SearchBar/Index";
import { SubTitle, Text } from "../../components/Texts/Texts";
import { apiGitHub } from "../../services/apollo";
import { RepositoryProps } from "../../Types/user";
import * as S from "./styles";

export function Projects() {
  // Estado para armazenar todos os repositórios e filtragens específicas
  const [repository, setRepository] = useState<RepositoryProps[]>([]);
  const [filteredHighlights, setFilteredHighlights] = useState<
    RepositoryProps[]
  >([]);
  const [filteredFrontEnd, setFilteredFrontEnd] = useState<RepositoryProps[]>(
    []
  );
  const [filteredBackEnd, setFilteredBackEnd] = useState<RepositoryProps[]>([]);
  const [filteredMobile, setFilteredMobile] = useState<RepositoryProps[]>([]);

  // Refs separados para cada contêiner de cartões
  const highlightsRef = useRef<HTMLDivElement>(null);
  const frontEndRef = useRef<HTMLDivElement>(null);
  const backEndRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  // Função assíncrona para buscar repositórios da API do GitHub
  async function getRepositories() {
    try {
      const response = await apiGitHub.get("/users/lucasnogueiradev/repos");
      // Inicialmente, todos os filtros são configurados com todos os repositórios
      setRepository(response.data);
      setFilteredHighlights(response.data);
      setFilteredFrontEnd(response.data);
      setFilteredBackEnd(response.data);
      setFilteredMobile(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  // Carregar os repositórios quando o componente for montado
  useEffect(() => {
    getRepositories();
  }, []);

  // Ordenar os repositórios por data de atualização mais recente
  const sortedRepositories = [...repository].sort((a, b) => {
    const dateA = a.updated_at ? new Date(a.updated_at).getTime() : 0;
    const dateB = b.updated_at ? new Date(b.updated_at).getTime() : 0;
    return dateB - dateA; // Ordena de mais recente para mais antigo
  });

  // Formatar a data
  const formatUpdatedDate = (date: string | undefined) => {
    if (!date) return "No update information";
    const parsedDate = parseISO(date);
    return `Updated ${formatDistanceToNow(parsedDate, { addSuffix: true })}`;
  };

  // Funções para rolar os cartões para a esquerda e para a direita
  const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: -900,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: 900,
        behavior: "smooth",
      });
    }
  };

  // Função para filtrar repositórios com base na consulta de pesquisa
  const handleSearch = (
    query: string,
    type: "frontEnd" | "backEnd" | "mobile" | "highlights"
  ) => {
    if (query === "") {
      // Se a consulta de pesquisa estiver vazia, mostrar todos os repositórios
      setFilteredHighlights(sortedRepositories);
      setFilteredFrontEnd(sortedRepositories);
      setFilteredBackEnd(sortedRepositories);
      setFilteredMobile(sortedRepositories);
    } else {
      // Filtrar repositórios com base na consulta
      const filtered = repository.filter((repo) => {
        const lowerQuery = query.toLowerCase();
        return (
          repo.name?.toLowerCase().includes(lowerQuery) ||
          repo.description?.toLowerCase().includes(lowerQuery) ||
          repo.language?.toLowerCase().includes(lowerQuery) ||
          repo.topics?.some((topic) => topic.toLowerCase().includes(lowerQuery))
        );
      });

      // Atualizar o estado filtrado com base no tipo de filtro selecionado
      switch (type) {
        case "frontEnd":
          setFilteredFrontEnd(filtered);
          break;
        case "backEnd":
          setFilteredBackEnd(filtered);
          break;
        case "mobile":
          setFilteredMobile(filtered);
          break;
        case "highlights":
          setFilteredHighlights(filtered);
          break;
        default:
          break;
      }
    }
  };
  return (
    <S.Container id="projects">
      <S.Content>
        <S.Title>Meu projetos</S.Title>
        <Text
          size="small"
          text="Confira abaixo alguns projetos importa do Github"
        />
        <S.Cards>
          <S.Header>
            <SubTitle text="Destaques" />

            <BarraPesquisa
              onSearch={(query) => handleSearch(query, "highlights")}
            />
          </S.Header>

          <S.ContentCard>
            <S.Arrow direction="left" onClick={() => scrollLeft(highlightsRef)}>
              <FaChevronLeft />
            </S.Arrow>
            <S.Card ref={highlightsRef}>
              {filteredHighlights.map((repo, index) => {
                if (repo.topics && repo.topics.includes("emphasis")) {
                  return (
                    <RepositoryCard
                      key={repo.id}
                      name={repo?.name || ""}
                      description={repo?.description || ""}
                      topics={repo?.topics || []}
                      language={repo?.language || ""}
                      updated_at={formatUpdatedDate(repo?.updated_at) || ""}
                    />
                  );
                }
              })}
            </S.Card>
            <S.Arrow
              direction="right"
              onClick={() => scrollRight(highlightsRef)}
            >
              <FaChevronRight />
            </S.Arrow>
          </S.ContentCard>
        </S.Cards>

        <S.Cards>
          <S.Header>
            <SubTitle text="Front-End" />
            <BarraPesquisa
              onSearch={(query) => handleSearch(query, "frontEnd")}
            />
          </S.Header>

          <S.ContentCard>
            <S.Arrow direction="left" onClick={() => scrollLeft(frontEndRef)}>
              <FaChevronLeft />
            </S.Arrow>

            <S.Card ref={frontEndRef}>
              {filteredFrontEnd.map((repo, index) => {
                if (repo.topics && repo.topics.includes("frontend")) {
                  return (
                    <RepositoryCard
                      key={repo.id}
                      name={repo?.name || ""}
                      description={repo?.description || ""}
                      topics={repo?.topics || []}
                      language={repo?.language || ""}
                      updated_at={formatUpdatedDate(repo?.updated_at) || ""}
                    />
                  );
                }
              })}
            </S.Card>

            <S.Arrow direction="right" onClick={() => scrollRight(frontEndRef)}>
              <FaChevronRight />
            </S.Arrow>
          </S.ContentCard>
        </S.Cards>

        <S.Cards>
          <S.Header>
            <SubTitle text="Back-End" />
            <BarraPesquisa
              onSearch={(query) => handleSearch(query, "backEnd")}
            />
          </S.Header>

          <S.ContentCard>
            <S.Arrow direction="left" onClick={() => scrollLeft(backEndRef)}>
              <FaChevronLeft />
            </S.Arrow>

            <S.Card ref={backEndRef}>
              {filteredBackEnd.map((repo, index) => {
                if (repo.topics && repo.topics.includes("backend")) {
                  return (
                    <RepositoryCard
                      key={repo.id}
                      name={repo?.name || ""}
                      description={repo?.description || ""}
                      topics={repo?.topics || []}
                      language={repo?.language || ""}
                      updated_at={formatUpdatedDate(repo?.updated_at) || ""}
                    />
                  );
                }
              })}
            </S.Card>

            <S.Arrow direction="right" onClick={() => scrollRight(backEndRef)}>
              <FaChevronRight />
            </S.Arrow>
          </S.ContentCard>
        </S.Cards>

        <S.Cards>
          <S.Header>
            <SubTitle text="Mobile IOS e Android" />

            <BarraPesquisa
              onSearch={(query) => handleSearch(query, "mobile")}
            />
          </S.Header>

          <S.ContentCard>
            <S.Arrow direction="left" onClick={() => scrollLeft(mobileRef)}>
              <FaChevronLeft />
            </S.Arrow>
            <S.Card ref={mobileRef}>
              {filteredMobile.map((repo, index) => {
                if (repo.topics && repo.topics.includes("mobile")) {
                  return (
                    <RepositoryCard
                      key={repo.id}
                      name={repo?.name || ""}
                      description={repo?.description || ""}
                      topics={repo?.topics || []}
                      language={repo?.language || ""}
                      updated_at={formatUpdatedDate(repo?.updated_at) || ""}
                    />
                  );
                }
              })}
            </S.Card>
            <S.Arrow direction="right" onClick={() => scrollRight(mobileRef)}>
              <FaChevronRight />
            </S.Arrow>
          </S.ContentCard>
        </S.Cards>
      </S.Content>
    </S.Container>
  );
}
