import styled from "styled-components";

export const StyledSidebar = styled.aside`
  /* position: relative; */
  padding: 0 10px;
  display: flex;
  position: sticky;
  top: 100px;
  left: 0;
  right: 0;
`;

export const ToggleButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  height: 40px;
  width: 40px;
  cursor: pointer;
  font-size: 18px;
  background: none;
  border: 4px solid #fdac61;
  color: #fdac61;

  &:hover {
    color: #ff893a;
    border: 4px solid #ff893a;
  }
`;

export const SortWrapper = styled.div`
  margin-top: 40px;
  h3 {
    margin-top: 10px;
    text-align: center;
  }
`;

export const SortItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  height: 40px;
  margin: 10px 0;
  border-bottom: 2px solid #fdac61;

  h4 {
    text-align: left;
    width: 60%;
    height: 100%;
    padding-left: 10px;
    display: flex;
    align-items: center;
  }

  button {
    width: 20%;
    color: #fdac61;
    font-size: 18px;
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      color: #ff893a;
    }
  }
`;
