import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

import { StyledHeader, SiteTitle, ListChosenWrapper } from "./Header.styled";

const Header = () => {
  const { filterByList } = useContext(GlobalContext);

  return (
    <StyledHeader>
      <div className="container">
        <SiteTitle>
          <h1>Books</h1>
        </SiteTitle>
        <ListChosenWrapper>
          <div>
            <label htmlFor="allBooks">
              <input
                type="radio"
                id="allBooks"
                name="chosenList"
                value="allBooks"
                onChange={() => filterByList("allBooks")}
              />
              Pełna lista
            </label>
          </div>
          <div>
            <label htmlFor="amazon">
              <input
                type="radio"
                id="amazon"
                name="chosenList"
                value="amazon"
                onChange={() => filterByList("amazon")}
              />
              Amazon
            </label>
          </div>
          <div>
            <label htmlFor="bbc">
              <input
                type="radio"
                id="bbc"
                name="chosenList"
                value="bbc"
                onChange={() => filterByList("bbc")}
              />
              BBC
            </label>
          </div>
          <div>
            <label htmlFor="empik">
              <input
                type="radio"
                id="empik"
                name="chosenList"
                value="empik"
                onChange={() => filterByList("empik")}
              />
              Empik
            </label>
          </div>
          <div>
            <label htmlFor="gandalf">
              <input
                type="radio"
                id="gandalf"
                name="chosenList"
                value="gandalf"
                onChange={() => filterByList("gandalf")}
              />
              Gandalf
            </label>
          </div>
          <div>
            <label htmlFor="pozycje">
              <input
                type="radio"
                id="pozycje"
                name="chosenList"
                value="pozycje"
                onChange={() => filterByList("pozycje")}
              />
              Pozycje
            </label>
          </div>
        </ListChosenWrapper>
      </div>
    </StyledHeader>
  );
};

export default Header;
