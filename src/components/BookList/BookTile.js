import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { BookTileStyled, TitleBar, DescriptionBar } from "./BookTile.styled";

const BookTile = ({ book, isPageShowing }) => {
  const { name, lastName } = book.author;
  const [stars, setStars] = useState(0);
  console.log(isPageShowing);
  useEffect(() => {
    if (book.ama) setStars((prev) => prev + 1);
    if (book.bbc) setStars((prev) => prev + 1);
    if (book.emp) setStars((prev) => prev + 1);
    if (book.gan) setStars((prev) => prev + 1);
    if (book.pozy) setStars((prev) => prev + 1);
  }, [book.ama, book.bbc, book.emp, book.gan, book.pozy]);

  return (
    <BookTileStyled>
      <Link to={`book/${book._id}`}>
        <TitleBar>
          <h3>{book.title}</h3>
          <p> Stars: {stars}</p>
          <button>Readed</button>
        </TitleBar>
        <DescriptionBar>
          <em>
            {name} {lastName}
          </em>
          {isPageShowing && <p>Liczba stron: {book.page}</p>}
        </DescriptionBar>
      </Link>
    </BookTileStyled>
  );
};

export default BookTile;
