import styled from "styled-components";

import { device } from "../../device";

export const StyledHeader = styled.header`
  background-color: #be3144;
  color: #d3d6db;
  height: 100px;
  text-transform: uppercase;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 1px 1px 10px #a9abaf;

  .toggleIconWrapper {
    display: none;
  }

  @media ${device.tablet} {
    height: 50px;

    .toggleIconWrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #d3d6db;
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
      color: #d3d6db;
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
    color: #303841;
    text-shadow: 0 0 12px #fff, 0 0 24px #fff;
  }

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: calc(100vh - 50px);
    background-color: #be3144;

    width: 70%;
    left: -90%;
    opacity: 1;
    transition: all 0.5s ease;

    &.active {
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 10000;
    }
  }
`;
