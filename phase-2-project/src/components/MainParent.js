import React from "react"
import {useState, useEffect} from "react"
import Game from "./Game"

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
//sort the cards after fetch call ⮯
  let shuffledCards = cards
  .map(card => ({ card, sort: Math.random() }))
  .sort((a , b) => a.sort - b.sort)
  .map(({ card }) => card)
  
  const shuffledAndSliced = shuffledCards.slice(0, 12)

  return (
    <div className="main-container">
      <Game shuffledCards={shuffledAndSliced}/> 
      <div>
      
      </div>
    </div>
  )
}
export default MainParent
