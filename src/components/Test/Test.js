import { useContext } from "react";
import { GlobalContext } from "../../context/StoreContext/GlobalContext";

const Test = () => {
  const { state } = useContext(GlobalContext);

  console.log(state);
  return (
    <div>
      <h1>test</h1>
    </div>
  );
};

export default Test;
