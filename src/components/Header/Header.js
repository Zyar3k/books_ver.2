import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Find from "../Find/Find";

import { StyledHeader, SiteTitle, ListChosenWrapper } from "./Header.styled";

const Header = ({ isHome }) => {
  const { filterByList } = useContext(GlobalContext);

  const headerLists = [
    {
      id: "allBooks",
      name: "Pełna lista",
      defaultValue: true,
      func: () => filterByList("allBooks"),
    },
    {
      id: "amazon",
      name: "Amazon",
      defaultValue: false,
      func: () => filterByList("amazon"),
    },
    {
      id: "bbc",
      name: "BBC",
      defaultValue: false,
      func: () => filterByList("bbc"),
    },
    {
      id: "empik",
      name: "Empik",
      defaultValue: false,
      func: () => filterByList("empik"),
    },
    {
      id: "gandalf",
      name: "Gandalf",
      defaultValue: false,
      func: () => filterByList("gandalf"),
    },
    {
      id: "pozycje",
      name: "Pozycje",
      defaultValue: false,
      func: () => filterByList("pozycje"),
    },
  ];

  return (
    <StyledHeader>
      <div className="container">
        <SiteTitle>
          <Find />
          <h1>Books</h1>
        </SiteTitle>
        {isHome ? (
          <ListChosenWrapper>
            {headerLists.map((list, index) => (
              <div key={index}>
                <label htmlFor={list.id}>
                  <input
                    type="radio"
                    id={list.id}
                    name="chosenList"
                    value={list.id}
                    onChange={list.func}
                    defaultChecked={list.defaultValue}
                  />
                  {list.name}
                </label>
              </div>
            ))}
          </ListChosenWrapper>
        ) : null}
      </div>
    </StyledHeader>
  );
};

export default Header;
