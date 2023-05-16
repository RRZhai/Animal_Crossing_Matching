import Card from "./Cards"

function CardContainer ({cards}) {
    const cards = cards.map(card => <Card key={card.id} card={card}/>)
    return (
        <div>
            {cards}
        </div>
    )
}
export default CardContainer