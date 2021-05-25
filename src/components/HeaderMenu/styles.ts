import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  #menuToggle {
    display: block;
    position: relative;

    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
  }

  #menuToggle a {
    text-decoration: none;
    color: #8e8e93;

    &:hover {
      transition: filter 0.2s;
      filter: brightness(0.9);
    }
  }

  #menuToggle input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;

    cursor: pointer;

    opacity: 0;
    z-index: 1000;

    -webkit-touch-callout: none;
  }

  #menuToggle input:checked {
    top: -10px;
    left: 224px;
  }

  #menuToggle span {
    display: block;
    width: 24px;
    height: 3px;
    margin-bottom: 5px;
    position: relative;

    background: var(--gray);
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: cubic-bezier(0.77, 0.2, 0.05, 1),
      transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }

  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  #menuToggle input:checked ~ span {
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1) 0.3s;
    opacity: 1;
    transform: rotate(45deg) translate(0px, -9px);
    background: #292929;
    position: absolute;
    right: -260px;
    top: 5px;
  }

  #menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  #menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, 10px);
  }

  #menu {
    position: absolute;
    width: 300px;
    margin: -39px 0 0 -15px;
    padding: 0px 54px 36vh 16px;
    padding-top: 125px;

    background: #ffffff;
    list-style-type: none;

    transform-origin: 0% 0%;
    transform: translate(-100%, 0);

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }

  input:checked ~ #menu {
    transition: box-shadow 0.2s;
    box-shadow: 200px 0 rgba(0, 0, 0, 0.5);
  }

  #menu li {
    font-size: 16px;
    font-family: "Helvetica", sans-serif;
    padding-bottom: 24px;
    border-bottom: 1px solid #d1d1d6;
    margin-top: 24px;
  }

  #menuToggle input:checked ~ ul {
    transform: none;
    position: fixed;
  }

  .menuName {
    display: flex;
    position: absolute;
    margin: -94px 0 0 0px;
    font-family: "September", sans-serif;
    font-size: 20px;
    color: #000000;
  }

  .footerMenu {
    border: none;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;
