import { useState } from "react";
import { Switch, Route } from "react-router";

import BookList from "./components/BookList/BookList";
import BookExtension from "./components/BookExtension/BookExtension";
import Header from "./components/Header/Header";
import SortBar from "./components/SortBar/SortBar";

const App = () => {
  const [isPageShowing, setIsPageShowing] = useState(false);
  const [isHome, setIsHome] = useState(true);

  return (
    <>
      <Header isHome={isHome} />
      {/* <main className="container">
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
      </main> */}
    </>
  );
};

export default App;
