import { useState } from "react";
import { Switch, Route } from "react-router";

import BookList from "./components/BookList/BookList";
import BookExtension from "./components/BookExtension/BookExtension";
import Header from "./components/Header/Header";
import SortBar from "./components/SortBar/SortBar";

import { ContextProvider } from "./context/GlobalContext";

const App = () => {
  const [isPageShowing, setIsPageShowing] = useState(false);

  return (
    <ContextProvider>
      <Header />
      <main className="container ">
        <SortBar
          setIsPageShowing={setIsPageShowing}
          isPageShowing={isPageShowing}
        />
        <Switch>
          <Route path="/" exact>
            <BookList isPageShowing={isPageShowing} />
          </Route>
          <Route path="/book/:id" component={BookExtension} />
        </Switch>
      </main>
    </ContextProvider>
  );
};

export default App;
