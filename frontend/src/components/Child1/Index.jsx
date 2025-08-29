import React from 'react'

const Child1 = ({games, setgame}) => {

const addGame=()=>{
  let newgame=document.getElementById("newgame").value
  setgame([...games,newgame])

}
  return (
    <div>
    <input type ="text" placeholder="Enter game" id="newgame"/>
    <button onClick= {addGame}>Add Game</button>
    </div>
  )
}

export default Child1
