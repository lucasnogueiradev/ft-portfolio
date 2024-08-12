import styled from "styled-components";

export const Container = styled.div`
  .banner {
    height: auto;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: start;
  }
  .banner .bg-desktop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 100%;
    height: 100vh;
    display: flex;
    height: auto;
    z-index: -1;
  }
  .bg-mobile,
  .gif-bg,
  .mobile {
    display: none;
  }
  .banner .content {
    position: relative;
    z-index: 1;
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
  .banner,
  .container-header,
  .video-bg {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  .content {
    background: rgba(0, 0, 0, 0.9);
    width: 100%;
    height: 100vh;
  }

  @media (max-width: 1200px) {
    body,
    html {
      overflow-x: hidden;
    }
    .banner .bg-mobile,
    .gif-bg {
      object-fit: cover;
      display: block;
      width: 100%;
    }
    .content {
      height: auto;
      margin: 2rem auto;
      padding: 0.2rem;
      display: flex;
      flex-direction: column;
    }
    .banner-video,
    .bg-desktop,
    .card-img,
    .computer-img,
    .video-bg {
      display: none;
    }
    .banner .bg-desktop,
    .banner .bg-mobile {
      height: 100%;
      overflow-x: hidden;
      z-index: -1;
      max-width: 100%;
    }
    .banner,
    .banner .bg-mobile,
    .cards,
    .gif-bg,
    .header-image,
    .slider {
      max-width: 100%;
    }
    .banner .bg-mobile {
      position: fixed;
      top: 0;
      left: 0;
    }
    body,
    html {
      overflow-x: hidden;
    }
  }
`;
