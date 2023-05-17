import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function CardContainer({}){
    const [cardHolder, setCardHolder] = useState([])
    const [clickIcon, setClickIcon] = useState({})
    // passing the matchedcard as prop, this should be removed once the game component is created.
    const matchedCard =   [{
        "id": 24,
        "name": "saw shark",
        "location": "Sea",
        "rarity": "Rare",
        "price": 12000,
        "catch-phrase": "I caught a saw shark! You could call it a sea saw!",
        "image_uri": "https://acnhapi.com/v1/images/fish/72",
        "collected": "No"
      },
      {
        "id": 25,
        "name": "Cyrano",
        "personality": "Cranky",
        "birthday": "9/3",
        "species": "Anteater",
        "hobby": "Education",
        "image_uri": "https://acnhapi.com/v1/images/villagers/1",
        "bubble-color": "#194c89",
        "text-color": "#fffad4",
        "saying": "Don't punch your nose to spite your face.",
        "collected": "No"
      },
      {
        "id": 26,
        "name": "Antonio",
        "personality": "Jock",
        "birthday": "20/10",
        "species": "Anteater",
        "hobby": "Fitness",
        "image_uri": "https://acnhapi.com/v1/images/villagers/2",
        "bubble-color": "#fff98f",
        "text-color": "#879b96",
        "saying": "Always go for the burn!",
        "collected": "No"
      },
      {
        "id": 27,
        "name": "Pango",
        "personality": "Peppy",
        "birthday": "9/11",
        "species": "Anteater",
        "hobby": "Fashion",
        "image_uri": "https://acnhapi.com/v1/images/villagers/3",
        "bubble-color": "#00d1bd",
        "text-color": "#fffce9",
        "saying": "A thing of beauty is a joy forever.",
        "collected": "No"
      }]


    useEffect(() => {
        fetch('http://localhost:3001/all')
        .then(resp => resp.json())
        .then(data => setCardHolder(data))
    },[])

  return(
    <div className='collected-container'>
    {cardHolder.map(card => {
        if (matchedCard.find(item => item.id === card.id )){
            return (<div key={card.id} className='icon' id='show_icon' >
            <Link to={`/cards/${card.id} `}>
                <img onClick={() => setClickIcon(card)} src={card['image_uri']} />
            </Link>
            </div>)
        } else {
            return <img className='icon' id='hide_icon' key={card.id} src={card['image_uri']} />
        }})}
    </div>
  )
}
export default CardContainer;
