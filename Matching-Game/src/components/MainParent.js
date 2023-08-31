import React from "react";
import { useState, useEffect, useId } from "react";
import GameCards from "./GameCards";
import CustomerService from "./CustomerService";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import CardContainer from "./CardContainer";
import Card from "./Card";
import HighScore from "./HighScore";
import MyCollection from "./MyCollection";
import MenuBar from "./MenuBar";
import Modal from "react-modal";
import Home from "./Home";
Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
function MainParent() {
  //state for cards ⮯
  const [cards, setCards] = useState([]);
  const [home, setHome] = useState(false);
  const [turns, setTurns] = useState(0);
  const [choice1, setChoice1] = useState(null);
  const [choice2, setChoice2] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const cardId = useId();
  const [toggleStart, setToggleStart] = useState(true);
  const [cardsHolder, setCardsHolder] = useState([]);
  const [scoreList, setScoreList] = useState([]);
  const [newCard, setNewCard] = useState(null);
  const [userName, setUserName] = useState("");
  const history = useHistory();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [matches, setMatches] = useState(0);
  const [matchedCards, setMatchedCards] = useState([{}]);
  const [collectedCards, setCollectedCards] = useState(cardsHolder.filter(card => card.collected === true));

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }
  function closeModal() {
    setIsOpen(false);
  }
  //fetch request ⮯
  useEffect(() => {
    fetch("http://localhost:3000/all")
      .then((r) => r.json())
      .then((data) => {
        setCards(data);
        setCardsHolder(data);
      })
      .then(setShowCards(true))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/highscore")
      .then((response) => response.json())
      .then((data) => {
        setScoreList(data);
      });
  }, []);

  //randomize ⮯
  const shuffledCards = () => {
    setToggleStart((value) => !value);
    const shuffleCards = cardsHolder
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    const newShuffledCards = shuffleCards.slice(0, 8);
    //duplicate the array ⮯
    const newCardArray = [...newShuffledCards, ...newShuffledCards];
    const reshuffledArray = newCardArray
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => ({ ...value, uniqueId: cardId }));
    //show front of cards when new game then flip them after a few seconds
    setShowCards(true);
    setTimeout(() => {
      setShowCards(false);
    }, 3000);
    setCards(reshuffledArray);
    setTurns(0);
  };
  //handle users card selection
  const handleChoice = (card) => {
    choice1 ? setChoice2(card) : setChoice1(card);
  };
  //compare the 2 cards
  useEffect(() => {
    if (matches !== 8) {
      if (choice1 && choice2) {
        setDisabled(true);
        if (choice1.id === choice2.id) {
          setMatchedCards([...matchedCards, choice1]);
          setCards((prevCards) => {
            return prevCards.map((card) => {
              if (card.id === choice1.id) {
                return { ...card, stat: true };
              } else {
                return card;
              }
            });
          });
          setMatches((currentMatches) => currentMatches + 1);
          resetTurn();
        } else {
          setTimeout(() => resetTurn(), 2000);
        }
      }
    } else {
      openModal();
      setMatches(0);
    }
  }, [choice1, choice2]);
  //reset turns
  const resetTurn = () => {
    setChoice1(null);
    setChoice2(null);
    setTurns((value) => value + 1);
    setDisabled(false);
  };

  const handleSubmitNew = (e, submitForm) => {
    e.preventDefault();
    fetch("http://localhost:3000/all", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submitForm),
    })
      .then((res) => res.json())
      .then((card) => {
        setNewCard(card);
        setCardsHolder((current) => [...current, card]);
      })
      .then();
  };
  const calculateScore = () => {
    let maxScore = 8;
    const extraTurns = turns - 16;
    if (extraTurns > 0) {
      return maxScore - extraTurns * 0.3;
    }
    return maxScore;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/highscore", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: userName, score: calculateScore() }),
    })
      .then((res) => res.json())
      .then((scoreObj) => {
        closeModal();
        history.push("/high-score");
      });
  };
  const displayCards = cards.map((card, index) => (
    <GameCards
      handleChoice={handleChoice}
      card={card}
      key={index}
      flipped={card === choice1 || card === choice2 || card.stat || showCards}
      disabled={disabled}
    />
  ));

  return (
    <div>
      <MenuBar />
      <Switch>
        <Route path="/game">
          <div className="game">
            <CardContainer
              cardsHolder={cardsHolder}
              matchedCards={matchedCards}
            />
            <div className="game-block">
              <button onClick={shuffledCards}>
                {toggleStart ? "Start Game" : "New Game"}
              </button>
              <h3>Turns: {turns}</h3>
              <div className="container">{displayCards}</div>
            </div>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Score Modal"
            >
              <button onClick={closeModal}>close</button>
              <div>Enter Your Name</div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
                />
                <button type="submit">Check Out Scores!</button>
              </form>
            </Modal>
          </div>
        </Route>
        <Route path="/high-score">
          <HighScore />
        </Route>
        <Route path="/collection">
          <div className="collection-homepage">
            <CardContainer
              cardsHolder={cardsHolder}
              matchedCards={matchedCards}
            />
            <MyCollection handleSubmitNew={handleSubmitNew} newCard={newCard} />
          </div>
        </Route>
        <Route path="/cards/:id">
          <Card />
        </Route>
        <Route path="/high-scores">
          <HighScore scoreList={scoreList} />
        </Route>
        <Route path="/care">
          <CustomerService />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
export default MainParent;
