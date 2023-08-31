import React from "react";
import { Link } from "react-router-dom";
function MenuBar() {
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
          Main Menu
        </Link>
        <Link to={`/game`} className="menu">
          Play Game
        </Link>
        <Link to={`/collection`} className="menu">
          My Collection
        </Link>
        <Link to={`/care`} className="menu">
          {" "}
          Customer Care{" "}
        </Link>
        <Link to="/high-scores" className="menu">
          High Score
        </Link>
      </div>
      <audio controls autoPlay id="player">
        <source
          src={`https://acnhapi.com/v1/music/${Math.floor(Math.random() * 40)}`}
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
}

export default MenuBar;
