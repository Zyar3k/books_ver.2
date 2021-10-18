import React from "react";

import { ListCheckingStyled } from "./ListChecking.styled";

const ListChecking = ({ book }) => {
  const { bbc, emp, gan, ama, pozy } = book;

  const array = [
    { name: "AMAZON", bool: ama },
    { name: "BBC", bool: bbc },
    { name: "EMPIK", bool: emp },
    { name: "GANDALF", bool: gan },
    { name: "POZYCJE", bool: pozy },
  ];

  return (
    <ListCheckingStyled>
      {array.map((item, index) =>
        item.bool ? <span key={index}>{item.name}</span> : null
      )}
    </ListCheckingStyled>
  );
};

export default ListChecking;
