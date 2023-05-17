import React from 'react'
import {useState, useEffect} from "react"
import GameCards from "./GameCards"
import {Switch, Route, Link } from "react-router-dom"
import CardContainer from './CardContainer'
import Card from './Card'

function MainParent(){
  //state for cards ⮯
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choice1, setChoice1] = useState(null)
  const [choice2, setChoice2] = useState(null)
  const [disabled, setDisabled] = useState(false)
  //fetch request ⮯
  useEffect(() => {
    fetch('http://localhost:3001/all')
    .then(r => r.json())
    .then(data => setCards(data))
    .catch(err => console.error(err))
  }, [])
  //randomize ⮯
  const shuffledCards = () =>{
    const shuffleCards = cards
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({value}) => value)
  const newShuffledCards = shuffleCards.slice(0, 12)
  //duplicate the array ⮯
  const newCardArray = [...newShuffledCards, ...newShuffledCards]
  const reshuffledArray = newCardArray
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({value}) => value)

  setCards(reshuffledArray)
  setTurns(0)
  }
  //handle users card selection
  const handleChoice = (card) => {
    choice1 ? setChoice2(card) : setChoice1(card)
  }
  //compare the 2 cards
  useEffect(() => {
    if (choice1 && choice2){
      setDisabled(true)
      if(choice1.id === choice2.id){
        setCards(prevCards =>{
          return prevCards.map(card => {
            if(card.id === choice1.id){
              return {...card, stat: true}
            }else{
              return card
            }
          })
        })
        resetTurn()
      }else{
        setTimeout(() => resetTurn(), 2000)
      }
    }
  }, [choice1, choice2])
  //reset turns
  const resetTurn = () => {
    setChoice1(null)
    setChoice2(null)
    setTurns(value => value + 1)
    setDisabled(false)
  }
  
  const displayCards = cards.map((card, index) => <GameCards 
  handleChoice={handleChoice} 
  card={card} 
  key={index} 
  flipped={card === choice1 || card === choice2 || card.stat}
  disabled={disabled}
  />)
  // passing the matchedcard as prop, this should be removed once the game component is created.
  const matchedCard = []
  return (
    <div>
      <Switch> 
        <Route path="/Home">
          <div>
            <button onClick={shuffledCards}>Start Game</button>
            <h4>Turns: {turns}</h4>
          {displayCards}
          </div>
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
