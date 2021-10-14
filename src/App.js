import { Switch, Route } from "react-router";

import BookList from "./components/BookList/BookList";
import BookExtension from "./components/BookExtension/BookExtension";
import { ContextProvider } from "./context/GlobalContext";
import Header from "./components/Header/Header";
import SortList from "./components/SortList/SortList";

const App = () => {
  return (
    <ContextProvider>
      <Header />
      <SortList />
      <main className="container">
        <Switch>
          <Route path="/" component={BookList} exact />
          <Route path="/book/:id" component={BookExtension} />
        </Switch>
      </main>
    </ContextProvider>
  );
};

export default App;
