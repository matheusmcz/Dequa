import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  overflow-x: hidden;
`;

export const Banner = styled.div`
  @media (max-width: 800px) {
    position: relative;
    background: var(--gray) no-repeat url("./assets/bannerImg.png");
    background-position: 100% 100%;

    border: none;
    border-bottom-right-radius: 60px;
    border-top-left-radius: 60px;
    border-bottom-left-radius: 60px;

    min-width: 324px;
    min-height: 288px;
    margin: 40px 16px;
    padding-left: 4px;

    .bannerText {
      h2 {
        font-size: 30px;
        font-weight: 400;
        line-height: 36px;
        margin-top: 56px;
        font-family: "September", sans-serif;
      }

      span {
        font-size: 18px;
        font-weight: 700;
        line-height: 28px;
        padding-left: 4px;
        font-family: "Helvetica-Bold", sans-serif;
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
      border-bottom-left-radius: 60px;
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

    .bannerImg {
      position: absolute;
      bottom: 0;
      right: 0;
      margin-right: 116px;
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
        font-size: 30px;
        line-height: 36px;
        font-family: "Helvetica-Bold", sans-serif;
        max-width: 740px;
      }

      .premium {
        margin-top: 40px;
        h3 {
          display: none;
        }

        p {
          font-family: "Helvetica-Bold", sans-serif;
          font-size: 18px;
          line-height: 28px;
          max-width: 356px;
        }

        button {
          font-family: "Helvetica-Bold", sans-serif;
          font-size: 20px;
          line-height: 32px;
          color: var(--gray);

          border: none;
          background: var(--purpleDark);
          padding: 8px 58px;
          border-radius: 4px;
          margin-top: 24px;
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
      margin-top: 316px;
    }

    .bannerImg {
      margin-right: 0;
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

    .jobCard {
      display: flex;
      border: none;
      border-radius: 4px;
      background: var(--gray);
      box-shadow: 0 5px 5px rgba(106, 106, 106, 0.15);
      margin-bottom: 24px;
      cursor: pointer;
      transition: filter 0.1s;

      &:hover {
        filter: brightness(0.9);
      }

      .jobCardImg {
        background: #e4f3f3;
        min-width: 130px;
        min-height: 130px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px 0 0 4px;

        img {
          width: 86px;
          height: 64px;
        }
      }

      .jobCardInfo {
        display: grid;
        grid-template-columns: 1fr;
        margin: 16px 8px;

        .moreAbout {
          display: none;
        }
      }

      .jobName {
        font-weight: 700;
        font-size: 14px;
        line-height: 24px;
        font-family: "Helvetica-Bold", sans-serif;
      }

      .jobCompany {
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        font-family: "Helvetica-Bold", sans-serif;
      }

      .jobLevel {
        font-weight: 400;
        font-size: 10px;
        line-height: 16px;
        display: flex;
        justify-content: space-between;
        font-family: "Helvetica-Light", sans-serif;
        align-items: center;

        .jobLocation {
          display: flex;
          align-items: center;
          font-family: "Helvetica-Light", sans-serif;

          img {
            width: 12px;
            height: 12px;
            margin-right: 4px;
          }
        }
      }

      .jobDescription {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        font-family: "Helvetica-Light", sans-serif;

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }

    .moreJobs {
      font-size: 18px;
      font-weight: 700;
      font-family: "Helvetica-Bold", sans-serif;
      padding: 8px 14px;
      margin: 0 auto;
      background: var(--purpleDark);
      color: var(--gray);
      border: none;
      border-radius: 5px;
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
    .title {
      font-size: 36px;
      line-height: 40px;
      font-weight: 400;
      margin: 100px 0 40px 40px;
      width: 100%;
      font-family: "September", sans-serif;
    }

    .jobCard {
      display: flex;
      position: relative;
      border: none;
      border-radius: 4px;
      background: var(--gray);
      box-shadow: 0 5px 5px rgba(106, 106, 106, 0.15);
      margin: 0 40px 64px 40px;
      cursor: pointer;
      transition: filter 0.1s;

      &:hover {
        filter: brightness(0.9);
      }

      .jobCardImg {
        background: #e4f3f3;
        width: 262px;
        height: 196px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px 0 0 4px;

        img {
          width: 160px;
          height: 121px;
        }
      }

      .jobCardInfo {
        display: grid;
        grid-template-columns: 1fr;
        margin: 16px 40px;
      }

      .moreAbout {
        position: absolute;
        margin-top: 8px;
        margin-right: 24px;
        padding: 8px 76px;
        right: 0;

        border: 2px solid var(--purpleDark);
        border-radius: 4px;
        background: transparent;

        font-family: "Helvetica-Bold", sans-serif;
        font-size: 18px;
        line-height: 28px;
        color: var(--purpleDark);
      }

      .jobName {
        font-size: 24px;
        line-height: 32px;
        font-family: "Helvetica-Bold", sans-serif;
      }

      .jobCompany {
        font-size: 20px;
        line-height: 32px;
        font-family: "Helvetica-Bold", sans-serif;
      }

      .jobLevel {
        font-size: 18px;
        line-height: 28px;
        display: flex;
        font-family: "Helvetica-Light", sans-serif;
        align-items: center;

        .level {
          margin-right: 64px;
        }

        .jobLocation {
          display: flex;
          align-items: center;
          font-family: "Helvetica-Light", sans-serif;

          img {
            width: 20px;
            height: 20px;
            margin-right: 4px;
          }
        }
      }

      .jobDescription {
        font-size: 16px;
        line-height: 24px;
        font-family: "Helvetica-Light", sans-serif;

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }

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
