import { useParams} from "react-router-dom"
import {useEffect, useState } from "react"

function Card({}){
    const {id} = useParams()
    const [card, setCard] = useState(null)

    useEffect(()=> {
        if(id){
            fetch(`http://localhost:3001/all/${id}`)
            .then(resp => resp.json())
            .then(item => setCard(item))
        }
    }, [])
    console.log(card)
    if (!card){return <h1>Loading...</h1>}else{
        return (
        <div className="card">
            <img src={card['image_uri']}/>
            {card.location ? <div>`Location: {card.price}`</div> : null}
            <ul>{card.rarity ? `Rarity: ${card.rarity}` : null}</ul>
            <ul>{card.price ? `Price: ${card.price}` : null}</ul>
            <ul>{card.personality ? `Personality: ${card.personality}` : null}</ul> 
            <ul>{card.birthday ? `Birthday: ${card.birthday}` : null}</ul>
            <ul>{card.species ? `Species: ${card.species}` : null}</ul>
            <ul>{card.hobby ? `Hobby: ${card.hobby}` : null}</ul>
            <ul>{card['museum-phrase'] ? card['museum-phrase'] : null}</ul>
            <ul>{card['part-of'] ? `From: ${card['part-of']}` : null}</ul>
        </div>)
    }

}

export default Card