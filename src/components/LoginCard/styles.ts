import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  position: absolute;

  @media (max-width: 800px) {
    z-index: 999;

    margin-top: 54px;
    overflow: hidden;
  }

  @media (min-width: 800px) {
    z-index: 9999;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const Content = styled.div`
  @media (max-width: 800px) {
    height: 100vh;
    position: fixed;
    width: 100%;
    padding: 24px 16px;

    background: #ffffff;

    .goBack {
      font-family: "September", sans-serif;
      font-size: 20px;
      color: #121212;
      display: flex;
      align-items: center;
      margin-bottom: 32px;
    }

    .pathVector {
      margin-right: 16px;
    }

    .formLogin {
      p {
        font-family: "Helvetica-Bold", sans-serif;
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 8px;
      }

      input[type="email"],
      input[type="password"] {
        width: 100%;
        height: 42px;
        border: 1px solid #d1d1d6;
        border-radius: 4px;
        font-family: "Helvetica", sans-serif;
        font-size: 14px;
        line-height: 20px;
        padding: 11px 16px;
        margin-bottom: 24px;
      }
    }

    .forgotPassword {
      display: flex;
      font-family: "Helvetica", sans-serif;
      font-size: 12px;
      text-decoration: underline;
      line-height: 20px;

      a {
        color: #121212;
      }
    }

    button[type="submit"] {
      display: flex;
      margin: 40px 16px 32px 16px;
      padding: 8px 121px;

      font-family: "Helvetica-Bold", sans-serif;
      font-size: 18px;
      line-height: 28px;
      background: var(--purpleDark);
      border: none;
      border-radius: 4px;
      color: var(--gray);
    }

    .signIn {
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        font-family: "Helvetica", sans-serif;
        font-size: 14px;
        color: var(--purpleDark);
      }

      a {
        font-family: "Helvetica", sans-serif;
        font-size: 14px;
        font-weight: 700;
        color: var(--purpleDark);
        text-decoration: underline;
        margin-left: 8px;
      }
    }
  }

  @media (min-width: 800px) {
    position: fixed;
    padding: 90px 24px;
    max-width: 460px;
    max-height: 591px;

    background: #ffffff;

    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .goBack {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 32px;

      .pathVector {
        display: none;
      }

      span {
        font-family: "September", sans-serif;
        font-size: 20px;
        color: #121212;
      }
    }

    .formLogin {
      display: grid;
      p {
        font-family: "Helvetica-Bold", sans-serif;
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 8px;
      }

      input[type="email"],
      input[type="password"] {
        width: 412px;
        height: 42px;
        margin-bottom: 24px;
        padding: 11px 16px;

        border: 1px solid #d1d1d6;
        border-radius: 4px;

        font-family: "Helvetica", sans-serif;
        font-size: 14px;
        line-height: 20px;
      }
    }

    .forgotPassword {
      display: flex;
      font-family: "Helvetica", sans-serif;
      font-size: 12px;
      text-decoration: underline;
      line-height: 20px;

      a {
        color: #121212;
      }
    }

    button[type="submit"] {
      display: flex;
      margin: 48px auto 16px auto;
      padding: 8px 121px;
      font-family: "Helvetica-Bold", sans-serif;
      font-size: 18px;
      line-height: 28px;
      background: var(--purpleDark);
      border: none;
      border-radius: 4px;
      color: var(--gray);
      text-align: center;
    }

    .signIn {
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        font-family: "Helvetica", sans-serif;
        font-size: 14px;
        color: var(--purpleDark);
      }

      a {
        font-family: "Helvetica-Bold", sans-serif;
        color: var(--purpleDark);
        padding-left: 8px;
      }
    }
  }
`;
