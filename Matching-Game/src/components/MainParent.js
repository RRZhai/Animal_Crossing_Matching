import React from "react";
import { useState, useEffect, useId } from "react";
import GameCards from "./GameCards";
import CustomerService from "./CustomerService";
import { Routes, Route, Link, useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CardContainer from "./CardContainer";
import Card from "./Card";
import HighScore from "./HighScore";
import NewForm from "./NewForm";
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
  const [modalIsOpen, setIsOpen] = useState(false);
  const [matches, setMatches] = useState(0);
  const [matchedCards, setMatchedCards] = useState([{}]);
  const [matchedOneCard, setMatchedOneCard] = useState(null);
  const [counter, setCounter] = useState(null);
  const [coin, setCoin] = useState(0);
  const [difficulty, setDifficulty] = useState(null);
  const [time, setTime] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);

  const navigate = useNavigate();

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
    fetch("http://localhost:3001/all")
      .then((r) => r.json())
      .then((data) => {
        setCards(data);
        setCardsHolder(data);
        setMatchedCards(data.filter((card) => card.collected));
      })
      .then(setShowCards(true))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/highscore")
      .then((response) => response.json())
      .then((data) => {
        setScoreList(data);
      });
  }, []);

  const handleMatched = (id) => {
    fetch(`http://localhost:3001/all/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ collected: true }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMatchedOneCard(data);
        setMatchedCards([...matchedCards, data]);
      });
  };

  // changecolor
  const notification = document.getElementById("notification");
  useEffect(() => {
    if (notification) {
      const changecolor = () => {
        const colors = [
          "#FF5733",
          "#33FF57",
          "#5733FF",
          "#FFFF33",
          "#33FFFF",
          "#FF33FF",
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        notification.style.color = randomColor;
      };
      setInterval(changecolor, 3000);
    }
  }, [notification]);

  // timer
  useEffect(() => {
    if (counter !== null) {
      const intervalId = setInterval(() => {
        setCounter((prev) => prev - 1);
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [counter]);

  // game difficulty
  const handleDifficulty = (value) => {
    setDifficulty(value);
  };

  //randomize ⮯
  const shuffledCards = () => {
    setCounter(30);
    setCoin(0);
    const shuffleCards = cardsHolder
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    const newShuffledCards = shuffleCards.slice(0, difficulty);
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
    if (matches !== parseInt(difficulty)) {
      console.log(difficulty);
      console.log(matches);
      if (choice1 && choice2) {
        setDisabled(true);
        if (choice1.id === choice2.id) {
          handleMatched(choice1.id);
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
      setTime(counter);
      setDifficulty(null);
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
    fetch("http://localhost:3001/all", {
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

  const handleSubmitScore = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/highscore", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userName,
        score: calculateScore(),
        turns: (difficulty - turns) * 100,
        coinScore: coin,
        timeScore: time * 100,
        difficultyScore: difficulty * 100,
      }),
    })
      .then((res) => res.json())
      .then((scoreObj) => {
        setScoreList((current) => [...current, scoreObj]);
        setPlayerScore(scoreObj);
        closeModal();
        navigate("/high-score");
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

  // Coin
  useEffect(() => {
    matchedOneCard
      ? matchedOneCard.coin
        ? setCoin((prev) => prev + matchedOneCard.coin)
        : setCoin((prev) => prev + 200)
      : setCoin(0);
  }, [matchedOneCard]);

  // Score
  const calculateScore = () => {
    const trunScore = (difficulty - turns) * 100;
    const coinScore = coin;
    const timeScore = time * 100;
    const difficultyScore = difficulty * 100;
    const totalScore = trunScore + coinScore + timeScore + difficultyScore;
    return totalScore;
  };

  return (
    <div>
      <MenuBar />
      <Routes>
        <Route
          path="/game"
          element={
            <div className="game">
              <CardContainer
                cardsHolder={cardsHolder}
                matchedCards={matchedCards}
              />
              <div className="game-block">
                <div id="game-bar">
                  {toggleStart ? (
                    difficulty ? (
                      <button
                        onClick={(e) => {
                          shuffledCards();
                          setToggleStart((current) => !current);
                        }}
                      >
                        Start Game
                      </button>
                    ) : null
                  ) : (
                    <button
                      onClick={(e) => {
                        setToggleStart((current) => !current);
                        setDifficulty(null);
                      }}
                    >
                      New Game
                    </button>
                  )}
                  {toggleStart ? null : (
                    <>
                      <h3>Difficulty: {difficulty}</h3>
                      <h3>Turns: {turns}</h3>
                      <h3>Timer: {counter}s</h3>
                      <h3>Coin: {coin}</h3>
                    </>
                  )}
                </div>
                {toggleStart ? (
                  <div>
                    <div className="container">
                      {difficulty ? null : (
                        <h2 id="notification">
                          Please select game difficulty~
                        </h2>
                      )}
                    </div>
                    {difficulty ? null : (
                      <div className="container">
                        <button
                          onClick={(e) => handleDifficulty(e.target.value)}
                          value="2"
                        >
                          Easy
                        </button>
                        <button
                          onClick={(e) => handleDifficulty(e.target.value)}
                          value="8"
                        >
                          Normal
                        </button>
                        <button
                          onClick={(e) => handleDifficulty(e.target.value)}
                          value="18"
                        >
                          Hard
                        </button>
                        <button
                          onClick={(e) => handleDifficulty(e.target.value)}
                          value="32"
                        >
                          Hell
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="container">{displayCards}</div>
                )}
              </div>
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Score Modal"
              >
                <button onClick={closeModal}>close</button>
                {/* <h2 className="container">Enter Your Name</h2> */}
                <h3 className="container" id="notification">
                  Your Score: {calculateScore()}
                </h3>
                <form onSubmit={handleSubmitScore} className="container">
                  <input
                    type="text"
                    placeholder="Please enter your name ..."
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  <button type="submit">Check Out Your Ranking!</button>
                </form>
              </Modal>
            </div>
          }
        />
        <Route
          path="/high-score"
          element={
            <HighScore scoreList={scoreList} playerScore={playerScore} />
          }
        />
        <Route
          path="/collection"
          element={
            <div className="collection-homepage">
              <CardContainer
                cardsHolder={cardsHolder}
                matchedCards={matchedCards}
              />
              <NewForm handleSubmitNew={handleSubmitNew} newCard={newCard} />
            </div>
          }
        />
        <Route path="/cards/:id" element={<Card />} />
        <Route
          path="/high-scores"
          element={<HighScore scoreList={scoreList} playerScore={playerScore}/>}
        />
        <Route path="/care" element={<CustomerService />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
export default MainParent;
