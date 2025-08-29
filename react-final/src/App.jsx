import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child1 from './components/Child1/Index'
import Child2 from './components/Child2/Index'
import Navbar from './components/Navbar/Index'
import MyCart from './components/Cart/Index'
import { Cart } from "./DataContext";

function App() {
  // const [students, setStudents] = useState(["Haris","Owais","Usama"]);

  //Derived state
  // const totalstudents= students.length;

//up;lifting state
// const [games,setGames]= useState(["COD","FIFA","GTA VI"])
let cartData= useContext(Cart);

let [cartItems,setCartItems]= useState(cartData);


const AddtoCart=()=>{
  setCartItems([...cartItems,"iphone"])

}

  return (
    <>
     {/* <h1>Learning Derived States</h1>
<h2>Total Students : {totalstudents}</h2>
<button onClick={()=>{
setStudents([...students,"Muzammil"])
}}> Add muzammil</button> */}



     {/* <h1>Learning State Uplifting</h1>
  <Child1 setGames={setGames} games={games}/>
  <Child2 games= {games}/> */}
  {/* <Navbar/>
  
  
  <MyCart/> */}


   
  <Cart.Provider value={cartItems} >
    <Navbar/>
     <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </p>
          
          <button className="btn btn-primary" onClick={()=>{AddtoCart()}}>
    
          Add to Cart 
          </button>
        </div>
      </div>
      <MyCart/>
          </Cart.Provider> 
  

    </>
  )
}

export default App
