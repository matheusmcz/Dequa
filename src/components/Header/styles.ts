import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 800px) {
    #headerMobile {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px;
      background: var(--softGreen);

      .menu {
        display: flex;
        align-items: center;
      }

      .searchAndLogin {
        display: flex;
        align-items: center;

        img:first-of-type {
          margin-right: 16px;
        }

        input {
          display: none;
        }

        img.search:hover {
          .mobileSearch {
            display: flex;
            width: 130px;
            height: 60px;
          }
        }
      }
    }

    #headerDesktop {
      display: none;
    }
  }

  @media (min-width: 800px) {
    #headerMobile {
      display: none;
    }

    z-index: 9999;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    width: 100%;

    #headerDesktop {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 14px 40px 0 40px;

      .menu {
        display: flex;

        button {
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          margin-left: 54px;

          a {
            margin-left: 10px;
            font-family: "Helvetica-Bold", sans-serif;
            color: var(--gray);
          }
        }
        .inputMenu {
          position: relative;
          display: flex;
          align-items: center;

          img {
            position: absolute;
          }

          input {
            border: none;
            border-bottom: 1px solid var(--gray);
            line-height: 28px;
            background: transparent;
            max-width: 200px;

            font-family: "Helvetica-Bold", sans-serif;
            font-size: 18px;
            color: var(--gray);
            padding-left: 34px;
          }

          input::placeholder {
            font-family: "Helvetica-Bold", sans-serif;
            font-size: 18px;
            color: var(--gray);
          }
        }
      }
    }
  }
`;
