import styled from "styled-components";

export const Container = styled.div`
  margin: 6px auto 24px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "September", sans-serif;
  font-weight: 400;
  font-size: 24px;

  @media (max-width: 800px) {
    .fallBack {
      display: none;
    }

    .forward {
      display: none;
    }
  }

  .leftArrow {
    margin-right: 16px;
    background: transparent;
    border: none;
    display: flex;
  }

  .fallBack {
    font-family: "September", sans-serif;
    font-size: 24px;
    margin-left: 8px;
  }

  .forward {
    font-family: "September", sans-serif;
    font-size: 24px;
    margin-right: 8px;
  }

  .rightArrow {
    margin-left: 16px;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
  }
`;
