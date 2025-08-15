import React from 'react'
import Navbar from '../Navbar/Index'
import Footer from '../Footer/Index'
import { useState } from 'react'

const UserLayout = ({children}) => {
let [students, setStudents]= useState(["Haris Naseer", "Ali Khan", "Sara Ali", "John Doe", "Jane Smith"]);
let totalStudents = students.length;//Derived State
function addStudent(){
     setStudents([...students, "Zafar Khan"]) 
     console.log(totalStudents);
    //  totalStudents++;
}

  return (
    <>
    <Navbar/>
<h1>{totalStudents}</h1>
<button onClick={()=>{ addStudent()}}>Add new Student</button>

{children}
    <Footer/>
    
    </>
  )
}

export default UserLayout
