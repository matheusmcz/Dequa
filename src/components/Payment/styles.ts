import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  @media (max-width: 800px) {
    .goBack {
      font-family: "September", sans-serif;
      font-size: 20px;
      color: #121212;
      display: flex;
      align-items: center;
      margin-top: 24px;
      margin-left: 16px;
      margin-bottom: 32px;

      .pathDesktop {
        display: none;
      }

      .pathVector:first-of-type {
        display: none;
      }
    }

    .pathVector {
      margin-right: 8px;
    }
  }

  @media (min-width: 800px) {
    background: #ffffff;
    #headerDesktop {
      background: var(--softGreen);
    }

    .headerLogo {
      opacity: 0;
    }

    .goBack {
      font-family: "September", sans-serif;
      font-size: 20px;
      color: #121212;
      display: flex;
      align-items: center;
      margin: 24px 0 98px 40px;
    }

    .pathVector {
      margin-right: 8px;
      margin-left: 8px;
      transform: rotateY(180deg);
    }
  }
`;

export const Content = styled.div`
  @media (max-width: 800px) {
    margin: 0 16px;

    .paymentDescription {
      font-family: "Helvetica-Bold", sans-serif;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 16px;
    }

    .paypal {
      margin-bottom: 32px;
    }

    .basicsInputStyles {
      display: flex;
      width: 100%;
      height: 42px;
      margin-bottom: 24px;
      padding: 11px 16px;

      background: var(--gray);
      border: 1px solid #d1d1d6;
      border-radius: 4px;

      font-family: "Helvetica", sans-serif;
      font-size: 14px;
      line-height: 20px;
    }

    button[type="submit"] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 8px;
      background: var(--purpleDark);
      border: none;
      border-radius: 4px;

      p {
        font-family: "Helvetica-Bold", sans-serif;
        font-size: 18px;
        line-height: 28px;
        color: var(--gray);
      }
    }

    .ownerName,
    .expirationDate,
    .securityCode {
      font-family: "Helvetica-Bold", sans-serif;
      font-size: 16px;
      margin-bottom: 16px;
    }

    .info {
      font-family: "Helvetica", sans-serif;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 40px;

      a {
        margin-left: 8px;
      }
    }
  }

  @media (min-width: 800px) {
    background: var(--gray);

    padding-left: 110px;
    padding-right: 110px;
    margin: 0 auto 108px auto;
    max-width: 680px;

    .paymentDescription {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 56px;
      margin-bottom: 48px;
      font-family: "September", sans-serif;
      font-size: 24px;
    }

    .basicsInputStyles {
      display: flex;
      width: 100%;
      height: 42px;
      margin-bottom: 24px;
      padding: 11px 16px;

      background: var(--gray);
      border: 1px solid #d1d1d6;
      border-radius: 4px;

      font-family: "Helvetica", sans-serif;
      font-size: 16px;
      line-height: 24px;
    }

    .ownerName,
    .expirationDate,
    .securityCode {
      font-family: "Helvetica-Bold", sans-serif;
      font-size: 18px;
      line-height: 28px;
      margin-bottom: 16px;
    }

    .info {
      display: none;
    }

    button[type="submit"] {
      display: flex;
      align-items: center;
      justify-content: center;

      max-width: 296px;
      padding: 8px 60px;
      margin: 32px auto 56px auto;
      background: var(--purpleDark);
      border: none;
      border-radius: 4px;

      p {
        font-family: "Helvetica-Bold", sans-serif;
        font-size: 18px;
        line-height: 28px;
        color: var(--gray);
      }
    }
  }

  @media (min-width: 1440px) {
    width: 680px;
  }
`;
