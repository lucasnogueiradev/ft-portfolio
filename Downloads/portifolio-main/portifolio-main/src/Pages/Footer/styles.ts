import styled from "styled-components";

export const Container = styled.div`
  .footer-item .footer-links,
  .footer-item h3,
  .footer-links li,
  .footer-title,
  .section-title {
    text-align: center;
  }
  .footer-card {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0f0f11;
  }
  .footer-logo {
    align-items: center;
    display: flex;
  }
  .footer {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background: #0f0f11;
    color: #fff;
  }
  .footer-logo,
  .footer-title {
    color: ${(props) => props.theme.colors.white};
    font-weight: 500;
  }
  .footer-content {
    width: 85%;
    display: flex;
    flex-direction: column;
    padding: 2.5rem 0 1rem;
    align-items: center;
    margin: auto;
  }
  .footer-title {
    padding: 3rem 0 1rem;
  }
  .footer-itens {
    display: flex;
    gap: 5rem;
    font-family: "Poppins", sans-serif;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .footer-logo {
    text-decoration: none;
    justify-content: center;
    column-gap: 0.4rem;
    padding: 1rem 0;
  }
  .footer-logo span {
    padding-right: 1rem;
  }
  .footer-icons {
    margin: 1rem auto 0;
    align-items: center;
    justify-content: center;
    display: flex;
  }
  .footer-item .footer-links {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 90%;
  }
  .footer-links li {
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
  }

  @media (max-width: 1200px) {
    .footer-content {
      width: 90%;
    }
    .footer {
      padding: 4px 10px 10px;
      width: 100%;
    }
    .footer-itens {
      justify-content: center;
    }
    .footer-item {
      text-align: center;
      width: 20rem;
    }
  }
`;
