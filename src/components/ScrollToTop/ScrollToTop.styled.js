import styled from "styled-components";

export const ScrollToTopStyled = styled.div`
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.secondaryColor};
  z-index: 100;
  box-shadow: 0 0 8px $fontLighterColor;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  .fa-chevron-up {
    font-size: 20px;
    font-weight: bold;
    animation: scrollTop 0.5s alternate ease infinite;
  }

  @keyframes scrollTop {
    from {
      transform: translateY(2px);
    }
    to {
      transform: translateY(-2px);
    }
  }
`;
