// import { useState } from "react"

function GameCards({card, handleChoice, flipped, disabled}){

    const handleClick = () =>{
        if(!disabled){
            handleChoice(card)
            
        }
    }
    return (
        <div className={flipped ? "flipped card-grid" : " card-grid"}>
            {flipped ? (
                <img className="back" 
                src="/animalCrossingLogo.png" 
                alt="card back"
                onClick={(e) => handleClick(e.target.value)}
                />
            ) : (
                <img className="front" src={card.image_uri} alt="card front"/>
            )}
                {/* <img className="front" src={card.image_uri} alt="card front"/>
                <img className="back" 
                src="/animalCrossingLogo.png" 
                alt="card back"
                onClick={(e) => handleClick(e.target.value)}
                /> */}
        </div>
    )
}
export default GameCards