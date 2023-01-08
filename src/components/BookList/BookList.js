import { useContext, useEffect, useState, lazy, Suspense } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { useLocation } from "react-router-dom";

import { BookListStyled } from "./BookList.styled";

const BookTile = lazy(() => import("./BookTile"));

const BookList = ({ isPageShowing, setIsHome }) => {
  const { books, filtered, all, searched } = useContext(GlobalContext);
  const [displayData, setDisplayData] = useState(books);

  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (path === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }

    if (searched) {
      setDisplayData(searched);
    } else if (all === true) {
      setDisplayData(books);
    } else if (all !== true) {
      setDisplayData(filtered);
    }
  }, [books, filtered, searched, all, path, setIsHome]);

  return (
    <Suspense fallback="Loading...">
      <BookListStyled>
        {displayData.map((book) => (
          <BookTile key={book._id} book={book} isPageShowing={isPageShowing} />
        ))}

        <ScrollToTop />
      </BookListStyled>
    </Suspense>
  );
};

export default BookList;
