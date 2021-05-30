import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  @media (min-width: 800px) {
    margin: 0 auto 108px auto;
    max-width: 680px;
    background: var(--gray);
    padding-left: 110px;
    padding-right: 110px;
  }
`;

export const Content = styled.div`
  @media (max-width: 800px) {
    .titleDesktop {
      display: none;
    }
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
      padding: 8px 121px;
      margin: 0 auto;
      background: var(--purpleDark);
      border: none;
      border-radius: 4px;

      font-family: "Helvetica-Bold", sans-serif;
      font-size: 18px;
      line-height: 28px;
      color: var(--gray);
    }
  }

  @media (min-width: 800px) {
    .titleDesktop {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 56px;
      margin-bottom: 8px;
      font-family: "September", sans-serif;
      font-size: 24px;
    }
    .registerDescription {
      font-family: "Helvetica", sans-serif;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 48px;
      text-align: center;
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
      font-size: 16px;
      line-height: 24px;
    }

    button[type="submit"] {
      display: flex;
      align-items: center;
      justify-content: center;

      max-width: 296px;
      padding: 8px 121px;
      margin: 32px auto 56px auto;
      background: var(--purpleDark);
      border: none;
      border-radius: 4px;

      font-family: "Helvetica-Bold", sans-serif;
      font-size: 18px;
      line-height: 28px;
      color: var(--gray);
    }
  }
`;
