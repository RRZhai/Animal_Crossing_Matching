import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CardContainer({ cardsHolder, matchedCards }) {
  const [clickIcon, setClickIcon] = useState({});

  return (
    <div className="collection">
      <h3 className="title">Collection</h3>
      <div className="collected-container">
        {cardsHolder.map((card) => {
          if (matchedCards.find((item) => item.id === card.id)) {
            return (
              <Link
                to={`/cards/${card.id}`}
                key={card.id}
                className="icon-card"
              >
                <img
                  onClick={() => setClickIcon(card)}
                  key={card.id}
                  className="icon"
                  id="show_icon"
                  src={card["image_uri"]}
                />
              </Link>
            );
          } else {
            return (
              <div className="icon-card">
                <img
                  onClick={() => alert("You need to find me first!")}
                  className="icon"
                  id="hide_icon"
                  key={card.id}
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
