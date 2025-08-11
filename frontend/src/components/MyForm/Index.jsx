import React from 'react'
import { useState } from 'react'

const MyForm = () => {

    // Controlled Component
    let [name,setName] = useState("")
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")

const Signup=(event)=>{
    event.preventDefault()
    // alert("Form Submitted")
    // console.log("form submitted")
    let name= document.getElementById("name").value
    if(name=="" || email ==""){
alert("All fields are required")
    }

    else{

        setName(name)
    }


}


  return (
    <form onSubmit={Signup} className='container my-5 mx-4'>
        <h1>Signup</h1>
<input type="text" placeholder="Enter your name"id="name" className="form-control my-2" />
<input type="email" placeholder="Enter your email" id="email"className="form-control my-2" />
<input type="password" placeholder="Enter your password" id="password"className="form-control my-2" />
<button type='submit' className='btn btn-warning'>Register</button>
    </form>
  )
}

export default MyForm
