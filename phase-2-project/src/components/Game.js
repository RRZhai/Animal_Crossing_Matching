import {useState} from "react"
import Cards from "./Cards"

function Game ({ reshuffledArray }) {  
const [items, setItems] = useState([])
const [selected, setSelected] = useState(-1)
//TODO fix the dam logic uuuuuuuhuhuhuhuh...im tired...it's 3AM
// const checkStat = (current) => {
//     if(items[current].id === items[selected].id){
//       items[current].stat = "correct"
//       items[selected].stat = "correct"
//       setItems([...items])
//       setSelected(-1) 
//     }else{
//       items[current].stat = "wrong"
//       items[selected].stat = "wrong"
//       setItems([...items])
//       setTimeout(() => {
//         items[current].stat = ""
//         items[selected].stat = ""
//         setItems([...items])
//         setSelected(-1)
//       }, 2000)
//     }
//   }
// const handleClick = (id) => {
//     if(selected === -1){
//       items[id].stat = "active"
//       setItems([...items])
//       setSelected(id)
//     }else{
//       checkStat(id)
//     }
//   }
    const displayCards = reshuffledArray.map((card, index) => <Cards 
    key={index} card={card}  handleClick={handleClick}/>)
    return(
        <div className="grid">
            
                {displayCards}
            
        </div>
    )
}
export default Game