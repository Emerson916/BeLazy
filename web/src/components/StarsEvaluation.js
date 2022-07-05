import React from "react";
import StarFill from "../assets/img/starFill.svg";
import StarOutline from "../assets/img/starOutline.svg";

const StarsEvaluation = ({ evaluation }) => {
  const qtd = evaluation > 5 ? 5 : evaluation < 0 ? 0 : evaluation;

  const arr = [...Array(qtd).keys()].map((e) => false);
  const sobra = [...Array(5 - qtd).keys()].map((e) => true);

  const rating = [...arr, ...sobra];

  return (
    <>
      {rating.map((vl, i) =>
        vl ? (
          <img src={StarOutline} alt="Estrela preenchida" key={i} />
        ) : (
          <img src={StarFill} alt="Estrela Vazia" key={i} />
        )
      )}
    </>
  );
};

export default StarsEvaluation;
