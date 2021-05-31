import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  overflow-x: hidden;
  position: relative;

  .headerWhiteLogo {
    display: none;
  }
`;

export const Banner = styled.div`
  @media (max-width: 800px) {
    position: relative;
    background: var(--gray) no-repeat url("./assets/bannerImg.png");
    background-position: 100% 100%;

    border: none;

    min-width: 324px;
    min-height: 288px;
    padding-left: 16px;

    .bannerText {
      h2 {
        font-size: 2rem;
        font-weight: 400;
        line-height: 36px;
        margin-top: 32px;
        font-family: "September", sans-serif;
        margin-bottom: 16px;
      }

      span {
        text-align: center;
        font-size: 1rem;
        line-height: 1.5vw;
        width: 270px;
        height: 100px;
        font-family: "Helvetica", sans-serif;
      }

      p {
        display: none;
      }

      h3 {
        font-size: 20px;
        font-weight: 400;
        line-height: 32px;
        color: var(--purpleDark);
        text-decoration: underline;
        padding-left: 4px;
        font-family: "September", sans-serif;
        margin-top: 16px;
      }

      button {
        display: none;
      }
    }

    .bannerImg {
      display: none;
    }

    .bannerTop {
      img {
        display: none;
      }

      background: no-repeat url("./assets/bannerTop.svg");
      background-size: 160px;
      display: flex;
      right: 0;
      position: absolute;
      min-width: 141px;
      min-height: 72px;
    }

    .bannerBottom {
      img {
        display: none;
      }

      background: no-repeat url("./assets/bannerBottom.svg");
      background-size: 100%;
      position: absolute;
      min-width: 141px;
      min-height: 72px;
      bottom: -20px;
      left: -5px;
      margin-left: 8px;
      border: none;
    }
  }

  @media (min-width: 800px) {
    position: relative;
    height: 100vh;
    top: -84px;

    .bannerImg img {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 30%;
      border-top-right-radius: 80px;
    }

    .bannerText {
      margin-top: 158px;
      padding-left: 40px;

      h2 {
        display: none;
      }

      span {
        display: none;
      }

      p:first-of-type {
        font-size: 2vw;
        line-height: 2.5vw;
        font-family: "Helvetica-Bold", sans-serif;
        max-width: 64%;
      }

      .premium {
        h3 {
          display: none;
        }

        p {
          margin-top: 1vw;
          font-family: "Helvetica-Bold", sans-serif;
          font-size: 1.5vw;
          line-height: 2vw;
          max-width: 100%;
          color: #000000;
          border: none;
        }

        button {
          font-family: "Helvetica-Bold", sans-serif;
          font-size: 1.3rem;
          line-height: 32px;
          color: var(--gray);
          border: none;
          background: var(--purpleDark);
          padding: 8px 58px;
          border-radius: 4px;
          margin-top: 24px;
          transition: filter 0.2s;

          &:hover {
            filter: brightness(0.9);
          }
        }
      }
    }

    .bannerTop {
      position: absolute;
      right: 0;
    }

    .bannerBottom {
      position: absolute;
      bottom: 0;
    }
  }

  @media (min-width: 800px) and (max-width: 1440px) {
    .bannerText {
      margin-top: 25vh;
    }
  }
`;

export const MoreJobs = styled(Link)`
  margin: 0 auto;
  @media (max-width: 800px) {
    .moreJobs {
      font-family: "Helvetica-Bold", sans-serif;
      color: var(--gray);

      border: none;
      border-radius: 4px;
      margin-top: 24px;

      font-size: 18px;
      font-weight: 700;
      padding: 8px 14px;
      background: var(--purpleDark);

      transition: filter 0.1s;

      &:hover {
        filter: brightness(0.8);
      }

      @media (max-width: 720px) {
        max-width: 195px;
      }
    }
  }

  @media (min-width: 800px) {
    .moreJobs {
      padding: 20px 55px;
      margin: 0 auto;

      border: none;
      border-radius: 5px;
      background: var(--purpleDark);

      font-size: 24px;
      font-family: "Helvetica-Bold", sans-serif;
      color: var(--gray);
      transition: filter 0.1s;

      &:hover {
        filter: brightness(0.8);
      }

      @media (max-width: 720px) {
        max-width: 195px;
      }
    }
  }
`;

export const Content = styled.section`
  margin: 30px 16px;
  display: grid;

  @media (max-width: 800px) {
    .title {
      font-size: 24px;
      line-height: 32px;
      font-weight: 400;
      margin-bottom: 24px;
      width: 100%;
      font-family: "September", sans-serif;
    }
  }

  @media (min-width: 800px) {
    .title {
      font-size: 36px;
      line-height: 40px;
      font-weight: 400;
      margin: 100px 0 40px 40px;
      width: 100%;
      font-family: "September", sans-serif;
    }
  }
`;
