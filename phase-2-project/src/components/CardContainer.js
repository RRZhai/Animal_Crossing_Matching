import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function CardContainer({cards}){
    const [cardHolder, setCardHolder] = useState([])
    const [clickIcon, setClickIcon] = useState({})

    useEffect(() => {
        fetch('http://localhost:3001/all')
        .then(resp => resp.json())
        .then(data => setCardHolder(data))
    },[])

  return(
    <div className='collected-container'>
    {cardHolder.map(card => {
        if (cards.find(item => item.id === card.id )){
            return (
            <Link to={`/cards/${card.id}`} key={card.id}>
                <img onClick={() => setClickIcon(card)} key={card.id} className='icon' id='show_icon' src={card['image_uri']} />
            </Link>
            )
        } else {
            return <img onClick={() => alert('You need to find me first!')} className='icon' id='hide_icon' key={card.id} src={card['image_uri']} />
        }})}
    </div>
  )
}
export default CardContainer;
