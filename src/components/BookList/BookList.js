import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";

import { BookListStyled } from "./BookList.styled";

import BookTile from "./BookTile";

const BookList = () => {
  const { books, filtered, all, searched } = useContext(GlobalContext);
  const [displayData, setDisplayData] = useState(books);

  useEffect(() => {
    if (searched) {
      setDisplayData(searched);
    } else if (all === true) {
      setDisplayData(books);
    } else if (all !== true) {
      setDisplayData(filtered);
    }
  }, [books, filtered, searched, all]);

  return (
    <BookListStyled>
      {displayData.map((book) => (
        <BookTile key={book._id} book={book} />
      ))}
    </BookListStyled>
  );
};

export default BookList;
