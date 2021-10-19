import styled from "styled-components";
import { device } from "../../../device";

export const ListCheckingStyled = styled.div`
  text-align: center;

  h3 {
    margin-bottom: 10px;
    color: ${(props) => props.theme.mainColor};
  }

  span {
    text-transform: uppercase;
    padding: 10px;
    margin: 10px 20px;
    font-weight: bold;
    font-size: 20px;
  }

  @media ${device.tablet} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    h3 {
      width: 100%;
    }

    span {
      padding: 6px;
      margin: 4px 10px;
      font-size: 16px;
    }
  }

  @media ${device.mobileM} {
    h3 {
      width: 100%;
      font-size: 12px;
    }

    span {
      padding: 6px;
      margin: 6px;
      font-size: 14px;
    }
  }
`;
