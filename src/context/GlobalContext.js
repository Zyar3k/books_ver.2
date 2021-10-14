import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

import appReducer, {
  FETCH_ERROR,
  FETCH_SUCCESS,
  RENDER_LIST,
  SORT_BY,
} from "../reducers/AppReducer";

const initialState = {
  loading: true,
  error: "",
  books: [],
  filtered: null,
  all: true,
  bookStars: 0,
};

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  // console.log(state);

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

  return (
    <GlobalContext.Provider
      value={{
        state,
        books: state.books,
        filtered: state.filtered,
        filterByList,
        sortBy,
        all: state.all,
        bookStars: state.bookStars,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
