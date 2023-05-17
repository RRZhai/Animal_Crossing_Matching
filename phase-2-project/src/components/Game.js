import {useState} from "react"
import Cards from "./Cards"

function Game ({shuffledCards}) {
    //TODO take shuffled cards and display them in a grid
    //TODO on click start game then flip cards and set turns to 0
    //TODO allow user to select 2 cards then if they match keep them up 
    //send to matchedCards if they don't match flip them back over
    //TODO 
    const displayCards = shuffledCards.map(card => <Cards 
      card={card}  key={card.id}/>)
    const [startGame, setStartGame] = useState(false)

    const handleStartGame = () => setStartGame(value => !value)
    startGame ? 
    return(
        <div>
            <button className="start-button" onClick={handleStartGame}> 
                Start Game
            </button>
            <div className="game-container">
                {displayCards}
            </div>
        </div>
    )
}
export default Game