import React, { useState } from 'react'

const Child1 = ({setGames,games}) => {


    return (
    <div>
      <h1>Child1 </h1>

      <button onClick={()=>{
        setGames([...games,"Fortza 5"])
      }}>Add Fortza 5</button>
     
    </div>
  )
}

export default Child1
