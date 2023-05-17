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
  //state for game to start ⮯ 
  // const [gameStart, setGameStart] = useState(false)
  // const handleStartGame = (e) => setGameStart(currentValue => !currentValue)

  return (
    <div>
      <Game cards={cards}/>
    </div>
  )
}
export default MainParent
