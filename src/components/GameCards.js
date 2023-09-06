// import { useState } from "react"

function GameCards({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className={flipped ? "flipped card-grid" : " card-grid"}>
      <div className="card-grid-content">
        <img className="gamecard front" src={card.image_uri} alt="card front" />
        <img
          className="gamecard back"
          src="https://upload.wikimedia.org/wikipedia/en/9/9e/Animal_Crossing_Logo.png"
          alt="card back"
          onClick={(e) => handleClick(e.target.value)}
        />
      </div>
    </div>
  );
}
export default GameCards;
