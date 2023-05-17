import React from 'react'
import {useState, useEffect} from "react"
import Game from "./Game"
import UserAchievments from './UserAchievments'
import {Switch, Route, Link} from 'react-router-dom'
import CardContainer from './CardContainer'
import Card from './Card'
import HomePage from './HomePage'

function MainParent(){
  //state for cards ⮯
  const [cards, setCards] = useState([])
  //fetch request ⮯
  useEffect(() => {
    fetch('http://localhost:3001/all')
    .then(r => r.json())
    .then(data => setCards(data))
    .catch(err => console.error(err))
  }, [])
  //state for game to start ⮯ 
  // const [gameStart, setGameStart] = useState(false)
  // const handleStartGame = (e) => setGameStart(currentValue => !currentValue)

  // passing the matchedcard as prop, this should be removed once the game component is created.
  const matchedCard = []
  return (
    <div>
      <Switch> 
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/game">
          {/* <Game cards={cards}/> */}
          <CardContainer cards={matchedCard} />
        </Route>
        <Route path="/cards/:id">
            <Card /> 
        </Route>
      </Switch>
    </div>
  )
}
export default MainParent
