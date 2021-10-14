export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const RENDER_LIST = "RENDER_LIST";

export default function appReducer(state, action) {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        loading: false,
        books: action.payload,
        error: "",
        all: true,
      };
    case FETCH_ERROR:
      return {
        loading: false,
        books: [],
        error: "Something went wrong!",
      };
    case RENDER_LIST:
      const listName = action.payload.name;

      switch (listName) {
        case "allBooks":
          return { ...state, books: state.books, filtered: [], all: true };
        case "amazon":
          return {
            ...state,
            filtered: state.books.filter((book) => book.ama === true),
            all: false,
          };
        case "bbc":
          return {
            ...state,
            filtered: state.books.filter((book) => book.bbc === true),
            all: false,
          };
        case "empik":
          return {
            ...state,
            filtered: state.books.filter((book) => book.emp === true),
            all: false,
          };
        case "gandalf":
          return {
            ...state,
            filtered: state.books.filter((book) => book.gan === true),
            all: false,
          };
        case "pozycje":
          return {
            ...state,
            filtered: state.books.filter((book) => book.pozy === true),
            all: false,
          };
      }

    default:
      return state;
  }
}
