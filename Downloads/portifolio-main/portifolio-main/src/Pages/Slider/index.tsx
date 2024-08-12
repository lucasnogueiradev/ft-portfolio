import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { SubTitle, Text, Title } from "../../components/Texts/Texts";
import * as S from "./styles";
import { Container } from "./styles";

const photoVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

export const textVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 2,
    },
  },
};
export const Slider = () => {
  return (
    <Container>
      <S.Content>
        <S.ContentText>
          <S.Texts>
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <Title text="Lucas Souza Nogueira" size="large" />
              <SubTitle text="Pleno Front-End Developer 👨🏾‍💻" />
              <Text
                text="(Portfólio ainda em desenvolvimento⚙️)"
                size="small"
              />
            </motion.div>
          </S.Texts>

          <S.Icons>
            <motion.div
              animate={{
                scale: [1, 1.2, 1, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              }}
              variants={textVariants}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.8, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <span className="icon">
                <a
                  target="blank"
                  className="icon-link"
                  rel="noopener noreferrer"
                  title="Visite meu perfil no GitHub"
                  href="https://github.com/lucasnogueiradev"
                >
                  <FaGithub />
                </a>
              </span>
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.8, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <span className="icon">
                <a
                  target="blank"
                  className="icon-link"
                  rel="noopener noreferrer"
                  title="Visite meu perfil no LinkedIn"
                  href="https://www.linkedin.com/in/lucas-souza-nogueira-605ba022a/"
                >
                  <FaLinkedin />
                </a>
              </span>
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.8, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <div className="icon">
                <a
                  target="blank"
                  className="icon-link"
                  title="Visite meu canal no YouTube"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/channel/UCYe4ThJgG7kV594meg-PCiQ"
                >
                  <FaYoutube />
                </a>
              </div>
            </motion.div>

            {/* <span className="icon">
              <BiLogoJavascript />
            </span> */}
          </S.Icons>
        </S.ContentText>

        <S.ContentPhoto>
          <motion.div
            variants={photoVariants}
            transition={{ ease: "easeOut", duration: 2 }}
            animate={{ x: 100 }}
          >
            <S.ProfilePhoto />
          </motion.div>
        </S.ContentPhoto>
      </S.Content>
    </Container>
  );
};
