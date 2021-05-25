import styled from "styled-components";

export const Container = styled.div`
  .socialMedia {
    background: #000000;

    .socialMediaLink:nth-last-child(2) {
      margin: 0 16px 0 16px;
    }

    div {
      display: flex;
      justify-content: start;
      align-content: center;
      padding: 18px;
    }

    .socialMediaLink {
      background: transparent;
    }
  }

  .socialMediaLogo {
    width: 32px;
    height: 32px;
  }
`;
