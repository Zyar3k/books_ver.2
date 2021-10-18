import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { useHistory } from "react-router-dom";
import BookContent from "../BookContent/BookContent";

const BookExtension = () => {
  const { books } = useContext(GlobalContext);

  const history = useHistory();
  const currBookId = history.location.pathname.slice(6);

  const bookElement = books
    .filter((book) => currBookId.includes(book._id))
    .map((book) => <BookContent key={book._id} book={book} />);

  return <>{bookElement}</>;
};

export default BookExtension;
