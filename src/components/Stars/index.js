import React from "react";
import StarFill from "../../assets/starFill.svg";
import StarOutline from "../../assets/starOutline.svg";

const Stars = ({ evaluation }) => {
  const qtd = evaluation > 5 ? 5 : evaluation < 0 ? 0 : evaluation;

  const arr = [...Array(qtd).keys()].map((e) => false);
  const sobra = [...Array(5 - qtd).keys()].map((e) => true);

  const rating = [...arr, ...sobra];

  return <>{rating.map((vl) => (vl ? <StarOutline /> : <StarFill />))}</>;
};

export default Stars;
