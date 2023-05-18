import React from 'react'
import {useState, useEffect} from "react"
import Game from "./Game"
import CustomerService from './CustomerService'
import {Switch, Route, Link} from 'react-router-dom'
import CardContainer from './CardContainer'
import Card from './Card'
import HighScore from './HighScore'
import MyCollection from './MyCollection'

function MainParent(){
  //state for cards ⮯
  const [cards, setCards] = useState([])
  const [home, setHome] = useState(false)
  const [newCardId, setNewCardId] = useState(null)

  //fetch request ⮯
  useEffect(() => {
    fetch('http://localhost:3001/all')
    .then(r => r.json())
    .then(data => setCards(data))
    .catch(err => console.error(err))
  }, [])

  const handleSubmitNew = (e, submitForm) => {
    e.preventDefault()
    fetch('http://localhost:3001/all', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(submitForm)
    }).then(res => res.json())
    .then(card => setNewCardId(card.id))
    
}

  let shuffledCards = cards
  .map(card => ({ card, sort: Math.random() }))
  .sort((a , b) => a.sort - b.sort)
  .map(({ card }) => card)
  
  const shuffledAndSliced = shuffledCards.slice(0, 12)

  const handleNoHome = () => {
    setHome(true)
  }

  const handleHome = () => {
    setHome(false)
  }

  return (
    <div>
      <div className='header'>
        <h2 id='gamename'>Animal Crossing Matching</h2>
        <div id='nav-bar'>
          <Link to={``} onClick={handleHome} className='menu'>Main Menu</Link>
          <Link to={`/game`} onClick={handleNoHome} className='menu'>Play Game</Link>
          <Link to={`/collection`} onClick={handleNoHome} className='menu'>My Collection</Link>
          <Link to={`/score`} onClick={handleNoHome} className='menu'> Score </Link>
          <Link to={`/care`} onClick={handleNoHome} className='menu'> Customer Care </Link>
        </div >
        <audio controls id='player'>
          <source src={`https://acnhapi.com/v1/music/${Math.floor(Math.random()*40)}`} type="audio/mpeg" />
        </audio>
      </div>
      <Link to={`/game`}>
        {home ? null : <img id='homepage' onClick={handleNoHome} src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_1200/ncom/software/switch/70010000027619/9989957eae3a6b545194c42fec2071675c34aadacd65e6b33fdfe7b3b6a86c3a"/>}    
      </Link>
      <Switch> 
        <Route path="/game">
          <div className="main-container">
            <Game shuffledCards={shuffledAndSliced}/> 
            <CardContainer cards={shuffledAndSliced} />
          </div>
        </Route>
        <Route path='/score'>
            <HighScore />
        </Route>
        <Route path='/collection'>
          <MyCollection handleSubmitNew={handleSubmitNew} newCardId={newCardId}/>
        </Route>
        <Route path="/cards/:id">
            <Card /> 
        </Route>
        <Route path='/care'>
          <CustomerService />
        </Route>
      </Switch>
    </div>
  )
}
export default MainParent
