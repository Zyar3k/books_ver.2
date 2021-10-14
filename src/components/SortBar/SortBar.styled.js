import styled from "styled-components";

export const StyledSortBar = styled.div`
  position: sticky;
  top: 100px;
  background: #d3d6db;
  color: #d3d6db;
`;

export const SortWrapper = styled.div`
  background: #be3144;
  display: flex;
  padding: 10px 0;
  justify-content: space-around;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
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
    /* border: 1px solid black; */
    background: none;
    color: #d3d6db;
    font-size: 18px;
    cursor: pointer;
  }
`;

export const ToggleButton = styled.button`
  border: none;
  height: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d3d6db;
  width: 100%;

  /* width: 200px;
  display: flex;
  justify-content: space-around; */
`;
