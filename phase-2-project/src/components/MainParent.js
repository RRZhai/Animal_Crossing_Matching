import React from "react"
import {useState, useEffect} from "react"
import CardContainer from "./CardContainer"

function MainParent(){
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch('/!ADDFETCHLOCATION')
    .then(r => r.json())
    .then(data => setCards(data))
  }, [])

  return (
    <div>
      <CardContainer cards={cards}/>
    </div>
  )
}
export default MainParent
