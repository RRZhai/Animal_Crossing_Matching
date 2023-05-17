 import React from 'react'
 import UserAchievments from './UserAchievments'
 import {Switch, Route, Link} from 'react-router-dom'
 import CardContainer from './CardContainer'
 import Card from './Card'
 
function MainParent(){
  // passing the matchedcard as prop, this should be removed once the game component is created.
  const matchedCard = []
  return (
    <div>
      
      <Switch> 
        <Route path="/Home">
          <CardContainer cards={matchedCard} />
        </Route>
        <Route path="/cards/:id">
            <Card /> 
        </Route>
      </Switch>
    </div>
  )
}
export default MainParent
