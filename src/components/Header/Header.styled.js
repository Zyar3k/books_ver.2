import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #be3144;
  color: #d3d6db;
  height: 100px;
  text-transform: uppercase;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 1px 1px 10px #a9abaf;
`;

export const SiteTitle = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  h1 {
    margin: 0;
    padding: 0;
    font-family: "Diplomata SC", cursive;
    padding: 10px;
    letter-spacing: 2px;
  }
`;

export const ListChosenWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;

  div {
    label {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      height: 100%;
      width: 100%;
      padding: 0 20px;

      input {
        margin-right: 10px;
      }
    }
  }
`;
