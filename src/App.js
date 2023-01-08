import { useState } from "react";
import { Routes, Route } from "react-router";

import BookList from "./components/BookList/BookList";
import BookExtension from "./components/BookExtension/BookExtension";
import Header from "./components/Header/Header";
import SortBar from "./components/SortBar/SortBar";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "#be3144",
  secondaryColor: "#d3d6db",
  textColor: "#303841",
  shadowColor: "#a9abaf",
  isTopColor: "#ffcdab",
};

const App = () => {
  const [isPageShowing, setIsPageShowing] = useState(false);
  const [isHome, setIsHome] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <Header isHome={isHome} />
      <main className="container">
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <SortBar
                  setIsPageShowing={setIsPageShowing}
                  isPageShowing={isPageShowing}
                />
                <BookList setIsHome={setIsHome} isPageShowing={isPageShowing} />
              </>
            }
          ></Route>
          <Route
            path="/book/:id"
            exact
            element={<BookExtension setIsHome={setIsHome} />}
          />
        </Routes>
      </main>
    </ThemeProvider>
  );
};

export default App;
