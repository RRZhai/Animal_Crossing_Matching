import {useState} from "react"
import Cards from "./Cards"

function Game ({cards}) {
    // const [cardsForGame, setCardsForGame] = useState([])
    // const [turns, setTurns] = useState(0)

    // const cardsArray = cards.map(card => <Cards key={card.id} card={card}/>)

    // const shuffleCards = () => {
    //     const shuffledCards = [...cardsArray, ...cardsArray]
    //         .sort(() => Math.random() - 0.5)

    //         setCardsForGame(shuffledCards)
    //         setTurns(0)
    // }
    // console.log(cardsForGame, turns)

    return(
        <div>
            {/* <button onClick={shuffleCards}>StartGame</button>
            {cardsForGame} */}
        </div>
    )
}
export default Game