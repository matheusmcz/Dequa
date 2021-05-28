import styled from "styled-components";

export const Container = styled.div`
  a {
    color: #000000;
  }

  @media (max-width: 800px) {
    display: grid;
    background: var(--gray);
    border-radius: 10px;
    margin-bottom: 40px;

    header img {
      max-height: 111px;
      width: 100%;
      border-radius: 10px;
    }

    .cardInfo {
      padding: 8px;

      .eventTitle {
        font-family: "September", sans-serif;
        font-weight: 400;
        font-size: 18px;
        margin-bottom: 8px;
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

    .description {
      display: none;
    }
  }

  @media (min-width: 800px) {
    max-width: 252px;
    background: var(--gray);
    border-radius: 10px;

    header img {
      max-width: 252px;
      max-height: 161px;
      border-radius: 10px;
    }

    .eventTitle {
      margin-bottom: 16px;
      font-family: "September", sans-serif;
      font-size: 18px;
      font-weight: 400;
    }

    .about {
      padding: 16px 8px;
    }

    .date {
      display: none;
    }

    .description {
      overflow: hidden;
      text-overflow: ellipsis;
      height: 120px;
      line-height: 24px;
      font-family: "Helvetica", sans-serif;
      font-size: 16px;
    }
  }
`;
