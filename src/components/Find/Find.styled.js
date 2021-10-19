import styled from "styled-components";
import { device } from "../../device";

export const InputStyled = styled.input`
  position: absolute;
  left: 20px;
  height: 36px;
  border: none;
  font-size: 14px;
  border-radius: 8px;
  padding-left: 10px;

  @media ${device.tablet} {
    left: 10px;
    height: 30px;
    width: 140px;
  }

  @media ${device.mobileL} {
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
