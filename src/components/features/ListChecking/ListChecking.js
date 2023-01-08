import React from "react";

import { ListCheckingStyled } from "./ListChecking.styled";

const ListChecking = ({ book }) => {
  const list = book.list;

  return (
    <ListCheckingStyled>
      <h3>Na listach:</h3>
      {list.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </ListCheckingStyled>
  );
};

export default ListChecking;
