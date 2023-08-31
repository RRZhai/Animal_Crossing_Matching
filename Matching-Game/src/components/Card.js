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
            // onClick={handleOver}
            onMouseEnter={handleOver}
            onMouseLeave={handleOver}
            src={card["image_uri"]}
          />
          <div className="info">
            <h2 className="name">{card.name.toUpperCase()}</h2>
            {ifOver ? (
              <div className="phrase">
                {card["catch-phrase"] ? (
                  <p>{card["catch-phrase"]}</p>
                ) : (
                  <p>{card["saying"]}</p>
                )}
              </div>
            ) : null}
            <div id="detail">
              <div className="details">
                {card.location ? (
                  <p>
                    Location: {card.location} <FiEdit3 />
                  </p>
                ) : null}
                {card.rarity ? (
                  <p>
                    Rarity : {card.rarity} <FiEdit3 />
                  </p>
                ) : null}
                {card.price ? (
                  <p>
                    Price: {card.price} <FiEdit3 />
                  </p>
                ) : null}
                {card.personality ? (
                  <p>
                    Personality: {card.personality} <FiEdit3 />
                  </p>
                ) : null}
                {card.birthday ? (
                  <p>
                    Birthday: {card.birthday} <FiEdit3 />
                  </p>
                ) : null}
                {card.species ? (
                  <p>
                    Species: {card.species} <FiEdit3 />
                  </p>
                ) : null}
                {card.hobby ? (
                  <p>
                    Hobby: {card.hobby} <FiEdit3 />
                  </p>
                ) : null}
                {card["museum-phrase"] ? (
                  <p>
                    Description: {card["museum-phrase"]} <FiEdit3 />
                  </p>
                ) : null}
                {card["part-of"] ? (
                  <p>
                    From: {card["part-of"]} <FiEdit3 />
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
