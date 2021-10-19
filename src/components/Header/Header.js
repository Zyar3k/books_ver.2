import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import Find from "../Find/Find";

import { StyledHeader, SiteTitle, ListChosenWrapper } from "./Header.styled";

const Header = ({ isHome }) => {
  const { filterByList } = useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState(false);

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

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <StyledHeader>
      <div className="container">
        <SiteTitle>
          <Find />
          <Link to="/">
            <h1>Books</h1>
          </Link>
        </SiteTitle>
        {isHome ? (
          <ListChosenWrapper className={isOpen && "active"}>
            {headerLists.map((list, index) => (
              <span key={index}>
                <input
                  type="radio"
                  id={list.id}
                  name="chosenList"
                  value={list.id}
                  onChange={list.func}
                  defaultChecked={list.defaultValue}
                  className="hideBox"
                />
                <label htmlFor={list.id}>
                  <div className="displayBox">{list.name}</div>
                </label>
              </span>
            ))}
          </ListChosenWrapper>
        ) : null}
      </div>
      <div className="toggleIconWrapper" onClick={handleToggle}>
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </StyledHeader>
  );
};

export default Header;
