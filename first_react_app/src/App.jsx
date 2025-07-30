

// import './App.css'
// import App from './App.jsx'//Default Import

import Courses from "./components/Courses/Index";
import Footer from "./components/Footer/Index";
import Hero from "./components/Hero/Index";
import Navbar from "./components/Navbar/Index";

// import {App } from './App.jsx'//Named Import
// export function App() {
 function App() {
// let age = 23
const courses=[
{
  title:"Frontend Mastery with Next.js",
  description:"Learn Frontend Mastery with Next.js with hands on project experience.",
  duration:"3 hrs",
  thumbnail:"react-logo-new.jpg"

},
{
  title:"Backend Mastery with Node.js",
  description:"Backend Mastery with Node.js with hands on project experience.",
  duration:"3 hrs",
  thumbnail:"react-logo-new.jpg"

},
{
  title:"Full Stack Mastery with MERN",
  description:"Full Stack Mastery with MERN with hands on project experience.",
  duration:"13 hrs",
  thumbnail:"react-logo-new.jpg"

},
{
  title:"Python Mastery",
  description:"Learn Pyton with hands on project experience.",
  duration:"2.5 hrs",
  thumbnail:"react-logo-new.jpg"

},
{
  title:"Python Mastery",
  description:"Learn Pyton with hands on project experience.",
  duration:"2.5 hrs",
  thumbnail:"react-logo-new.jpg"

},
{
  title:"Python Mastery",
  description:"Learn Pyton with hands on project experience.",
  duration:"2.5 hrs",
  thumbnail:"react-logo-new.jpg"

},
{
  title:"Python Mastery",
  description:"Learn Pyton with hands on project experience.",
  duration:"2.5 hrs",
  thumbnail:"react-logo-new.jpg"

},
{
  title:"Python Mastery",
  description:"Learn Pyton with hands on project experience.",
  duration:"2.5 hrs",
  thumbnail:"react-logo-new.jpg"

},

  
];

  return (
    <>
    <Navbar/>
    {/* passing the props */}
    <Hero title="Learn Generative AI" thumbnail="ai-banner.png" />
    <Courses courses={courses}/>
    <Hero  title="Learn React JS in 90 Days" thumbnail="react-logo-new.jpg"/>
      <Footer/>
    </>
  )
}

export default App;

  
