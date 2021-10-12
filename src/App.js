import Test from "./components/Test/Test";
import { ContextProvider } from "./context/StoreContext/GlobalContext";

const App = () => {
  return (
    <ContextProvider>
      <div>
        <h1>Start</h1>
        <Test />
      </div>
    </ContextProvider>
  );
};

export default App;
