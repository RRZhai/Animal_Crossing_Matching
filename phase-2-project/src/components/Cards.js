function Cards ({card, handleClick, id}) {
    const cardClass = card.stat ? "active" + card.stat : ""
    return (
        <div className={"card" + cardClass} onClick={() => handleClick(id)}>
            <img src={card.image_uri} alt={card.name} className="card-img"/>
        </div>
    )
}
export default Cards