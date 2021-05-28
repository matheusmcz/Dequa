import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 800px) {
    display: grid;
    background: var(--gray);
    border-radius: 10px;
    margin-bottom: 40px;

    header img {
      max-width: 328px;
      max-height: 111px;
      width: 100%;
      border-radius: 10px;
    }

    .cardInfo {
      padding: 8px;
      h4 {
        font-family: "September", sans-serif;
        font-weight: 400;
        font-size: 18px;
      }
    }

    .date {
      display: flex;
      align-items: center;

      p {
        font-family: "Helvetica", sans-serif;
        font-size: 12px;
        margin-left: 10px;
      }
    }
  }
`;
