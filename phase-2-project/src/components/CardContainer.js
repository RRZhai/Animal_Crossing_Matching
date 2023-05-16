import Cards from "./Cards"

function CardContainer ({cards}) {
    const cardList = cards.map(card => <Cards key={card.id} card={card}/>)
    return (
        <div>
            {cardList}
        </div>
    )
}
export default CardContainer