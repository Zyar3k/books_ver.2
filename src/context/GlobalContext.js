import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

import appReducer, {
  FETCH_ERROR,
  FETCH_SUCCESS,
  RENDER_LIST,
  SORT_BY,
  SEARCH_BOOK,
  CLEAR_FILTER,
} from "../reducers/AppReducer";

const initialState = {
  loading: true,
  error: "",
  books: [],
  filtered: null,
  all: true,
  bookStars: 0,
  searched: null,
};

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    axios
      .get(`${BASE_URL}books`)
      .then((res) => {
        dispatch({ type: FETCH_SUCCESS, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR });
      });
  }, []);

  const filterByList = (name) => {
    dispatch({ type: RENDER_LIST, payload: { name } });
  };

  const sortBy = (name) => {
    dispatch({ type: SORT_BY, payload: { name } });
  };

  const searchBook = (id) => {
    dispatch({ type: SEARCH_BOOK, payload: id });
  };
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
        books: state.books,
        filtered: state.filtered,
        filterByList,
        sortBy,
        searchBook,
        clearFilter,
        all: state.all,
        bookStars: state.bookStars,
        searched: state.searched,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
