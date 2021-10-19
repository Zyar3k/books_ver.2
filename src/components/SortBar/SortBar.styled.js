import styled from "styled-components";
import { device } from "../../device";

export const StyledSortBar = styled.div`
  position: sticky;
  top: 100px;
  background: transparent;
  color: #d3d6db;
  z-index: 10;

  @media ${device.tablet} {
    top: 80px;
  }
`;

export const SortWrapper = styled.div`
  background: #be3144;
  display: flex;
  padding: 10px 0;
  justify-content: space-around;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;

  @media ${device.tablet} {
    align-items: center;
    flex-direction: column;
  }
`;

export const SortItem = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-around;
  border-left: 1px solid #d3d6db;

  &:first-of-type {
    border-left: none;
  }

  h4 {
    font-weight: 300;
  }

  button {
    border: none;
    background: none;
    color: #d3d6db;
    font-size: 18px;
    cursor: pointer;
  }

  @media ${device.laptop} {
    h4 {
      font-size: 12px;
    }

    button {
      font-size: 12px;
    }
  }

  @media ${device.tablet} {
    border-left: none;
    margin: 10px 0;

    h4 {
      font-size: 16px;
    }

    button {
      font-size: 16px;
    }
  }
`;

export const ToggleButton = styled.button`
  border: none;
  height: 20px;
  width: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  background: #be3144;
  color: #d3d6db;
`;
