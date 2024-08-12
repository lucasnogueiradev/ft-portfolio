import { Sliderbar } from "../../components/Menu";
import { Slider } from "../Slider";
import { Container } from "./styles";
export const Banner = () => {
  return (
    <Container>
      <section className="container-header">
        <div className="banner">
          <div className="banner-video">
            <video autoPlay muted loop className="bg-desktop lazy-load">
              <source
                src="banner-bg.mp4"
                type="video/mp4"
                className="video-bg"
              />
              <source
                src="banner.webm"
                type="video/webm"
                className="video-bg"
              />
            </video>
          </div>
          <div className="bg-mobile">
            <picture>
              <source src="mobile.webp" type="image/webp" />
              <img
                src="mobile.webp"
                alt="GIF móvel"
                className="gif-bg lazy-load"
                loading="lazy"
              />
            </picture>
          </div>
          <div className="content">
            <Sliderbar />
            <Slider />
          </div>
        </div>
      </section>
    </Container>
  );
};
