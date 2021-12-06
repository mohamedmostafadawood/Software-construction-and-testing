
import React, { useEffect, useState } from "react";
import TodoList from "./TodoItem";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";



export default function  Page1 () {
const [todoItems,setTodoItems]= useState([]);

useEffect(()=>{

  axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
  .then((Response)=> setTodoItems(Response.data));  

},[]);

const removeFirstItem = () => {

  
  setTodoItems(  todoItems.filter((num,index)=> index!==0 ) ) ;

  };


  return (
    <div className="root">
         
          <p className="title" >Todo List</p>
          <ul className="list-group"  style={{textAlign:'center'}}>
            {todoItems.map(item => {
                return   < TodoList key={item.id} title={item.title} /> 
    
              
            })}
    
          </ul>
    
          <button  className=" buttonPlace btn btn-primary btn-lg " onClick={removeFirstItem}> Remove first item  </button>
    
    
    
    </div>
    
    );

}




