function Cards ({card}) {
    return (
        <div className="card">
            <img src={card.image_uri} alt={card.name}/>
        </div>
    )
}
export default Cards