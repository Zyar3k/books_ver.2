import { useHistory } from "react-router-dom";

import { UserDataStyled } from "./UserData.styled";

import kindle from "../../../images/wood_hand_kindle_en.png";
import readedImg from "../../../images/read-svg-png.png";

const UserData = ({ book }) => {
  const { readed, available } = book;

  const history = useHistory();
  const backToList = () => {
    history.goBack();
  };
  return (
    <UserDataStyled>
      <div className="userActivity">
        <div>{readed && <img src={kindle} alt="kindle-reader" />}</div>
        <div>{available ? <img src={readedImg} alt='cartoon character with a book' /> : "False"}</div>
      </div>
      <div className="buttonWrapper">
        <button onClick={backToList}>Wróć do listy</button>
      </div>
    </UserDataStyled>
  );
};

export default UserData;
