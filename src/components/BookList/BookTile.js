import React from "react";

import { BookTileStyled } from "./BookTile.styled";

const BookTile = ({ book }) => {
  const { name, lastName } = book.author;
  return (
    <BookTileStyled>
      <h3>{book.title}</h3>
      <em>
        {name} {lastName}
      </em>
    </BookTileStyled>
  );
};

export default BookTile;
