import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 800px) {
    margin: 0 16px;

    .goBack {
      margin-top: 24px;
      margin-left: 9px;

      span:first-of-type {
        display: none;
      }

      a {
        color: #000000;
      }

      img {
        margin-right: 18px;
      }

      span {
        font-family: "September", sans-serif;
        font-size: 20px;
        font-weight: 400;
      }
    }
  }

  @media (min-width: 800px) {
    .goBack {
      display: flex;
      align-items: center;
      padding: 26px 0 0 40px;

      a {
        display: flex;
        align-items: center;
        color: #000000;
        font-family: "September", sans-serif;
        font-size: 18px;
      }

      .pathVector {
        transform: rotateY(180deg);
        padding: 0 10px;
      }
    }
  }
`;

export const Content = styled.div`
  margin-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 56px;

  border-radius: 4px;
  padding: 16px;

  @media (max-width: 800px) {
    background: var(--gray);

    #searchCardBottomDesktop {
      display: none;
    }

    #searchCardTop {
      margin-bottom: -50px;
    }
    .searchJobs,
    .searchArea {
      display: flex;
      align-items: center;
      padding-bottom: 8px;

      img {
        filter: invert();
        margin-right: 8px;
      }

      span {
        font-family: "Helvetica-Bold", sans-serif;
        font-size: 16px;
      }
    }

    .searchArea {
      margin-top: 24px;
    }

    .inputSearch {
      height: 42px;
      border-radius: 4px;
      border: 1px solid #d1d1d6;
      font-family: "Helvetica", sans-serif;
      font-size: 14px;
      background: #ffffff;

      &::placeholder {
        padding: 12px 0px 12px 8px;
      }
    }

    .inputJobSearch {
      display: grid;
    }

    .searchButton {
      height: 44px;
      margin-top: 24px;
      margin-bottom: 8px;
      background: var(--purpleDark);

      font-family: "Helvetica-Bold";
      font-size: 18px;
      color: #ffffff;

      border: none;
      border-radius: 4px;
    }

    .dropDownVector {
      position: absolute;
      right: 0;
      margin-top: 8px;
      margin-right: -8px;
    }

    .areaSection {
      position: relative;
      display: grid;
    }

    #c-dropDown {
      border-radius: 4px;
      width: 100%;
      font-family: "Helvetica", sans-serif;
      font-size: 16px;

      option {
        background: var(--gray);
        border-radius: 4px;
      }
    }

    .searchJobButton {
      display: none;
    }
  }

  @media (min-width: 800px) {
    margin-right: 40px;

    #searchCardTop,
    #searchCardBottom {
      background: var(--gray);
      border-radius: 4px;

      box-shadow: 0px 5px 5px rgba(106, 106, 106, 0.15);
    }

    #c-dropDown {
      display: none;
    }

    #searchCardBottomDesktop {
      margin: 32px 16px;
      .container {
        list-style: none;
      }

      .content {
        display: flex;
        align-items: center;
        padding: 10px;

        input[type="checkbox"] {
          width: 40px;
          height: 40px;
        }

        .checkBox {
          border-radius: 4px;
        }

        p {
          font-family: "Helvetica", sans-serif;
          font-size: 16px;
          margin-left: 20px;
        }
        &:not(:last-child) {
          margin-bottom: 16px;
        }
      }
    }

    .searchJobs,
    .searchArea {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 16px;

      border-bottom: 1px solid #d1d1d6;
      border-radius: 4px;

      img {
        filter: invert();
        margin-right: 8px;
      }

      span {
        padding-top: 16px;
        padding-bottom: 16px;
        font-family: "Helvetica-Bold", sans-serif;
        font-size: 16px;
      }
    }

    .searchArea {
      margin-top: 24px;
    }

    .inputSearch {
      height: 42px;
      border-radius: 4px;
      border: 1px solid #d1d1d6;
      font-family: "Helvetica", sans-serif;
      font-size: 14px;
      background: #ffffff;
      margin-left: 16px;
      margin-right: 16px;

      &::placeholder {
        padding: 12px 0px 12px 8px;
      }
    }

    .searchJobButton {
      margin-left: 16px;
      margin-right: 16px;
    }

    .inputJobSearch {
      display: grid;
    }

    .areaSection {
      display: grid;
      width: 100%;
    }

    .searchButton,
    .searchJobButton {
      height: 44px;
      margin: 24px 16px;
      background: var(--purpleDark);

      font-family: "Helvetica-Bold";
      font-size: 18px;
      color: #ffffff;

      border: none;
      border-radius: 4px;
    }
  }
`;
