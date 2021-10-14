import { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

import {
  StyledSidebar,
  ToggleButton,
  SortWrapper,
  SortItem,
} from "./Sidebar.styled";

const Sidebar = () => {
  const { sortBy, filterByList } = useContext(GlobalContext);
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <StyledSidebar className="sidebar">
      <ToggleButton onClick={() => setOpenSidebar(!openSidebar)}>
        <i
          className={openSidebar ? "fa fa-compress" : "fa fa-expand"}
          aria-hidden="true"
        />
      </ToggleButton>
      {openSidebar ? (
        <SortWrapper>
          <h3>Sortowanie wg:</h3>
          <SortItem>
            <button onClick={() => sortBy("nameUp")}>
              <span className="fa fa-sort-amount-asc" aria-hidden="true"></span>
            </button>
            <h4>Imienia</h4>
            <button onClick={() => sortBy("nameDown")}>
              <span
                className="fa fa-sort-amount-desc"
                aria-hidden="true"
              ></span>
            </button>
          </SortItem>
          <SortItem>
            <button onClick={() => sortBy("lastNameUp")}>
              <span className="fa fa-sort-amount-asc" aria-hidden="true"></span>
            </button>
            <h4>Nazwiska</h4>
            <button onClick={() => sortBy("lastNameDown")}>
              <span
                className="fa fa-sort-amount-desc"
                aria-hidden="true"
              ></span>
            </button>
          </SortItem>
          <SortItem>
            <button onClick={() => sortBy("pageUp")}>
              <span className="fa fa-sort-amount-asc" aria-hidden="true"></span>
            </button>
            <h4>Ilości stron</h4>
            <button onClick={() => sortBy("pageDown")}>
              <span
                className="fa fa-sort-amount-desc"
                aria-hidden="true"
              ></span>
            </button>
          </SortItem>
          <h3>Dodatkowe</h3>
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
    </StyledSidebar>
  );
};

export default Sidebar;
