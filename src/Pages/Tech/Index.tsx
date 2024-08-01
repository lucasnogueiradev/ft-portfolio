import {
  FaCss3Alt,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaProjectDiagram,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import {
  SiApollographql,
  SiCypress,
  SiKotlin,
  SiNextdotjs,
  SiRedux,
  SiStorybook,
  SiStyledcomponents,
  SiTailwindcss,
  SiVite,
  SiWebpack,
} from "react-icons/si";
import { Text } from "../../components/Texts/Texts";
import * as S from "./styles";

export const Technologies = () => {
  // Array de ícones e títulos
  // Array de ícones e títulos
  const cardData = [
    { icon: <FaReact />, title: "React" },
    { icon: <FaJsSquare />, title: "JavaScript" },
    { icon: <FaCss3Alt />, title: "CSS3" },
    { icon: <FaHtml5 />, title: "HTML" },
    { icon: <FaNodeJs />, title: "Node.js" },
    { icon: <FaSass />, title: "SASS" },
    { icon: <SiStyledcomponents />, title: "styled" },
    { icon: <SiTailwindcss />, title: "Tailwind" },
    { icon: <SiNextdotjs />, title: "Next.js" },
    { icon: <SiKotlin />, title: "Kotlin" },
    { icon: <FaGithub />, title: "Github" },
    { icon: <GrGraphQl />, title: "GraphQL" },
    { icon: <SiCypress />, title: "Cypress" },
    { icon: <SiWebpack />, title: "Webpack" },
    { icon: <SiStorybook />, title: "Storybook" },
    { icon: <FaFigma />, title: "Figma" },
    { icon: <SiRedux />, title: "Redux" },
    { icon: <SiApollographql />, title: "Apollo" },
    { icon: <FaProjectDiagram />, title: "Microservices" },
    { icon: <SiVite />, title: "Vite" },
    { icon: <FaReact />, title: "React" },
  ];
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <S.Container id="technologies">
      <S.Title>Tecnologias</S.Title>
      <Text
        size="small"
        text="Algumas das tecnologias com as quais tenho experiência"
      />
      <S.Cards>
        {cardData.map((card, index) => (
          <S.Card
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="icon">{card.icon}</div>
            <div className="title">{card.title}</div>
          </S.Card>
        ))}
      </S.Cards>
    </S.Container>
  );
};
