import React, { useState } from 'react'

const Bulb = () => {
    let [bulbStatus, setBulbStatus]=useState("ON")

function toggleBulb(){
    if (bulbStatus == "ON") {
        setBulbStatus("OFF");
        
    } else {
        setBulbStatus("ON");
    }
}
  return (
    <div>
        {
            bulbStatus == "ON" ?  <h1>Bulb is on</h1>  : <h1>Bulb is off</h1>
        }
      <img src={   bulbStatus == "ON" ?  "on.png"  : "off.png"} height={400}/>
      <button onClick={toggleBulb}>ON/OFF</button>
    </div>
  )
}

export default Bulb
