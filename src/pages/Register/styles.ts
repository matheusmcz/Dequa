import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  @media (max-width: 800px) {
    margin: 0 16px;
    .goBack {
      font-family: "September", sans-serif;
      font-size: 20px;
      color: #121212;
      display: flex;
      align-items: center;
      margin-top: 24px;
      margin-bottom: 32px;
    }

    .pathVector {
      margin-right: 16px;
    }

    .userTypeSelection {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: "Helvetica", sans-serif;
      font-size: 14px;
      line-height: 20px;

      padding: 0 32px;

      margin-bottom: 24px;

      list-style: none;

      li {
        position: relative;
        text-align: center;
      }

      li.active::after {
        position: absolute;
        content: "";
        height: 2px;
        width: 100%;
        background: #121212;
        left: 0;
        bottom: -2px;
        animation: appear 0.3s ease-in;
      }
    }

    @keyframes appear {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }
  }
`;
