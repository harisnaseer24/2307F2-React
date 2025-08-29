import React from 'react'
import Child1 from '../Child1/Index'
import Child2 from '../Child2/Index'
import {useState} from 'react'


const Parent = () => {
      let [games, setGames]= useState(["Dota 5", "Asphalt 8", "Fortnite"]);
  return (
    <div>
      
        <Child1  games={games} setgame={setGames}/>
        <Child2 games={games}/>
    </div>
  )
}

export default Parent
