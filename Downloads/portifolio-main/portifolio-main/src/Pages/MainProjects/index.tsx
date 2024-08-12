import { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import LazyImage from "../../components/Img/LazyImage";
import { Text } from "../../components/Texts/Texts";
import * as S from "./styles";
type ModalId = "modal1" | "modal2" | "modal3" | "modal4" | null;

export function MainProjects() {
  // Refs separados para cada contêiner de cartões
  const highlightsRef = useRef<HTMLDivElement>(null);

  // Estado para controlar a visibilidade dos modais
  const [showModal, setShowModal] = useState<ModalId>(null);

  // Funções para abrir e fechar os modais
  const handleShow = (modalId: ModalId) => setShowModal(modalId);
  const handleClose = () => setShowModal(null);

  return (
    <S.Container id="projects">
      <S.Content>
        <S.Title>Projetos Destaques</S.Title>
        <Text
          size="small"
          text="Confira abaixo alguns de meus projetos mais relevantes."
        />
        <S.Cards>
          <S.ContentCard>
            <S.Card ref={highlightsRef}>
              <LazyImage alt="Project Image" src="diparo2.webp" />
              <div className="card-title">Projeto Disparo em Massa</div>

              <S.StyledButton
                variant="primary"
                className="button"
                onClick={() => handleShow("modal1")}
              >
                Saber Mais
              </S.StyledButton>

              <S.CustomModal show={showModal === "modal1"} onHide={handleClose}>
                <S.CustomModal.Header>
                  <S.CustomModal.Title>
                    Sistema de Disparo em Massa no WhatsApp
                  </S.CustomModal.Title>
                  <MdClose size={24} color="#fff" onClick={handleClose} />
                </S.CustomModal.Header>
                <S.CustomModal.Body>
                  <S.VideoBlock>
                    <video controls>
                      <source src="video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </S.VideoBlock>
                  <S.DescriptionBlock>
                    <S.Title></S.Title>

                    <section>
                      <p>
                        O{" "}
                        <S.Highlight>
                          Sistema de Disparo em Massa no WhatsApp
                        </S.Highlight>{" "}
                        é uma ferramenta para envio eficiente de mensagens em
                        larga escala. Ideal para empresas que precisam
                        comunicar-se com muitos contatos de forma rápida e
                        organizada.
                      </p>
                    </section>

                    <section>
                      <S.List>
                        <S.ListItem>
                          <strong>Envio de Texto:</strong> Envio massivo de
                          mensagens de texto personalizadas.
                        </S.ListItem>
                        <S.ListItem>
                          <strong>Envio de Imagens e PDFs:</strong> Suporte para
                          anexos de imagem e documentos PDF.
                        </S.ListItem>
                        <S.ListItem>
                          <strong>Exportação de Contatos:</strong> Exporta
                          S.listas de contatos para CSV ou Excel.
                        </S.ListItem>
                        <S.ListItem>
                          <strong>Exportação de Grupos:</strong> Exporta
                          informações sobre grupos e membros.
                        </S.ListItem>
                      </S.List>
                    </section>
                    {/* 
                    <section className="buttons">
                      <Button variant="primary">Acessar Projeto</Button>
                      <Button variant="primary">Acessar Repositorio</Button>
                    </section> */}
                  </S.DescriptionBlock>
                </S.CustomModal.Body>
                <S.CustomModal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Voltar
                  </Button>
                  <Button variant="primary">Acessar Projeto</Button>
                  <Button variant="primary">Acessar Repositorio</Button>
                </S.CustomModal.Footer>
              </S.CustomModal>
            </S.Card>

            <S.Card ref={highlightsRef}>
              <LazyImage alt="Project Image" src="storybook.webp" />
              <div className="card-title">Documentação componentes</div>

              <S.StyledButton
                variant="primary"
                className="button"
                onClick={() => handleShow("modal2")}
              >
                Saber Mais
              </S.StyledButton>

              <S.CustomModal show={showModal === "modal2"} onHide={handleClose}>
                <S.CustomModal.Header>
                  <S.CustomModal.Title>
                    Documentação de componentes
                  </S.CustomModal.Title>
                  <MdClose size={24} color="#fff" onClick={handleClose} />
                </S.CustomModal.Header>
                <S.CustomModal.Body>
                  <S.VideoBlock>
                    <video controls>
                      <source src="video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </S.VideoBlock>
                  <S.DescriptionBlock>
                    <S.Title></S.Title>

                    <section>
                      <p>
                        A <S.Highlight>Documentação de componentes</S.Highlight>{" "}
                        é Projeto desenvolvido com React com TypeScript,
                        incluindo componentes reutilizáveis e integração com
                        Storybook para documentação e visualização, configuração
                        com Webpack para otimizar o processo de build e
                        arquitetura de microserviços assegura escalabilidade e
                        modularidade.
                      </p>
                    </section>

                    <section>
                      <S.List>
                        <S.ListItem>
                          <strong>Código Modular e Reutilizável:</strong>{" "}
                          Facilita manutenção e reduz erros.
                        </S.ListItem>
                        <S.ListItem>
                          <strong>Documentação Eficiente:</strong> Storybook
                          melhora a visualização e colaboração.
                        </S.ListItem>
                        <S.ListItem>
                          <strong>Desempenho e Escalabilidade:</strong> Webpack
                          otimiza builds e microserviços permitem
                          escalabilidade.
                        </S.ListItem>
                      </S.List>
                    </section>
                    {/* 
                    <section className="buttons">
                      <Button variant="primary">Acessar Projeto</Button>
                      <Button variant="primary">Acessar Repositorio</Button>
                    </section> */}
                  </S.DescriptionBlock>
                </S.CustomModal.Body>
                <S.CustomModal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Voltar
                  </Button>
                  <Button
                    variant="primary"
                    href="https://storybook-educcaflex.netlify.app/?path=/docs/introduction--docs"
                    target="_blank"
                  >
                    Acessar Projeto
                  </Button>
                  <Button
                    variant="primary"
                    href="https://github.com/lucasnogueiradev/ft-bot-compontents"
                    target="_blank"
                  >
                    Acessar Repositorio
                  </Button>
                </S.CustomModal.Footer>
              </S.CustomModal>
            </S.Card>

            <S.Card ref={highlightsRef}>
              <LazyImage alt="Project Image" src="gerador-link.webp" />
              <div className="card-title">Gerador Links para WhatsApp</div>

              <S.StyledButton
                variant="primary"
                className="button"
                onClick={() => handleShow("modal3")}
              >
                Saber Mais
              </S.StyledButton>

              <S.CustomModal show={showModal === "modal3"} onHide={handleClose}>
                <S.CustomModal.Header>
                  <S.CustomModal.Title>
                    Gerador Links para WhatsApp
                  </S.CustomModal.Title>
                  <MdClose size={24} color="#fff" onClick={handleClose} />
                </S.CustomModal.Header>
                <S.CustomModal.Body>
                  <S.VideoBlock>
                    <video controls>
                      <source src="video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </S.VideoBlock>
                  <S.DescriptionBlock>
                    <S.Title></S.Title>

                    <section>
                      <p>
                        Projeto para{" "}
                        <S.Highlight>
                          gerar links personalizado para o WhatsApp,
                        </S.Highlight>{" "}
                        este projeto é uma aplicação web desenvolvida em React,
                        utilizando Styled Components para criar uma interface
                        elegante e responsiva. A ferramenta permite gerar links
                        personalizados para iniciar conversas no WhatsApp de
                        forma rápida e eficiente.
                      </p>
                    </section>
                  </S.DescriptionBlock>
                </S.CustomModal.Body>
                <S.CustomModal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Voltar
                  </Button>
                  <Button
                    variant="primary"
                    href="https://gerador-de-link.netlify.app/"
                    target="_blank"
                  >
                    Acessar Projeto
                  </Button>
                  <Button
                    variant="primary"
                    href="https://github.com/lucasnogueiradev/gerador-links"
                    target="_blank"
                  >
                    Acessar Repositorio
                  </Button>
                </S.CustomModal.Footer>
              </S.CustomModal>
            </S.Card>

            <S.Card ref={highlightsRef}>
              <LazyImage alt="Project Image" src="bot.webp" />
              <div className="card-title">Projeto com MicroFrontend</div>

              <S.StyledButton
                variant="primary"
                className="button"
                onClick={() => handleShow("modal4")}
              >
                Saber Mais
              </S.StyledButton>

              <S.CustomModal show={showModal === "modal4"} onHide={handleClose}>
                <S.CustomModal.Header>
                  <S.CustomModal.Title>
                    Projeto com MicroFrontend
                  </S.CustomModal.Title>
                  <MdClose size={24} color="#fff" onClick={handleClose} />
                </S.CustomModal.Header>
                <S.CustomModal.Body>
                  <S.VideoBlock>
                    <video controls>
                      <source src="video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </S.VideoBlock>
                  <S.DescriptionBlock>
                    <S.Title></S.Title>

                    <section>
                      <p>
                        O <S.Highlight>Projeto com MicroFrontend</S.Highlight>{" "}
                        Criei um sistema projeto usando MicroFrontends para um
                        projeto, onde cada componente é desenvolvido e
                        gerenciado como um módulo independente. Essa abordagem
                        modular facilita a manutenção e escalabilidade do
                        sistema, permitindo atualizações e integrações de
                        funcionalidades de forma ágil e eficiente.
                      </p>
                    </section>

                    <section>
                      <S.List>
                        <S.ListItem>
                          <strong>Facilidade de Manutenção:</strong>{" "}
                          Atualizações e correções são realizadas de forma
                          isolada.
                        </S.ListItem>
                        <S.ListItem>
                          <strong>Escalabilidade:</strong> Permite a adição de
                          novos módulos e funcionalidades.
                        </S.ListItem>
                        <S.ListItem>
                          <strong>Desenvolvimento Independente:</strong> Equipes
                          podem trabalhar simultaneamente em diferentes módulos.
                        </S.ListItem>
                        <S.ListItem>
                          <strong>Flexibilidade:</strong> Facilita a integração
                          de novas tecnologias e ferramentas.
                        </S.ListItem>
                      </S.List>
                    </section>
                  </S.DescriptionBlock>
                </S.CustomModal.Body>
                <S.CustomModal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Voltar
                  </Button>
                  <Button
                    variant="primary"
                    href="https://projeto-microfrontend.netlify.app"
                  >
                    Acessar Projeto
                  </Button>
                  <Button
                    variant="primary"
                    href="https://github.com/BOT-ATENDIMENTO/nm-ft-bot"
                    target="_blank"
                  >
                    Acessar Repositorio
                  </Button>
                </S.CustomModal.Footer>
              </S.CustomModal>
            </S.Card>
          </S.ContentCard>
        </S.Cards>
      </S.Content>
    </S.Container>
  );
}
