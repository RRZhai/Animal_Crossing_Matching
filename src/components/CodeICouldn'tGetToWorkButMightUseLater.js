const [items, setItems] = useState([])
const [selected, setSelected] = useState(-1)
const checkStat = (current) => {
    if(items[current].id === items[selected].id){
      items[current].stat = "correct"
      items[selected].stat = "correct"
      setItems([...items])
      setSelected(-1) 
    }else{
      items[current].stat = "wrong"
      items[selected].stat = "wrong"
      setItems([...items])
      setTimeout(() => {
        items[current].stat = ""
        items[selected].stat = ""
        setItems([...items])
        setSelected(-1)
      }, 2000)
    }
  }
const handleClick = (id) => {
    if(selected === -1){
      items[id].stat = "active"
      setItems([...items])
      setSelected(id)
    }else{
      checkStat(id)
    }
  }

const shuffledCards = cards
.map(value => ({ value, sort: Math.random() }))
.sort((a, b) => a.sort - b.sort)
.map(({value}) => value)
.slice(0, 12)
//duplicate the array ⮯
const newCardArray = [...shuffledCards, ...shuffledCards]
const reshuffledArray = newCardArray
.map(value => ({ value, sort: Math.random() }))
.sort((a, b) => a.sort - b.sort)
.map(({value}) => value)

// .container{
//   height: 700px;
//   width: 700px;
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   grid-template-rows: repeat(4, 1fr);
//   gap: 1em;
// }

// .card{
//   background-color: #fff;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 5px;
//   transform: rotateY(180deg);
//   animation: 2s hideCard linear;
//   transition: transform 0.5s;
// }
// @keyframes hideCard{
//   0%, 70%{
//     transform: rotateY(0);
//   }
//   100%{
//     transform: rotateY(180deg);
//   }
// }
// .card img{
//   max-width: 80%;
//   max-height: 80%;
//   transition: transform 0.5s;
//   transform: scale(0);
//   animation: 2s hideImage linear;
// }
// @keyframes hideImage{
//   0%, 70%{
//     transform: scale(1);
//   }
//   100%{
//     transform: scale(0);
//   }
// }

// .card.active{
//   transform: rotateY(0);
// }
// .card.correct{
//   background-color: #65e469;
// }
// .card.wrong{
//   background-color: #fd245a;
// }
// .card.active img{
//   transform: scale(1);
// }
{/* <Route path="/Home">
          <div>
            <button onClick={shuffledCards}>Start Game</button>
            <h4>Turns: {turns}</h4>
            <div className='container'>
              {displayCards}
            </div>
          </div>
        </Route>
        <Route path="/cards"></Route>  */}
        // const [cards, setCards] = useState([])
        // const [home, setHome] = useState(false)
        // const [turns, setTurns] = useState(0)
        // const [choice1, setChoice1] = useState(null)
        // const [choice2, setChoice2] = useState(null)
        // const [disabled, setDisabled] = useState(false)
        // //fetch request ⮯
        // useEffect(() => {
        //   fetch('http://localhost:3001/all')
        //   .then(r => r.json())
        //   .then(data => setCards(data))
        //   .catch(err => console.error(err))
        // }, [])
        // //randomize ⮯
        // const shuffledCards = () =>{
        //   const shuffleCards = cards
        //     .map(value => ({ value, sort: Math.random() }))
        //     .sort((a, b) => a.sort - b.sort)
        //     .map(({value}) => value)
        //     const newShuffledCards = shuffleCards.slice(0, 12)
        //     //duplicate the array ⮯
        //     const newCardArray = [...newShuffledCards, ...newShuffledCards]
        //     const reshuffledArray = newCardArray
        //     .map(value => ({ value, sort: Math.random() }))
        //     .sort((a, b) => a.sort - b.sort)
        //     .map(({value}) => value)
      
        //     setCards(reshuffledArray)
        //     setTurns(0)
        // }
        // //handle users card selection
        // const handleChoice = (card) => {
        //   choice1 ? setChoice2(card) : setChoice1(card)
        // }
        // //compare the 2 cards
        // useEffect(() => {
        //   if (choice1 && choice2){
        //     setDisabled(true)
        //     if(choice1.id === choice2.id){
        //       setCards(prevCards =>{
        //         return prevCards.map(card => {
        //           if(card.id === choice1.id){
        //             return {...card, stat: true}
        //           }else{
        //             return card
        //           }
        //         })
        //       })
        //       resetTurn()
        //     }else{
        //       setTimeout(() => resetTurn(), 2000)
        //     }
        //   }
        // }, [choice1, choice2])
        // //reset turns
        // const resetTurn = () => {
        //   setChoice1(null)
        //   setChoice2(null)
        //   setTurns(value => value + 1)
        //   setDisabled(false)
        // }
        
        // const displayCards = cards.map((card, index) => <GameCards 
        // handleChoice={handleChoice} 
        // card={card} 
        // key={index} 
        // flipped={card === choice1 || card === choice2 || card.stat}
        // disabled={disabled}