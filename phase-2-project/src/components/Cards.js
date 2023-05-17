function Cards ({card}) {
    return (
        <div>
            <img src={card.image_uri} alt={card.name}/>
            <h1>{card.name}</h1>
        </div>
    )
}
export default Cards