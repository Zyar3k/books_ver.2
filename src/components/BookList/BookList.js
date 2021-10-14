import { useContext, useEffect, useState } from "react";

import { GlobalContext } from "../../context/StoreContext/GlobalContext";

const BookList = () => {
  const { books } = useContext(GlobalContext);
  console.log(books);
  return (
    <div>
      {books.map((book) => (
        <p>{book.title}</p>
      ))}
    </div>
  );
};

export default BookList;
