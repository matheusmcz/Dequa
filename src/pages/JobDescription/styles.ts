import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

export const Content = styled.div`
  @media (max-width: 800px) {
    margin: 0 16px;

    border-bottom: 1px solid #d1d1d6;

    .goBack {
      margin-top: 24px;
      display: flex;
      align-items: center;

      a {
        font-family: "September";
        font-size: 20px;
        color: #000000;
      }

      span:first-of-type {
        display: none;
      }

      img {
        margin-right: 18px;
      }
    }

    .companyProfilePicture {
      margin-top: 40px;
      width: 100%;
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
  }
`;
