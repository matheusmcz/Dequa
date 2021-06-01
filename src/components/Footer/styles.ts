import styled from "styled-components";

export const Container = styled.div`
  scroll-behavior: smooth;
`;

export const Content = styled.div`
  @media (max-width: 800px) {
    a,
    span {
      font-family: "Helvetica", sans-serif;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    margin: 40px 0 0 0;
    padding: 45px 0;

    background: #121212;
    color: #f8f8f8;

    .socialMedia {
      .logoImg {
        display: flex;
        margin: 0 48px 40px 48px;
      }

      .footerColorFullLogo {
        display: none;
      }

      div {
        display: flex;
        justify-content: center;
        align-content: center;
        padding: 8px;
      }

      h4 {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        font-family: "September", sans-serif;
        text-align: center;
      }

      a {
        width: 24px;
        height: 24px;
        background: transparent;
      }

      a:nth-of-type(2) {
        margin: 0px 16px 0px 16px;
      }
    }

    .sac,
    .aboutUs,
    .categories,
    .policies {
      margin: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      line-height: 24px;

      h4 {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        font-family: "September", sans-serif;
      }

      span:first-of-type {
        margin-top: 16px;
      }
    }

    .aboutUs,
    .categories,
    .policies {
      a {
        color: #f8f8f8;
      }

      a:first-of-type {
        margin-top: 16px;
      }
    }
  }

  @media (min-width: 800px) {
    a,
    span {
      font-family: "Helvetica", sans-serif;
    }
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    width: 100%;
    margin: 40px 0 0 0;
    padding: 45px 40px;

    background: #121212;
    color: #f8f8f8;

    .socialMedia {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      left: 0;

      .logoImg {
        display: none;
      }

      div {
        display: flex;
        justify-content: center;
        align-content: center;
        padding: 8px;
        margin-top: 52px;
      }

      h4 {
        display: none;
      }

      a {
        width: 24px;
        height: 24px;
        background: transparent;
      }

      a:nth-of-type(2) {
        margin: 0 46px;
      }
    }

    .sac {
      h4 {
        display: none;
      }
    }

    .sac,
    .aboutUs,
    .categories,
    .policies {
      display: flex;
      flex-direction: column;
      justify-content: center;

      line-height: 24px;

      h4 {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        font-family: "September", sans-serif;
      }

      span:first-of-type {
        margin-top: 16px;
      }
    }

    .aboutUs,
    .categories,
    .policies {
      a {
        color: #f8f8f8;
      }

      a:first-of-type {
        margin-top: 16px;
      }
    }
  }
`;
