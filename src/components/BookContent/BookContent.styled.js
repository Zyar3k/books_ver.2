import styled from "styled-components";
import { device } from "../../device";

export const BookContentStyled = styled.div`
  min-height: 80vh;
  margin: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  box-shadow: 1px 1px 10px #a9abaf;

  .infoText {
    text-align: center;

    .title {
      padding: 10px;
      font-size: 46px;
    }

    .author {
      padding: 10px;
      font-size: 30px;
    }

    &.isTop {
      border: 10px solid goldenrod;
      border-radius: 30px;
      background: #ffcdab;
      padding: 20px 40px;
    }
  }

  .contentWrapper {
    display: flex;
    align-items: center;
    padding: 30px;

    a {
      text-decoration: none;
      margin-right: 40px;
    }
  }

  @media ${device.laptop} {
    min-height: 88vh;
  }
  @media ${device.tablet} {
    min-height: 80vh;
    margin: 10px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;

    .infoText {
      text-align: center;

      .title {
        padding: 6px;
        font-size: 28px;
      }

      .author {
        padding: 6px;
        font-size: 20px;
      }

      &.isTop {
        border: 4px solid goldenrod;
        border-radius: 20px;

        padding: 10px 40px;
      }
    }

    .contentWrapper {
      flex-direction: column-reverse;

      a {
        margin-right: 0;
        margin-top: 10px;
      }
    }
  }

  @media ${device.mobileL} {
    .contentWrapper {
      a {
        img {
          height: 20px;
        }
      }
    }
  }

  @media ${device.mobileM} {
    .infoText {
      text-align: center;

      .title {
        padding: 6px;
        font-size: 20px;
      }

      .author {
        padding: 6px;
        font-size: 16px;
      }

      &.isTop {
        border: 2px solid goldenrod;
        border-radius: 10px;
        padding: 10px 30px;
      }
    }
    .contentWrapper {
      padding: 6px;
    }
  }
`;
