import { StyledHeader, SiteTitle, ListChosenWrapper } from "./Header.styled";

const Header = () => {
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
              />
              Amazon
            </label>
          </div>
          <div>
            <label htmlFor="bbc">
              <input type="radio" id="bbc" name="chosenList" value="bbc" />
              BBC
            </label>
          </div>
          <div>
            <label htmlFor="empik">
              <input type="radio" id="empik" name="chosenList" value="empik" />
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
