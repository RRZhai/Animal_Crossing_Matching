import {useState} from "react"
import Cards from "./Cards"

function Game ({cards}) {
    //TODO take shuffled cards and display them in a grid
    //TODO on click start game then flip cards and set turns to 0
    //TODO allow user to select 2 cards then if they match keep them up 
    //send to matchedCards if they don't match flip them back over
    //TODO 
    const displayCards = cards.map(card => <Cards
      card={card}  key={card.id}/>)
    const newArray = [...displayCards, ...displayCards]
    let reshuffleCards = newArray
        .map(card => ({ card, sort: Math.random() }))
        .sort((a , b) => a.sort - b.sort)
        .map(({ card }) => card)
    
    return(
        <div>
            <button className="start-button" > 
                Start Game
            </button>
            <div className="grid">
                {reshuffleCards}
            </div>
        </div>
    )
}
export default Game