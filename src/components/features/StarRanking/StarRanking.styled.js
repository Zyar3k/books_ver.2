import styled from "styled-components";
import { device } from "../../../device";

export const StarRankingStyled = styled.div`
  display: flex;
  margin: 20px 0;
  padding: 10px;

  img {
    padding: 6px;
    height: 80px;
  }

  @media ${device.tablet} {
    margin: 10px 0;
    padding: 0;
    img {
      height: 50px;
    }
  }

  @media ${device.mobileL} {
    img {
      height: 34px;
    }
  }

  @media ${device.mobileM} {
    img {
      height: 28px;
    }
  }
`;
