import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  #headerDesktop {
    background: var(--softGreen);
    .headerLogo {
      opacity: 0;
    }
  }
`;

export const Content = styled.div`
  @media (max-width: 800px) {
    margin: 0 16px;

    border-bottom: 1px solid #d1d1d6;

    .goBack {
      margin-top: 24px;
      display: flex;
      align-items: center;

      a:nth-child(1),
      a:nth-child(2) {
        display: none;
      }

      a {
        display: flex;
        align-items: center;
        font-family: "September";
        font-size: 20px;
        color: #000000;
      }

      img {
        margin-right: 18px;
      }
    }

    .companyProfilePicture {
      width: 100%;
      padding-bottom: 40px;
    }

    #jobInformation {
      display: grid;
      border-bottom: 1px solid #d1d1d6;
      padding-top: 40px;
      padding-bottom: 40px;

      p,
      span:not(:last-of-type) {
        margin-bottom: 8px;
      }

      span:last-of-type {
        img {
          filter: invert();
        }
      }

      .title {
        font-family: "Helvetica-Bold", sans-serif;
        font-size: 24px;
      }

      .company {
        font-family: "Helvetica-Bold", sans-serif;
        font-size: 20px;
      }

      .level,
      .location,
      .payment,
      .modality {
        display: flex;
        align-items: center;

        font-family: "Helvetica-Bold", sans-serif;
        font-size: 16px;

        img {
          margin-right: 10px;
          width: 16px;
          height: 16px;
        }
      }
    }

    #jobDescription,
    #companyDescription,
    #schedule,
    #accessibility {
      border-bottom: 1px solid #d1d1d6;
      padding-top: 40px;
      padding-bottom: 40px;

      .title {
        font-family: "Helvetica-Bold", sans-serif;
        font-size: 20px;
        padding-bottom: 16px;
      }

      .text {
        font-family: "Helvetica", sans-serif;
        font-size: 16px;
      }
    }

    #skills {
      border-bottom: 1px solid #d1d1d6;
      padding-top: 40px;
      padding-bottom: 40px;

      .title {
        font-family: "Helvetica-Bold", sans-serif;
        font-size: 20px;
        padding-bottom: 16px;
      }

      .skills {
        margin-left: 16px;
        font-family: "Helvetica", sans-serif;
        font-size: 16px;
      }

      .skills:not(:last-child) {
        margin-bottom: 8px;
      }
    }

    #accessibility {
      border: none;
    }

    #documents {
      padding-top: 20px;
      display: grid;

      .linkedin {
        display: grid;

        span {
          display: flex;
          align-items: center;

          font-family: "Helvetica", sans-serif;
          font-size: 16px;

          img {
            margin-right: 10px;
          }
        }

        input[type="text"] {
          height: 44px;
          border: 1px solid #d1d1d6;
          border-radius: 4px;
          background: var(--gray);
          margin-top: 12px;
        }
      }

      .curriculum {
        display: grid;
        margin-bottom: 56px;

        span {
          display: flex;
          align-items: center;
          padding-top: 16px;

          font-family: "Helvetica", sans-serif;
          font-size: 16px;

          img {
            margin-right: 10px;
          }
        }

        input[type="file"] {
          height: 24px;
          border: 1px solid #d1d1d6;
          border-radius: 4px;
          background: var(--gray);
          margin-top: 12px;
          text-align: center;
        }

        #file-upload-button {
          font-family: "Helvetica", sans-serif;
          font-size: 40px;
        }
      }

      .submitButton {
        font-family: "Helvetica-Bold", sans-serif;
        color: var(--gray);

        border: none;
        border-radius: 4px;
        margin-top: 24px;

        font-size: 18px;
        font-weight: 700;
        line-height: 40px;
        padding: 8px 14px;
        background: var(--purpleDark);

        transition: filter 0.1s;

        &:hover {
          filter: brightness(0.8);
        }
      }
    }

    .applyCard {
      display: none;
    }
  }

  @media (min-width: 800px) {
    .goBack {
      display: flex;
      align-items: center;
      padding: 26px 0 42px 40px;

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

    #jobInformation {
      background: var(--gray);

      display: flex;
      position: relative;
      max-height: 256px;

      .companyProfilePicture {
        border-radius: 0;
      }

      .title {
        font-family: "Helvetica-Bold", sans-serif;
        font-size: 38px;
        padding-top: 40px;
        padding-left: 24px;
      }

      .company {
        font-family: "Helvetica-Bold", sans-serif;
        font-size: 30px;
        padding-top: 24px;
        padding-left: 24px;
      }

      .location,
      .level {
        font-family: "Helvetica-Bold", sans-serif;
        font-size: 24px;

        display: flex;
        align-items: center;

        img {
          width: 18px;
          height: 22px;
        }
      }

      .level {
        padding-top: 24px;
        padding-left: 24px;
      }

      .location {
        position: absolute;
        bottom: 0;
        margin-left: 257px;
        margin-bottom: 77px;

        img {
          margin-right: 8px;
        }
      }

      .payment,
      .modality {
        font-family: "Helvetica-Bold", sans-serif;
        font-size: 20px;

        display: flex;
        align-items: center;

        position: absolute;
        bottom: 0;

        margin-bottom: -52px;

        img {
          margin-right: 16px;
        }
      }

      .payment {
        margin-left: -270px;
      }

      .modality {
        margin-left: 100px;
        img {
          filter: invert();
        }
      }
    }

    #companyProfile {
      position: relative;
    }

    .applyCard {
      display: grid;
      align-items: center;
      position: absolute;

      top: 0;
      right: 0;
      margin-top: 225px;
      margin-right: 40px;

      background: #ffffff;
      box-shadow: 0px 5px 10px rgba(106, 106, 106, 0.15);
      border-radius: 4px;

      img {
        margin: 24px 70px 8px 70px;
        margin-bottom: 34px;
        max-width: 188px;
        max-height: 140px;
      }

      button[type="submit"] {
        margin: 24px 16px;
        height: 44px;
        background: var(--purpleDark);
        font-family: "Helvetica-Bold";
        font-size: 18px;
        color: #ffffff;
        border: none;
        border-radius: 4px;
        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }

    #jobDescription,
    #companyDescription,
    #skills,
    #schedule,
    #accessibility {
      margin-left: 40px;
      margin-right: 345px;
      border-bottom: 2px solid #e5e5ea;
      padding-bottom: 50px;

      .title {
        font-family: "Helvetica-Bold", sans-serif;
        font-size: 30px;
        margin-bottom: 24px;
        margin-top: 40px;
      }

      .text {
        font-family: "Helvetica", sans-serif;
        font-size: 20px;
      }
    }

    #accessibility {
      border: none;
    }

    #jobDescription {
      margin-top: 80px;
    }

    #skills {
      .title {
        font-family: "Helvetica-Bold", sans-serif;
        font-size: 30px;
        padding-bottom: 16px;
      }

      .skills {
        margin-left: 16px;
        font-family: "Helvetica", sans-serif;
        font-size: 20px;
      }

      .skills:not(:last-child) {
        margin-bottom: 8px;
      }
    }

    #documents {
      display: grid;
      margin-top: 100px;
      margin-left: 40px;

      .linkedin {
        display: grid;

        span {
          display: flex;
          align-items: center;

          font-family: "Helvetica", sans-serif;
          font-size: 16px;

          img {
            margin-right: 10px;
          }
        }

        input[type="text"] {
          height: 44px;
          border: 1px solid #d1d1d6;
          border-radius: 4px;
          background: var(--gray);
          margin-top: 12px;
          max-width: 522px;
        }
      }

      .curriculum {
        display: grid;
        margin-bottom: 56px;
        margin-top: 32px;

        span {
          display: flex;
          align-items: center;

          font-family: "Helvetica", sans-serif;
          font-size: 16px;

          img {
            margin-right: 10px;
          }
        }

        input[type="file"] {
          height: 24px;
          border: 1px solid #d1d1d6;
          border-radius: 4px;
          background: var(--gray);
          margin-top: 12px;
          text-align: center;
          max-width: 522px;
        }

        #file-upload-button {
          font-family: "Helvetica", sans-serif;
          font-size: 40px;
        }
      }

      .submitButton {
        font-family: "Helvetica-Bold", sans-serif;
        color: var(--gray);

        border: none;
        border-radius: 4px;
        margin-top: 24px;
        max-width: 296px;

        font-size: 18px;
        font-weight: 700;
        line-height: 40px;
        padding: 8px 14px;
        background: var(--purpleDark);

        transition: filter 0.1s;

        &:hover {
          filter: brightness(0.8);
        }
      }
    }

    #schedule {
      position: absolute;
      right: 0;
      top: 65%;
      border: none;
    }
  }
`;
