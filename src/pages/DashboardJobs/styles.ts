import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;
  overflow-x: hidden;

  .headerLogo {
    opacity: 0;
  }

  #headerDesktop {
    background: var(--softGreen);
  }
`;

export const Content = styled.div`
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 0.3fr 1fr;
    grid-gap: 85px;
  }
`;

export const List = styled.div`
  @media (max-width: 800px) {
    margin-left: 16px;
    margin-right: 16px;
    display: grid;

    .title {
      font-family: "September", sans-serif;
      font-size: 24px;
      line-height: 32px;
      font-weight: 400;
      margin-top: 56px;
      margin-bottom: 24px;
      padding-bottom: 24px;
      width: 100%;

      border-bottom: 1px solid #d1d1d6;
    }
  }

  @media (min-width: 800px) {
    .title {
      font-size: 36px;
      line-height: 40px;
      font-weight: 400;
      margin: 100px 0 40px 40px;
      width: 100%;
      font-family: "September", sans-serif;
      border-bottom: 1px solid #d1d1d6;
      padding-bottom: 30px;
    }
  }
`;
