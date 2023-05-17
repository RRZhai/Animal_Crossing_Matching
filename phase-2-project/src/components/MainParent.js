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
  //randomize ⮯
  const shuffledCards = cards
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({value}) => value)
  .slice(0, 12)
  //duplicate the array ⮯
  const newCardArray = [...shuffledCards, ...shuffledCards]
  const reshuffledArray = newCardArray
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({value}) => value)
  
  // passing the matchedcard as prop, this should be removed once the game component is created.
  const matchedCard = []
  return (
    <div>
      <Switch> 
        <Route path="/Home">
          <Game reshuffledArray={reshuffledArray} />
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
