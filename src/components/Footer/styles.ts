import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 800px) {
    .companyCard {
      background: var(--gray);
      border: none;
      border-radius: 10px;
      margin-left: 16px;
      margin-right: 16px;
      padding: 24px 8px;

      h4 {
        font-size: 20px;
        font-weight: 400;
        line-height: 32px;
        text-align: center;
        font-family: "September", sans-serif;
      }

      .companyList {
        display: grid;
        justify-content: center;
        align-items: center;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 24px;

        margin-top: 16px;
      }
    }
  }

  @media (min-width: 800px) {
    .companyCard {
      border: none;
      padding: 24px 8px;
      margin: 90px 40px 0 40px;

      h4 {
        font-size: 36px;
        line-height: 40px;
        font-weight: 400;
        font-family: "September", sans-serif;
        margin-bottom: 38px;
      }

      .companyList {
        display: flex;
        justify-content: space-between;
        align-items: center;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 24px;

        margin-top: 16px;
      }
    }
  }
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
