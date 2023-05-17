function GameCards({card, handleChoice, flipped, disabled}){
    const handleClick = () =>{
        if(!disabled){
            handleChoice(card)
        }
    }
    return (
        <div className="card-grid">
            <div className={flipped ? "flipped" : ""}>
                <img className="front" src={card.image_uri} alt="card front"/>
                <img className="back" 
                src="./animalCrossingLogo.png" 
                alt="card back"
                onClick={handleClick}
                />
            </div>
        </div>
    )
}
export default GameCards