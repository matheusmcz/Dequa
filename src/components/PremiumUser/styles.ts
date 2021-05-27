import styled from "styled-components";

export const Container = styled.div`
  display: grid;
`;

export const Content = styled.div`
  @media (max-width: 800px) {
    .registerDescription {
      font-family: "Helvetica", sans-serif;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 32px;
    }

    .basicsInputStyles {
      display: flex;
      width: 100%;
      height: 42px;
      margin-bottom: 24px;
      padding: 11px 16px;

      background: var(--gray);
      border: 1px solid #d1d1d6;
      border-radius: 4px;

      font-family: "Helvetica", sans-serif;
      font-size: 14px;
      line-height: 20px;
    }

    button[type="submit"] {
      display: flex;
      width: 100%;
      padding: 8px 121px;
      background: var(--purpleDark);
      border: none;
      border-radius: 4px;

      p {
        font-family: "Helvetica", sans-serif;
        font-size: 18px;
        line-height: 28px;
        color: var(--gray);
      }
    }
  }
`;
