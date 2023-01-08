import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { ScrollToTopStyled } from "./ScrollToTop.styled";

const ScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisibility] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) {
    return false;
  }
  return (
    <ScrollToTopStyled onClick={scrollToTop} data-tip="Przewiń do góry">
      <i className="fas fa-chevron-up"></i>
      <ReactTooltip />
    </ScrollToTopStyled>
  );
};

export default ScrollToTop;
