import styled from "styled-components";

export const Container = styled.div``;

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
    }

    .jobInformation {
      display: grid;

      .title {
        font-family: "Helvetica-Bold", sans-serif;
        font-size: 24px;
      }

      .company {
        font-family: "Helvetica-Bold", sans-serif;
        font-size: 20px;
      }
    }
  }
`;
