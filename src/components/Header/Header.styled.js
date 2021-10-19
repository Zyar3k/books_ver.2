import styled from "styled-components";

import { device } from "../../device";

export const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.secondaryColor};
  height: 100px;
  text-transform: uppercase;
  position: sticky;
  top: 0;
  box-shadow: 1px 1px 10px ${(props) => props.theme.shadowColor};
  z-index: 10;

  .toggleIconWrapper {
    display: none;
  }

  @media ${device.tablet} {
    height: 50px;

    .toggleIconWrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme.secondaryColor};
      position: absolute;
      top: 5px;
      right: 5px;
      width: 40px;
      height: 40px;

      i {
        font-size: 24px;
        position: absolute;
      }
    }
  }

  @media ${device.mobileL} {
    height: 80px;
  }
`;

export const SiteTitle = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  a {
    text-decoration: none;

    h1 {
      margin: 0;
      padding: 0;
      font-family: "Diplomata SC", cursive;
      padding: 10px;
      letter-spacing: 2px;
      color: ${(props) => props.theme.secondaryColor};
    }
  }

  @media ${device.tablet} {
    a {
      position: absolute;
      right: 50px;

      h1 {
        font-size: 24px;
      }
    }
  }

  @media ${device.mobileL} {
    flex-direction: column;
    height: 80px;

    a {
      right: unset;
      left: 50%;
      transform: translateX(-50%);
      top: 0;

      h1 {
        padding: 8px;
      }
    }
  }
`;

export const ListChosenWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 50px;

  label {
    width: 120px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .displayBox {
      font-weight: 800;
    }
  }
  input[type="radio"] {
    display: none;
  }

  input[type="radio"]:checked + label {
    color: ${(props) => props.theme.textColor};
    text-shadow: 0 0 12px #fff, 0 0 24px #fff;
  }

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: calc(100vh - 50px);
    position: absolute;
    background-color: ${(props) => props.theme.mainColor};
    width: 80%;
    left: -90%;
    opacity: 1;
    transition: all 0.5s ease;

    &.active {
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
    }
  }
`;
