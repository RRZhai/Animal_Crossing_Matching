import React from 'react'
import {useState, useEffect} from "react"
import Game from "./Game"
import UserAchievments from './UserAchievments'
import {Switch, Route, Link} from 'react-router-dom'
import CardContainer from './CardContainer'
import Card from './Card'

function MainParent(){
  //state for cards ⮯
  const [cards, setCards] = useState([])
  const [enterGame, setEnterGame] = useState(false)
  //fetch request ⮯
  useEffect(() => {
    fetch('http://localhost:3001/all')
    .then(r => r.json())
    .then(data => setCards(data))
    .catch(err => console.error(err))
  }, [])
  let shuffledCards = cards
  .map(card => ({ card, sort: Math.random() }))
  .sort((a , b) => a.sort - b.sort)
  .map(({ card }) => card)
  
  const shuffledAndSliced = shuffledCards.slice(0, 12)

  // passing the matchedcard as prop, this should be removed once the game component is created.
  const matchedCard = []
  const handleEnter = () => {
    setEnterGame(current => !current)
  }

  return (
    <div>
      <div>
      <h2>Animal Crossing Matching</h2>
        <Link to={`/home`}>
          <span> Main Menu </span>
        </Link>
        <Link to={`/game`}>
          <span> Play Game</span>
        </Link>
        <audio controls autoPlay>
          <source src={`https://acnhapi.com/v1/music/${Math.floor(Math.random()*40)}`} type="audio/mpeg" />
        </audio>
      </div>
      <Link to={`/game`}>
        {enterGame ? null : <img id='homepage' onClick={handleEnter} src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_1200/ncom/software/switch/70010000027619/9989957eae3a6b545194c42fec2071675c34aadacd65e6b33fdfe7b3b6a86c3a"/>}
      </Link>
      <Switch> 
        <Route path="/game">
          {/* <Game cards={cards}/> */}
          <CardContainer cards={matchedCard} />
        </Route>
        <Route path="/cards/:id">
            <Card /> 
        </Route>
      </Switch>
    <div className="main-container">
      <Game shuffledCards={shuffledAndSliced}/> 
      <div>
      
      </div>
    </div>
  )
}
export default MainParent
