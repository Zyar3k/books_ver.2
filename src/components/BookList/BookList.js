import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";

import { BookListStyled } from "./BookList.styled";

import BookTile from "./BookTile";

const BookList = () => {
  const { books, filtered, all } = useContext(GlobalContext);
  const [displayData, setDisplayData] = useState(books);

  useEffect(() => {
    if (all === true) {
      setDisplayData(books);
    } else {
      setDisplayData(filtered);
    }
  }, [books, filtered]);

  return (
    <BookListStyled>
      {displayData.map((book) => (
        <BookTile key={book._id} book={book} />
      ))}
    </BookListStyled>
  );
};

export default BookList;
