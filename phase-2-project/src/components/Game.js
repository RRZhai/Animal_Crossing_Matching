import {useState} from "react"
import Cards from "./Cards"

function Game ({cards}) {
    const newCards = [...cards, ...cards]
    .sort(() => Math.random() - 0.5)
    .splice(0, 12)

    const [gameCards, setGameCards] = useState(newCards)
    const [prevSelected, setPrevSelected] = useState(-1)
    const check = (current) => {
        if(gameCards[current].id === gameCards[prevSelected].id){
            gameCards[current].stat = "correct"
            gameCards[prevSelected].stat = "correct"
            setGameCards([...gameCards])
            setPrevSelected(-1)
        }else{
            gameCards[current].stat = "wrong"
            gameCards[prevSelected].stat = "wrong"
            setGameCards([...gameCards])
            setTimeout(() => {
                gameCards[current].stat = ""
                gameCards[prevSelected] = ""
                setGameCards([...cards])
                setPrevSelected(-1)
            }, 2000)
        }
    }
    const handleClick = (id) => {
        if(prevSelected === -1){
            gameCards[id].stat = "active"
            setGameCards([...gameCards])
            setPrevSelected(id)
        }else{
            check(id)
        }
    }

    const displayCards = cards.map((card, index) => <Cards
      key={index} card={card} id={index} handleClick={handleClick}/>)

    
    return(
        <div>
            <button className="start-button" > 
                Start Game
            </button>
            <div className="grid">
                {displayCards}
            </div>
        </div>
    )
}
export default Game