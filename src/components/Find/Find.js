import React, { useContext, useEffect, useState } from "react";

import { GlobalContext } from "../../context/GlobalContext";

const Find = () => {
  const { searchBook, clearFilter } = useContext(GlobalContext);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue !== "") {
      searchBook(searchValue);
    } else {
      clearFilter();
    }

  }, [searchValue]);

  return (
    <div>
      <input type="text" placeholder="Search..." onChange={handleChange} />
    </div>
  );
};

export default Find;
