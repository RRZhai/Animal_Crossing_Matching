import React from "react";
import { Link } from "react-router-dom";

function CardContainer({ cardsHolder, matchedCards }) {
  return (
    <div className="collection">
      <h3 className="title">Collection</h3>
      <div className="collected-container">
        {cardsHolder.map((card) => {
          if (matchedCards.find((item) => item.id === card.id)) {
            return (
              <Link
                to={`/Animal_Crossing_Matching/cards/${card.id}`}
                key={card.id}
                className="icon-card"
              >
                <img
                  alt="iconimage"
                  className="icon"
                  id="show_icon"
                  src={card["image_uri"]}
                />
              </Link>
            );
          } else {
            return (
              <div className="icon-card" key={card.id}>
                <img
                  alt="iconimage"
                  onClick={() => alert("You need to find me first!")}
                  className="icon"
                  id="hide_icon"
                  src={card["image_uri"]}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
export default CardContainer;
