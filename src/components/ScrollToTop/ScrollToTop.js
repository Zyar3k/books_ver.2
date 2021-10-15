import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

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
    <ScrollToTopStyled onClick={scrollToTop}>
      <i className="fas fa-chevron-up"></i>
    </ScrollToTopStyled>
  );
};

export default ScrollToTop;
