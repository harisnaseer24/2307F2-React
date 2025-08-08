import React, { useState } from 'react'

const Todo = () => {
    let [todos, setTodos]= useState([]);


    const addTask = ()=>{
        let newTask = document.getElementById("task").value;
        if (newTask == "") {
            alert("Cannot add an empty task")
        }else{
            setTodos([...todos,newTask])
            alert("task added successfully.")
        }}
    const deletTask = (index)=>{
        
       let newTodo= todos.filter((task, i)=>{
         return index != i
       })

       setTodos(newTodo)
            // console.log("Deleting a task", index)
       
    }

    
  return (
   <>
   <div>
    <input type="text" placeholder='Enter a task' id='task' />
    <button onClick={addTask}>Add Task</button>
   </div>

   <ul>
    <h1>Showing our todo List</h1>
    {
        todos.length > 0 ?
        todos.map((task,index)=>{
            return (<li key={index}>{task}
            <button>Edit</button>
            <button onClick={()=>{
                deletTask(index)
            }}>Delete</button>
            </li>)
        }) : <h1>No tasks yet</h1>

    }
   </ul>
   
   </>
  )
}

export default Todo

