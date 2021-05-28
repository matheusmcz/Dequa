import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;

  .headerLogo {
    opacity: 0;
  }

  #headerDesktop {
    background: var(--softGreen);
  }

  @media (max-width: 800px) {
    .footerPages {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Content = styled.div`
  @media (max-width: 800px) {
    .eventsTitle {
      display: flex;
      align-items: center;
      margin: 60px 16px 40px 16px;
      padding-bottom: 24px;

      font-family: "September", sans-serif;
      font-weight: 400;
      font-size: 24px;

      border-bottom: 1px solid #d1d1d6;
    }
  }

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 0.3fr 1fr;
    grid-gap: 85px;
    margin-bottom: 100px;
  }
`;

export const DashBoard = styled.div`
  @media (max-width: 800px) {
    display: grid;
    margin: 0 16px;
  }

  @media (min-width: 800px) {
    .eventsTitle {
      font-size: 36px;
      line-height: 40px;
      font-weight: 400;
      margin: 100px 0 40px 0;
      font-family: "September", sans-serif;
      border-bottom: 1px solid #d1d1d6;
      padding-bottom: 30px;
    }
  }
`;

export const EventsList = styled.div`
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 58px;
  }
`;
