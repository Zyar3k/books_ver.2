import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const SortList = () => {
  const { sortBy } = useContext(GlobalContext);
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <label>
          <button onClick={() => sortBy("nameUp")}>↑</button>
        </label>
        <h3>name</h3>
        <label>
          <button onClick={() => sortBy("nameDown")}>↓</button>
        </label>
      </div>
      <div>
        <label>
          <button onClick={() => sortBy("lastNameUp")}>↑</button>
        </label>
        <h3>lastname</h3>
        <label>
          <button onClick={() => sortBy("lastNameDown")}>↓</button>
        </label>
      </div>
      <div>
        <label>
          <button onClick={() => sortBy("pageUp")}>↑</button>
        </label>
        <h3>page</h3>
        <label>
          <button onClick={() => sortBy("pageDown")}>↓</button>
        </label>
      </div>
    </div>
  );
};

export default SortList;
