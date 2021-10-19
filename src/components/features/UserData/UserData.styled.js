import styled from "styled-components";
import { device } from "../../../device";

export const UserDataStyled = styled.div`
  margin-top: 30px;

  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 50%;

  .userActivity {
    display: flex;

    img {
      height: 40px;
      margin: 0 10px;
    }
  }

  .buttonWrapper {
    button {
      padding: 10px 20px;
      background: #be3144;
      border: none;
      border-radius: 12px;
      color: white;
      cursor: pointer;
      box-shadow: 1px 1px 10px #a9abaf, 1px 1px 10px #a9abaf;

      &:hover {
        box-shadow: 1px 1px 4px #a9abaf;
      }
    }
  }

  @media ${device.mobileL} {
    margin-top: 10px;
  }
`;
