import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function MenuBar() {
  const [songUrl, setSongUrl] = useState(null);

  useEffect(() => {
    fetch(`https://acm-api.onrender.com/songs/${Math.floor(Math.random() * 10) + 1}`)
      .then((r) => r.json())
      .then((data) => setSongUrl(data.url));
  }, []);

  return (
    <div className="header">
      <Link to={"/Animal_Crossing_Matching"}>
        <img
          alt="gamelogo"
          id="gamename"
          src="https://upload.wikimedia.org/wikipedia/en/9/9e/Animal_Crossing_Logo.png"
        />
      </Link>
      <div id="nav-bar">
        <Link to={`/Animal_Crossing_Matching`} className="menu">
          Main
        </Link>
        <Link to={`/Animal_Crossing_Matching/game`} className="menu">
          Game
        </Link>
        <Link to={`/Animal_Crossing_Matching/collection`} className="menu">
          Collection
        </Link>
        <Link to={`/Animal_Crossing_Matching/care`} className="menu">
          Customer
        </Link>
        <Link to="/Animal_Crossing_Matching/high-scores" className="menu">
          Score
        </Link>
      </div>
      <audio autoPlay controls id="player" src={songUrl}></audio>
    </div>
  );
}

export default MenuBar;
