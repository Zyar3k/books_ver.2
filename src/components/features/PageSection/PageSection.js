import React from "react";

import { PageSectionStyled } from "./PageSection.styled";

// TODO reading time

const PageSection = ({ page }) => {
  return (
    <PageSectionStyled>
      <h3>Ilość stron: {page}</h3>
      <h3>Czas czytania: 3h20min</h3>
    </PageSectionStyled>
  );
};

export default PageSection;
