import React, { useEffect, useState } from "react";

import { BookTileStyled } from "./BookTile.styled";

const BookTile = ({ book }) => {
  const { name, lastName } = book.author;
  const [stars, setStars] = useState(0);

  useEffect(() => {
    if (book.ama) setStars((prev) => prev + 1);
    if (book.bbc) setStars((prev) => prev + 1);
    if (book.emp) setStars((prev) => prev + 1);
    if (book.gan) setStars((prev) => prev + 1);
    if (book.pozy) setStars((prev) => prev + 1);
  }, [book.ama, book.bbc, book.emp, book.gan, book.pozy]);

  return (
    <BookTileStyled>
      <h3>{book.title}</h3>
      <p>{book.page}</p>
      <em>
        {name} {lastName}
      </em>
      <b> Stars: {stars}</b>
    </BookTileStyled>
  );
};

export default BookTile;
