import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { useParams } from "react-router";
import BookContent from "../BookContent/BookContent";

import { useLocation } from "react-router-dom";

const BookExtension = ({ setIsHome }) => {
  const { books } = useContext(GlobalContext);
  const params = useParams();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (path !== "/") {
      setIsHome(false);
    } else {
      setIsHome(true);
    }
  }, [path, setIsHome]);

  const bookElement = books
    .filter((book) => params.id.includes(book._id))
    .map((book) => <BookContent key={book._id} book={book} />);

  return <>{bookElement}</>;
};

export default BookExtension;
