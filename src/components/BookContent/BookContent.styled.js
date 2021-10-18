import styled from "styled-components";

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
`;
