import React from 'react'
import {useState, useEffect} from "react"
import Game from "./Game"
import {Switch, Route, Link} from 'react-router-dom'
import CardContainer from './CardContainer'
import Card from './Card'

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
  
 
  let shuffledCards = cards
  .map(card => ({ card, sort: Math.random() }))
  .sort((a , b) => a.sort - b.sort)
  .map(({ card }) => card)
  
  const shuffledAndSliced = shuffledCards.slice(0, 12)
  
  

  // passing the matchedcard as prop, this should be removed once the game component is created.
  const matchedCard = []
  return (
    <div>
      <Switch> 
        <Route path="/Home">
          <Game cards={shuffledAndSliced}/>
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
