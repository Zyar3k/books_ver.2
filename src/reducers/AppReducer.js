export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const RENDER_LIST = "RENDER_LIST";
export const SORT_BY = "SORT_BY";

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
    case SORT_BY:
      const value = action.payload.name;
      let sortedList;
      if (state.all) {
        sortedList = state.books;
      } else {
        sortedList = state.filtered;
      }
      let sorted;
      if (value === "nameDown") {
        sorted = sortedList.sort((a, b) =>
          a.author.name < b.author.name ? "1" : "-1"
        );
      } else if (value === "nameUp") {
        sorted = sortedList.sort((a, b) =>
          a.author.name > b.author.name ? "1" : "-1"
        );
      } else if (value === "lastNameDown") {
        sorted = sortedList.sort((a, b) =>
          a.author.lastName < b.author.lastName ? "1" : "-1"
        );
      } else if (value === "lastNameUp") {
        sorted = sortedList.sort((a, b) =>
          a.author.lastName > b.author.lastName ? "1" : "-1"
        );
      } else if (value === "pageDown") {
        sorted = sortedList.sort((a, b) => (a.page < b.page ? "1" : "-1"));
      } else if (value === "pageUp") {
        sorted = sortedList.sort((a, b) => (a.page > b.page ? "1" : "-1"));
      }

      return {
        ...state,
      };

    default:
      return state;
  }
}
