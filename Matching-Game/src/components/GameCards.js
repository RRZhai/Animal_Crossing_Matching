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
        <img className="front" src={card.image_uri} alt="card front" />
        <img
          className="back"
          src="/animalCrossingLogo.png"
          alt="card back"
          onClick={(e) => handleClick(e.target.value)}
        />
      </div>
    </div>
  );
}
export default GameCards;
