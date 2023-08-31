import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiEdit3 } from "react-icons/fi";

function Card() {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [ifOver, setIfOver] = useState(false);
  const [edit, setEdit] = useState("");

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/all/${id}`)
        .then((resp) => resp.json())
        .then((item) => setCard(item));
    }
  }, []);
  const handleOver = () => {
    setIfOver((current) => !current);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setEdit(e.target.value);
  };

  if (!card) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="card">
        <div id="info-container">
          <img
            id="card-img"
            onMouseEnter={handleOver}
            onMouseLeave={handleOver}
            src={card["image_uri"]}
          />
          <div className="info">
            <div id="detail">
              <h2 className="name">{card.name.toUpperCase()}</h2>
              <p>{card["saying"]}</p>
              {ifOver ? (
                <div className="phrase">
                  {card["catch-phrase"] ? (
                    <p>{card["catch-phrase"]}</p>
                  ) : (
                    <p>{card["saying"]}</p>
                  )}
                </div>
              ) : null}
            </div>
            <div className="details">
              {card.location ? (
                <ul>
                  Location: {card.location} <FiEdit3 />
                </ul>
              ) : null}
              {card.rarity ? (
                <ul>
                  Rarity : {card.rarity} <FiEdit3 />
                </ul>
              ) : null}
              {card.price ? (
                <ul>
                  Price: {card.price} <FiEdit3 />
                </ul>
              ) : null}
              {card.personality ? (
                <ul>
                  Personality: {card.personality} <FiEdit3 />
                </ul>
              ) : null}
              {card.birthday ? (
                <ul>
                  Birthday: {card.birthday} <FiEdit3 />
                </ul>
              ) : null}
              {card.species ? (
                <ul>
                  Species: {card.species} <FiEdit3 />
                </ul>
              ) : null}
              {card.hobby ? (
                <ul>
                  Hobby: {card.hobby} <FiEdit3 />
                </ul>
              ) : null}
              {card["museum-phrase"] ? (
                <ul>
                  Description: {card["museum-phrase"]} <FiEdit3 />
                </ul>
              ) : null}
              {card["part-of"] ? (
                <ul>
                  From: {card["part-of"]} <FiEdit3 />
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
