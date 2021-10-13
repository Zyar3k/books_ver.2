import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #be3144;
  color: #d3d6db;
  height: 100px;
  text-transform: uppercase;
`;

export const SiteTitle = styled.div`
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 0;
    padding: 0;
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
