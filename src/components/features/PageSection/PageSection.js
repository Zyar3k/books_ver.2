import React from "react";

import { PageSectionStyled } from "./PageSection.styled";

function timeCounter(params) {
  let page = params;
  let hours = Math.floor(page / 60);
  let minutes = page % 60;
  params = ` ${hours}h: ${minutes}m`;
  return params;
}

const PageSection = ({ page }) => {
  return (
    <PageSectionStyled>
      <h3>Ilość stron: {page}</h3>
      <h3>Czas czytania: {timeCounter(page)}</h3>
    </PageSectionStyled>
  );
};

export default PageSection;
