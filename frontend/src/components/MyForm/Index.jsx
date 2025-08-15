import React from 'react'
import { useState } from 'react'
import "./index.css"

const MyForm = () => {
    // Controlled Component
    let [name,setName] = useState("")
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")
    let [emailError, setEmailError]= useState("")

    let [isSubmitting,setIsSubmitting]= useState(false);

const Signup=(event)=>{
    setIsSubmitting(true)
    event.preventDefault()
    // alert("Form Submitted")
    // console.log("form submitted")
    setTimeout(()=>{
        let name= document.getElementById("name").value
    let email= document.getElementById("email").value
    let password= document.getElementById("password").value
    let emailPattern= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if(name=="" || email =="" || password== ""){
alert("All fields are required")
// setIsSubmitted(false);
    }else if( emailPattern.test(email) == false ){
        setEmailError("Please enter a valid email");
        // setIsSubmitted(false);
    }
    else{
        setEmailError("");
        setName(name);
        setEmail(email);
        setPassword(password);
        alert("Signup Successful");
    }
    setIsSubmitting(false);
    },2000)
}
  return (

   <>

    <form onSubmit={Signup} className='container my-5 mx-4'>
        <h1 className='myheading' style={{color:"blue"}}>Signup</h1>
<input type="text" placeholder="Enter your name"id="name" className="form-control my-2" />
<input type="text" placeholder="Enter your email" id="email"className="form-control my-2" />
{emailError !="" && <p className='text-danger'>Invalid email format</p>}
<input type="password" placeholder="Enter your password" id="password"className="form-control my-2"  />

{
isSubmitting? <button type='submit' className='btn btn-secondary' disabled >Submitting</button> :
<button type='submit' className='btn btn-warning' >Register</button>}

    </form>
     </>
  )
}

export default MyForm
