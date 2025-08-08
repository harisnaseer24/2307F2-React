

// import './App.css'
// import App from './App.jsx'//Default Import

import { useEffect, useState } from "react";
import Courses from "./components/Courses/Index";
import Footer from "./components/Footer/Index";
import Hero from "./components/Hero/Index";
import Navbar from "./components/Navbar/Index";

// import {App } from './App.jsx'//Named Import
// export function App() {
 function App() {
  let  [products, setProducts]=useState([])

  // const getProd=async () =>{
    
  // }
async function   getProducts  (){
  // Could be GET or POST/PUT/PATCH/DELETE
// fetch('https://dummyjson.com/products?limit=100')
// .then((res)=>{res.json()
//   .then(data=>{
//     console.log(data.products)
//   setProducts(data.products);
  
//   })})

try {
  let response= await fetch("https://6895fd7e039a1a2b289119bf.mockapi.io/api/v1/courses")
  let data= await response.json();
  console.log(data)
  setProducts(data);
  
} catch (error) {
  console.log(error);
}
}

useEffect(()=>{
  getProducts();
},[])


// let age = 23
// const courses=[
// {
//   title:"Frontend Mastery with Next.js",
//   description:"Learn Frontend Mastery with Next.js with hands on project experience.",
//   duration:"3 hrs",
//   thumbnail:"react-logo-new.jpg"

// },
// {
//   title:"Backend Mastery with Node.js",
//   description:"Backend Mastery with Node.js with hands on project experience.",
//   duration:"3 hrs",
//   thumbnail:"react-logo-new.jpg"

// },
// {
//   title:"Full Stack Mastery with MERN",
//   description:"Full Stack Mastery with MERN with hands on project experience.",
//   duration:"13 hrs",
//   thumbnail:"react-logo-new.jpg"

// },
// {
//   title:"Python Mastery",
//   description:"Learn Pyton with hands on project experience.",
//   duration:"2.5 hrs",
//   thumbnail:"react-logo-new.jpg"

// },
// {
//   title:"Python Mastery",
//   description:"Learn Pyton with hands on project experience.",
//   duration:"2.5 hrs",
//   thumbnail:"react-logo-new.jpg"

// },
// {
//   title:"Python Mastery",
//   description:"Learn Pyton with hands on project experience.",
//   duration:"2.5 hrs",
//   thumbnail:"react-logo-new.jpg"

// },
// {
//   title:"Python Mastery",
//   description:"Learn Pyton with hands on project experience.",
//   duration:"2.5 hrs",
//   thumbnail:"react-logo-new.jpg"

// },
// {
//   title:"Python Mastery",
//   description:"Learn Pyton with hands on project experience.",
//   duration:"2.5 hrs",
//   thumbnail:"react-logo-new.jpg"

// },

  
// ];

  return (
    <>
    <Navbar/>
    {/* passing the props */}
    <Hero title="Learn Generative AI" thumbnail="ai-banner.png" />
    <Courses courses={products}/>

    <Hero  title="Learn React JS in 90 Days" thumbnail="react-logo-new.jpg"/>
      <Footer/>
    </>
  )
}

export default App;

  
