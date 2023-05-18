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