import React, { useContext, useEffect, useState } from "react";

import { GlobalContext } from "../../context/GlobalContext";

import { InputStyled } from "./Find.styled";

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
    <InputStyled type="text" placeholder="Search..." onChange={handleChange} />
  );
};

export default Find;
