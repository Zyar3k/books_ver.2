import { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

import {
  StyledSortBar,
  SortWrapper,
  SortItem,
  ToggleButton,
} from "./SortBar.styled";

const Sidebar = ({ setIsPageShowing, isPageShowing }) => {
  const { sortBy, filterByList } = useContext(GlobalContext);
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <StyledSortBar>
      {/* <ToggleButton
        onClick={() => {
          setIsPageShowing(!isPageShowing);
          setOpenSidebar(!openSidebar);
        }}
      >
        <i
          className={!openSidebar ? "fas fa-chevron-down" : "fas fa-chevron-up"}
          aria-hidden="true"
        />
      </ToggleButton> */}
      {openSidebar ? (
        <SortWrapper>
          <SortItem>
            <button onClick={() => sortBy("nameUp")}>
              <span
                className="fa fa-sort-amount-desc"
                aria-hidden="true"
              ></span>
            </button>
            <h4>Po imieniu</h4>
            <button onClick={() => sortBy("nameDown")}>
              <span className="fa fa-sort-amount-asc" aria-hidden="true"></span>
            </button>
          </SortItem>
          <SortItem>
            <button onClick={() => sortBy("lastNameUp")}>
              <span
                className="fa fa-sort-amount-desc"
                aria-hidden="true"
              ></span>
            </button>
            <h4>Po nazwisku</h4>
            <button onClick={() => sortBy("lastNameDown")}>
              <span className="fa fa-sort-amount-asc" aria-hidden="true"></span>
            </button>
          </SortItem>
          <SortItem>
            <button onClick={() => sortBy("pageUp")}>
              <span
                className="fa fa-sort-amount-desc"
                aria-hidden="true"
              ></span>
            </button>
            <h4>Po ilości stron</h4>
            <button onClick={() => sortBy("pageDown")}>
              <span className="fa fa-sort-amount-asc" aria-hidden="true"></span>
            </button>
          </SortItem>

          <SortItem>
            <button onClick={() => filterByList("readed")}>
              <span className="fa fa-check-square-o" aria-hidden="true"></span>
            </button>
            <h4>Stan ukończenia</h4>
            <button onClick={() => filterByList("unreaded")}>
              <span className="fa fa-times-circle-o" aria-hidden="true"></span>
            </button>
          </SortItem>
          <SortItem>
            <button onClick={() => filterByList("available")}>
              <span className="fa fa-thumbs-o-up" aria-hidden="true"></span>
            </button>
            <h4>Dostępność</h4>
            <button onClick={() => filterByList("unavailable")}>
              <span className="fa fa-thumbs-o-down" aria-hidden="true"></span>
            </button>
          </SortItem>
        </SortWrapper>
      ) : null}
      <ToggleButton
        onClick={() => {
          setIsPageShowing(!isPageShowing);
          setOpenSidebar(!openSidebar);
        }}
      >
        <i
          className={!openSidebar ? "fas fa-chevron-down" : "fas fa-chevron-up"}
          aria-hidden="true"
        />
      </ToggleButton>
    </StyledSortBar>
  );
};

export default Sidebar;
