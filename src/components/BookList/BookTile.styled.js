import styled from "styled-components";
import { device } from "../../device";

export const BookTileStyled = styled.div`
  width: 500px;
  margin: 10px;
  border-radius: 12px;
  box-shadow: 1px 1px 10px ${(props) => props.theme.shadowColor};

  a {
    text-decoration: none;
    color: ${(props) => props.theme.textColor};
  }

  &:hover {
    box-shadow: 1px 1px 4px ${(props) => props.theme.shadowColor};
  }

  @media ${device.laptop} {
    width: 45%;
  }

  @media ${device.tablet} {
    width: 90%;
  }
`;

export const TitleBar = styled.div`
  position: relative;
  display: flex;
  align-content: center;
  justify-content: space-between;
  min-height: 70px;
  width: 100%;

  h3 {
    width: 70%;
    padding: 10px 20px;
  }
  p {
    flex: auto;
  }
  h3,
  p,
  button {
    display: flex;
    align-items: center;
  }

  p {
    margin-right: 70px;
    display: none;
  }

  button {
    position: absolute;
    right: 0;
    height: 70px;
    width: 70px;
    border-top-right-radius: 10px;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    display: none;
  }
`;
export const DescriptionBar = styled.div`
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;

  em {
    padding-bottom: 16px;
  }
`;
