import React from "react";
import { Link } from "react-router-dom";
function MenuBar({ handleHome, handleNoHome }) {
  return (
    <div className="header">
      <Link to={""}>
        <img
          id="gamename"
          src="https://upload.wikimedia.org/wikipedia/en/9/9e/Animal_Crossing_Logo.png"
        />
      </Link>
      <div id="nav-bar">
        <Link to={``} onClick={handleHome} className="menu">
          Main Menu
        </Link>
        <Link to={`/game`} onClick={handleNoHome} className="menu">
          Play Game
        </Link>
        <Link to={`/collection`} onClick={handleNoHome} className="menu">
          My Collection
        </Link>
        <Link to={`/care`} onClick={handleNoHome} className="menu">
          {" "}
          Customer Care{" "}
        </Link>
        <Link to="/high-scores" onClick={handleNoHome} className="menu">
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
