import { motion } from "framer-motion";
import { SubTitle, Text } from "../../components/Texts/Texts";
import { textVariants } from "../Slider";
import * as S from "./styles";

export const About = () => {
  return (
    <S.Container id="link">
      <S.Content>
        <S.ContentPhoto>
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <S.Aside>
              <S.ProfilePhoto />
            </S.Aside>
          </motion.div>
        </S.ContentPhoto>
        <S.ContentText>
          <S.Texts>
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <SubTitle text="Sobre mim" />

              <Text
                size="medium"
                text="Sou um desenvolvedor Front-End com experiência significativa em
              projetos diversos, desde websites atrativos até aplicações web
              complexas."
              />
              <Text
                size="medium"
                text="Utilizo React para desenvolver componentes reutilizáveis e
              gerenciar o estado da aplicação, TypeScript para tipagem estática
              e segura do JavaScript, e Next.js para renderização do lado do
              servidor e geração de sites estáticos. Tenho habilidade com
              GraphQL para eficiente busca de dados via APIs, e uso Webpack para
              empacotar e otimizar meus aplicativos."
              />
              <Text
                size="medium"
                text=" Em termos de arquitetura, trabalho com microsserviços para criar
              aplicações escaláveis e resilientes, permitindo desenvolvimento,
              implantação e escalabilidade independentes das partes do sistema."
              />
              <Text
                size="medium"
                text="Possuo experiência em testes usando Cypress e Storybook para
              garantir qualidade e consistência das interfaces e componentes
              desenvolvidos. Atualmente, estou estudando Node.js e aprimorando
              meu conhecimento em React Native. Também estou dedicando tempo ao
              estudo do espanhol e inglês. Além disso, tenho experiência em
              criar APIs com Node.js e estou focado em me tornar um
              desenvolvedor full-stack."
              />
            </motion.div>
          </S.Texts>
        </S.ContentText>
      </S.Content>
    </S.Container>
  );
};
