import { useState } from 'react'

import Test from './components/test/Index'
import LearningStates from './components/States/Index'
import Bulb from './components/Bulb/Index'
import Todo from './components/Todo/Index'
import Parent from './components/Parent/Index'
import MyForm from './components/MyForm/Index'
import CartPage from './components/Pages/Cart'
import Dashboard from './components/Dashboard/Index'
import { Link, Route, Routes } from 'react-router'


function App() {


  return (
    <>
    {/* navbar */}
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/test">
            Test
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/bulb">
            Bulb
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup">
            Signup
          </Link>
        </li>
        
        
      </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>
 {/* <Bulb/> */}

      {/* <Test/>
      <Test/>
      <Test/>
      <Test/> */}

   {/* <LearningStates></LearningStates> */}

   {/* <Todo/> */}
   {/* <MyForm/> */}

   <Routes>


    <Route path="/" element={<Parent/>}  />
    {/* <Route path="/" element={<Todo/>}  /> */}
    <Route path="/signup" element={<MyForm/>}  />
    <Route path="/test" element={<Test/>}  />
    <Route path="/bulb" element={<Bulb/>}  />
    <Route path="/cart" element={<CartPage/>}  />
   


{/* Task for parameterized Routes (useParam()) */}

{/* Route Grouping */}

<Route path="/admin/">
 <Route path="dashboard" element={<Dashboard/>} />
 <Route path="products/">
 <Route path="show" element={<Bulb/>} />
 <Route path="add" element={<MyForm/>} />
 </Route>

 <Route path="categories/">
 <Route path="show" element={<Bulb/>} />
 <Route path="add" element={<MyForm/>} />
 </Route>


{/* 
Consider u have 4 end users. 
Admin (at least 3 route groups)
Buyer (2 routes)
Seller (2 seller)
Employee (2 employee)

*/}





</Route>

   </Routes>



    </>
  )
}

export default App
