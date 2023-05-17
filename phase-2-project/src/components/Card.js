import { useParams } from "react-router-dom"
import {useEffect, useState } from "react"

function Card(){
    const {id} = useParams()
    const [card, setCard] = useState(null)
    const [ifOver, setIfOver] = useState(false)

    useEffect(()=> {
        if(id){
            fetch(`http://localhost:3001/all/${id}`)
            .then(resp => resp.json())
            .then(item => setCard(item))
        }
    }, [])
    const handleOver = () => {
        setIfOver(current => !current)
    }

    if (!card){return <h1>Loading...</h1>}else{
        return (
        <div className="card">
            <img onMouseEnter={handleOver} onMouseLeave={handleOver} src={card['image_uri']}/>
            <div>
                <h2 className="name">{card.name}</h2>
                {ifOver ? <p style={{color:card["text-color"]}} >{card['catch-phrase'] ? card['catch-phrase'] : card["saying"]}</p> : null}
            </div>
            <div className="details">
                {card.location ? <ul>Location: {card.location}</ul>  : null}
                {card.rarity ? <ul>Rarity : {card.rarity}</ul>  : null}
                {card.price ? <ul>Price: {card.price}</ul>  : null}
                {card.personality ? <ul>Personality: {card.personality}</ul>  : null}
                {card.birthday ? <ul>Birthday: {card.birthday}</ul>  : null}
                {card.species ? <ul>Species: {card.species}</ul>  : null}
                {card.hobby ? <ul>Hobby: {card.hobby}</ul>  : null}
                {card['museum-phrase'] ? <ul>Description: {card['museum-phrase']}</ul>  : null}
                {card['part-of'] ? <ul>Personality: {card['part-of']}</ul>  : null}
            </div>
        </div>)
    }

}

export default Card