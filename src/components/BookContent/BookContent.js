import React, { useState } from "react";
import StarRanking from "../features/StarRanking/StarRanking";
import ListChecking from "../features/ListChecking/ListChecking";
import UserData from "../features/UserData/UserData";
import PageSection from "../features/PageSection/PageSection";
import { Tooltip as ReactTooltip } from "react-tooltip";

import logoLC from "../../images/lc-logo.png";

import { BookContentStyled } from "./BookContent.styled.js";

const BookContent = ({ book }) => {
  const [isTop, setIsTop] = useState(false);

  const {
    title,
    author: { name, lastName },
    link,
    page,
  } = book;

  return (
    <BookContentStyled>
      <StarRanking book={book} setIsTop={setIsTop} />
      <div className={isTop ? "infoText isTop" : "infoText"}>
        <h1 className="title">{title}</h1>
        <em className="author">
          {name} {lastName}
        </em>
      </div>
      <div className="contentWrapper">
        <a href={link} target="_blank" rel="noreferrer">
          <img
            data-tip="Opis pozycji - LubimyCzytać.pl"
            src={logoLC}
            alt="lubimy-czytac_logo"
          />
        </a>
        <PageSection page={page} />
      </div>
      <ListChecking book={book} />
      <UserData book={book} />
      <ReactTooltip />
    </BookContentStyled>
  );
};

export default BookContent;
