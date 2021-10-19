import { useState } from "react";
import { Switch, Route } from "react-router";

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
        <Switch>
          <Route path="/" exact>
            <SortBar
              setIsPageShowing={setIsPageShowing}
              isPageShowing={isPageShowing}
            />
            <BookList setIsHome={setIsHome} isPageShowing={isPageShowing} />
          </Route>
          <Route path="/book/:id" exact>
            <BookExtension setIsHome={setIsHome} />
          </Route>
        </Switch>
      </main>
    </ThemeProvider>
  );
};

export default App;
