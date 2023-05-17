function Cards ({card, handleClick}) {
    const cardClass = card.stat ? "active" + card.stat : ""
    return (
        <div className={"card" + cardClass}  onClick={ handleClick }>
            <img src={card.image_uri} alt="" />
        </div>
    )
}
export default Cards