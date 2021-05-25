import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;
  overflow-x: hidden;

  .headerLogo {
    opacity: 0;
  }

  #headerDesktop {
    background: var(--softGreen);
  }
`;

export const Content = styled.div`
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 0.3fr 1fr;
    grid-gap: 85px;
  }
`;

export const List = styled.div`
  @media (max-width: 800px) {
    margin-left: 16px;
    margin-right: 16px;
    display: grid;
    .title {
      font-family: "September", sans-serif;
      font-size: 24px;
      line-height: 32px;
      font-weight: 400;
      margin-top: 56px;
      margin-bottom: 24px;
      padding-bottom: 24px;
      width: 100%;

      border-bottom: 1px solid #d1d1d6;
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
  }

  @media (min-width: 800px) {
    .title {
      font-size: 36px;
      line-height: 40px;
      font-weight: 400;
      margin: 100px 0 40px 40px;
      width: 100%;
      font-family: "September", sans-serif;
      border-bottom: 1px solid #d1d1d6;
      padding-bottom: 30px;
    }

    .jobCard {
      display: flex;
      position: relative;
      border: none;
      border-radius: 4px;
      background: var(--gray);
      box-shadow: 0 5px 5px rgba(106, 106, 106, 0.15);
      margin: 0 40px 80px 40px;
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
  }
`;
