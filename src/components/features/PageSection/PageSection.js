import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
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
      <h3 data-tip="Szacowany przelicznik: 200 słów na minutę, czyli 1 strona na 1 minutę czytania.">
        Czas czytania: {timeCounter(page)}
      </h3>
      <ReactTooltip />
    </PageSectionStyled>
  );
};

export default PageSection;
