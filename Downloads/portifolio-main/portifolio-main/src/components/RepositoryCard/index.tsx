import React from "react";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { RepositoryProps } from "../../Types/user";

import {
  Card,
  Container,
  Description,
  Detail,
  Details,
  DetailSpace,
  Name,
  Tag,
} from "./styles";

const getIconForLanguage = (language: string) => {
  switch (language) {
    case "JavaScript":
      return <SiJavascript style={{ color: "#f7e018", padding: "2px" }} />;
    case "CSS":
      return <SiCss3 style={{ color: "#d12d6d", padding: "2px" }} />;
    case "TypeScript":
      return <SiTypescript style={{ color: "#3178c6", padding: "2px" }} />;
    case "Node.js":
      return <SiNodedotjs style={{ color: "#68a063", padding: "2px" }} />;
    case "HTML":
      return <SiHtml5 style={{ color: "#e34f26", padding: "2px" }} />;
    case "React":
      return <SiReact style={{ color: "#61dafb", padding: "2px" }} />;
    case "Kotlin":
      return <SiKotlin style={{ color: "#F18E2A", padding: "2px" }} />;
    case "Python":
      return <SiPython style={{ color: "#306998", padding: "2px" }} />;
    default:
      return null;
  }
};
const RepositoryCard: React.FC<RepositoryProps> = ({
  name,
  description,
  topics,
  language,
  updated_at,
}) => {
  return (
    <Container>
      <Card
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
      >
        <Name>{name}</Name>
        <Description>{description}</Description>
        <Details>
          <Detail>
            {topics?.map((item) => (
              <Tag>{item}</Tag>
            ))}
          </Detail>

          <DetailSpace>
            <Detail>
              {" "}
              {getIconForLanguage(language as string)}
              {language}
            </Detail>
            <Detail> {updated_at}</Detail>
          </DetailSpace>
        </Details>
      </Card>
    </Container>
  );
};

export default RepositoryCard;
