import { useState } from 'react'
import { useEffect } from "react";
import './App.css'
import axios from 'axios'

const BASE_URL = "http://localhost:3000";

function App() {
  const getAllUsers = async() =>{
   const response = await axios.get(BASE_URL + "/users");
      console.log(response.data)
  }
  useEffect(() => {
     getAllUsers();
    }, [])
  
  

  return (
    <div>
     
    </div>
  )
}

export default App
