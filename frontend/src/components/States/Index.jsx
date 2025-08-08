import React, { useState } from 'react'

const LearningStates = () => {
    // States
    // let [myAge, setmyAge] =useState(45)// Initializes state value
    // let [fname, setFname] =useState("Haris")// Initializes state value
    let [fruits, setFruits] =useState(["Mango","Pineapple","Guava"])// Initializes state value



    // let age = 45;
    //Normal Function
    // function increaseAge(){

    // }
    //Arrow Function
    // const increaseAge =()=>{
    //     age += 1;


    //     setmyAge(myAge += 1)
    //     // age= age + 1
    //     console.log(age, myAge)
    // }
    const addFruit =()=>{
let fruit = document.getElementById("fruit").value
if (fruit == "") {
    alert ("Please fill the value.")
} else {
    //Spread /Rest operator ( ... )
    //Spread
    // let newFruits=[...fruits,fruit]
    // console.log(newFruits)

    setFruits([...fruits,fruit])

    console.log(fruits)
    
}    
    }



  return (
      <>
    {/* // <div>
    //   <h2>age : {age} years</h2>
    //   <h2>myAge : {myAge} years</h2>
    //   <button onClick={increaseAge}>Increase age</button>
    // </div> */}
        <input type="text" placeholder='Enter a new Fruit' id="fruit" />
       <button onClick={addFruit}>Add Fruit</button>
       <ul>

    {
        fruits.map((fruit, index)=>{
            return (
                <li>{fruit}</li>
            )
        })
    }
    
    </ul>
    
    </>
  )
}

export default LearningStates
