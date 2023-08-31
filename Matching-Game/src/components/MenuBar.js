import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function MenuBar() {
  const [songUrl, setSongUrl] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/songs/${Math.floor(Math.random() * 10)}`)
      .then((r) => r.json())
      .then((data) => setSongUrl(data.url));
  }, []);

  return (
    <div className="header">
      <Link to={""}>
        <img
          id="gamename"
          src="https://upload.wikimedia.org/wikipedia/en/9/9e/Animal_Crossing_Logo.png"
        />
      </Link>
      <div id="nav-bar">
        <Link to={``} className="menu">
          Main
        </Link>
        <Link to={`/game`} className="menu">
          Game
        </Link>
        <Link to={`/collection`} className="menu">
          Collection
        </Link>
        <Link to={`/care`} className="menu">
          Customer
        </Link>
        <Link to="/high-scores" className="menu">
          Score
        </Link>
      </div>
      <audio
        controls
        autoPlay
        muted
        id="player"
        src={songUrl}
      >
      </audio>
    </div>
  );
}

export default MenuBar;
