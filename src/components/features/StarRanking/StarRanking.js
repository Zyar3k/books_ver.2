import { useState, useEffect } from "react";

import imgStar from "../../../images/star.png";

import { StarRankingStyled } from "./StarRanking.styled";

const StarRanking = ({ book, setIsTop }) => {
  const [stars, setStars] = useState([]);
  const { ama, bbc, emp, gan, pozy } = book;

  const countingStars = () => {
    let starTable = [];
    if (ama === true) starTable.push(1);
    if (bbc === true) starTable.push(1);
    if (emp === true) starTable.push(1);
    if (gan === true) starTable.push(1);
    if (pozy === true) starTable.push(1);

    if (starTable.length === 5) {
      setIsTop(true);
    }

    setStars(starTable);
  };
  const renderEle = stars.map(() => (
    <img key={Math.random()} src={imgStar} alt="star" />
  ));

  useEffect(() => {
    countingStars();
  }, []);
  return <StarRankingStyled>{renderEle}</StarRankingStyled>;
};

export default StarRanking;
