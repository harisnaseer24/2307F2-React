import React from 'react'

const Child2 = ({games}) => {
  return (
    <div>
      <h1>Child2     </h1>
      {games.map((game,index)=>{
return (<h2 key={index} >{game}</h2>)
      })}
 
    </div>
  )
}

export default Child2
