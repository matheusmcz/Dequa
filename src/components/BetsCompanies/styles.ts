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
