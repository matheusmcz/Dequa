import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  @media (max-width: 800px) {
    .goBack {
      font-family: "September", sans-serif;
      font-size: 20px;
      color: #121212;
      display: flex;
      align-items: center;
      margin: 24px 16px 40px 16px;

      span:nth-of-type(1),
      span:nth-of-type(2) {
        display: none;
      }

      span:last-of-type {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      img:first-of-type {
        display: none;
      }
    }

    .pathVector {
      margin-right: 16px;
    }

    .eventBigImg {
      display: none;
    }

    .eventImg {
      width: 100%;
    }
  }

  @media (min-width: 800px) {
    #headerDesktop {
      background: var(--softGreen);
      .headerLogo {
        display: none;
      }
    }

    .goBack {
      font-family: "September", sans-serif;
      font-size: 20px;
      color: #121212;
      display: flex;
      align-items: center;
      margin: 24px 0 40px 40px;

      .pathVector {
        margin-right: 8px;
        margin-left: 8px;
        transform: rotateY(180deg);
      }
    }

    .eventImg {
      display: none;
    }

    .eventBigImg {
      width: 100%;
    }

    display: grid;
  }
`;

export const Content = styled.div`
  @media (max-width: 800px) {
    margin: 0 16px;

    .eventHeader {
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .eventType {
      font-family: "Helvetica-Bold", sans-serif;
      font-size: 18px;
      margin-bottom: 8px;
    }

    .eventTitle {
      font-family: "September", sans-serif;
      font-weight: 400;
      font-size: 30px;
      margin-bottom: 24px;
    }

    .eventDate,
    .eventPlataform {
      display: flex;
      align-items: center;
      margin-bottom: 8px;

      img {
        margin-right: 8px;
      }

      p {
        font-family: "Helvetica", sans-serif;
        font-size: 16px;
      }
    }

    .eventPlataform {
      img {
        filter: invert();
      }
    }

    .description {
      padding-top: 16px;
      padding-bottom: 16px;
      background: var(--gray);
    }

    .descriptionTitle {
      font-family: "September", sans-serif;
      font-size: 24px;
      font-weight: 400;
      color: var(--purpleDark);
      margin-bottom: 24px;
    }

    .descriptionIntro {
      font-family: "Helvetica-Bold", sans-serif;
      font-size: 18px;
      line-height: 24px;
    }

    .descriptionIntroDetail {
      font-family: "Helvetica", sans-serif;
      margin-bottom: 40px;
    }

    .descriptionAbstract {
      font-family: "Helvetica", sans-serif;
      font-size: 16px;
      line-height: 24px;
    }

    .submitButton {
      padding: 8px 94px;
      border: none;
      border-radius: 4px;
      background: var(--purpleDark);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-top: 80px;
      margin-right: 18px;

      p {
        font-family: "Helvetica-bold", sans-serif;
        font-size: 18px;
        line-height: 28px;
        color: var(--gray);
      }
    }
  }

  @media (min-width: 800px) {
    width: 100%;

    .eventBigImg {
      width: 100%;
    }

    .eventHeader {
      margin: 40px;
    }

    .eventType {
      font-family: "Helvetica-Bold", sans-serif;
      font-size: 18px;
      margin-bottom: 8px;
    }

    .eventTitle {
      font-family: "September", sans-serif;
      font-weight: 400;
      font-size: 30px;
      margin-bottom: 32px;
      margin-top: -40px;
      margin-left: 90px;
    }

    .eventDate,
    .eventPlataform {
      display: flex;
      align-items: center;
      margin-bottom: 8px;

      img {
        margin-right: 8px;
      }

      p {
        font-family: "Helvetica", sans-serif;
        font-size: 16px;
      }
    }

    .eventPlataform {
      img {
        filter: invert();
      }
    }

    .description {
      padding: 40px;
      background: var(--gray);
    }

    .descriptionTitle {
      font-family: "September", sans-serif;
      font-size: 24px;
      font-weight: 400;
      color: var(--purpleDark);
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .descriptionIntro {
      font-family: "Helvetica-Bold", sans-serif;
      font-size: 18px;
      line-height: 24px;
    }

    .descriptionIntroDetail {
      font-family: "Helvetica", sans-serif;
      margin-bottom: 40px;
    }

    .descriptionAbstract {
      font-family: "Helvetica", sans-serif;
      font-size: 16px;
      line-height: 24px;
      text-align: justify;
    }

    .submitButton {
      padding: 8px 94px;
      border: none;
      border-radius: 4px;
      background: var(--purpleDark);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 40px;
      margin-left: 40px;
      margin-bottom: 80px;

      p {
        font-family: "Helvetica-bold", sans-serif;
        font-size: 18px;
        line-height: 28px;
        color: var(--gray);
      }
    }
  }
`;
