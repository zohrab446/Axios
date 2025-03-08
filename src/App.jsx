import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const BASE_URL = "http://localhost:3005";

function App() {

  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data)

  }

  // const getUserById = async (userId) => {
  //   const response = await axios.get(`${BASE_URL}/users/${userId}`);
  //   console.log(response.data)
  // }

  const createUser = async (newUser) => {
    //POST : veri eklemek için kullanılır.
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log("response", response.data);
  }

  const updateUser = async (userId, updatedUser) => {
    //PUT : veri güncellemek için kullanılır.
    //ALT GR + iki kere virgüle basılacak.
    await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
  }

  const deleteUserById = async (userId) => {
    const deletedResponse = await axios.delete(`${BASE_URL}/users/${userId}`)
    console.log(deletedResponse.data);
  }













  const getUserById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    return response.data.postId;
  }

  const getPostById = async (postId) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/" + postId);
    return response.data;
  }



  const getPost = async () => {
    const postId = await getUserById(1);
    const postData = await getPostById(postId);
    console.log(postData)
  }




  useEffect(() => {
    getPost();
    // deleteUserById("517f")
    // getAllUsers();
    // getUserById(2)

    // const newUser = {
    //   "username": "bilal",
    //   "password": "3636"
    // }
    // createUser(newUser)

    // updateUser("517f", {
    //   "username": "yakup",
    //   "password": "5555"
    // })
  }, [])


  return (
    <div>

    </div>
  )
}

export default App
