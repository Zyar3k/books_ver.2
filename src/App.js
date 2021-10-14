
import { Switch, Route } from "react-router";

import BookList from "./components/BookList/BookList";
import BookExtension from "./components/BookExtension/BookExtension";
import { ContextProvider } from "./context/GlobalContext";
import Header from "./components/Header/Header";

import SortBar from "./components/SortBar/SortBar";

const App = () => {
  return (
    <ContextProvider>
      <Header />
      <main className="container ">
        <SortBar />
        <Switch>
          <Route path="/" component={BookList} exact />
          <Route path="/book/:id" component={BookExtension} />
        </Switch>
      </main>
    </ContextProvider>
  );
};

export default App;
