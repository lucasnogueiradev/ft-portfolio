import { Container } from "./styles";

export const Footer = () => {
  return (
    <Container>
      <footer className="footer">
        <section className="footer-content">
          <div className="footer-itens">
            <article className="footer-item">
              <h3>Acessar</h3>
              <ul className="footer-links">
                <li>
                  <a
                    href="https://wa.me/message/SJUFANKH3FXRI1"
                    className="icon-link"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/lucasnogueira_dev"
                    className="icon-link"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://pay.hotmart.com/G93801849M"
                    className="icon-link"
                  >
                    Hotmart
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.udemy.com/course/curso-completo-de-html-e-css-do-basico-ao-avancado-2024/?referralCode=BCF83823E4762B4D2BAD&couponCode=LETSLEARNNOWPP"
                    className="icon-link"
                  >
                    Udemy
                  </a>
                </li>
              </ul>
            </article>

            <article className="footer-item">
              <h3>Links</h3>
              <ul className="footer-links">
                <li>suporte@educcaflex.com.br</li>
                <li>13 99130-1814</li>
                <li>Santos SP</li>
              </ul>
            </article>

            <article className="footer-item">
              <h3>Legal</h3>
              <ul className="footer-links">
                <li>Politica de Privacidade</li>
                <li>Termo de Uso</li>
              </ul>
            </article>
          </div>
        </section>
      </footer>
    </Container>
  );
};
