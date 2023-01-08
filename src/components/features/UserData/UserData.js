import { useNavigate } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { UserDataStyled } from "./UserData.styled";

import kindle from "../../../images/wood_hand_kindle_en.png";
import readedImg from "../../../images/read-svg-png.png";

const UserData = ({ book }) => {
  const { readed, available } = book;

  const navigate = useNavigate();
  const backToList = () => {
    navigate("/");
  };
  return (
    <UserDataStyled>
      <div className="userActivity">
        <div>
          {readed && (
            <img
              data-tip="Posiadana pozycja"
              src={kindle}
              alt="kindle-reader"
            />
          )}
        </div>
        <div>
          {available && (
            <img
              data-tip="Pozycja przeczytana"
              src={readedImg}
              alt="cartoon character with a book"
            />
          )}
        </div>
      </div>
      <div className="buttonWrapper">
        <button onClick={backToList}>Wróć do listy</button>
      </div>
      <ReactTooltip />
    </UserDataStyled>
  );
};

export default UserData;
