import {useEffect, useState} from 'react'


function HighScore(){
const[scoreList, setScoreList]=useState([])
useEffect(() => {
  fetch('http://localhost:3001/highscore')
.then(response => response.json())
.then(scoreList => setScoreList(scoreList))
}, [])

const mappedScores= scoreList.map(score =>{
  return <div key={score.id}>
      <p> Name: {score.username}</p>
      <p> Score: {score.score}</p>
      </div>
})

    return(
        <div>{mappedScores}</div>
    )
}

export default HighScore